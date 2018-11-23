import React from 'react';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ id, link, title }) => (
      <li key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
