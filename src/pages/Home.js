import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import HomeSection from '../components/HomeSection'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    componentDidMount(){
        console.log(this.props.signedIn)
        console.log("test")
    }
    
    render() {
        return (
            <div class = "App-margin">
                {/* <h1 class = "home_header">Upack Haulers gets the Job Done</h1> */}
                <div class="the_list_item_image">
                    <img alt="C &amp; D Moving Service Gets the Job Done" src="https://canddmovingservice.com/files/2014/04/boxes-2.jpg?w=1440&amp;h=598&amp;a=t" border="0" class="item_image"/>
                </div>
                {/* <div class="the_list_text">
                    <div class="the_list_item_heads">
                        <h1 class="the_list_item_headline">Upack Haulers gets the job done</h1>
                        <h3 class="the_list_item_subheadline">Moving services for the Bay Area</h3>
                    </div>
        
                </div> */}

                        <HomeSection>
                            <div className = "col-8">
                                <img className = "homeSectionPic" src= "https://img1.mashed.com/img/gallery/grocery-delivery-services-ranked-from-worst-to-first/intro-1585162312.jpg"/> 
                            </div>  
                            <div className = "col-4">
                                <h4> Header 1</h4>
                                <p> Text 1</p> 
                            </div> 
                        </HomeSection>
                
                        <HomeSection>
                            <div className = "col-4">
                                <h4> Header 2</h4>
                                <p> Text 2</p> 
                            </div> 
                            <div className = "col-8">
                                <img className="homeSectionPic" src="https://www.gannett-cdn.com/media/2017/06/14/TennGroup/Knoxville/636330432728891184-instacart-0056.jpg?width=640" />
                            </div>
                        </HomeSection>
                        <HomeSection>
                            <div className = "col-8"> 
                                <img className="homeSectionPic" src= "https://images.squarespace-cdn.com/content/v1/5bbd07174d546e20297c2ac0/1585075655832-JX0T0UXFFHOM1RWZUCZ8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/photo-1542838132-92c53300491e.jpg?format=1500w"/>
                            </div>
                            <div className = "col-4">
                                <h5>Organized shopping experience</h5>
                                <p>
                                    Items are searchable by section or by name so you can quickly find the items you want to add to your order.
                                </p>
                            </div> 
                        </HomeSection>
                        <HomeSection>
                            <div class = "quote-form">
                                <div class="banner">
                                    <h1>Get a quote</h1>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="quote-form-name"><h3>Full Name</h3></label>
                                        <input type="text" class="form-control" id="quote-form-name" placeholder="Your Full Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="quote-form-number"><h3>Email Address</h3></label>
                                        <input type="text" class="form-control" id="quote-form-number" placeholder="Your Email Address"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="quote-form-phoneNumber"><h3>Phone Number</h3></label>
                                        <input type="phone" class="form-control" id="quote-form-phoneNumber" placeholder="Your Phone Number"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="quote-form-moveOption"><h3>Select Move Option</h3></label>
                                        <select class="form-control" id="quote-form-moveOption">
                                            <option>Select move size</option>
                                            <option>studio</option>
                                            <option>1 bedroom</option>
                                            <option>2 bedrooms</option>
                                            <option>3 bedrooms</option>
                                            <option>4 bedrooms</option>
                                            <option>5 bedrooms</option>
                                            <option>6 bedrooms</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="quote-form-comments"><h3>Comments</h3></label>
                                        <textarea class="form-control" id="quote-form-comments" rows="3"></textarea>
                                    </div>
                                </form>
                            </div>
                        </HomeSection>
                </div>
            )
    }
}

let mapStateToProps= state => {
    return ({
        signedIn: state.auth.signedIn
    })
}

export default connect(mapStateToProps)(Home)
