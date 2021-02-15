import React from "react";
import "../style/project.scss";
import data from "../assets/data.json";

let gen =6;
const genTable =()=>{
  const gendata = [];
  data.projects.forEach(Element=>{
    gendata.push(
    <div className="card">  
      <div className="front">{Element.name}</div>
      <a href={Element.link} target='_blank' rel="noopener noreferrer"><div className="back">show code</div></a>
      <a href={Element.link2} target='_blank' rel="noopener noreferrer"><div className="back">show site</div></a>
      <div className="back">{Element.stack}</div>
    </div>
    )
  })
  gen = gendata
}

class project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    genTable();
    return (
    <div className='table'>
      {gen}
    </div>
    )
  }
}

export default project;
