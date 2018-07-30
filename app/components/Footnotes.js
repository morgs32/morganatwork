import React from 'react'

export const FootNotes = ({ children }) => (
  <div>
    <hr />
    {children}
  </div>
)

export const Ref = ({ id }) => (
  <a href={`#f${id}`} id={`s${id}`}>
    [{id}]
    <style jsx>{`
      a {
        top: -5px;
        font-size: 10px;
        position: relative;
        text-decoration: none;
      }
    `}
    </style>
  </a>
)

export const Note = ({ id, children }) => (
  <p>
    {id}.
    {' '}
    <a href={`#s${id}`} id={`f${id}`}>^</a>
    {' '}
    {children}
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}
    </style>
  </p>
)