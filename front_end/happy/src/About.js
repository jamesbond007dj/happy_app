import React from 'react';
import Photoo from './assets/chicken.jpeg'


class About extends React.Component {
  render() {
    return (
      <>
        <div class="bio">
          <img className='testimage' src={Photoo} />
          <p className='ourNames'>James Bond</p>
        </div>

        <div class="bio">
        <img className='testimage' src={Photoo} />
          <p className='ourNames'>Ting</p>
        </div>

        <div class="bio">
        <img className='testimage' src={Photoo} />
          <p className='ourNames'>Sharmarke</p>
        </div>
    </>
    )
  }
}
export default About;