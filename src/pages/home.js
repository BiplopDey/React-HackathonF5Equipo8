import ExperienceCardList from "../components/experienceCardList";
import AdvertiserCardList from "../components/advertiserCardList";
import { experienceList } from "../data/experienceData";

/* import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'; */

import { advertiserList } from "../data/advertiserData";

import React, { Component, useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Header from "../components/Header"

export default function Home() {
  const [expList,setExpList] = useState(experienceList);
  const [advList,setAdvList] = useState(advertiserList);
  
  async function loadExperiences(){

    let endpoint = "http://localhost:5000/api/experiences";
    let response = await fetch (endpoint);
    let data = await response.json();
    return data
  };
  async function loadGuides(){

    let endpoint = "http://localhost:5000/api/guides";
    let response = await fetch (endpoint);
    let data = await response.json();
    return data
    };
    
    useEffect(()=>{loadExperiences().then(response => {
      setExpList(response)})
    },[]);

    useEffect(()=>{loadGuides().then(response => {
      setAdvList(response.map((guide)=>{
        return {
          id: guide.id,
          img: guide.img,
          name: guide.name,
          assessment: guide.valoration + " estrellas"
        }
      }))})
    },[])
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
