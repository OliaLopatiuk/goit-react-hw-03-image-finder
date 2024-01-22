import { LoadMoreButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

export const Button = props => (
  <LoadMoreButton type="button" onClick={props.onClick}>
    Load more
  </LoadMoreButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
};
