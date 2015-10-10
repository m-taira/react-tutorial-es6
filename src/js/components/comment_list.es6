import React from 'react';
import _ from 'lodash';
import template from './../../templates/comment_list'

import Comment from './comment';


export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return template(_.assign({Comment: React.createFactory(Comment), _: _, console: console}, this, this.props, this.state));
  }
}