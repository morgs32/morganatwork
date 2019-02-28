import React from 'react'
import PropTypes from 'prop-types'
import Card from 'src/components/Card/Card'
import Link from 'next/link'

Index.propTypes = {}
Index.defaultProps = {}

export default function Index(props) {
  return (
    <div className="container Index">

      <h1>
        What I'm working on
      </h1>

      <h2 className="mb-4 h4">
        I build products.
        <br />And I want them to be loved by users as much as they are loved by me.
      </h2>

      <div className="mb-4 d-none">
        <button className="btn btn-outline-secondary mr-2">
          work experience
        </button>
        <button className="btn btn-outline-secondary mr-2">
          open source
        </button>
        <button className="btn btn-outline-secondary">
          hobby project
        </button>
      </div>

      <div className="row d-flex flex-row">
        <div className="col-12 col-md-6 mb-4">
          <Card
            title="Stackshirts"
            hobbyProject
            website="http://www.stackshirts.com"
          >
            This is my current hobby project. It's an app that lets
            you design your tech stack so we can print it on a shirt for you.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            openSource
            title="Pohleusis"
            github="https://github.com/morgs32/pohleusis"
          >
            This open source library is a bridge between redux and a compliant JSON API.
            It makes getting data easy and concise,
            provides an easy way to manage i18n localization,
            and best of all it is easy to read and easy to forget - then learn again.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            openSource
            title="react-merge-metrics"
            github="https://github.com/morgs32/react-merge-metrics"
            website="https://react-merge-metrics.now.sh"
          >
            Easily aggregate data in your analytics event tracking.
            It uses the React 16 context API and doesn't require and
            DOM listeners like
            {' '}
            <code>react-metrics</code>
            {' '}
            . More importantly, it collects more information than does the original.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            openSource
            github="https://github.com/morgs32/lazy-react-intl"
            website="https://lazy-react-intl.now.sh"
            title="lazy-react-intl"
          >
            This is a library built to help decoratively lazy load, code split
            components of
            {' '}
            <a
              href="https://github.com/yahoo/react-intl"
              rel="noopener noreferrer"
              target="_blank"
            >
              react-intl
            </a>
            {' '}
            and
            {' '}
            <a
              href="https://momentjs.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              moment.js
            </a>
            {' '}
            to localize your react app.

          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            website="https://bestof.morganatwork.com"
            title="Morgan's greatest hits"
            hobbyProject
          >
            This an old portfolio site built in polymer with my projects
            from 2010 to 2016.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            work
            title="WayUp"
            website="https://www.wayup.com"
          >
            WayUp is a job marketplace for students and recent grads.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            work
            website="https://www.brickworksoftware.com"
            title="Brickwork Software"
          >
            We make software that retailers use to manage the customer experience.
            Our services
            help drive customers to the store - via white-branded store locators
            and appointment booking widgets.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            work
            website="https://www.upswing.com"
            title="Upswing"
          >
            Upswing is an online tutoring platform - white labeled by
            colleges and other institutions.
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Card
            work
            website="https://www.mentormailbox.com"
            title="Mentor Mailbox"
          >
            Mentor Mailbox is an online tutoring platform in
            which you can text for academic and non-academic help.
          </Card>
        </div>
      </div>

    </div>
  )
}

