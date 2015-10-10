import React from 'react';
import _ from 'lodash';
import Marked from 'marked';

import template from './../../templates/comment';

export default class Comment extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    var marked_comment = this.props.children;//Marked(this.props.children.toString(), {sanitize: true});

    return template(_.assign({comment: marked_comment}, this, this.props, this.state));
  }

}