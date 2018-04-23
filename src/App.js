import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Like} from './Button'
import {Carousel} from './Picture'
import {imgUrls} from './Picture'
import {Describe} from './Caption'
import amazon from './amazon.jpeg'
import guitar from './guitar.jpeg'
import keyboard from './keyboard.jpeg'
import sheet from './sheet-music.jpeg'
import cocktails from './cocktails.jpeg'
import robots from './robots.jpeg'

//Grid Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
    this.toggleComplete = this.toggleComplete.bind(this);
  }

//Changing states of like button
  toggleComplete() {
    this.setState(prevState => ({
      complete: !prevState.complete
    }));
  }


  render() {
    const incompleteIcon = <span class="far fa-heart"></span>;
    const completeIcon = <span class="fas fa-heart"></span>;
    return (
      <div className="App">
        <Carousel/>
        <hr/>
        <div>
          {/* Grid images */}
        <div className="container">
        <div className="row">
          <div className = "col-md-4 hold card">
            <img className = "resize" src={amazon}/>

            {/* Toggle by Boolean type method */}
              {/* <div className="todo-item" onClick={this.toggleComplete}>
                {this.state.complete ? completeIcon : incompleteIcon}
                <span className="todo-item-text">{this.props.item}</span>
              </div> */}

              <Like />

          </div>

          <div className = "col-md-4 hold card">

            <img className = "resize" src={guitar}/>

            <Like />

          </div>

          <div className = "col-md-4 hold card">

            <img className = "resize" src={keyboard}/>

            <Like />

          </div>

          <div className = "col-md-4 hold card">

            <img className = "resize" src={sheet}/>

            <Like />

          </div>

          <div className = "col-md-4 hold card">

            <img className = "resize" src={cocktails}/>

            <Like />

          </div>

          <div className = "col-md-4 hold card">

            <img className = "resize" src={robots}/>

            <Like />

          </div>

        </div>



        </div>

        <footer id="choose"></footer>

        </div>

      </div>
    );
  }
}
export default App;
