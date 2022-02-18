import ExperienceCardList from "../components/experienceCardList";
import AdvertiserCardList from "../components/advertiserCardList";

import React, { useEffect, useState } from 'react';

import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import Prefer from "../components/Prefer";

export default function Home() {
  const [expList,setExpList] = useState([]);
  const [advList,setAdvList] = useState([]);
  
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
        <div className="container">
          <ExperienceCardList expList={expList} />
          <AdvertiserCardList advList={advList} />
        </div>
          <NavBar/>
          <Prefer/>
      </div>
  );
}
