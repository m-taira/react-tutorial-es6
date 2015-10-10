import React from 'react';
import _ from 'lodash';
import template from './../../templates/comment_form'

export default class CommentFrom extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return template(_.assign({}));
  }
}