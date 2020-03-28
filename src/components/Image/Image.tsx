import React from 'react';
import useImage, { Status } from './useImage';
import styled from 'styled-components';
import classnames from 'classnames'

const StyledDiv = styled.div`
  overflow: hidden;
  
  .Image__placeholder {
    height: 0;
    position: relative;
    padding-bottom: ${({ aspectRatio }) => 100 / aspectRatio}%;
    
    
    &::after {
      content: "";
      display: block;
      background-color: rgba(0, 0, 0, .2);
      background: linear-gradient(to right, transparent 0%, rgba(0,0,0, .1) 20%, rgba(0,0,0, .2) 50%, rgba(0,0,0, .1) 60%, transparent 100%);
    
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      transform: translateX(0);
      animation: 1.5s loading-placeholder ease-in-out infinite;
    }
  
    @keyframes loading-placeholder {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
  
  .Image__pattern {
    height: 100%;
    width: 100%;
    position: absolute;
    background: url('${require('./RoyalHungarian.svg')}');
    background-repeat: repeat;
    transition: opacity .2s ease;
    will-change: opacity;
  }  
  
  
`;

const StyledImg = styled.img`
  animation: 1s ease fadeIn;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
`

interface Props {
  className: string;
  src: string;
  aspectRatio: number;
}

const Image : React.FC<Props & React.HTMLProps<HTMLImageElement>> = (props) => {

  const {
    src,
    className,
  } = props;

  const [status] = useImage(src);

  if (status === Status.LOADING) {
    return (
      <StyledDiv
        className={className}
        aspectRatio={props.aspectRatio}
      >
        <div className="Image__placeholder" />
        {/*<div*/}
        {/*  className="Image__pattern"*/}
        {/*/>*/}
      </StyledDiv>
    );
  }

  return (
    <StyledImg
      className={classnames(className, 'Image__img')}
      {...props}
    />
  );
}

export default Image
