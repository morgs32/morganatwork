import React from 'react';
import useImage, { Status } from './useImage';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledDiv = styled.div`

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  .Image__aspectRatio {
    height: 0;
    ${({ aspectRatio, width, height }) => {
      if (height && height.includes('px')) {
        
        return `
          height: 100%;
          width: ${parseInt(height.replace('px', ''), 10) * aspectRatio}px
        `;
      }
      return `padding-bottom: ${100 / aspectRatio}%`;
    }};
    position: relative;
  }
  
  
  .Image__placeholder {
    overflow: hidden;
    z-index: -1;
   
    &::before {
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
  
`;

interface Props {
  className: string;
  src: string;
  aspectRatio: number;
}

const Image: React.FC<Props & React.HTMLProps<HTMLImageElement>> = (props) => {

  const {
    src,
    className,
    alt,
    width,
    height,
  } = props;

  const [status] = useImage(src);

  return (
    <StyledDiv
      width={width}
      height={height}
      aspectRatio={props.aspectRatio}
    >
      <div className="Image__aspectRatio">
        <div className={classnames('position-absolute fill overflow-hidden', className)}>
          <div className="Image__placeholder position-absolute fill" />
          {status === Status.LOADED && (
            <StyledImg
              className="Image__img"
              alt={alt}
              width="100%"
              height="100%"
              src={src}
            />
          )}
        </div>
        {/*<div*/}
        {/*  className="Image__pattern"*/}
        {/*/>*/}


      </div>
    </StyledDiv>
  );
};

export default Image;
