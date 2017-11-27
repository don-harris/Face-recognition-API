import React from 'react'
import PropTypes from 'prop-types'

const Post = ({name}) => (
  <div>{name}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
