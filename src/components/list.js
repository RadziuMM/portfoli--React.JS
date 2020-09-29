import React from 'react';
import '../style/list.scss';
import data from '../assets/data.json';


const gen = (table) => {
    let list = [];
    let i = 0;  
    let j = table;
    data.stack[j].tech.forEach(element => {
      list[i] = <div className="technology" key={element}>{element}</div>;
        i += 1;
    })
    return list;
  }


class list extends React.Component {
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
    
export default list;