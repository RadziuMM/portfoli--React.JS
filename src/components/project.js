import React from "react";
import "../style/project.scss";
import data from "../assets/data.json";

class project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
    };
  }
  moveMe = (e) => {
    this.setState({ animation: false });
    setTimeout(() => {
      this.setState({ animation: true });
    }, 8000);
    return (document.getElementById("image-holder").style.left = `-${
      e.target.id * 100
    }%`);
  };

  allProjects = () => {
    let list = [];
    let span = [];
    let href = [];
    let i = 0;
    data.projects.forEach((element, index) => {
      list[i] = (
        <div key={index} className="slide">
          <div className="name" key={element}>
            {element.name}
          </div>
          <div className="stack" key={element + 2}>
            {element.stack}
          </div>
          <div className="linkbox">
            <div className="link" key={element + 1}>
              <a href={element.link2} target="_blank" rel="noopener noreferrer">
                Check site
              </a>
            </div>
            <div className="link" key={element + 1}>
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                Check code
              </a>
            </div>
          </div>
        </div>
      );
      span[i] = (
        <span id={"slider-image-" + (i + 1)} className="slider-image">
          <style jsx>{`
            #slider-image-${i + 1}:target ~ .image-holder {
              left: -${i * 100}%;
            }
          `}</style>
        </span>
      );
      href[i] = (
        <div id={i} class="slider-change" onClick={(e) => this.moveMe(e)}></div>
      );
      i += 1;
    });
    const slider = (
      <div class="slider-holder">
        {span}
        <div id="image-holder" class="image-holder">
          {list}
        </div>
        <div class="button-holder">{href}</div>
      </div>
    );

    return slider;
  };

  render() {
    let i = 0;
    let j = 0;
    const slidering = () => {
      i = 0;
      j = 0;
      data.projects.forEach(() => {
        j += 1;
        setTimeout(() => {
          if (this.state.animation === true && i > -30 ){
            document.getElementById("image-holder").style.left = `-${i * 100}%`;
            i += 1;
            if (i === data.projects.length) {
              slidering();
            }
          } else {
            i = -50;
            return false;
          }
        }, j * 4000);
        i = 0;
      });
    };
    slidering();
    return this.allProjects();
  }
}

export default project;
