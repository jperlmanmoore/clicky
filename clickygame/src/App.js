import React, { Component } from 'react'
import Cards from './components/Cards/index.js'
import Nav from './components/Nav/index.js'
import Title from './components/Title/index.js'
import Wrapper from './components/Wrapper/index.js'
import cardData from './cardData.json'

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    cardData,
    clickedCard: [],
    // alert or modal
  }

  // random sort card
  randomize = cardData => {
    cardData.forEach(cardData => {
      cardData.sort(() => .5 - Math.random())
    });
    return cardData
  }

  scoreCounter = () => {
    const increment = this.state.currentScore + 1;
    this.setState({
      currentScore: increment,
      youWin: ""
    })
    if (increment >= this.state.highScore) {
      this.setState({ highScore: increment })
    }
  }

  resetGame = () => {
    this.setState({
      highScore: this.state.highScore,
      currentScore: 0,
      clicked: []
    });
    this.randomize()
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === false) {
      this.state.clickedCard.push(this.id);
      this.scoreCounter();
    } else {
      this.resetGame()
    }
  }

  render() {
    return (
      <div className="clicky" >
        <Wrapper>
          <Nav
            // title="CLICKY"
            score={this.state.currentScore}
            highScore={this.state.highScore}
          />
          <Title />
          {this.state.cardData.map((card) => (
            <Cards
              id={cardData.id}
              key={card.id}
              img={card.img}
              title={card.title}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;
