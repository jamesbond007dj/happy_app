import React from 'react';
import James from './assets/james.jpeg'
import Ting from './assets/ting.jpg'
import Sharmarke from './assets/sharmarke.jpeg'



class About extends React.Component {
  render() {
    return (
      <>
        <div class="bio">
          <img className='testimage' src={James} />
          <p className='ourNames'>James Bond</p>
        </div>

        <div class="bio">
        <img className='testimage' src={Ting} />
          <p className='ourNames'>Ting</p>
        </div>

        <div class="bio">
        <img className='testimage' src={Sharmarke} />
          <p className='ourNames'>Sharmarke</p>
        </div>
    </>
    )
  }
}
export default About;