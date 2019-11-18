# Morgan at Work


My blog



## Notes

- If you make this a yarn workspace later, then
use circleci to drop `.yarnrc` file that turns workspaces off
because you won't need it in CI environment.


For later:


```
import ImageZoom from 'react-medium-image-zoom'


<ImageZoom
  image={{
    src: require('./what-you-believe-in.png'),
    alt: 'Golden Gate Bridge',
    className: 'img',
    style: { width: '50em' }
  }}
  zoomImage={{
    src: require('./what-you-believe-in.png'),
    alt: 'Golden Gate Bridge'
  }} 
/>
```
