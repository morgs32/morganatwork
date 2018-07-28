import React, { Component } from 'react'
import Link from 'next/link'


export default class PostList extends Component {


  render() {

    const {
      posts = [],
    } = this.props

    return (
      <div className="PostList">
        <ol>
          {posts.map((post, index) => {

            return (
              <li key={post.href}>
                <div>
                  <span>{index + 1}.</span>
                  <Link key={post.href} prefetch href={post.href}>
                    <a>{post.title}</a>
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
        {/* language=CSS */}
        <style jsx="">{`
          .PostList {
            padding-bottom: 20px;
          }
          li {
            list-style: none;
            display: block;
            margin-bottom: 10px;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ol {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}
        </style>
      </div>
    )
  }

}
