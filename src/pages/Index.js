import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Kyle McMaster's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome to my Website</h2>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
