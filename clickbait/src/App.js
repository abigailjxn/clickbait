import React, {Component} from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import memes from "./memes.json";
import logo from "./AJ-logo.png"
import "./App.css";

const memesCopy = [...memes];


class App extends Component {
  state = {
    userScore: 0,
    topScore: 0,
    cards: memesCopy,
    checked: []
  };

handleCardClick = (id) => {
  let checked = this.state.checked.slice(0);

  if (checked.findIndex(item => id === item) === -1){
      checked.push(id);
      this.setState({
        checked: checked,
        userScore: this.state.userScore + 1
      });
      
      if (this.state.userScore +1 > this.state.topScore) {
          this.setState({topScore: this.state.topScore + 1});
        };
  } else {
    this.setState({
      userScore: 0,
      checked: []
    })
  }
  
  let cards = this.state.cards.slice(0);
  cards.sort(() => Math.random() - 0.5);
  this.setState({cards});

  
};


// newGame = () => {
//   handleCardClick(id);
// }


render (){
  return (
   <div>
     <Container>
       <div className="gameboard">
         {this.state.cards.map((card, i) => <Card key={i} id={card.id} name={card.name} image={card.image} handleCardClick={ () => {this.handleCardClick(card.id)}} />)}
       </div>

     </Container>
     <Footer image={logo} userScore={this.state.userScore} topScore={this.state.topScore} />
   </div>
  );
};

}


export default App;
