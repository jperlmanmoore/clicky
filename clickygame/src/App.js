import React, { Component } from 'react'
import Cards from './components/Cards/index.js'
import Footer from './components/Footer/index.js'
import Nav from './components/Nav/index.js'
import Title from './components/Title/index.js'
import Wrapper from './components/Wrapper/index.js'
import cardData from './cardData.json'


// random sort card
const randomize = array => {
  array.forEach(cardData => {
    cardData.sort(() => .5 - Math.random())
  });
  return array
}

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    cardData,
    clickedCard: [],
    // alert or modal
  }

  click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // mark clicked
      this.incrementCounter();
      randomize(this.state.clicked)
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
   // randomSort()
}


  // reset game
    // reset score
    // keep display high score
    // empty clicked arrar
resetGame = () => {
  this.setState({
    highScore: this.state.highScore,
    currentScore: 0,
    clickedCard: []
  });
  this.randomize()
}



  
  // increment function
    // const newScore = currnet score +1
    // if new score =  higher than high score, high score = new score
  
  scoreCounter = () => {
    const increment = this.state.currentScore +1;
    this.setState({
      currentScore: increment,
      youWin: ""
    })

    if(increment >= this.state.highScore) {
      this.setState({highScore: increment})    
    }

  }


   
render() {
  return(
  <div className="clicky" >
      <Wrapper>
        <Nav
        title="Clicky"
        score={this.state.currentScore}
        highScore={this.state.highScore} 
        />
        <Title>Don't click the same card twice!</Title>
        {this.state.cardData.map((card) => (
          <Cards 
            id={card.id}
            key={card.id}
            img={card.img}
            title={card.title}
            />
        ))}
        <Footer />
      </Wrapper>
  </div>
);
}

}

export default App;
