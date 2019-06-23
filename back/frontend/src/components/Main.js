import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

 const divStyle = {
  position: "absolute", 
  left:" -5000px",
  

}

export class Main extends Component {
  
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Kids Edu
            </a>
            <Link to="/signin">
              <button className="btn btn-primary">Sign In</button>
            </Link>
          </div>
        </nav>

      
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  YOUR CHILDERN IS YOURS RESPONSABILTY SO TAKE CARE OF THEM
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-3">
                      <Link to="/signup">
                        <button
                          type="submit"
                          className="btn btn-block btn-lg btn-primary"
                        >
                          Sign up!
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header> */}
        

         {/* /////////////////////////
         /////////////////////////////////
         ///////////////////////////////////////////
         /////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////////// */}


         


         <header id="header">
		<div className="container">

			<div className="row align-items-center justify-content-between d-flex">
				<div id="logo">
     
					<img src="homepageTemplete/img/logo.png" alt="" title="" />
      
				</div>
				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li className="menu-active"><a href="index.html">Home</a></li>
						<li>
              <Link to="/signup">
              <a>Register</a>
              </Link>
              </li>
						<li>
              <Link to="/signin">
              <a>Login</a>
            </Link>
              </li>
						{/* <li className="menu-has-children"><a href="">Pages</a>
							<ul>
								<li><a href="elements.html">Elements</a></li>
							</ul>
						</li> */}
						{/* <li className="menu-has-children"><a href="">Blog</a>
							<ul>
								<li><a href="blog-home.html">Blog Home</a></li>
								<li><a href="blog-single.html">Blog Details</a></li>
							</ul>
						</li> */}
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
        {/* <!-- #nav-menu-container --> */}
			</div>
		</div>
	</header>
	{/* <!-- End Header Area --> */}


	{/* <!-- Start Banner Area --> */}
	<section className="home-banner-area relative">
		<div className="container">
			<div className="row fullscreen d-flex align-items-center justify-content-center">
				<div className="banner-content col-lg-8 col-md-12">
					<h1 className="wow fadeIn" data-wow-duration="4s">EduKid <br/>Learn While Playing</h1>
					<p className="text-white">
          We aim to teach our childs by letting them play, without realizing that they are learning.
					</p>
				</div>
			</div>
		</div>
		<div className="rocket-img">
			<img src="homepageTemplete/img/rocket.png" alt=""/>
		</div>
	</section>
	{/* <!-- End Banner Area --> */}


	{/* <!-- Start About Area --> */}
	<section className="about-area section-gap">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-5 col-md-6 about-left">
					<img className="img-fluid" src="homepageTemplete/img/about.jpg" alt="" />
				</div>
				<div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
					<h1>
						Over 22 Country Around <br/> the world
					</h1>
					<div className="wow fadeIn" data-wow-duration="1s">
						<p>
							[fill this paragraph long one]
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End About Area --> */}


	{/* <!-- Start Courses Area --> */}
	<section className="courses-area section-gap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-5 about-right">
					<h1>
						This is Why <br/> We have Solid Idea
					</h1>
					<div className="wow fadeIn" data-wow-duration="1s">
						<p>
							There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think
							about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first
							telescope. It’s exciting to think about setting up your own viewing station.
						</p>
					</div>
					<a href="courses.html" className="primary-btn white">Explore Courses</a>
				</div>
				<div className="offset-lg-1 col-lg-6">
					<div className="courses-right">
					[this area was for the table ]
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Courses Area --> */}


	{/* <!--Start Feature Area --> */}
	<section className="feature-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="section-title text-center">
						<h1>Features That Make Us Hero</h1>
						<p>
							If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for
							as low as $.17 each.
						</p>
					</div>
				</div>
			</div>
			<div className="feature-inner row">
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-crown"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-briefcase"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-medall-alt"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-key"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-files"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-headphone-alt"></i>
						<h4>[Title]</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
							<p>
								Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Feature Area --> */}


	{/* <!-- Start Faculty Area --> */}
	<section className="faculty-area section-gap">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="section-title text-center">
						<h1>Members</h1>
						<p>
							[fill This paragraph]
						</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-center d-flex align-items-center">
				<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
					<div className="thumb d-flex justify-content-center">
						<img className="img-fluid" src="homepageTemplete/img/faculty/f1.jpg" alt=""/>
					</div>
					<div className="meta-text text-center">
						<h4>Amer Alkharashgah</h4>
						<p className="designation">Sr. Faculty Data Science</p>
						<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
							</p>
						</div>
						<div className="align-items-center justify-content-center d-flex">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
					<div className="thumb d-flex justify-content-center">
						<img className="img-fluid" src="homepageTemplete/img/faculty/f2.jpg" alt=""/>
					</div>
					<div className="meta-text text-center">
						<h4>Abdulrohman</h4>
						<p className="designation">Sr. Faculty Data Science</p>
						<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
							</p>
						</div>
						<div className="align-items-center justify-content-center d-flex">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
					<div className="thumb d-flex justify-content-center">
						<img className="img-fluid" src="homepageTemplete/img/faculty/f3.jpg" alt=""/>
					</div>
					<div className="meta-text text-center">
						<h4>Ahmad Aldarkashli</h4>
						<p className="designation">Sr. Faculty Data Science</p>
						<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
							</p>
						</div>
						<div className="align-items-center justify-content-center d-flex">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
					<div className="thumb d-flex justify-content-center">
						<img className="img-fluid" src="homepageTemplete/img/faculty/f4.jpg" alt=""/>
					</div>
					<div className="meta-text text-center">
						<h4>Yousef alshabah</h4>
						<p className="designation">Sr. Faculty Data Science</p>
						<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".7s">
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
							</p>
						</div>
						<div className="align-items-center justify-content-center d-flex">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Faculty Area --> */}


	{/* <!-- Start Testimonials Area --> */}

	{/* <!-- End Testimonials Area --> */}


	{/* <!-- Start Footer Area --> */}
	<footer className="footer-area section-gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Top Products</h4>
					<ul>
						<li><a href="#">Managed Website</a></li>
						<li><a href="#">Manage Reputation</a></li>
						<li><a href="#">Power Tools</a></li>
						<li><a href="#">Marketing Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Features</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Resources</h4>
					<ul>
						<li><a href="#">Guides</a></li>
						<li><a href="#">Research</a></li>
						<li><a href="#">Experts</a></li>
						<li><a href="#">Agencies</a></li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-6 single-footer-widget">
					<h4>Newsletter</h4>
					<p>You can trust us. we only send promo offers,</p>
					<div className="form-wrap" id="mc_embed_signup">
						<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
						 method="get" className="form-inline">
							<input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
							 required="" type="email" />
							<button className="click-btn btn btn-default"><span className="lnr lnr-arrow-right"></span></button>
							<div  style={divStyle}>
								<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
							</div>

							<div className="info"></div>
						</form>
					</div>
				</div>
			</div>
			<div className="footer-bottom row align-items-center">
				<p className="footer-text m-0 col-lg-8 col-md-12">
          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</p>
				<div className="col-lg-4 col-md-12 footer-social">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-dribbble"></i></a>
					<a href="#"><i className="fa fa-behance"></i></a>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- End Footer Area --> */}

	{/* <!-- ####################### Start Scroll to Top Area ####################### --> */}
	<div id="back-top">
		<a title="Go to Top" href="#"></a>
	</div>
	{/* <!-- ####################### End Scroll to Top Area ####################### -->    */}




















      </div>
    );
  }
}

export default Main;
