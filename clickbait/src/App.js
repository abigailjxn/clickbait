import React from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import memes from "./memes.json";
import "./App.css";

function App() {
  return (
   <div>
     <Container>
       <Card
       name={memes[1].name}
        image={memes[1].image}
        
       />
     </Container>
     <Footer />
   </div>
  );
}

export default App;
