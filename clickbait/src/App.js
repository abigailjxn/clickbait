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

  this.state.cards.forEach(card => {
    if (card.id === id ) {
      if (card.checked === true) {
        console.log("clicked twice")
        this.setState({userScore: 0});
        
        // handle clicks again
        //shuffle cards
      } else {
        card.checked = true;
        this.setState({ userScore: this.state.userScore + 1})
        // bug -- user score logs as 0 on first click
       
        if (this.state.userScore > this.state.topScore) {
          this.setState({topScore: this.state.userScore});
        };
        
       // shuffle cards
       

        
      }
    }
  });


};

// newGame = () => {
//   handleCardClick(id);
// }


render (){
  return (
   <div>
     <Container>
       <div className="gameboard">
         {this.state.cards.map((card, i) => <Card key={i} id={card.id} name={card.name} image={card.image} handleCardClick={this.handleCardClick} />)}
       </div>

     </Container>
     <Footer image={logo} userScore={this.state.userScore} topScore={this.state.topScore} />
   </div>
  );
};

}


export default App;
