import React from 'react';
import "../style/sidemenu.scss";

const hide =() => {
    const menu = document.getElementById('sidemenu');
    menu.parentNode.removeChild(menu);
  
    const newmenu = document.createElement("div");
    newmenu.innerHTML =`
      <a href="#start" onClick="hide()"><div>Start</div></a>
      <a href="#who" onClick="hide()"><div>Who am I?</div></a>
      <a href="#skills" onClick="hide()"><div>My skills</div></a>
      <a href="#projects" onClick="hide()"><div>My projects</div></a>
      <a href="#contact" onClick="hide()"><div>Contact</div></a>
      `
      newmenu.id = "sidemenu";
      newmenu.classList.add("sidemenu");
    const parent = document.getElementById("butt");
    setTimeout(()=>{
      parent.appendChild(newmenu);
    },500)
  }

class sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  render() {
    return (
        <nav>
          <div className="butt" id="butt">
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
    );
  }
}

export default sidemenu;