import ExperienceCardList from "../components/experienceCardList";
import AdvertiserCardList from "../components/advertiserCardList";
import { experienceList } from "../data/experienceData";
import { advertiserList } from "../data/advertiserData";
import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import Prefer from "../components/Prefer";

export default function Home() {
  const expList = experienceList;
  const advList = advertiserList;
  return (
      <div>
      <Header/>
        <div className="container">
          <ExperienceCardList expList={expList} />
          <AdvertiserCardList advList={advList} />
        </div>
          <NavBar/>
          <Prefer/>
      </div>
  );
}
