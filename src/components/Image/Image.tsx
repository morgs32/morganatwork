import React from 'react';
import useImage, { Status } from './useImage';
import styled from 'styled-components';

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
  naturalDimensions?: [number, number];
  height?: string;
  width?: string;
}

interface Dimensions {
  height?: number,
  width?: number,
}

const Image: React.FC<Props & React.HTMLProps<HTMLImageElement>> = (props) => {

  const {
    naturalDimensions,
    src,
    width,
    height,
    className,
  } = props;

  const aspectRatio = naturalDimensions[0] / naturalDimensions[1];

  const [status] = useImage(src);
  const regex = /[0-9]+/;
  const dimensions: Dimensions = {};
  if (width && height) {
    dimensions.width = parseInt(width.match(regex)[0], 10);
    dimensions.height = parseInt(height.match(regex)[0], 10);
  } else if (!aspectRatio) {
    // Hmm throw error

  } else {

    if (width) {
      dimensions.width = parseInt(width.match(regex)[0], 10);
      dimensions.height = 100 / aspectRatio;
    }
    if (height) {
      dimensions.width = 100 * aspectRatio;
      dimensions.height = parseInt(height.match(regex)[0], 10);
    } else {
      dimensions.width = naturalDimensions[0];
      dimensions.height = naturalDimensions[1];
    }
  }

  return (
    <>
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        width={width}
        height={height}
        style={{
          zIndex: -1,
          position: status === Status.LOADED ? 'absolute' : 'relative'
        }}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient gradientTransform="skewX(20)" id="skyGradient" x1="100%" y1="100%">
            <stop offset="0.8714" stop-color="lightblue" stop-opacity=".5">
              <animate attributeName="stop-color" values="#fff;#eee;#ddd;#ccc;#ddd;#ccc;#eee;#fff" dur="4s"
                       repeatCount="indefinite" />
              <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="4s"
                       repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#skyGradient)" />
      </svg>
      {status === Status.LOADED && (
        <StyledImg
          className="Image__img"
          {...props}
        />
      )}
    </>
  );
};

export default Image;
