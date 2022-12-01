import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import './Home.css'

function Home () {
    return (
        <div>
            <div className="intro">
                <h1 className="title-test">Fiorilli's Hair Design</h1>
                <h2 className="title-test">The Best Salon Experience in Warren, N.J.</h2>
                <h3 className="button-element"><span className="button"><NavLink exact to="/appointments">Book an Appointment</NavLink></span></h3>
            </div>
            <div className="pictures">
                <img className="pic pic-1" src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2020/02/12-long-shaggy-bob-haircut-B56DTa0BthM.jpg?resize=1080%2C1234&ssl=1"/>
                <img className="pic pic-2" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plaithairstyles-1653310658.jpg?crop=0.322xw:0.644xh;0.349xw,0.0737xh&resize=640:*" />
                <img className="pic pic-3" src="https://dazedimg-dazedgroup.netdna-ssl.com/640/azure/dazed-prod/1260/5/1265776.jpg" />
                <img className="pic pic-4" src="https://menshairstyletips.com/wp-content/uploads/2020/04/Asian-Hairstyle-for-Men.jpg" />
                <img className="pic pic-5" src="https://cdn-acpnk.nitrocdn.com/dMpdmqaVNyoDKnlvjKpSdCgrqQLGwfuY/assets/static/optimized/rev-b121d2c/wp-content/uploads/2021/06/Short-But-Wavy.jpg" />
                <img className="pic pic-6" src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2018/04/albaso-braids-jourdandunn.jpg" />
            </div>
        </div>
    )   
}

export default Home