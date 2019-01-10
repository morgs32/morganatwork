import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default class Foobar extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <Head>
          <title>Not found</title>
          <meta name="robots" content="noindex" />
        </Head>


        <div>
          Welcome to the foobar page.
        </div>

      </div>
    )
  }
}
