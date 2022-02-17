import ExperienceCardList from "../components/experienceCardList";
import AdvertiserCardList from "../components/advertiserCardList";
import { experienceList } from "../data/experienceData";

/* import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'; */

import { advertiserList } from "../data/advertiserData";

import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Header from "../components/Header"

export default function Home() {
  const expList = experienceList;
  const advList = advertiserList;
  return (
      <div>
      <Header/>
        <div className="container-fluid">
          <ExperienceCardList expList={expList} />
          <AdvertiserCardList advList={advList} />
        </div>
      </div>
  );
}
