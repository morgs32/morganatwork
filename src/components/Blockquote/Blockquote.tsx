import React from 'react';
import classnames from 'classnames'
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`

  background: #FFE2E2;
  padding: 1rem;
  padding-left: 4rem;
  margin: 0;

  .Blockquote__quotesSvg {
    position: absolute;
    top: 0;
    left: 1rem;
    width: 2rem;
  }
  
  
  p {
    margin: 0;
  }

`;


interface Props {
  html: string;
  className?: string;
}

const Blockquote : React.FunctionComponent<Props> = (props) => {

  const {
    html,
    className
  } = props;

  return (
    <StyledBlockquote className={classnames('position-relative', className)}>

      <img
        className="Blockquote__quotesSvg"
        src={require('./Quotes.svg')}
      />

      <div dangerouslySetInnerHTML={{ __html: html }} />


    </StyledBlockquote>
  );
}

export default Blockquote;
