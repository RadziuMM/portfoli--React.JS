import React from "react";
import "../style/project.scss";
import data from "../assets/data.json";

const allProjects = () => {
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
            <a href={element.link} target="_blank" rel="noopener noreferrer">
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
      <span id={"slider-image-" + (i + 1)}>
        <style jsx>{`
          #slider-image-${i + 1}:target ~ .image-holder {
            left: -${i * 100}%;
          }
        `}</style>
      </span>
    );
    href[i] = <a href={"#slider-image-" + (i + 1)} class="slider-change"></a>;
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

class project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let i = 0;
    let j = 0;
    const slidering = () => {
      i = 0;
      j = 0;
      data.projects.forEach(() => {
        j += 1;
        setTimeout(() => {
          document.getElementById("image-holder").style.left = `-${i * 100}%`;
          i += 1;
          if(i === data.projects.length){slidering()}
        }, j * 4000);
      });
    };
    slidering();
    return allProjects();
  }
}

export default project;
