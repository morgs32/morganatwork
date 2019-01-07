import React, { Component } from 'react'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  state = {
    stepCount: 0,
  }

  render() {

    const {
      stepCount,
    } = this.state

    const moreButton = (
      <button
        onClick={() => this.setState({
          stepCount: stepCount + 1
        })}
        className="btn btn-primary"
      >
        More
      </button>
    )

    return (
      <div>
        <div style={{ maxWidth: 800 }}>

          <h1>
            Hello world
          </h1>
          <p>
            Welcome to my portfolio site. This is a reboot (of "
            <a
              href="https://bestof.morganatwork.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Morgan's Greatest Hits
            </a>
            ").
          </p>

          <h2>
            About me
          </h2>
          <p>
            I'm a co-founder, engineering lead, product owner, and full-stack developer. I work on products built for people.
          </p>

          {stepCount === 0 && moreButton}
          {stepCount > 0 && (
            <div>
              <h2>
                My manifesto:
              </h2>
              <ul>
                <li>
                  It's better to be good than to be original
                </li>
                <li>
                  In the end, a startup lives or dies with engineering velocity - the speed of iteration and release
                  of <strong>meaningful</strong> product.
                </li>
                <li>
                  It's equally important to increase output as it is to decrease the effort and resources needed to deliver that output.
                  Laziness is next to godliness.
                </li>
              </ul>
            </div>
          )}
        </div>
        {stepCount === 1 && moreButton}
        {stepCount > 1 && (
          <div>
            <h2>
              Guiding principle
            </h2>
            <p>
              I try to be Gene Hackman in this dialog from the movie Heist:
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
                I tried to imagine a fella smarter than myself. Then I thought, "what would he do?"
              </div>
            </div>
          </div>
        )}

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
