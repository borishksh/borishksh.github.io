import React from 'react';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Skill from '../components/Skill';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skill/>
    <Work/>
    <Experience/>
    <Contact/>
    </>
  )
}