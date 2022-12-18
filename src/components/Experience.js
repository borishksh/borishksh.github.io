import React, { Component } from 'react';

export default class Experience extends Component  {
    state = {
        isOpen: false,
        isOpen1: false
        };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    handleToggle1 = () => {
        this.setState({ isOpen1: !this.state.isOpen1 });
    };
    render() {
        return (
            <div className='container'>
                <div id='experience' className='experience'>
                    <div className='experience-title'>
                        <font>Experience</font>
                    </div>
                    <div className='experience-card'>
                        <ul>
                            <li>
                                <font className='e-card-title'>Computer Engineer Student</font>
                            </li>
                            <li>
                                <font className='e-card-date'>Aug, 2020 - Present</font>
                            </li>
                            <li>
                                <div className={this.state.isOpen ? "e-card-menu" : "e-card-menu active"} onClick={this.handleToggle}>
                                        <span></span>
                                        <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={this.state.isOpen ? "e-card-details active" : "e-card-details"}>
                        <div className='e-card-loc'>
                            Azara, Guwahati
                        </div>
                        <div className='e-card-txt'>
                            Pursuing for my Btech in CSE at Assam Don Bosco University.
                        </div>
                        <div className='e-card-stack'>
                            <div className='e-card-tech'>
                                C/C++
                            </div>
                            <div className='e-card-tech'>
                                Java
                            </div>
                            <div className='e-card-tech'>
                                MySQL
                            </div>
                            <div className='e-card-tech'>
                                Python
                            </div>
                        </div>
                    </div>
                    <div className='experience-card mar-minus'>
                        <ul>
                            <li>
                                <font className='e-card-title'>Summer Internship</font>
                            </li>
                            <li>
                                <font className='e-card-date'>Jul, 2020 - Sept,2020</font>
                            </li>
                            <li>
                                <div className={this.state.isOpen1 ? "e-card-menu1" : "e-card-menu1 active"} onClick={this.handleToggle1}>
                                        <span></span>
                                        <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={this.state.isOpen1 ? "e-card-details1 active" : "e-card-details1"}>
                        <div className='e-card-loc'>
                            IISC, Bangaluru
                        </div>
                        <div className='e-card-txt'>
                            Development of Mental Health Chatbot using RASA.
                        </div>
                        <div className='e-card-stack'>
                            <div className='e-card-tech'>
                                Python
                            </div>
                            <div className='e-card-tech'>
                                Rasa
                            </div>
                            <div className='e-card-tech'>
                                React
                            </div>
                            <div className='e-card-tech'>
                                NLU
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
}
