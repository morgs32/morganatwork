import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About from './about.mdx'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <article>
        <About />
      </article>
    )
  }
}
