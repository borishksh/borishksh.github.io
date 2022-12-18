import React, { Component } from 'react'

export default class Skill extends Component {
  render() {
    const starth3 = "<h3>";
    const endh3 = "</h3>";
    return (
      <div className='container'>
        <div id='skill'>
            <div className='skill-head'>
                <font>My Skills</font>
            </div>
            <div className='skill-table'>
                <div className='skill-card'>
                    <div className='skill-title'>
                        <font>Software Development</font>
                    </div>
                    <div className='skill-details'>
                        <font className="skill-h3"> {starth3}</font>
                        <div><font>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</font></div>
                        <font className="skill-h3">{endh3}</font>
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-title'>
                        <font>Frontend Dev <br/>React</font>
                    </div>
                    <div className='skill-details'>
                        <font className="skill-h3"> {starth3}</font>
                        <div><font>Passionate about UI/UX.<br/> Over 2 years of development experience in HTML, CSS, JS and React.</font></div>
                        <font className="skill-h3">{endh3}</font>
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-title'>
                        <font>Flutter Dev<br/>
                                Android, iOS</font>
                    </div>
                    <div className='skill-details'>
                        <font className="skill-h3"> {starth3}</font>
                        <div><font>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</font></div>
                        <font className="skill-h3">{endh3}</font>
                    </div>
                </div>
            </div>
            <div className='skill-background'>

            </div>
        </div>
      </div>
    )
  }
}
