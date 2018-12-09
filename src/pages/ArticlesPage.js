import React, { Component } from 'react';
import queryString from 'query-string';
import * as api from '../api-mock/api';
import CategorySelector from '../components/CategorySelector';
import ArticleList from '../components/ArticleList';
import categories from '../api-mock/categories';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all'
      });
    }

    this.fetchArticles(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log('prevCategory: ', prevCategory);
    console.log('nextCategory: ', nextCategory);

    if (prevCategory === nextCategory) return;

    this.fetchArticles(nextCategory);
  }

  fetchArticles = category => {
    api
      .fetchArticlesByCategory(category)
      .then(articles => this.setState({ articles }));
  };

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  };

  render() {
    const { articles } = this.state;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Artciles Page</h2>

        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
