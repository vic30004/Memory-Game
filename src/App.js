import React, {Component,useState, Fragment} from 'react';
import Nav from './components/layout/nav/Nav'
import HeroHead from './components/layout/header/HeroHead'
import Cards from './components/layout/cards/Cards'
import ShowsState from './components/context/shows/ShowsState'
import './App.css';


class APP extends Component {
  constructor(props){
    super(props)
    this.state={
      score:0,
      highScore:0
    }
  }
  

  render(){
    const { score,highScore} = this.state
    return(
    <ShowsState>
    <Fragment>
    <Nav score={score} highScore={highScore}/>
      <HeroHead/>
      <Cards score={score} highScore={highScore}/>
    </Fragment>
    </ShowsState>
  )
  }

}

export default APP