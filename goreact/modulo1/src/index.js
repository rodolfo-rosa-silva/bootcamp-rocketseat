import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Components/Header';
import Post from './Components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        avatar:
          'https://www.shearlaw.com/wp-content/uploads/2016/07/ShearProfilesrgb-2_6.348222946_std_Profile-300x300.jpg',
        name: 'Pessoa 1',
        time: 'há 1 semana atrás',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        avatar:
          'http://projectamalousalam.org/wp_live/wp-content/uploads/2015/04/Michelle-Everson-Profile-300x300.png',
        name: 'Pessoa 2',
        time: 'há 1 mes atrás',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        avatar:
          'https://cdn.shopify.com/s/files/1/0071/3637/8998/files/swept-back-hair-short-beard-men-look.jpg',
        name: 'Pessoa 3',
        time: 'há 1 mes atrás',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="container-grid">
          {posts && posts.map((post, i) => <Post key={i} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
