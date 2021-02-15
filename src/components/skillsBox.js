import React from 'react';
import '../style/skillsBox.scss';

import photo2 from '../assets/html.svg';
import photo3 from '../assets/mech.svg';
import photo4 from '../assets/group.svg';

import List from './list';


class skillsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() {
        return (
            <div className="skillsBox" id="skills">
            <div>
              <img src={photo2} alt="" /> 
              <div className="header">Front end</div>
              <List table="0" />
            </div>
            <div>
              <img src={photo3} alt="" /> 
              <div className="header">Back end</div>
              <List table="1" />
            </div>
            <div>
              <img src={photo4} alt="" /> 
              <div className="header">Project Manager</div>
              <List table="2" />
            </div>
          </div>
        )
    }
}
    
export default skillsBox;