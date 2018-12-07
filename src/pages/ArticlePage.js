import React, { Component } from 'react';
import * as api from '../api-mock/api';

export default class ArticlePage extends Component {
  state = {
    id: null,
    title: null,
    imageUrl: null,
    author: null,
    category: null,
    body: null
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.match.params.id)
      .then(article => this.setState({ ...article }));
  }

  render() {
    const { title, imageUrl, author, category, body } = this.state;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>
          <b>Author: {author}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>{body}</p>
      </article>
    );
  }
}
