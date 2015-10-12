import React from 'react'
import ReactDOM from 'react-dom'

import CommentBox from './components/comment_box'

var comment_server = 'http://localhost:3001/comments'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<CommentBox url={comment_server} interval={2000}/>, document.getElementById('container'));
});