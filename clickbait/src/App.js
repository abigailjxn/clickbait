import React, {Component} from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import memes from "./memes.json";
import "./App.css";

class App extends Component {
  state = {
    memes
  };


render (){
  return (
   <div>
     <Container>
       <Card
       
        image={memes/${}}
        
       />
     </Container>
     <Footer />
   </div>
  );
};

}


export default App;
