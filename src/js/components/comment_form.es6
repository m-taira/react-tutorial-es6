import React from 'react';
import ReactDOM from 'react-dom'
import _ from 'lodash';
import template from './../../templates/comment_form'

export default class CommentFrom extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();

    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var comment_text = ReactDOM.findDOMNode(this.refs.comment_text).value.trim();

    if(!author || !comment_text) {
      return;
    }

    console.log('send server');

    this.props.handleCommentSubmit({author: author, text: comment_text});

    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.comment_text).value = '';
  }

  render(){
    return template(_.assign({handleSubmit: this.handleSubmit.bind(this)}, this, this.props, this.state));
  }
}