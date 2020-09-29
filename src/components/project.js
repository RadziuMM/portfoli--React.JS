import React from 'react';
import "../style/project.scss";
import data from "../assets/data.json";

const allProjects = () => {
  let list = [];
  let i = 0;  
  data.projects.forEach((element,index) => {
    list[i] =
    <div key={index}className="project">
        <div className="name" key={element}>{element.name}</div>
        <div className="link" key={element+1}><a href={element.link} target="_blank" rel="noopener noreferrer">Check code</a></div>
        <div className="stack" key={element+2}>{element.stack}</div>
      </div> ;
      i += 1;
  })
  return list;
}

class project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  render() {
    return (
        allProjects()
    );
  }
}

export default project;