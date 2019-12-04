# Morgan at Work
My blog and portfolio site

# How it works
- The [firebase emulator](https://firebase.google.com/docs/emulator-suite/connect_and_prototype)
  ```
  curl -sL firebase.tools | bash
  
  ```
  
  
  


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
