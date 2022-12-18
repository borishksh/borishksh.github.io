import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
        };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    twoFunc1 = () => {
        this.handleToggle();
        window.location.replace('/#skill');
    }
    twoFunc2 = () => {
        this.handleToggle();
        window.location.replace('/#work');
    }
    twoFunc3 = () => {
        this.handleToggle();
        window.location.replace('/#experience');
    }
    twoFunc4 = () => {
        this.handleToggle();
        window.location.replace('/#contact');
    }
    render() {
        return (
            <div className='navbar'>
                <div className='logo'>
                    <Link to="/"><font className="name">Borish</font><font className='dot'>.</font><font className='underscore'>_</font></Link>
                </div>
                <div className={this.state.isOpen ? "menu active" : "menu"} onClick={this.handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                <div className={this.state.isOpen ? "side-nav active" : "side-nav"}>
                    <ul className={this.state.isOpen ? "side-nav-link active" : "side-nav-link"}>
                        <li>
                            <Link className='side-nav-item' to="/">
                                /
                                / home
                            </Link>
                        </li>
                        <li>
                            <Link className='side-nav-item' onClick={this.twoFunc1} >
                                /
                                / skill
                            </Link>
                        </li>
                        <li>
                            <Link className='side-nav-item' onClick={this.twoFunc2}>
                                /
                                / work
                            </Link>
                        </li>
                        <li>
                            <Link className='side-nav-item' onClick={this.twoFunc3}>
                                /
                                / experience
                            </Link>
                        </li>
                        <li>
                            <Link className='side-nav-item' onClick={this.twoFunc4}>
                                /
                                / contact
                            </Link>
                        </li>   
                    </ul>
                </div>
                <ul className='nav-link'>
                    <li>
                        <Link className='nav-item' to="/">
                            /
                            / home<font className='nav-index'> 0</font>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item' onClick={() => window.location.replace("/#skill")}>
                            /
                            / skill<font className='nav-index'> 1</font>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item'  onClick={() => window.location.replace("/#work")}>
                            /
                            / work<font className='nav-index'> 2</font>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item' onClick={() => window.location.replace("/#experience")}>
                            /
                            / experience<font className='nav-index'> 3</font>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item' onClick={() => window.location.replace("/#contact")}>
                            /
                            / contact<font className='nav-index'> 4</font>
                        </Link>
                    </li>   
                </ul>
            </div>
        )
    }
}