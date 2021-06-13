import React from 'react';
import Image1 from './Image1.png'
import Image2 from './Image2.png'
import Logo from './Logo.jpeg'




const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav id="navbar">
                
                
                <div className="brand">
            <img src={Logo} height="50" alt="logo" />
            <header class="brand-header">Raltech</header>
        </div>
        <div className="menu">
        <ul>
            <li><a href="https://quizzical-shirley-f2ef52.netlify.app">Journal</a></li>
            <li><a href="https://sad-swirles-28c5e7.netlify.app">Weekly Plan</a></li>
            <li><a href="https://gallant-jang-902d64.netlify.app">Reading List</a></li>
            <li><a href="https://vigilant-raman-50a89e.netlify.app">To Do List</a></li>
            <li><a href="https://goofy-chandrasekhar-2bf5cd.netlify.app">Chat App</a></li>
        </ul>
    </div>
    <div class="slogan">
        <header>Enhance your productivity</header>
    </div>
    <div class="Buttons">
        <a href="#main1" className="Read-more">Read More</a>
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
    </div>
    
            </nav>
            <main id="main1">
        <hr/>
        <div id="passage1"> 
            <h1 id="content-heading1">Our Mission</h1>
            <p id="paragraph1">Productify aims to boost your productivity in ways never seen before. Our simple, smart and beautiful designs revolutionalize the way users journal, plan, and go about their daily lives. Productify is designed with emphasis on user friendliness and speed. Our features are minimalistic, easy to use and offer great value.</p>
            <img id="image-1" src={Image2} alt="image0" />
        </div>
        <hr/>
        <div id="passage2"> 
            <h1 id="content-heading2">Our Features</h1>
            <h1 id="subheading1">Journal</h1>
            <p id="sub-paragraph1">Our journal is easy to use <br/> and offers virtually unlimted <br/>storage. All the data is encypted <br></br> and stored  privately,  so your journalling <br></br> data will never  be leaked. </p>
            <h1 id="subheading2">To Do List</h1>
            <p id="sub-paragraph2">Our To-do-list's appealing and intuitive <br/> design means that even a toddler can  <br/> use it. Theres some great functionality such <br/> as clearing items at bulk, and searching for them.</p>
            <h1 id="subheading3">Reading List</h1>
            <p id="sub-paragraph3">Everyone who's someone in life <br/>reads a lot. Productify's beautiful reading list <br/> encourages  and allows its users to read and  <br/> track  as many books as possible. </p>
            <img id="image-2" src={Image1} alt="image1" />
        </div>
    </main>
        </section>
    )
}



export default Hero;

