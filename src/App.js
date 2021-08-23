import React from 'react';
import { render } from 'react-dom';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Dimensions } from 'react-native';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
 

function App() {


  return(
    <DeviceOrientation lockOrientation={'landscape'}>
    {/* Will only be in DOM in landscape */}
    <Orientation orientation='landscape' alwaysRender={false}>
    <div>
        <Carousel />
    </div>
    </Orientation>
    {/* Will stay in DOM, but is only visible in portrait */}
    <Orientation orientation='portrait'>
      <div>
        <p>This presentaion is best viewed in landscape, please rotate your device. </p>
      </div>
    </Orientation>
  </DeviceOrientation>


  );
}

export default App
//render(<App />, document.getElementById('root'));

