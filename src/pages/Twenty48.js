import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Twenty48 = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/Twenty48.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Twenty48"
      description="Project page for Twenty48"
    >
      <article className="post markdown" id="Twenty48">
        <Markdown>
          {markdown}
        </Markdown>
        <a href="/projects">See more projects</a>
      </article>
    </Main>
  );
};

export default Twenty48;
