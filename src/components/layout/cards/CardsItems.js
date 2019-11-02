import React, { useEffect } from 'react';

export default function CardsItems({ score, highScore, shows, setShow }) {
  let reset = false;
  let copy = [shows]
  let test = null;
  copy.map(data=>test=data)

const resetShows = () =>{
      if(reset){
          copy.count=0
      }
  }
  const shuffleArray =()=>{
    copy.sort(()=>Math.random()-.5);
  }

  const click = () => {
    if (shows.count !== 0) {
      alert('you lost');
      reset = true;
      shuffleArray()
      resetShows()
    }
    shows.count++;
    highScore++;
    score++
    console.log(highScore)
    console.log('clicked');
  };

  
  
  return (
    <div>
      <img className="card" src={shows.image} alt='' onClick={click} />
    </div>
  );
}
