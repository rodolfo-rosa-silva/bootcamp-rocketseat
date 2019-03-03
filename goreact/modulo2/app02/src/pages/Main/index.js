import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  componentDidMount() {
    // carrega os dados do localstorage no state do componente
    try {
      if (typeof Storage !== 'undefined') {
        if (localStorage.repositories && localStorage.repositories.length > 0) {
          this.setState({ repositories: JSON.parse(localStorage.repositories) });
        }
      } else {
        throw new Error('Desculpe, seu navegador não suporte Web Storage');
      }
    } catch (err) {
      this.setState({ repositoryError: true });
      console.error(err);
    }
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });

      if (typeof Storage !== 'undefined') {
        await localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
      } else {
        throw new Error('Desculpe, seu navegador não suporte Web Storage');
      }
    } catch (err) {
      this.setState({ repositoryError: true });
      console.error(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;

    const findRepository = repositories.find(repository => repository.id === id);

    try {
      const { data } = await api.get(`repos/${findRepository.full_name}`);
      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: repositories.map(repository => (repository.id === id ? data : repository)),
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
      console.error(err);
    }
  };

  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;

    const updatedRepository = repositories.filter(repository => repository.id !== id);

    this.setState({ repositories: updatedRepository });

    await localStorage.setItem('repositories', JSON.stringify(updatedRepository));
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}
          </button>
        </Form>

        <CompareList
          repositories={this.state.repositories}
          updateRepository={this.handleUpdateRepository}
          removeRepository={this.handleRemoveRepository}
        />
      </Container>
    );
  }
}
