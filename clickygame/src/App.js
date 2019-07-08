import React, { Component } from 'react'
import Cards from './components/Cards/index.js'
import Nav from './components/Nav/index.js'
import Title from './components/Title/index.js'
import Wrapper from './components/Wrapper/index.js'
import cardData from './cardData.json'
import shuffle from 'shuffle-array'


shuffle(cardData)
console.log(cardData)

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    clicked: false,
    cardData
    // alert or modal
  }

  handleClick = (id, clicked) => {
    console.log("clicked id:" + id);
    let card = this.state.cardData.find(function(i) { return i.id === id});

    if(card.clicked === true) {
      console.log("alredy clicked");
      alert("YOU LOST!! Try again!");
      this.resetGame()
      return;
    }

    if (this.state.clicked === false) {
      this.scoreCounter();
      shuffle(this.state.cardData);
      this.setState(prev => ({
        cardData: prev.cardData.map(
          cd => cd.id === id ? { ...cd, clicked: true }: cd
        )
      }));
      console.log(this, "try to change object's clicked value to true")
    }
  }
 
 
  scoreCounter = () => {
    const thisGameScore = this.state.currentScore + 1
    this.setState({
      currentScore: thisGameScore
    });
    if(thisGameScore >= 12) {
      alert("YOU WON!");
    }

    if (thisGameScore >= this.state.highScore) {
      this.setState({ highScore: thisGameScore })
    }
  }

  resetGame = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: false,
      cardData
    });
    shuffle(cardData)
  }

  render() {
    return (
      <div className="clicky" >
        <Wrapper>
          <Nav
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />
          <Title />
          {this.state.cardData.map((card) => (
            <Cards
              id={cardData.id}
              key={card.id}
              keyx={card.id}
              img={card.img}
              title={card.title}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;