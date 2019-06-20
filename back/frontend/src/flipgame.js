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
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      countclicks: 0,
      level: 1,
      child_info: this.props.location.state.child_info,
      totalTime: 0,
      shuffledCard: "",
      level_img: this.props.location.state.img_url
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
      <div className="grid-header-container ">
        <h1 className="justify-center">
          ({" Welcome => "}
          {this.state.child_info.name}) ({"  Clicks Count=  "}
          {this.state.countclicks})
        </h1>
      </div>
    );
  };

  GameOver = () => {
    return (
      <div className="justify-center">
        <h1>مبرووك</h1>
        <h3 />
        <button className="restart-button" onClick={this.restartGame}>
          NEXT
        </button>
      </div>
    );
  };

  duplicateCard = () => {
    var img1 = "";
    var img2 = "";
    var img3 = "";
    var img4 = "";

    if (this.state.level === 1) {
      img1 = this.state.level_img[0];
      img2 = this.state.level_img[1];
      img3 = this.state.level_img[2];
      img4 = this.state.level_img[3];
    }
    if (this.state.level === 2) {
      img1 = this.state.level_img[4];
      img2 = this.state.level_img[5];
      img3 = this.state.level_img[6];
      img4 = this.state.level_img[7];
    }
    if (this.state.level === 3) {
      img1 = this.state.level_img[8];
      img2 = this.state.level_img[9];
      img3 = this.state.level_img[10];
      img4 = this.state.level_img[11];
    }
    if (this.state.level === 4) {
      img1 = this.state.level_img[12];
      img2 = this.state.level_img[13];
      img3 = this.state.level_img[14];
      img4 = this.state.level_img[15];
    }
    if (this.state.level === 5) {
      img1 = this.state.level_img[16];
      img2 = this.state.level_img[17];
      img3 = this.state.level_img[18];
      img4 = this.state.level_img[19];
    }
    if (this.state.level === 6) {
      img1 = this.state.level_img[20];
      img2 = this.state.level_img[21];
      img3 = this.state.level_img[22];
      img4 = this.state.level_img[23];
    }
    if (this.state.level === 7) {
      img1 = this.state.level_img[24];
      img2 = this.state.level_img[25];
      img3 = this.state.level_img[25];
      img4 = this.state.level_img[25];
    }
    // this is to dublicate the img it self so we can have tow imgs or the same one
    return [img1, img2, img3, img4].reduce(
      (preValue, current, index, array) => {
        return preValue.concat([current, current]);
      },
      []
    );
  };

  handleClick = event => {
    if (this.state.countclicks === 0) {
      this.setState({
        startTime: Date.now()
      });
    }
    this.state.countclicks++;

    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();

    this.setState({
      prevSelectedCard: this.state.shuffledCard[cardId],
      prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(() => ({
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
    ////////////////////////////////////////////
    //sending the data from here to the database
    var endTime = Date.now();
    var startTime = this.state.startTime;
    this.state.totalTime = Math.ceil((endTime - startTime) / 1000);

    var data = {
      child_id: this.state.child_info.id,
      language_letters_level: this.state.level,
      language_animals_level: 0,
      language_planets_level: 0,
      total_time: this.state.totalTime,
      clicks: this.state.countclicks
    };

    console.log(data);
    axios({
      method: "POST",
      url: "/Ach/",
      data: data,
      config: { headers: { "Content-Type": "application/json" } }
    })
      .then(function(response) {
        //handle success
        return console.log(response.statusText);
      })
      .catch(function(response) {
        //handle error
        console.log("not created");
      });

    //change the level
    this.state.level++;

    if (this.state.level > 7) {
      this.state.level = 1;
    }
    //initializiong the next level
    this.setState({
      isFlipped: Array(8).fill(false),
      shuffledCard: this.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
    // resting the number of clicks

    this.state.countclicks = 0;
  };

  isGameOver = () => {
    return this.state.isFlipped.every(
      (element, index, array) => element !== false
    );
  };

  render() {
    return (
      <div>
        {this.state.shuffledCard === ""
          ? (this.state.shuffledCard = this.duplicateCard().sort(
              () => Math.random() - 0.5
            ))
          : null}
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
