import React, { Component } from 'react'
import Link from 'next/link'


export default class PostList extends Component {


  render() {

    const {
      posts = [],
      featured,
      limit,
      href,
    } = this.props

    let displayItems = posts
    let remainder
    if (featured) {
      displayItems = posts.filter(post => post.featured)
    }
    if (limit) {
      displayItems = displayItems.slice(0, limit)
    }
    if (limit || featured) {
      remainder = posts.length - displayItems.length
    }

    return (
      <div className="PostList">
        <ol>
          {displayItems.map((post, index) => {

            return (
              <li key={post.href}>
                <div>
                  <span>{index + 1}.</span>
                  <Link key={post.href} prefetch href={post.href}>
                    <a target={post.target}>{post.title}</a>
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>

        {!!remainder && (
          <div>
            <Link href={href}>
              <a>
                and {remainder} more...
              </a>
            </Link>
          </div>
        )}

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
