import React, {Component,Fragment} from 'react';
import Nav from './components/layout/nav/Nav'
import HeroHead from './components/layout/header/HeroHead'
import Cards from './components/layout/cards/Cards'
import Footer from './components/layout/footer/Footer'
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
    <Fragment>
    <Nav score={score} highScore={highScore}/>
      <HeroHead/>
      <Cards score={score} highScore={highScore}/>
      <Footer/>
    </Fragment>
  )
  }

}

export default APP