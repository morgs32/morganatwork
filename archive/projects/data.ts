export type ProjectType = {
  label: string;
  projectImage: {
    url: string;
    width: number;
    height: number;
  },
  tags: string[];
  href: string;
}


const data: { [id: string]: ProjectType } = {
  stackshirts: {
    label: 'stackshirts',
    projectImage: {
      url: require('./stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'hobby project',
      'react',
    ],
    href: 'https://www.stackshirts.com',
  },
  'react-capture-metrics': {
    label: 'react-capture-metrics',
    projectImage: {
      url: require('./react-capture-metrics.gif'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ],
    href: 'https://github.com/stackshirts/react-capture-metrics'
  },
  'react-spring-universal-carousel': {
    label: 'react-spring-universal-carousel',
    projectImage: {
      url: require('./react-spring-universal-carousel.gif'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ],
    href: 'https://github.com/stackshirts/react-spring-universal-carousel'
  },
  'react-spring-flip': {
    label: 'react-spring-flip',
    projectImage: {
      url: require('./react-spring-flip.gif'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ],
    href: 'https://github.com/stackshirts/react-spring-flip'
  },
  'greatest-hits': {
    label: 'Morgan\'s Greatest Hits 2016',
    projectImage: {
      url: require('./greatest-hits.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'polymer',
      'web components',
    ],
    href: 'https://bestof.morganatwork.com'
  }
}

export default data;
