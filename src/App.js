import React from 'react';

import './style/app.scss';

import data from './assets/data.json';

import Project from './components/project';
import Info from './components/info';
import SkillsBox from './components/skillsBox';
import OpenSource from './components/openSource';



class App extends React.Component {
  render() {
    setTimeout(()=>{
      document.getElementById('screenTitle').style.opacity = "1";
    },500);
    setTimeout(()=>{
      const slider = document.getElementById('screenS');
      slider.style.marginTop='-150vh'
      setTimeout(()=>{
          const scren = document.getElementById('screenB');
          scren.style.marginTop='-150vh'
        },3000)
      },1500)
    return (
      <div className="App">
        <div id="screenB">
          <div id="screenTitle">
            <div>Radosław Mazurczak</div>
            <div>FullStack JavaScript Developer</div>
          </div>
        </div>
        <div id="screenS"></div>
        <h1>Front-end & Back-end JavaScript Developer</h1>
        <h2>Yes.I'm doing weird things with pc</h2>
        <br />
        <Info/>
        <div className="hello">
          <span className="hello__header">{data.image__text.text0}</span>
            <div className="hello__text">{data.image__text.text1}</div>
        </div>
        <SkillsBox />
        <div className="projects">
          <div>My projects</div>
          <Project /> 
        </div>
        <div className="OpenTitle">Free Source Activity</div>
        <p className="OpenAbout">{data.open[0].about}</p>
        <div className="open">
          <OpenSource />
        </div>
        <footer>RMazurczak@protonmail.com&copy;</footer>
      </div>
    );
  }
}

export default App;
