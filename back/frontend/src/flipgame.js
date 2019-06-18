import React, { Component } from "react";
import axios from "axios";

// import ReactCardFlip from "react-card-flip";

import Card from "./components/card/Card";
import "./components/styles/main.css";

class Flipgame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: Array(8).fill(false),
      shuffledCard: this.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      countclicks: 0,
      level : 1,
      child_info:this.props.location.state.child_info,
      totalTime:0
    };
  }

  // Card = (cardNumber, id) => {
  //   return (
  //     <ReactCardFlip
  //       isFlipped={this.state.isFlipped}
  //       flipSpeedBackToFront={1}
  //       flipSpeedFrontToBack={1}
  //     >
  //       <button
  //         id={id}
  //         className={`card card-front  ${cardNumber !== -1 ? "" : "hide-card"}`}
  //         onClick={this.handleClick}
  //         key="front"
  //       />

  //       <img
  //         id={id}
  //         className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`}
  //         onClick={this.handleClick}
  //         key="back"
  //         src={cardNumber}
  //       />
  //     </ReactCardFlip>
  //   );
  // };

  Header = () => {
    return (
      <div className="grid-header-container">
        <div className="justify-left timer" />
        <div className="justify-center game-status-text" />
        <div className="justify-end">
          

          <h1>{" Welcome => "}{this.state.child_info.name}{"  Clicks Count=  "}{this.state.countclicks}</h1>
          <button onClick={this.restartGame} className="restart-button">
            Restart Game
          </button>
        </div>
      </div>
    );
  };

  GameOver = () => {
    var endTime = Date.now()
    var startTime = this.state.startTime
    this.state.totalTime = Math.ceil((endTime - startTime)/1000)
     console.log(this.state.totalTime)
   
        var 

        //  var data={
        //    child_id:this.state.child_info.id,
        //   language_letters_level:this.state.level,
        //   start_time:this.state.startTime,
        //   end_time:endTime,
        //   clicks:this.state.countclicks
        //  }
        var data={
          child_id:this.state.child_info.id,
         language_letters_level:this.state.level,
         start_time:10,
         end_time:50,
         clicks:this.state.countclicks
        }
  // console.log(data)
  
      axios({
      method: "POST",
      url: "/Ach/",
      data: data,
      config: { headers: { "Content-Type": "application/json	" } }
    })
      .then(function(response) {
        //handle success
       return console.log(response.statusText);
      })
      .catch(function(response) {
        //handle error
      });

       


    // console.log(this.state.isFlipped)
    return (
      <div className="justify-center">
        <h1>مبرووك</h1>
        <h3 />
        <button className="restart-button" onClick={this.restartGame}>
          Restart Game
        </button>
      </div>
    );
  };

  duplicateCard = () => {
    return [
      "./imgs/A.PNG",
      "./imgs/B.PNG",
      "./imgs/C.PNG",
      "./imgs/D.PNG"
    ].reduce((preValue, current, index, array) => {
      return preValue.concat([current, current]);
    }, []);
  };

  handleClick = event => {
    if(this.state.countclicks === 0 ){
      this.setState({
        startTime:Date.now()
      }) 
    }
    this.state.countclicks++;
    console.log(this.state.child_info ,this.state.countclicks );

    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    // console.log(cardId ,newFlipps)
    this.setState({
      prevSelectedCard: this.state.shuffledCard[cardId],
      prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }));
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  restartGame = () => {
    this.state.countclicks = 0;

    this.setState({
      isFlipped: Array(8).fill(false),
      shuffledCard: this.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
      
    });
  };

  isGameOver = () => {
   



    return this.state.isFlipped.every(
      (element, index, array) => element !== false
    );
  };

  render() {
    return (
      <div>
        {this.Header()}
        {this.isGameOver() ? (
          this.GameOver()
        ) : (
          <div className="grid-container">
            {this.state.shuffledCard.map((cardNumber, index) => (
              <Card
                key={index}
                id={index}
                cardNumber={cardNumber}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Flipgame;
