import React, { useReducer } from 'react';
import ShowsContext from './ShowsContext';
import ShowsReducer from './ShowReducer';
import { GET_SHOWS, SET_LOADING,RESET } from '../types';

const ShowsState = (props) => {
    const initialState = {
        shows: [{
            "title":"The Powerpuff Girls",
            "id":1,
            "image":"https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/707565-the_powerpuff_girls.jpg",
            "count":0
          },
            {
            "title":"What a Cartoon!",
            "id":2,
            "image":"https://i.ytimg.com/vi/yXGgaXiga5k/hqdefault.jpg",
            "count":0
          },
            {
            "title":"Cartoon Planet",
            "id":3,
            "image":"https://i.ytimg.com/vi/JGuNsf6gHrM/maxresdefault.jpg",
            "count":0
          },
            {
            "title":"I am Weasel",
            "id":4,
            "image":"https://i.ytimg.com/vi/VvLV3OZAcyg/maxresdefault.jpg",
            "count":0
          },
            {
            "title":"Space Ghost Coast to Coast",
            "id":5,
            "image":"http://www.gstatic.com/tv/thumb/tvbanners/184033/p184033_b_v8_aa.jpg",
            "count":0
          },
            {
            "title":"Cow and Chicken",
            "id":6,
            "image":"https://i.ytimg.com/vi/91-7L3WxNpA/maxresdefault.jpg",
            "count":0
          },
            {
            "title":"Johnny Bravo",
            "id":7,
            "image":"https://www.teestory.in/image/cache/catalog/12%20may%20stickers/STNA0007-420x546.jpg",
            "count":0
          },
            {
            "title":"Ed, Edd n Eddy",
            "id":8,
            "image":"https://images-na.ssl-images-amazon.com/images/I/81lM+FOTiRL._RI_.jpg",
            "count":0
          },
            {
            "title":"Courage the Cowardly Dog",
            "id":9,
            "image":"https://images-na.ssl-images-amazon.com/images/I/818ayal9tcL._SL1500_.jpg",
            "count":0
          },
            {
            "title":"Dexter's Laboratory",
            "id":10,
            "image":"http://www.gstatic.com/tv/thumb/tvbanners/184363/p184363_b_v8_ay.jpg",
            "count":0
          },
            {
            "title":"Mike, Lu & Og",
            "id":11,
            "image":"http://www.gstatic.com/tv/thumb/tvbanners/442204/p442204_b_v8_ax.jpg",
            "count":0
          },
            {
            "title":"The Real Adventures of Jonny Quest",
            "id":1,
            "image":"http://www.gstatic.com/tv/thumb/tvbanners/510092/p510092_b_v8_aa.jpg",
            "count":0
          }],
        loading:false,
        score: 0,
        highScore:0
    };
    const [state,dispatch] =useReducer(ShowsReducer, initialState);

    const getShows = async()=>{
        setLoading();
        const URL = "https://gist.githubusercontent.com/vic30004/59d9abf8c119578210f486c53d953205/raw/c3670f660da5d9554ce4c5aae37e3144a701dd3d/cupcake.json";
        fetch(URL)
        .then(res=>res.json)
        .then(data=>  console.log(data))
       
    }
    const setShow =()=>dispatch({type:RESET,payload:{...state.shows}})

    // set Loading 
    const setLoading = ()=>dispatch({type: SET_LOADING});

  return (
      <ShowsContext.Provider
        value={{
            shows:state.shows,
            loading:state.loading,
            score:state.score,
            highScore: state.highScore,
            getShows,
            setShow
        }}>
        {props.children}
        </ShowsContext.Provider>
  );
};

export default ShowsState;
