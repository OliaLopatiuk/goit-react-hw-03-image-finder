import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Input, Form } from './SearchBar.styled';
import { ReactComponent as SearchImage } from '../images/look-up.svg';
import { ButtonEl } from './Button';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handleChange = e => this.setState({ query: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <ButtonEl>
            <SearchImage width="20" height="20" />
          </ButtonEl>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </Form>
      </Header>
    );
  }
}
