import React from 'react'
import PropTypes from 'prop-types'
import Github from 'react-feather/dist/icons/github'
import Link from 'react-feather/dist/icons/link'
import './Card.scss'
import Flip from 'react-spring-flip/lib/Flip'

export const isBrowser = !!(
  (typeof window !== 'undefined' &&
   window.document && window.document.createElement)
)

Card.propTypes = {}
Card.defaultProps = {}

export const colors = {
  openSource: 'linear-gradient(-135deg, #FCE38A 0%, #F38181 100%)',
  work: 'linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%)',
  hobbyProject: 'linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%)',
}

function OpenSource() {
  return (
    <span
      style={{
        background: colors.openSource,
      }}
      className="badge ml-2"
    >
      open source
    </span>

  )
}

function Work() {
  return (
    <span
      style={{
        background: colors.work
      }}
      className="badge ml-2"
    >
      work experience
    </span>

  )
}

function HobbyProject() {
  return (
    <span
      style={{
        background: colors.hobbyProject
      }}
      className="badge ml-2"
    >
      hobby project
    </span>

  )
}


const Wrap = ({ children, title }) => {
  if (isBrowser) {
    return (
      <Flip
        flipId={title}
        className="Card card shadow-sm"
      >
        {children}
      </Flip>
    )
  }
  return (
    <div
      className="Card card shadow-sm"
    >
      {children}
    </div>
  )
}


export default function Card(props) {

  const {
    title,
    children,
    github,
    website,
    openSource,
    work,
    hobbyProject,
  } = props

  return (
    <div className="position-relative h-100">
      <Wrap title={title}>
        <div
          className="card-body d-flex flex-column justify-content-between"
        >

          <h5 className="card-title">
            <span>{title}</span>
          </h5>
          <p className="card-text flex-grow">
            {children}
          </p>

          <div className="Card__links">

            <span>
              {github && (
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Link />
                </a>
              )}
            </span>
            {openSource && <OpenSource />}
            {work && <Work />}
            {hobbyProject && <HobbyProject />}

          </div>

        </div>
      </Wrap>
    </div>
  )
}

