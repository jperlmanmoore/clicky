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

  handleClick = (id) => {
    // lets me know what card was clicked
    console.log("clicked id:" + id);
    let card = this.state.cardData.find(function(i) { return i.id === id})

    // if this case was already clicked the game ends and is reset
    if(card.clicked === true) {
      console.log("alredy clicked")
      alert("YOU LOST!! Try again!")
      this.resetGame()
      return
    }

    // if this card has not already been clicked, increment score coutner, random sort, and
    // change the state of the clicked card from false to true
    if (this.state.clicked === false) {
      this.scoreCounter()
      shuffle(this.state.cardData)
      this.setState(prev => ({
        cardData: prev.cardData.map(
          cd => cd.id === id ? { ...cd, clicked: true }: cd
        )
      }));
      console.log(this, "this")
    }
  }
 
  // socre counter
  scoreCounter = () => {
    const thisGameScore = this.state.currentScore + 1
    this.setState({
      currentScore: thisGameScore
    })
    if(thisGameScore >= 12) {
      alert("YOU WON!")
    }
    if (thisGameScore >= this.state.highScore) {
      this.setState({ highScore: thisGameScore })
    }
  }

  // reset game - sets starting stats and shuffle cards
  resetGame = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: false,
      cardData
    });
    shuffle(cardData)
  }

  // render items
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
              keyx={card.id} //have to use this because I think id and key are special in react
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