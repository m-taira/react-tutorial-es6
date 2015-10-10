import React from 'react'
import ReactDOM from 'react-dom'

import CommentBox from './components/comment_box'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<CommentBox url='comments.json' interval={2000}/>, document.getElementById('container'));
});