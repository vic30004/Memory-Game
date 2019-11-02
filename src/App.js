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
      shows:[],
      score:0,
      highScore:0
    }
  }

 
  
 componentDidMount(){
      const URL = "https://gist.githubusercontent.com/vic30004/59d9abf8c119578210f486c53d953205/raw/c3670f660da5d9554ce4c5aae37e3144a701dd3d/cupcake.json";
      fetch(URL)
      .then(res=>res.json)
      .then(data=>  this.setState({shows:data}))
      console.log(this.state.shows)
  }
  render(){
    return(
    <ShowsState>
    <Fragment>
    <Nav score={this.state.score} highScore={this.state.highScore}/>
      <HeroHead/>
      <Cards score={this.state.score} highScore={this.state.highScore}/>
    </Fragment>
    </ShowsState>
  )
  }

}

export default APP