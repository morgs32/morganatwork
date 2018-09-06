import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostList from '../components/PostList'
import db from 'app/db.yaml'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>
          Projects
        </h1>

        <PostList posts={db.projects} />

      </div>
    )
  }
}
