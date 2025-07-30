import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className="home-container">
            <div className="home-text">
                    <p className='p-home'>Salut, </p>
                    <p className='p-home'>je suis <span className="highlight">J</span>unior.</p> 
                    <p className='p-home'>ingénieur génie logiciel</p>
                    <p className='p-desc'>Développeur Front-End & Back-End | Data Analyste</p>  
                    <button className='btn' onClick={() => navigate('/about')}>Savoir plus</button>
                    
            </div>

            <div className="home-gif" >
                <img src="/home.gif" alt="My GIF"  height="300" />
            </div>
        </div>

        <div style={{marginTop:"15%"}}>
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
