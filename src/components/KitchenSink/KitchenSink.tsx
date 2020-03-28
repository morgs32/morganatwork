import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  li {
    margin: 1.5rem 0;
  } 
`;

KitchenSink.propTypes = {};
KitchenSink.defaultProps = {};

export default function KitchenSink(props) {
  return (
    <StyledDiv>


      <h3 className="h3 m-0 font-weight-bold mb-4">
        Other work
      </h3>


      <ul className="row list-unstyled">
        <li className="col-sm-6">
          <h4>
            WayUp
          </h4>
          <p className="mb-1">
            The go-to platform for millions of early-career professionals to explore job and internship opportunities,
            receive advice, and get discovered by employers.
          </p>
          <div>
            <a href="https://www.wayup.com">
              Go there
            </a>
          </div>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p className="mb-1">
            With an AI, SMS, online collaboration tools, and advanced analytics, Upswing aims to support every aspect of
            student success and retention.
          </p>
          <div>
            <a href="https://www.upswing.io">
              Check it out
            </a>
          </div>
        </li>
        <li className="col-sm-6">
          <h4>
            Best of Morgan at Work
          </h4>
          <p className="mb-1">
            This an old portfolio site that I'm especially proud of.
            Built in polymer with my projects
            from 2010 to 2016.
          </p>
          <div>
            <a href="https://www.bestof.morganatwork.com">
              Check it out
            </a>
          </div>
        </li>
        <li className="col-sm-6">
          <h4>
            React merge metrics
          </h4>
          <p className="mb-1">
            Easily aggregate data into your analytics event tracking.
            It uses the React 16 context API and doesn't require
            DOM listeners.
          </p>
          <div>
            <a href="https://react-merge-metrics.now.sh">
              Star it on Github
            </a>
          </div>
        </li>
        <li className="col-sm-6">
          <h4>
            React spring flip
          </h4>
          <p className="mb-1">
            A FLIP animation library that uses
            {' '}
            <code>react-spring</code>
            {' '}
            under the hood and requires react hooks (v16.8 or greater).
          </p>
          <div>
            <a href="https://react-spring-flip.now.sh">
              See the docs
            </a>
          </div>
        </li>
        <li className="col-sm-6">
          <h4>
            Redux library
          </h4>
          <p className="mb-1">
            This open source library is a bridge
            between redux and a compliant JSON API.
            It makes getting data easy and concise,
            and provides an easy way to manage i18n localization.
          </p>
          <div>
            <a href="https://github.com/morgs32/redux-library">
              Find it on Github
            </a>
          </div>
        </li>
      </ul>

    </StyledDiv>
  );
}

