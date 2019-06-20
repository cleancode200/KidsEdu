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
					<a href="index.html"><img src="homepageTemplete/img/logo.png" alt="" title="" /></a>
				</div>
				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li className="menu-active"><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="courses.html">Courses</a></li>
						<li className="menu-has-children"><a href="">Pages</a>
							<ul>
								<li><a href="elements.html">Elements</a></li>
							</ul>
						</li>
						<li className="menu-has-children"><a href="">Blog</a>
							<ul>
								<li><a href="blog-home.html">Blog Home</a></li>
								<li><a href="blog-single.html">Blog Details</a></li>
							</ul>
						</li>
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
					<h1 className="wow fadeIn" data-wow-duration="4s">We Rank the Best Courses <br/> on the Web</h1>
					<p className="text-white">
						In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space
						telescope.
					</p>

					<div className="input-wrap">
						<form action="" className="form-box d-flex justify-content-between">
							<input type="text" placeholder="Search Courses" className="form-control" name="username"/>
							<button type="submit" className="btn search-btn">Search</button>
						</form>
					</div>
					<h4 className="text-white">Top courses</h4>

					<div className="courses pt-20">
						<a href="#" data-wow-duration="1s" data-wow-delay=".3s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Ruby
							on Rails</a>
						<a href="#" data-wow-duration="1s" data-wow-delay=".6s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Python</a>
						<a href="#" data-wow-duration="1s" data-wow-delay=".9s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Marketing</a>
						<a href="#" data-wow-duration="1s" data-wow-delay="1.2s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">UI/UX
							Design
						</a>
						<a href="#" data-wow-duration="1s" data-wow-delay="1.5s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Android</a>
						<a href="#" data-wow-duration="1s" data-wow-delay="1.8s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Data
							Science
						</a>
						<a href="#" data-wow-duration="1s" data-wow-delay="2.1s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Cryptocurrency</a>
					</div>
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
						Over 2500 Courses <br/> from 5 Platform
					</h1>
					<div className="wow fadeIn" data-wow-duration="1s">
						<p>
							There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think
							about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first
							telescope. It’s exciting to think about setting up your own viewing station.
						</p>
					</div>
					<a href="courses.html" className="primary-btn">Explore Courses</a>
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
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<ul className="courses-list">
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".1s">
											<i className="fa fa-book"></i> Development
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".3s">
											<i className="fa fa-book"></i> IT & Software
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".5s">
											<i className="fa fa-book"></i> Photography
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".7s">
											<i className="fa fa-book"></i> Language
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".9s">
											<i className="fa fa-book"></i> Life Science
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay="1.1s">
											<i className="fa fa-book"></i> Business
										</a>
									</li>
									<li>
										<a className="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay="1.3s">
											<i className="fa fa-book"></i> Socoal Science
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<ul className="courses-list">
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay="1.3s">
											<i className="fa fa-book"></i> Data Science
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay="1.1s">
											<i className="fa fa-book"></i> Design
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".9s">
											<i className="fa fa-book"></i> Training
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".7s">
											<i className="fa fa-book"></i> Humanities
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".5s">
											<i className="fa fa-book"></i> Marketing
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".3s">
											<i className="fa fa-book"></i> Economics
										</a>
									</li>
									<li>
										<a className="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".1s">
											<i className="fa fa-book"></i> Personal Dev
										</a>
									</li>
								</ul>
							</div>
						</div>
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
						<h4>Architecture</h4>
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
						<h4>Interior Design</h4>
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
						<h4>Concept Design</h4>
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
						<h4>Lifetime Access</h4>
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
						<h4>Source File Included</h4>
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
						<h4>Live Support</h4>
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
						<h1>Faculty Members</h1>
						<p>
							If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for
							as low as $.17 each.
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
						<h4>Ethel Davis</h4>
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
						<h4>Rodney Cooper</h4>
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
						<h4>Dora Walker</h4>
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
						<h4>Lena Keller</h4>
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
	<section className="testimonials-area section-gap">
		<div className="container">
			<div className="testi-slider owl-carousel" data-slider-id="1">
				<div className="item">
					<div className="testi-item">
						<img src="homepageTemplete/img/quote.png" alt=""/>
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="testi-item">
						<img src="homepageTemplete/img/quote.png" alt=""/>
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="testi-item">
						<img src="homepageTemplete/img/quote.png" alt=""/>
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="testi-item">
						<img src="homepageTemplete/img/quote.png" alt=""/>
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="homepageTemplete/img/testimonial/t1.jpg" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="homepageTemplete/img/testimonial/t2.jpg" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="homepageTemplete/img/testimonial/t3.jpg" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="homepageTemplete/img/testimonial/t4.jpg" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
			</div>
		</div>
	</section>
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
