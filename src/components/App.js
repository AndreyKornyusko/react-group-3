import React, { Component } from 'react';
import ArticleList from './ArticleList';
import CategorySelector from './CategorySelector';
import ErrorNotification from './ErrorNotification';
import Spinner from './Spinner';
import { getArticlesByQuery } from '../services/api';

const styles = {
  header: { textAlign: 'center' }
};

const categorySelectorOptions = ['html', 'css', 'javascript', 'react'];

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: categorySelectorOptions[0]
  };

  componentDidMount() {
    this.fetchArticles(this.state.category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = prevState.category;
    const nextCategory = this.state.category;

    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });

    getArticlesByQuery(query)
      .then(articles => this.setState({ articles: articles, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  handleCategoryChange = evt => {
    this.setState({
      category: evt.target.value
    });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div>
        <h1 style={styles.header}>Remote data in React</h1>

        <CategorySelector
          options={categorySelectorOptions}
          category={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification />}
        {isLoading ? <Spinner /> : <ArticleList articles={articles} />}
      </div>
    );
  }
}
