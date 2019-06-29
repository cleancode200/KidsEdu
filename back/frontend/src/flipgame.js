import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import ReactCardFlip from "react-card-flip";

import Card from "./components/card/Card";
import "./components/styles/main.css";
const style_counter = {
  color: "white",
  width: "50px",
  height: "50px"
};
const style_button = {
  color: "white",
  width: "100px",
  height: "50px",
  "background-color": "rgb(52, 65, 86)"
};
const style_nextbut = {
  "margin-top": "100px"
};
const style_level = {
  "margin-left": "200px"
};

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
      level_img: this.props.location.state.img_url,
      front_img: "https://media.giphy.com/media/kxYEBbpzXse6A/giphy.gif",
      role: this.props.location.state.role
    };
  }

  Header = () => {
    return (
      <div>
        <header id="headerr">
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo" style={style_counter}>
                {/* <a href="index.html"> */}
                <h1 style={style_counter}>{this.state.child_info.name}</h1>
                {/* </a> */}
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li style={style_counter}>
                    {" "}
                    <h1 style={style_counter}>
                      {" "}
                      Clicks : {this.state.countclicks}
                    </h1>{" "}
                  </li>

                  <li style={style_level}>
                    {" "}
                    <h1 style={style_counter}>
                      Level : {this.state.level}
                    </h1>{" "}
                  </li>
                  <li style={style_level}>
                    {" "}
                    <Link
                      to={{
                        pathname: "/subCategores",
                        state: {
                          child_info: this.state.child_info
                        }
                      }}
                    >
                      <button style={style_button}>games</button>{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* <div className="justify-left timer">
          <div className="justify-center game-status-text">
            <div className="justify-end">
              <h1>
                {" Welcome => "}
                {this.state.child_info.name}
                {"  Clicks Count=  "}
                {this.state.countclicks}
              </h1>
              <button onClick={this.restartGame} className="restart-button">
                Restart Game
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  };

  GameOver = () => {
    return (
      <div className="justify-center">
        <div style={style_nextbut}>
          {" "}
          <h3 />
          <img
            onClick={this.restartGame}
            src="https://cdn.dribbble.com/users/599042/screenshots/5802246/push_button.gif"
          />
        </div>
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
      this.setState({
        front_img: "https://media.giphy.com/media/kxYEBbpzXse6A/giphy.gif"
      });
    }
    if (this.state.level === 2) {
      img1 = this.state.level_img[4];
      img2 = this.state.level_img[5];
      img3 = this.state.level_img[6];
      img4 = this.state.level_img[7];

      this.setState({
        front_img:
          "https://cdn.dribbble.com/users/703583/screenshots/3206537/batman01.gif"
      });
    }
    if (this.state.level === 3) {
      img1 = this.state.level_img[8];
      img2 = this.state.level_img[9];
      img3 = this.state.level_img[10];
      img4 = this.state.level_img[11];

      this.setState({
        front_img: "https://media3.giphy.com/media/DBOAgDc4hpY3e/giphy.gif"
      });
    }
    if (this.state.level === 4) {
      img1 = this.state.level_img[12];
      img2 = this.state.level_img[13];
      img3 = this.state.level_img[14];
      img4 = this.state.level_img[15];

      this.setState({
        front_img: "https://i.gifer.com/Ntsh.gif"
      });
    }
    if (this.state.level === 5) {
      img1 = this.state.level_img[16];
      img2 = this.state.level_img[17];
      img3 = this.state.level_img[18];
      img4 = this.state.level_img[19];

      this.setState({
        front_img:
          "https://cdn.dribbble.com/users/1761489/screenshots/4819503/rabbit.gif"
      });
    }
    if (this.state.level === 6) {
      img1 = this.state.level_img[20];
      img2 = this.state.level_img[21];
      img3 = this.state.level_img[22];
      img4 = this.state.level_img[23];

      this.setState({
        front_img:
          "https://media1.tenor.com/images/4a720ffab56084f0fcf2a7b536b75d65/tenor.gif?itemid=13343717"
      });
    }
    if (this.state.level === 7) {
      img1 = this.state.level_img[24];
      img2 = this.state.level_img[25];
      img3 = this.state.level_img[26];
      img4 = this.state.level_img[27];

      this.setState({
        front_img: "https://data.whicdn.com/images/294374923/original.gif"
      });
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
    if (this.state.role === "animal") {
      data.language_letters_level = 0;
      data.language_planets_level = 0;
      data.language_animals_level = this.state.level;
    } else if (this.state.role === "plant") {
      data.language_letters_level = 0;
      data.language_planets_level = this.state.level;
      data.language_animals_level = 0;
    }

    axios
      .get(
        `/Ach/?language_letters_level=${
          data.language_letters_level
        }&language_animals_level=${
          data.language_animals_level
        }&language_planets_level=${data.language_planets_level}&child_id=${
          data.child_id
        }`
      )
      .then(function(res) {
        console.log(res.data);
        if (!res.data.length) {
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
        } else {
          console.log(res.data[0].id);
          axios({
            method: "PUT",
            url: "/Ach/" + res.data[0].id + "/",
            data: data,
            config: { headers: { "Content-Type": "application/json" } }
          })
            .then(function(response) {
              //handle success
              console.log(response.data);
              return console.log("updated");
            })
            .catch(function(response) {
              //handle error
              console.log("not created");
            });
        }
      });
    console.log(data);

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

  componentWillMount() {
    console.log(this.state.level_img);
    if (this.state.shuffledCard === "") {
      this.state.shuffledCard = this.duplicateCard().sort(
        () => Math.random() - 0.5
      );
    } else {
      this.state.shuffledCard = null;
    }
  }
  render() {
    return (
      <div>
        <div>{this.Header()}</div>
        <div>
          <br/>
          {this.isGameOver() ? (
            this.GameOver()
          ) : (
            <div className="grid-container">
              {this.state.shuffledCard.map((cardNumber, index) => (
                <Card
                  image={this.state.front_img}
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
      </div>
    );
  }
}

export default Flipgame;
