import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    let items = [];
    for (let i = 0; i < 150; i++) {
      items.push(
          <div className='hex'>

          </div>
      )
    }
    return (
      <>
        <div className='hero'>
          <div className='hero-text'>
            <div className='hero-name'>
              BORISH KSH
            </div>
            <div className='hero-detail'>
              SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
            </div>
          </div>

          <div className='hex-container'>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
            <div className='hex-row'>
              {
                items
              }
            </div>
          </div>
          <section id="section-1">
          <div className='scroll-btn' onClick={() => window.location.replace("/#skill")}>
          </div>
          </section>
        </div>
      </>
    )
  }
}