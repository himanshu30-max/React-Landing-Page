import React from 'react';
import Featurebox from './Featurebox';
import featureimage from '../images/2809413.jpg';
import featureimage1 from '../images/3900527.jpg';
import featureimage2 from '../images/f3.jpg';

function Feature() {
  return (
    <div id='features'>
    <h1>Features of Our Application</h1>
        <div className='a-container'>
            <Featurebox image={featureimage} title = 'Single App for all Devices' />
            <Featurebox image={featureimage1} title = 'Faster Networking' />
            <Featurebox image={featureimage2} title = 'Easy Usability Interface' />
        </div>
    </div>
  )
}

export default Feature;