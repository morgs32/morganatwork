import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card, { colors } from 'src/components/Card/Card'
import classnames from 'classnames'
import _sortBy from 'lodash/sortBy'
import Flipper from 'react-spring-flip/lib/Flipper'

import './index.scss'

Index.propTypes = {}
Index.defaultProps = {}

export const cards = [
  {
    title: 'Stackshirts',
    types: [
      'hobbyProject'
    ],
    website: 'http://www.stackshirts.com',
    description: (
      <>
        This is my current hobby project. It's an app that lets
        you design your tech stack so we can print it on a shirt for you.
      </>
    )
  },
  {
    title: 'Pohleusis',
    types: [
      'openSource'
    ],
    website: 'https://github.com/morgs32/pohleusis',
    description: (
      <>
        This open source library is a bridge
        between redux and a compliant JSON API.
        It makes getting data easy and concise,
        and provides an easy way to manage i18n localization.
      </>
    )
  },
  {
    title: 'react-merge-metrics',
    types: [
      'openSource'
    ],
    github: 'https://github.com/morgs32/react-merge-metrics',
    website: 'https://react-merge-metrics.now.sh',
    description: (
      <>
        Easily aggregate data into your analytics event tracking.
        It uses the React 16 context API and doesn't require
        DOM listeners like
        {' '}
        <code>react-metrics</code>
        {' '}
        .
      </>
    )
  },
  {
    title: 'lazy-react-intl',
    types: [
      'openSource'
    ],
    github: 'https://github.com/morgs32/lazy-react-intl',
    website: 'https://lazy-react-intl.now.sh',
    description: (
      <>
        This is a library built to help declaratively lazy load and code split
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
        .
      </>
    )
  },
  {
    title: 'Morgan\'s greatest hits',
    types: [
      'openSource',
      'hobbyProject',
    ],
    github: 'https://github.com/morgs32/morgs32.github.io',
    website: 'https://bestof.morganatwork.com',
    description: (
      <>
        This an old portfolio site built in polymer with my projects
        from 2010 to 2016.
      </>
    )
  },
  {
    title: 'react-spring-flip',
    types: [
      'openSource',
    ],
    github: 'https://github.com/morgs32/react-spring-flip',
    website: 'https://react-spring-flip.now.sh',
    description: (
      <>
        This is FLIP animation library much like
        {' '}
        <a href="https://github.com/aholachek/react-flip-toolkit">
          <code>
            react-flip-toolkit
          </code>
        </a>
        {' '}
        . It uses
        {' '}
        <a href="https://github.com/react-spring/react-spring">
          <code>
            react-spring
          </code>
        </a>
        {' '}
        under the hood and requires react hooks (v16.8 or greater).
      </>
    )
  },
  {
    title: 'WayUp',
    types: [
      'work'
    ],
    website: 'https://www.wayup.com',
    description: (
      <>
        WayUp is a job marketplace for students and recent grads.
      </>
    )
  },
  {
    title: 'Brickwork Software',
    types: [
      'work'
    ],
    website: 'https://www.brickworksoftware.com',
    description: (
      <>
        Our software and services help drive customers to the store -
        via white-branded store locators
        and appointment booking widgets.
      </>
    )
  },
  {
    title: 'Upswing',
    types: [
      'work'
    ],
    website: 'https://www.upswing.com',
    description: (
      <>
        Upswing is an online tutoring platform - white labeled by
        colleges and other institutions.
      </>
    )
  },
  {
    title: 'Mentor Mailbox',
    types: [
      'work',
      'hobbyProject',
    ],
    website: 'https://www.mentormailbox.com',
    description: (
      <>
        Mentor Mailbox is an online tutoring platform in
        which you can text for academic and non-academic help.
      </>
    )
  },
]

export default function Index(props) {

  const [selectedType, setType] = useState(null)

  let displayCards = cards
  if (selectedType) {
    displayCards = _sortBy(cards, (card) => card.types.includes(selectedType) ? 0 : 1)
  }

  const selectType = (flipType) => {
    if (selectedType === flipType) {
      return setType(null)
    }
    setType(flipType)
  }

  return (
    <Flipper flipKey={selectedType || 'none'}>

      <div className="container Index">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8">
            <h1>
              Projects
            </h1>
            <h2 className="mb-4 h3">
              I aim to build meaningful products and make it easier for
              other engineers to do the same.
            </h2>
          </div>
        </div>

        <div className="text-right">
          <div className="form-group">
            <label className="d-block">
              Sort by:
            </label>
            <span
              className={classnames('d-inline-block Index__buttonContainer', {
                'Index__button--work': selectedType === 'work',
                'Index__button--openSource': selectedType === 'openSource',
                'Index__button--hobbyProject': selectedType === 'hobbyProject'
              })}
            >
              <select
                value={selectedType}
                onChange={(event) => selectType(event.target.value)}
                className="custom-select Index__button"
              >
                <option value>Choose category</option>
                <option value="work">Work experience</option>
                <option value="openSource">Open source</option>
                <option value="hobbyProject">Hobby project</option>
              </select>
            </span>
          </div>
        </div>
        <div className="row d-flex flex-row">
          {displayCards.map((card) => {

            return (
              <div
                key={card.title}
                className="col-12 col-md-6 mb-4"
              >
                <Card
                  title={card.title}
                  website={card.website}
                  github={card.github}
                  hobbyProject={card.types.includes('hobbyProject')}
                  work={card.types.includes('work')}
                  openSource={card.types.includes('openSource')}
                >
                  {card.description}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </Flipper>
  )
}

