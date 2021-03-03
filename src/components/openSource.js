import React from 'react';
import '../style/openSource.scss';

import data from '../assets/data.json';



const gen = () => {
    let list=[];
    data.open[1].projects.forEach(element => {
      list.push(
        <a href={element[2]} target="_blank" rel='noopener noreferrer'>
          <div className="openSourceAPP">
            <div key={element}>{element[0]}</div>
            <div key={element}>{element[1]}</div>
          </div>
        </a>
      )
    })
    return list;
  }

class openSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() {
        return (
            gen(this.props.table)
        )
    }
}
    
export default openSource;