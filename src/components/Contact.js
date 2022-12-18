import React from 'react';
import { LogoGithub, LogoWhatsapp, LogoLinkedin, LogoInstagram, LogoGoogle } from 'react-ionicons';

export default function Contact() {
  return (
    <footer id='contact'>
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
        <div class="container white">
            <div className='contact-wrapper'>
                <ul>
                    <a className='contact-link' href="https://github.com/borishksh" target="_blank" rel="noopener noreferrer">
                        <li style={{"--i":"#a955ff","--j":"#ea51ff"}}>
                        
                                <span className='contact-icon'>
                                <LogoGithub
                                    height="35px"
                                    width="35px"
                                />
                            </span>
                            
                            <font className='contact-title'>Github</font>
                        
                        </li>
                    </a>
                    <a className='contact-link' href="https://www.linkedin.com/in/borish-kshetrimayum/" target="_blank" rel="noopener noreferrer">
                    <li style={{"--i":"#56ccf2","--j":"#2f80ed"}}>
                        <span className='contact-icon'>
                            <LogoLinkedin
                            height="35px"
                            width="35px"
                            />
                        </span>
                        <font className='contact-title'>Linkedin</font>
                    </li>
                    </a>
                    <a className='contact-link' href="mailto: borishksh04@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li style={{"--i":"#ff9966","--j":"#ff5e62"}}>
                        <span className='contact-icon'>
                            <LogoGoogle
                            height="35px"
                            width="35px"
                            />
                        </span>
                        <font className='contact-title'>GMail</font>
                    </li>
                    </a>
                    <a className='contact-link' href="https://wa.me/8787507791" target="_blank" rel="noopener noreferrer">
                    <li style={{"--i":"#80ff72","--j":"#7ee8fa"}}>
                        <span className='contact-icon'>
                            <LogoWhatsapp
                            height="35px"
                            width="35px"
                            />
                        </span>
                        <font className='contact-title'>Whatsapp</font>
                    </li>
                    </a>
                    <a className='contact-link' href="https://www.instagram.com/borish_ksh/" target="_blank" rel="noopener noreferrer">
                    <li style={{"--i":"#ffa9c6","--j":"#f434e2"}}>
                        <span className='contact-icon'>
                            <LogoInstagram
                            height="35px"
                            width="35px"
                            />
                        </span>
                        <font className='contact-title'>Instagram</font>
                    </li>
                    </a>
                </ul>
            </div>
            <div className='freelance'>
            <br/>Download my Resume from <a href='https://drive.google.com/file/d/1mxtg5an4T9sTtJ-uXLUuGQKnxrj_q0n-/view?usp=sharing' target="_blank" rel="noopener noreferrer">here</a>
            </div>
            <div className='freelance'>
                Available for select freelance opportunities<br/>
                Have an exciting project you need help with?
                Send me an email or contact me via instant message!
            </div>
        </div>
    </footer>
  )
}
