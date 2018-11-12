import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class GuidingPrinciple extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>
          Guiding Principle
        </h1>
        <p>
          I am Gene Hackman in this dialog from the movie Heist
        </p>

        <div className="movie-script">
          <strong className="d-block text-center">
            Guy
          </strong>
          <div>
            You're a pretty smart fella.
          </div>
          <br />
          <strong className="d-block text-center">
            Hackman
          </strong>
          <div>
            Ah, not that smart.
          </div>
          <br />
          <strong className="d-block text-center">
            Guy
          </strong>
          <div>
            [If] you're not that smart, how'd you figure it out?
          </div>
          <br />
          <strong className="d-block text-center">
            Hackman
          </strong>
          <div>
            I tried to imagine a fella smarter than myself. Then I tried to
            think, "what would he do?"
          </div>
        </div>
        <Link href="/">
          <a className="btn btn-primary" style={{ marginBottom: 40}}>
            Back
          </a>
        </Link>


        {/* language=CSS */}
        <style jsx="">{`
            .movie-script {
              max-width: 400px;
              margin: auto;
              margin-top: 80px;
              margin-bottom: 60px;
            }
        `}
        </style>

      </div>
    )
  }
}
