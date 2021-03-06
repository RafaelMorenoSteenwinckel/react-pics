
import React, { Component} from "react";
import unsplashAPI from '../api/unsplash';

import "./CSS/App.css";
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const URI = "";

class App extends Component{

  state = {images: []};

/*
  onSearchSubmit = async (term) => {
    const result = await axios.get() ...
  }
  */
  onSearchSubmit = (term) => {
    unsplashAPI.get(
      '/search/photos',
      {  
        params: {
          'query': term
        }
      }).then(
        (response) => {
          this.setState({images: response.data.results});
          console.log (this.state.images);
        }
      );
  }
  
  render() {
    return(
      <div className="App">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;




  //access key : T6ae7g3LkTw4BsyLYiYN99dSmkRVsxJTZo74JLn8SFs
  //secret key : HswZskTp69EvReEQgOiIcvUqPw95OTW2MrA63GI9V2k

  

  //Important si on veut pas utiliser les promises.. on peut flagger la fonction en tant que async et await
  //async pour dire que la methode est asynchrone et await pour attendre un result

  /*
  async onSearchSubmit(term) {
    const response = await axios.get(
      `${URI}/search/photos`,
        {
          headers: {
            Authorization: 'Client-ID T6ae7g3LkTw4BsyLYiYN99dSmkRVsxJTZo74JLn8SFs'
          },
          params: {
            'query': term
          }
        });
        //De nouveauo on a pas acces a this ici !!!
      this.setState({images: response.data.resutls});
  }*/