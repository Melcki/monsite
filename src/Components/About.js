import {React} from 'react';
import '../App.css';
import IconWidgetList from './IconWidgetList';
import IconWidget from './IconWidget';


  const About = () => {

    const experiences = [
    { src: '/images/estem.png', alt: "ECOLE D'INGENIEUR", msg:"Ecole Supérieur en Technologie de l'Information..."},
    { src: '/images/alomrane.png', alt: 'Al Omrane' },
    { src: '/images/mts.png', alt: 'MTS Group Africa' },
    
  ];



  return (
    <div style={{padding:"10% 10% 10% 10%",  textAlign: "justify", fontSize:"18px"}}>
        <div className="home-container">
            <div>
                <h1>
                Apprenez à me <span className="highlight">connaître</span> !
                </h1>
                <img src="/images/profile picture.jpg" alt="My GIF"  height="300" />
                <p >
                Bonjour, je m'appelle <span className="highlight">Junior MBOUMBA</span> et je viens de Libreville, au Gabon. 
                Je suis <span className="highlight">développeur Full-Stack</span> et détenteur d'un diplôme d'<span className="highlight">ingénieur en génie logiciel</span>.
                </p>

                <p>
                  Diplomé de l'Ecole Supérieur en Technologie de l'Information, en Management, et Génie Civil ( ESTEM ) de Casablanca.
                  J'y ai passé toute ma formation universitaire, afin d'obtenir mon diplome d'ingénieur d'état en Sciences de Données et Développement Informatique.
                </p>

                <p>
                J'ai récemment effectué un stage de <span className="highlight">développeur logiciel</span> chez Mega Technology Services (MTS) Africa, une ESN à Casablanca. 
                Ce stage m'a réellement permis de mettre en pratique les connaissances et compétences développer au long de ma formation.
                </p>

                <p>
                Je suis <span className="highlight">ouvert</span> à de nouvelles collaborations ou à des projets qui pourraient m'aider et m'épanouir. 
                N'hésitez pas à me contacter, les liens sont en pied de page.
                </p>
                <p>
                  Vous pouvez découvrir certains de mes travaux dans la section « Projets ».
                </p>
            </div>

        </div>
        {/* Modal part 
        <div>
          <button onClick={showMessage}>Afficher la boîte</button>
          
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h2>Titre de la boîte</h2>
            <p>{message}</p>
          </Modal>
        </div>
        */}
        <div style={{paddingTop:"10%"}}>
          <p className='title'>Expériences professionnelles</p>
          <IconWidget IconWidgetList={experiences}/>
        </div>
        <div style={{paddingTop:"10%"}}>
          <p className='title'>Compétences professionnelles</p>
          <IconWidget IconWidgetList={IconWidgetList} />
        </div>

    </div>
  );
};

export default About;
