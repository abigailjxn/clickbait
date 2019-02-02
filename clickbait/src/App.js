import React, {Component} from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import memes from "./memes.json";
import logo from "./AJ-logo.png"
import "./App.css";

class App extends Component {
  state = {
    userScore: 0,
    topScore: 0,
    cards: [],
    memes
  };


render (){
  return (
   <div>
     <Container>
       <div>
         {this.state.cards.map(card => <Card />)}
       </div>
       <Card
       
        image={memes[1].image}
        
       />
     </Container>
     <Footer image={logo} userScore={this.state.userScore} topScore={this.state.topScore} />
   </div>
  );
};

}


export default App;
