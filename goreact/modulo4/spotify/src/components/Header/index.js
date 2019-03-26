import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/16597245?v=4" alt="Rodolfo" />
      Rodolfo Silva
    </User>
  </Container>
);

export default Header;
