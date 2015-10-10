import React from 'react';
import _ from 'lodash';
import template from './../../templates/comment_box';

import CommentList from './comment_list';
import CommentForm from './comment_form';

import request from 'superagent';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    this.get_data_from_server();
    setInterval(this.get_data_from_server.bind(this), this.props.interval);
  }

  get_data_from_server() {
    request
      .get(this.props.url)
      .end((error, response) => {
        this.setState({comments: response.body});
      });
  }

  render() {
    return template(_.assign({
      CommentList: React.createFactory(CommentList),
      CommentForm: React.createFactory(CommentForm)
    }, this, this.props, this.state));
  }
}