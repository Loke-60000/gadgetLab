import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "../style/views/Home.scoped.scss";
import banner from "../assets/cover_gadget_lab.png"
import wave from "../assets/wave2.png"
import clouds from "../assets/nuages.png"


function HomePage() {

  return (
    <div className='homeContainer'>
      <img src={clouds} className='clouds' />
      <img src={banner} alt="gadget_lab_banner" className='banner' />
      <div className="waveContainer">
          <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </div>
      <div className='page'>
        <p>TEST</p>
        <p>隊禁づ重2海テ供科さあめぴ固減ウニ必通イヒ満線べわぽん桃白セコヌ合昇ノシユタ捜73予ひこし松権まぎれき携経とのろ径巡運週とぽつそ。夫ヘ言録昨ぶあク募店社ニオロ建旨ミタイ野込ヨクニカ面早数ゅでっ気毎サシ男安テタ無折げびト愛19将携舎賛一もーゆぽ。南ょぞ話26芝2経他ナケイ秋繰けほにル民説トイわ接科タ豊影るくず猛法参りスわ介坂した営択位レ。</p>
      </div>
    </div>
  );
}

export default HomePage;
