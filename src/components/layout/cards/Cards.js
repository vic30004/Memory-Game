import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  test = [];
  score = this.props.score;
  highScore = this.props.highScore;
  shuffleArray = arr => {
    this.setState({ items: arr.sort(() => Math.random() - 0.5) });
    console.log(this.state.items);
  };

  shuffle = e => {
    if (this.test.indexOf(e.target.src) === -1) {
      this.test.push(e.target.src);
      console.log(this.state.items);
      this.score++;
      if (this.score > this.highScore) {
        this.highScore++;
      }
      if (this.highScore === 12 && this.score === 12) {
        alert(`Surprise, Surprise, you won the game.\nYou weren't supposed to win. I promise you, you won't win next time\n Score:${this.score}\nHighScore: ${this.highScore}`);
        this.score = 0;
      }
      else if(this.highScore === 6 && this.score === 6){
        alert("Hmm seems like you're half way there. I suggest you give up, because no one can win this game!")
      }
    } else {
      this.score = 0;
      alert(
        `Oh no! You lost! \nScore: ${this.score}\n HighScore:${this.highScore} \nTry again!!`
      );

      return (this.test = []);
    }

    this.shuffleArray(this.state.items);
  };

  componentDidMount() {
    let query =
      'https://gist.githubusercontent.com/vic30004/f2db9ef8923eb4a5821258b240843390/raw/e427808738d6f166810f895d8113a93d34c93bd6/Memory-game.json';

    fetch(query)
      .then(res => res.json())
      .then(res => this.setState({ items: res }));
  }

  render() {
    return (
      <section id='shows'>
        <div className='score'>
          <ul className='score-list py-1'>
            <li>Score:{this.score}</li>
            <li>HighScore:{this.highScore}</li>
          </ul>
        </div>

        <div className='container'>
          {this.state.items.map(data => (
            <div className='card'>
              <img src={data.image} onClick={this.shuffle} alt='' />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
