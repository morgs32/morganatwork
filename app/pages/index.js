import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostList from '../src/components/PostList'
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

        {/* TODO: Just the featured posts here */}
        <PostList href="/projects" posts={db.projects} />

        <h1>
          Work
        </h1>

        {/* TODO: Just the featured posts here */}
        <PostList href="/work" posts={db.work} />

        {/*<h1>*/}
          {/*Essays*/}
        {/*</h1>*/}

        {/*/!* TODO: Just the featured posts here *!/*/}
        {/*<PostList href="/essays" posts={db.posts} featured />*/}


      </div>
    )
  }
}
