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
    // clicked: false,
    cardData
    // alert or modal
  }

  scoreCounter = () => {
    const thisGameScore = this.state.currentScore + 1
    this.setState({
      currentScore: thisGameScore
    })
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

  handleChangeObj = (id, clickec) => ({target: {id, clicked }}) => this.setState({ [id]: { [clicked]: true } });
  // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

  handleClick = () => {
    console.log("clicked")
    if (this.state.clicked === false) {
      this.scoreCounter();
      this.handleChangeObj()
      this.setState({ clicked: this.state.cardData === true })
      console.log(this, "try to set state to true")
      
      shuffle(cardData)
    } else {
      this.resetGame()
    }
  }

  // onclick(event) {
  //   this.handleChangeObj();
  //   this.handleClick()
  // }

  render() {
    return (
      <div className="clicky" >
        <Wrapper>
          <Nav
            score={this.state.currentScore}
            highScore={this.state.highScore}
            youWin={this.state.youWin}
          />
          <Title />
          {this.state.cardData.map((card) => (
            <Cards
              id={cardData.id}
              key={card.id}
              img={card.img}
              title={card.title}
              handleClick={this.handleClick}
              handleChangeObj={this.handleChangeObj}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;
