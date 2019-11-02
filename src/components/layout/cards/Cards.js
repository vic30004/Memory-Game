import React, { Component} from 'react';
import CardsItems from './CardsItems';
import './Cards.css';
import ShowsContext from '../../context/shows/ShowsContext';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  test = [];
  score = this.props.score;
  highScore=this.props.highScore
  shuffleArray = arr => {
    this.setState({ items: arr.sort(() => Math.random() - 0.5) });
  };

  shuffle = e => {
      
    if (this.test.indexOf(e.target.src) === -1) {
      this.test.push(e.target.src);
      this.score++;
        if(this.score>this.highScore){
            this.highScore++
        }
        if(this.highScore===12 && this.score===12){
            alert("you win")
            this.score=0
        }
            
    } else {
      alert('you lose');
      this.score = 0;
      return (this.test = []);
    }

    this.shuffleArray(this.state.items);
  };

  componentDidMount() {
    let query =
      'https://gist.githubusercontent.com/vic30004/f2db9ef8923eb4a5821258b240843390/raw/4d78ee18a2a0eed79262628b935da78e71a99900/Memory-game.json';

    fetch(query)
      .then(res => res.json())
      .then(res => this.setState({ items: res }));
  }

  render() {
    return (
      <section id='shows'>
      <div className="score">
       <ul className="score-list py-1">
            <li>Score:{this.score}</li>
            <li>HighScore:{this.highScore}</li>
            </ul>
      </div>
           
        <div className='container'>
          {this.state.items.map(data => (
            <img
              className='card'
              src={data.image}
              onClick={this.shuffle}
              alt=''
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
