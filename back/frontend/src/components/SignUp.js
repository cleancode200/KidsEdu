import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false
    };
  }
  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onclick() {
    toast.configure();
    const data = this.state;
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var email = document.getElementById("email");
    var name = document.getElementById("name");

    if (password.value !== confirm_password.value) {
      toast("Paswords Don`t Match");
    } else if (email.value === "") {
      toast("Please Enter Your Email");
    } else if (name.value === "") {
      toast("Please Enter Your Name");
    } else {
      var that = this;
      axios({
        method: "POST",
        url: "Parent/",
        data: data,
        config: { headers: { "Content-Type": "application/json	" } }
      })
        .then(function(response) {
          //handle success
          // console.log(response.statusText);
          that.setState({
            redirect: true
          });
        })
        .catch(function(response) {
          //handle error

          toast("E-mail is already used or Incorrect sytax ");
        });
    }
  }

  render() {
    var redirect = this.state.redirect;
    console.log(redirect);
    return (
      <div>
        <div>
          {redirect ? (
            <Redirect to={{ pathname: "/signin" }} />
          ) : (
            // <div>
            //   <input
            //     id="name"
            //     type="text"
            //     name="name"
            //     value={this.state.names}
            //     onChange={this.onchange.bind(this)}
            //     placeholder="User name"
            //     required
            //   />
            //   <input
            //     id="email"
            //     type="email"
            //     name="email"
            //     value={this.state.emails}
            //     onChange={this.onchange.bind(this)}
            //     placeholder="E-Mail"
            //     required
            //   />
            //   <input
            //     id="password"
            //     type="password"
            //     name="password"
            //     value={this.state.passwods}
            //     onChange={this.onchange.bind(this)}
            //     placeholder="Password"
            //     required
            //   />
            //   <input
            //     id="confirm_password"
            //     type="password"
            //     placeholder="confirm password"
            //     required
            //   />
            //   {/* <Link to="/signin"> */}
            //   <button onClick={this.onclick.bind(this)}>Sign Up</button>
            //   {/* </Link> */}
            // </div>

            // <div>
            //   <div className="limiter">
            //     <div className="container-login100">
            //       <div className="wrap-login100">
            //         <span className="login100-form-title p-b-26">Welcome</span>
            //         <span className="login100-form-title p-b-48">
            //           <i className="zmdi zmdi-font" />
            //         </span>

            //         <div
            //           className="wrap-input100 validate-input"
            //           data-validate="Valid email is: a@b.c"
            //         >
            //           <input
            //             id="name"
            //             type="text"
            //             name="name"
            //             value={this.state.names}
            //             onChange={this.onchange.bind(this)}
            //             className="input100"
            //             required
            //           />

            //           <span
            //             className="focus-input100"
            //             data-placeholder="Name"
            //           />
            //         </div>

            //         <div
            //           className="wrap-input100 validate-input"
            //           data-validate="Valid email is: a@b.c"
            //         >
            //           <input
            //             id="email"
            //             type="email"
            //             name="email"
            //             value={this.state.emails}
            //             onChange={this.onchange.bind(this)}
            //             className="input100"
            //             required
            //           />

            //           <span
            //             className="focus-input100"
            //             data-placeholder="Email"
            //           />
            //         </div>

            //         <div
            //           className="wrap-input100 validate-input"
            //           data-validate="Enter password"
            //         >
            //           <span className="btn-show-pass">
            //             <i className="zmdi zmdi-eye" />
            //           </span>

            //           <input
            //             id="password"
            //             type="password"
            //             name="password"
            //             value={this.state.passwods}
            //             onChange={this.onchange.bind(this)}
            //             className="input100"
            //             required
            //           />
            //           <span
            //             className="focus-input100"
            //             data-placeholder="Password"
            //           />
            //         </div>

            //         <div
            //           className="wrap-input100 validate-input"
            //           data-validate="Enter password"
            //         >
            //           <span className="btn-show-pass">
            //             <i className="zmdi zmdi-eye" />
            //           </span>

            //           <input
            //             id="confirm_password"
            //             type="password"
            //             className="input100"
            //             required
            //           />
            //           <span
            //             className="focus-input100"
            //             data-placeholder="Rewrite - password"
            //           />
            //         </div>

            //         <div className="container-login100-form-btn">
            //           <div className="wrap-login100-form-btn">
            //             <div className="login100-form-bgbtn" />
            //             <button
            //               className="login100-form-btn"
            //               onClick={this.onclick.bind(this)}
            //             >
            //               Register
            //             </button>
            //           </div>
            //         </div>
            //         <div className="text-center p-t-115">
            //           <span className="txt1">Don’t have an account?</span>

            //           <Link to="/signin">
            //             <a className="txt2">LOGIN</a>
            //           </Link>
            //         </div>
            //       </div>
            //     </div>
            //   </div>

            //   <div id="dropDownSelect1" />
            // </div>
            <div className="wrapper1">
              <div className="inner1">
                <img
                  src="templets/images/image-1.png"
                  alt=""
                  className="image-11"
                />
                <div className="the_form">
                  <h3 className="h3_tag">New Account</h3>
                  <div className="form-holder1234">
                    <span className="lnr lnr-user" />
                    <input
                      id="name"
                      name="name"
                      value={this.state.names}
                      onChange={this.onchange.bind(this)}
                      type="text"
                      className="form-control123"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-holder1234">
                    <span className="lnr lnr-envelope" />
                    <input
                      id="email"
                      name="email"
                      value={this.state.emails}
                      onChange={this.onchange.bind(this)}
                      type="text"
                      className="form-control123"
                      placeholder="Mail"
                      required
                    />
                  </div>
                  <div className="form-holder1234">
                    <span className="lnr lnr-lock" />
                    <input
                      id="password"
                      name="password"
                      value={this.state.passwods}
                      onChange={this.onchange.bind(this)}
                      type="password"
                      className="form-control123"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-holder1234">
                    <span className="lnr lnr-lock" />
                    <input
                      id="confirm_password"
                      type="password"
                      className="form-control123"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <button
                    className="button_class"
                    onClick={this.onclick.bind(this)}
                  >
                    <span>Creat An Account</span>
                  </button>
                  <div>
                    <br />
                    <span className="txt1">
                      If you already have an account
                    </span>{" "}
                    <Link to="/signin">
                      <a className="txt2">LOGIN</a>{" "}
                    </Link>
                  </div>
                </div>

                <img
                  src="templets\images\image-2.png"
                  alt=""
                  className="image-21"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SignUp;
