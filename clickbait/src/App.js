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
    cards: (memes),
  };


handleCardClick = (id) => {
  console.log(id)
}


render (){
  return (
   <div>
     <Container>
       <div className="gameboard">
         {this.state.cards.map((card, i) => <Card key={i} id={card.id} name={card.name} image={card.image} handleCardClick={this.handleCardClick} char={card.id}/>)}
       </div>

     </Container>
     <Footer image={logo} userScore={this.state.userScore} topScore={this.state.topScore} />
   </div>
  );
};

}


export default App;
