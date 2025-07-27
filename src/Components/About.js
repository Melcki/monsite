import React from 'react';
import '../App.css';


const About = () => {

  return (
    <div style={{marginLeft:"3%"}}>
        <div className="home-container">
            <div className="home-text">
                <h1>
                Apprenez à me <span className="highlight">connaître</span> !
                </h1>

                <p className="p-home">
                Bonjour, je m'appelle <span className="highlight">Junior MBOUMBA</span> et je viens de Libreville, au Gabon. 
                Je suis <span className="highlight">développeur Full-Stack</span> et détenteur d'un diplôme d'<span className="highlight">ingénieur en génie logiciel</span>.
                </p>

                <p className="p-home">
                J'ai effectué un stage de <span className="highlight">développeur logiciel</span> chez Mega Technology Services (MTS) Africa, une ESN à Casablanca. 
                J'aime créer des projets originaux avec de beaux designs. 
                Vous pouvez découvrir certains de mes travaux dans la section « Projets ».
                </p>

                <p className="p-home">
                Je suis <span className="highlight">ouvert</span> à de nouvelles collaborations ou à des projets qui pourraient m'aider et m'épanouir. 
                N'hésitez pas à me contacter, les liens sont en pied de page.
                </p>
            </div>

            <div className="home-gif">
                <img src="/mp4.gif" alt="My GIF" width="300" height="300" />
            </div>
        </div>
        <h1 className='title'>Compétences professionnelles</h1>
        <div className="card-grid">
            <div className="card"><img src="/java.png" alt="Java" width="100" height="100" /></div>
            <div className="card"><img src="/reactjs.png" alt="React JS" width="100" height="100" /></div>
            <div className="card"><img src="/python.png" alt="Python" width="100" height="100" /></div>
            <div className="card"><img src="/nodejs.png" alt="Node JS" width="100" height="100" /></div>
            <div className="card"><img src="/git.png" alt="Git" width="100" height="100" /></div>
            <div className="card"><img src="/postman.png" alt="Postman" width="100" height="100" /></div>
            <div className="card"><img src="/bootstrap.png" alt="bootstrap" width="100" height="100" /></div>
            <div className="card"><img src="/js.png" alt="javascript" width="100" height="100" /></div>
            <div className="card"><img src="/github.png" alt="github" width="100" height="100" /></div>
            <div className="card"><img src="/laravel.png" alt="laravel" width="100" height="100" /></div>
            <div className="card"><img src="/mysql.png" alt="mysql" width="100" height="100" /></div>
            <div className="card"><img src="/npm.png" alt="mysql" width="100" height="100" /></div>
            {/* Add as many cards as needed */}
        </div>

    </div>
  );
};

export default About;
