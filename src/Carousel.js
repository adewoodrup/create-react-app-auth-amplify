import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Dimensions } from 'react-native';
import Slide1 from './images/Slide1.PNG';
import Slide2 from './images/Slide2.PNG';
import Slide3 from './images/Slide3.PNG';
import Slide4 from './images/Slide4.PNG';
import Slide5 from './images/Slide5.PNG';
import Slide6 from './images/Slide6.PNG';
import Slide7 from './images/Slide7.PNG';
import Slide8 from './images/Slide8.PNG';
import Slide9 from './images/Slide9.PNG';
import Slide10 from './images/Slide10.PNG';
import Slide11 from './images/Slide11.PNG';
import Slide12 from './images/Slide12.PNG';
import Slide13 from './images/Slide13.PNG';
import Slide14 from './images/Slide14.PNG';
import Slide15 from './images/Slide15.PNG';
import Slide16 from './images/Slide16.PNG';
import Slide17 from './images/Slide17.PNG';
import Slide18 from './images/Slide18.PNG';

const win = Dimensions.get('window');
const imageHeight = Math.round(win.height * 0.8);
const imageWidth = Math.round(win.width * 0.8);


export default () => (
    <Carousel >
        <div>
            <img alt="" src={Slide1} />
        </div>
        <div>
            <img alt="" src={Slide2} />
       </div>
        <div>
            <img alt="" src={Slide3} />
        </div>
        <div>
            <img alt="" src={Slide4} />
        </div>
        <div>
            <img alt="" src={Slide5} />
        </div>
        <div>
            <img alt="" src={Slide6} />
        </div>
        <div>
            <img alt="" src={Slide7} />
        </div>
        <div>
            <img alt="" src={Slide8} />
        </div>
        <div>
            <img alt="" src={Slide9} />
        </div>
        <div>
            <img alt="" src={Slide10} />
        </div>
        <div>
            <img alt="" src={Slide11} />
        </div>
        <div>
            <img alt="" src={Slide12} />
        </div>
        <div>
            <img alt="" src={Slide13} />
        </div>
        <div>
            <img alt="" src={Slide14} />
        </div>
        <div>
            <img alt="" src={Slide15} />
        </div>
        <div>
            <img alt="" src={Slide16} />
        </div>
        <div>
            <img alt="" src={Slide17} />
        </div>       
        <div>
            <img alt="" src={Slide18} />
        </div>
    </Carousel>
);
