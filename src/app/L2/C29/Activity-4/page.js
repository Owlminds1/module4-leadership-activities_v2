"use client";

import './page.css';

import Slider from './components/Slider'


export default function Home() {
  return (
    <div className="mainContainer bg-gradient-to-br from-pink-100 to-blue-100">
      <center>
        <Slider />
      </center>
    </div>
  );
}
