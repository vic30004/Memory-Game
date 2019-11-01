import React, {useState, Fragment} from 'react';
import Nav from './components/layout/nav/Nav'
import HeroHead from './components/layout/header/HeroHead'
import './App.css';


const APP=()=>{

  const [shows,setShows] =useState([]);
  const [loading, setLoading] = useState()
  const [score, setScore] = useState({});

  const getShows = async ()=>{
    let res =await fetch('https://gist.githubusercontent.com/vic30004/f2db9ef8923eb4a5821258b240843390/raw/4d78ee18a2a0eed79262628b935da78e71a99900/Memory-game.json');
    let data = await res.json();
    setShows(data)
    console.log(data)
    setLoading(false)
  }
  console.log(shows)

  return(
    <Fragment>
    <Nav/>
      <HeroHead/>
    </Fragment>
  )
}

export default APP