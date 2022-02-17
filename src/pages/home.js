import ExperienceCardList from "../components/experienceCardList";
import { experienceList } from "../data/experienceData";
/* import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'; */
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Header from "../components/Header"

export default function Home() {
  const expList = experienceList;
  return (
      <div>
      <Header/>
        <div className="container-fluid">
          <h1>Experiencias Destacadas</h1>
          <ExperienceCardList expList={expList} />
        </div>
      </div>
  );
}
