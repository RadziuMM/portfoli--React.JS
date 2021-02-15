import React from 'react';
import '../style/info.scss';

import telegramIcon from '../assets/telegram.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import dude from '../assets/dude.png';

const telegramLink = 'https://t.me/Radziu'
const mailLink = 'mailto:RMazurczak@protonmail.com'
const githubLink = 'https://github.com/RadziuMM'
const linkedinLink = 'https://www.linkedin.com/in/rmazurczak/'

class info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() {
        return (
            <div className='info'>
                <div className="dude">
                    <img src={dude} alt=''></img>
                </div>
                <div>
                    <a href={telegramLink} target='_blank' rel="noreferrer noopener"><img src={telegramIcon} alt=''></img>
                    <span>Text me!</span></a>
                </div>
                <div>
                <a href={mailLink} target='_blank' rel="noreferrer noopener"><img src={mailIcon} alt=''></img> 
                <span>Mail me!</span></a>
                </div>
                <div>
                <a href={githubLink} target='_blank' rel="noreferrer noopener"><img src={githubIcon} alt=''></img>
                <span>Check my code!</span></a>
                </div>
                <div>
                <a href={linkedinLink} target='_blank' rel="noreferrer noopener"><img src={linkedinIcon} alt=''></img> 
                <span>Check my profile!</span></a>
                </div>
                <div></div>
            </div>
        )
    }
}
    
export default info;