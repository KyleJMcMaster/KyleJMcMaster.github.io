import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const CPPimg = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/CPPImg.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="CPPimg"
      description="Project Page for C++ image processing"
    >
      <article className="post markdown" id="about">
        <Markdown>
          {markdown}
        </Markdown>
        <a href="/projects">See more projects</a>
      </article>
    </Main>
  );
};

export default CPPimg;
