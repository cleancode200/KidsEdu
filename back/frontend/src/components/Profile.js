import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import PieChart from "react-minimal-pie-chart";
import axios from "axios";
import "./styles/Profile.css";
const style = {
  "margin-top": "50px"
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName,
      childEvaluation: [],
      index: 0,
      lettersEv: "Latters",
      animalsEv: "Animals",
      planetsEv: "Vegetables and Fruits",
      percent: 0,
      color: ""
    };
  }

  componentWillMount() {
    var child_id = this.state.child_info.id;
    var that = this;
    axios
      .get("Ach/?child_id=" + child_id)
      .then(res => {
        console.log(res.data);
        that.setState(
          {
            childEvaluation: res.data
          },
          () => {
            console.log("from state", that.state.childEvaluation);
          }
        );
      })
      .then(() => {
        let avgClickslanguage_letters = 0;
        let avgTimelanguage_letters = 0;
        let totalClickslanguage_letters = 0;
        let totalTimelanguage_letters = 0;
        let avgClickslanguage_animals = 0;
        let avgTimelanguage_animals = 0;
        let totalClickslanguage_animals = 0;
        let totalTimelanguage_animals = 0;
        let avgClickslanguage_planets = 0;
        let avgTimelanguage_planets = 0;
        let totalClickslanguage_planets = 0;
        let totalTimelanguage_planets = 0;
        let counter_letters = 0;
        let counter_animals = 0;
        let counter_planets = 0;

        for (let i = 0; i < that.state.childEvaluation.length; i++) {
          if (that.state.childEvaluation[i]["language_letters_level"] !== 0) {
            totalClickslanguage_letters +=
              that.state.childEvaluation[i]["clicks"];
            totalTimelanguage_letters +=
              that.state.childEvaluation[i]["total_time"];
            counter_letters++;
          } else if (
            that.state.childEvaluation[i]["language_animals_level"] !== 0
          ) {
            totalClickslanguage_animals +=
              that.state.childEvaluation[i]["clicks"];
            totalTimelanguage_animals +=
              that.state.childEvaluation[i]["total_time"];
            counter_animals++;
          } else if (
            that.state.childEvaluation[i]["language_planets_level"] !== 0
          ) {
            totalClickslanguage_planets +=
              that.state.childEvaluation[i]["clicks"];
            totalTimelanguage_planets +=
              that.state.childEvaluation[i]["total_time"];
            counter_planets++;
          }
        }
        if (counter_letters !== 0) {
          avgClickslanguage_letters =
            totalClickslanguage_letters / counter_letters;
          avgTimelanguage_letters = totalTimelanguage_letters / counter_letters;
        } else if (counter_animals !== 0) {
          avgClickslanguage_animals =
            totalClickslanguage_animals / counter_animals;
          avgTimelanguage_animals = totalTimelanguage_animals / counter_animals;
        } else if (counter_animals !== 0) {
          avgClickslanguage_planets =
            totalClickslanguage_planets / counter_planets;
          avgTimelanguage_planets = totalTimelanguage_planets / counter_planets;
        }
        var totalTimeAvg = 0;
        var totalClicksAvg = 0;
        if (
          avgTimelanguage_planets !== 0 &&
          avgTimelanguage_animals !== 0 &&
          avgTimelanguage_letters !== 0
        ) {
          totalTimeAvg = Math.round(
            (avgTimelanguage_planets +
              avgTimelanguage_animals +
              avgTimelanguage_letters) /
              3
          );
          totalClicksAvg = Math.round(
            (avgClickslanguage_planets +
              avgClickslanguage_animals +
              avgClickslanguage_letters) /
              3
          );
          console.log("totalTimeAvg", totalTimeAvg);
          console.log("totalClicksAvg", totalClicksAvg);
        } else if (
          avgTimelanguage_animals !== 0 &&
          avgTimelanguage_letters !== 0
        ) {
          totalTimeAvg = Math.round(
            (avgTimelanguage_animals + avgTimelanguage_letters) / 3
          );
          totalClicksAvg = Math.round(
            (avgClickslanguage_animals + avgClickslanguage_letters) / 3
          );
          //this.setState({});
          console.log("totalTimeAvg", totalTimeAvg);
          console.log("totalClicksAvg", totalClicksAvg);
        } else {
          totalTimeAvg = Math.round(avgTimelanguage_letters);
          totalClicksAvg = Math.round(avgClickslanguage_letters);
        }
        console.log("totalClickslanguage_letters", totalClickslanguage_letters);
        console.log("totalTimelanguage_letters", totalTimelanguage_letters);
        console.log("avgClickslanguage_letters", avgClickslanguage_letters);
        console.log("avgTimelanguage_letters", avgTimelanguage_letters);
        console.log("avgClickslanguage_animals", avgClickslanguage_animals);
        console.log("avgTimelanguage_animals", avgTimelanguage_animals);
        console.log("avgClickslanguage_planets", avgClickslanguage_planets);
        console.log("avgTimelanguage_planets", avgTimelanguage_planets);
        if (totalClicksAvg <= 12 && totalTimeAvg <= 21) {
          if (totalClicksAvg <= 10) {
            this.setState({
              percent: 100
            });
          } else if (totalClicksAvg <= 12) {
            this.setState({
              percent: 97
            });
          }
          console.log("ممتاز");
          this.setState({
            lettersEv: "excellent",
            color: "#234d2c"
          });
        } else if (totalClicksAvg <= 18 && totalTimeAvg <= 27) {
          if (totalClicksAvg <= 14) {
            this.setState({
              percent: 91
            });
          } else if (totalClicksAvg <= 16) {
            this.setState({
              percent: 87
            });
          } else {
            this.setState({
              percent: 83
            });
          }
          console.log("جيد جداً");
          this.setState({
            lettersEv: "very good",
            color: "#e38627"
          });
        } else if (totalClicksAvg <= 22 && totalTimeAvg <= 33) {
          if (totalClicksAvg <= 20) {
            this.setState({
              percent: 78
            });
          } else if (totalClicksAvg <= 22) {
            this.setState({
              percent: 70
            });
          }
          console.log("جيد");
          this.setState({
            lettersEv: "good",
            color: "#c13c37"
          });
        } else {
          this.setState({
            percent: 50
          });
          console.log("ادرب مليح يا باا");
          this.setState({
            lettersEv: "ادرب مليح يا باا"
          });
        }
        if (avgClickslanguage_animals <= 10 && avgTimelanguage_animals <= 20) {
          console.log("ممتاز");

          this.setState({
            animalsEv: "ممتاز"
          });
        } else if (
          avgClickslanguage_animals <= 14 &&
          avgTimelanguage_animals <= 25
        ) {
          console.log("جيد جداً");
          this.setState({
            animalsEv: "جيد جداً"
          });
        } else if (
          avgClickslanguage_animals <= 18 &&
          avgTimelanguage_animals <= 30
        ) {
          console.log("جيد");
          this.setState({
            animalsEv: "جيد"
          });
        } else {
          console.log("ادرب مليح يا باا");
          this.setState({
            animalsEv: "ادرب مليح يا باا"
          });
        }
        if (avgClickslanguage_planets <= 10 && avgTimelanguage_planets <= 20) {
          console.log("ممتاز");
          this.setState({
            planetsEv: "ممتاز"
          });
        } else if (
          avgClickslanguage_planets <= 14 &&
          avgTimelanguage_planets <= 25
        ) {
          console.log("جيد جداً");
          this.setState({
            planetsEv: "جيد جداً"
          });
        } else if (
          avgClickslanguage_planets <= 18 &&
          avgTimelanguage_planets <= 30
        ) {
          console.log("جيد");
          this.setState({
            planetsEv: "جيد"
          });
        } else {
          console.log("ادرب مليح يا باا");
          this.setState({
            planetsEv: "ادرب مليح يا باا"
          });
        }
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <header id="headerr">
              <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                    <img
                      src="homepageTemplete/img/logo-rocket.png"
                      alt=""
                      title=""
                    />
                  </div>
                  <nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <NavLink
                          to={{
                            pathname: "/categories",
                            state: {
                              child_info: this.state.child_info,
                              parentName: this.state.parentName,
                              childsName: this.state.childsName
                            }
                          }}
                        >
                          <a>categories </a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={{
                            pathname: "/addchild",
                            state: {
                              parent_id: this.state.child_info.parent_id,
                              parentName: this.state.parentName
                            }
                          }}
                        >
                          <a>change the player</a>
                        </NavLink>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </div>
          <div className="col-sm-12" style={style}>
            <div className="">
              <div className="wrapper2child">
                <div className="playerCard">
                  <div className="card-top">
                    {this.state.child_info.name}
                    {" " + this.state.child_info.age + "years "}
                  </div>
                  <div className="profile-pic">
                    <img
                      alt="child pic"
                      src="https://flintobox.com/blog/wp-content/uploads/2016/09/400-400-img-min.jpg"
                    />
                  </div>
                  <div className="profileDiv">
                    <br />
                    {this.state.percent > 50 ? (
                      <div className="row">
                        <div className="col-sm-6">
                          <PieChart
                            data={[
                              {
                                title: "avarege",
                                value: this.state.percent, //this.state.lettersEv,
                                color: this.state.color
                              }
                            ]}
                            totalValue={100}
                            lineWidth={20}
                            paddingAngle={18}
                            animate
                            rounded
                            label
                            labelStyle={{
                              fontSize: "11px",
                              fontFamily: "sans-serif"
                            }}
                            labelPosition={0}
                            radius={42}
                          />
                        </div>
                        <div className="col-sm-6 pieDes">
                          <div className="row">
                            <div className="col-sm-4">
                              <span className="pieDes1"> pieDes </span>
                              excellent
                            </div>
                            <div className="col-sm-4">
                              <span className="pieDes2"> pieDes </span> very
                              good
                            </div>
                            <div className="col-sm-4">
                              <span className="pieDes3"> pieDes </span> good
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="traningMassege">
                        please try again you are in traning stage
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
