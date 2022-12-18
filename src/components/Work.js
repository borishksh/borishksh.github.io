import React, {useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Work() {
    useEffect(
        () => {
            Aos.init({duration: 2000});
        }, []
    );    
    return (
      <div className='container'>
        <div id='work' className='work'>
            <div className='work-text'>
                <div data-aos="slide-right" className='work-index'>
                    <font>00</font>
                </div>
                <div data-aos="slide-right" className='work-title'>
                    YOGALIKE
                </div>
                <div data-aos="slide-right" className='work-details'>
                    Flutter project that combines AI and yoga to produce better result.
                </div>
            </div>
            <div className='work-image'>
                <div className='work-image-wrapper'>
                    <div className='work-img1'></div>
                    <div className='work-img1'></div>
                    <div className='work-img1'></div>
                    <div className='work-img1'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img2'></div>
                    <div className='work-img2'></div>
                    <div className='work-img2'></div>
                    <div className='work-img2'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img3'></div>
                    <div className='work-img3'></div>
                    <div className='work-img3'></div>
                    <div className='work-img3'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img4'></div>
                    <div className='work-img4'></div>
                    <div className='work-img4'></div>
                    <div className='work-img4'></div>
                </div>
            </div>
        </div>
        <div className='work'>
            <div className='work-text'>
                <div data-aos="slide-right" className='work-index'>
                    <font>01</font>
                </div>
                <div data-aos="slide-right" className='work-title'>
                    MENTAL HEALTH CHATBOT
                </div>
                <div data-aos="slide-right" className='work-details'>
                    Chabot for improving mental health build using Rasa and Python.
                </div>
            </div>
            <div className='work-image'>
                <div className='work-image-wrapper'>
                    <div className='work-img11'></div>
                    <div className='work-img11'></div>
                    <div className='work-img11'></div>
                    <div className='work-img11'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img21'></div>
                    <div className='work-img21'></div>
                    <div className='work-img21'></div>
                    <div className='work-img21'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img31'></div>
                    <div className='work-img31'></div>
                    <div className='work-img31'></div>
                    <div className='work-img31'></div>
                </div>
                <div className='work-image-wrapper'>
                    <div className='work-img41'></div>
                    <div className='work-img41'></div>
                    <div className='work-img41'></div>
                    <div className='work-img41'></div>
                </div>
            </div>
        </div>
        <div className='work'>
            <div className='work-text'>
                <div data-aos="slide-right" className='work-index'>
                    <font>02</font>
                </div>
                <div data-aos="slide-right" className='work-title'>
                    HOTEL BOOKING
                </div>
                <div data-aos="slide-right" className='work-details'>
                    Hotel booking website using React js.
                </div>
            </div>
            <div className='work-image'>
                <div className='work-image-wrapper web'>
                    <div className='work-img12'></div>
                    <div className='work-img12'></div>
                    <div className='work-img12'></div>
                    <div className='work-img12'></div>
                </div>
                <div className='work-image-wrapper web'>
                    <div className='work-img22'></div>
                    <div className='work-img22'></div>
                    <div className='work-img22'></div>
                    <div className='work-img22'></div>
                </div>
                <div className='work-image-wrapper web'>
                    <div className='work-img32'></div>
                    <div className='work-img32'></div>
                    <div className='work-img32'></div>
                    <div className='work-img32'></div>
                </div>
            </div>
        </div>
      </div>
    )
  }