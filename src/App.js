import React from 'react';
import './style/app.scss';
import photo0 from './assets/programming.jpg';
import photo1 from './assets/pc.jpg';
import photo2 from './assets/html.svg';
import photo3 from './assets/mech.svg';
import photo4 from './assets/group.svg';
import photo5 from './assets/photo.JPG';
import github from './assets/github-sign.png';
import linkedin from './assets/linkedin-sign.png';
import email from './assets/email.png';
import Project from './components/project';
import List from './components/list';
import data from './assets/data.json';

const hide =() => {
  const menu = document.getElementById('sidemenu');
  menu.classList.remove("sidemenu");
  menu.classList.add("click");
  setTimeout( ()=>{
    menu.classList.add("sidemenu");
    menu.classList.click("click");
  },1000)
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="butt">
            <div className="butt__line"></div>
            <div className="butt__line"></div>
            <div className="butt__line"></div>
            <div className="sidemenu" id="sidemenu">
              <a href="#start" onClick={hide}><div>Start</div></a>
              <a href="#who" onClick={hide}><div>Who am I?</div></a>
              <a href="#skills" onClick={hide}><div>My skills</div></a>
              <a href="#projects" onClick={hide}><div>My projects</div></a>
              <a href="#contact" onClick={hide}><div>Contact</div></a>
            </div>
          </div>
        </nav>
        <h1 id="start">Front-end & Back-end JavaScript Developer</h1>
        <h2>Yes.I'm doing weird things with pc</h2>
        <img src={photo5} className="face" alt=""/>
        <br />
        <img src={photo1} className="photo1"alt="" />
        <img src={photo0} id="who" className="photo0" alt="" />
        <div className="hello">
          <span className="image__header">{data.image__text.text0}</span>
            <br/>
            <div className="image__text">{data.image__text.text1}</div>
        </div>
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
          <div id="projects"></div>
        </div>
        <div className="projects">
          <div>My projects</div>
          <Project /> 
        </div>
        <a className="contact" id="contact" href="mailto: RMazurczak@protonmail.com">Interested in hiring me ?</a>
        <footer>
          <div></div>
          <div className="mid">
            <a href="https://www.linkedin.com/in/rados%C5%82aw-mazurczak-944a171a5/" target="_blank" rel="noopener noreferrer" ><img src={linkedin} alt="" /></a>
            <a href="https://github.com/RadziuMM" target="_blank" rel="noopener noreferrer" ><img src={github} alt="" /></a>
            <a href="mailto: RMazurczak@protonmail.com" target="_blank" rel="noopener noreferrer" ><img src={email} alt="" /></a>
          </div>
          <div></div>
        </footer>
      </div>
    );
  }
}

export default App;
