import React, { useState } from 'react';
import '../App.css';


const Home = () => {

  return (
    <div style={{marginLeft:"3%"}}>
        <div className="home-container">
            <div className="home-text">
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Salut  ! </p>
                <p style={{fontSize:"30px", fontWeight:"bold"}}>JE SUIS <span className="highlight">JUNIOR MBOUMBA</span> !</p>

                <div class="scroll-container">
                    <p class="scroll-text" style={{fontSize:"30px", fontWeight:"bold"}}>
                        Ingénieur Génie Logiciel                    
                    </p>
                    <hr></hr>
                    <p class="scroll-text" style={{fontSize:"30px", fontWeight:"bold", color:"red"}}>
                        Développeur Full-Stack                  
                    </p>
                </div>
            </div>

            <div className="home-gif">
                <img src="/home.gif" alt="My GIF" width="300" height="300" />
            </div>
        </div>

        <div style={{marginTop:"15%", marginLeft:"3%"}}>
            <h1>Brève <span className="highlight">introduction</span></h1>
            <p className='p-home2'>
                J'adore transformer une idée brute en un site web ou un produit qui change des vies. 
                Je souhaite exercer un métier qui me stimule en tant que développeur et dont je sois fier.
            </p>
            <p className='p-home2'>
                Je maîtrise le C++ et possède quelques notions de Python . Je travaille actuellement sur plusieurs projets de la pile MERN .
                Je compte apprendre Next.js , Three.js et TypeScript prochainement.
            </p>
        </div>
    </div>
  );
};

export default Home;
