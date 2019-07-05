import React, { Component } from 'react'
import Cards from './components/Cards/index'
import Footer from './components/Footer/index'
import Nav from './components/Nav/index'
import Title from './components/Title/index'
import Wrapper from './components/Wrapper/index'
import cardData from './cardData.json'


// random sort card


class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    Cards,
    clicked: [],
    // alert or modal
  }

  // incrementCounter = () => {

  // }

  clickState = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // mark clicked
      this.incrementCounter();
    } else {
      this.resetGame()
    }
  }


    // if click false
        // makr clicked
        // increment counter
    // if clicked true
        // reset game

 resetGame = () => {
  this.state({
    currentScore: 0,
    highScore: this.state.highScore,


  })
  cardData.sort(() => .5 - Math.random()) // randomSort()
}


  // reset game
    // reset score
    // keep display high score
    // empty clicked arrar

  
  // increment function
    // const newScore = state score +1
    // if new score =  higher than high score, high score = new score
  

    // shuffle cards function
      // look to quiz game hw to see how I did  basic shuffle
  
render() {
  return(
  <div className = "clicky" >
      <Wrapper>
        <Nav />
        <Title>Clicky</Title>
        <Cards />
        <Footer />
      </Wrapper>
  </div>
);
}

}

export default App;
