import React from 'react';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
 
  .MorganAtWork__myName {
    font-size: 2rem;
    line-height: 1.9rem;
    font-weight: bold;
  }
  .MorganAtWork__myLinks {
    a {
      margin-left: .5rem;
    }
  }
  
  .MorganAtWork__Hero {
    min-height: calc(100vh - 100px);
    padding-bottom: 40px;
  }
  
  .display-1 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-rendering: optimizeLegibility;
  }
  
  .MorganAtWork__arrowSvg {
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
  }
 
`;

MorganAtWork.propTypes = {};
MorganAtWork.defaultProps = {};

export default function MorganAtWork(props) {
  return (
    <StyledDiv>
      <nav className="MorganAtWork__nav">
        <div className="ByLines pr-4 py-4 d-flex flex-column text-right">
          <div>
            <div className="MorganAtWork__myName mb-2">
              Morgan Intrator
            </div>
            <div className="font-weight-bold mb-2">
              <Link href="/opinions">
                <a>
                  Opinionated
                </a>
              </Link>
              {' '}
              Engineer
            </div>
          </div>

          <div className="MorganAtWork__myLinks">
            <a
              className="a-blue"
              href="https://github.com/morgs32"
            >
              <Github />
            </a>
            <a
              className="a-blue"
              href="https://www.twitter.com/morgs32"
            >
              <Twitter />
            </a>
            <a
              className="a-blue"
              href="https://linkedin.com/in/morganintrator"
            >
              <LinkedIn />
            </a>
          </div>

        </div>
      </nav>

      <div className="MorganAtWork__Hero container-fluid container-xl d-flex flex-column justify-content-center text-md-center">
        <h1 className="display-1 mb-4">
          Morgan at Work
        </h1>

        <div className="row align-items-center justify-content-center">
          <h2 className="Home__summary col-lg-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium ornare erat in sed quam dignissim. Sed
            vestibulum in mauris egestas lorem pulvinar a sit. Mattis in viverra in id.
          </h2>
          {/*<div className="col-lg-3">*/}
          {/*  <img className="MorganAtWork__arrowSvg" src={require('./Arrow.svg')} />*/}
          {/*</div>*/}
        </div>
      </div>
    </StyledDiv>
  );
}

