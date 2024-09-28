import { useState } from 'react'
import Bg from './assets/Img/bg.png'
import Google from './assets/Img/Google.png'
import Fb from './assets/Img/fb.png'
import Ios from './assets/Img/Ios.png'
import Logo from './assets/Img/logo.png'
import './App.css'

function App() {

  return (
    <>
       <div className="container">
        <div className="row">
            <div className="image-Section">
                <div className="displayNoneLogo">
                    <img src={Logo} alt="Logo"/>
                   <h1>Leaf</h1>
               </div>
              <img src={Bg} alt="Bg" />
            </div>
            <div className="form-Section">
               <div className="form-content">
                <div className="logo">
                     <img src={Logo} alt="Logo"/>
                    <h1>Leaf</h1>
                </div>
                 <h2>Create Account</h2>
                 <form action="#" id="signupForm">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="input nameInput"  placeholder="Enter Your Name"/>
                     </div>
                     <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="input emailInput" placeholder="Enter Your Email"/>
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="input passwordInput"  placeholder="Enter Your Password"/>
                     </div>
                    <input type="button" value="Sign-up" className="btn" onclick="validateForm()"/>
                 </form>
                 <p>
                     -&nbsp;OR&nbsp;-
                    </p>
                    <div className="SocialAuth">
                     <div className="icon"><img src={Fb} alt="FB"/></div>
                     <div className="icon"><img src={Google} alt="GOogle"/></div>
                     <div className="icon"><img src={Ios} alt="Ios"/></div>
                 </div>
                 <p className="login">All Ready have An Account? <a href="#">login</a></p>
               </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default App
