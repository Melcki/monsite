import React from "react";
import '../Project.css';

const Projects = () => {

    return(
        <div style={{paddingTop:"10%"}}>
            <center><h1>Mes projets</h1></center>
            <div className="card-grid">
                
                <div className="card">
                    <p>En cours de développement</p>
                    <img src="/home.png" alt="Boutique"></img>
                    <div>
                        <button><i  class="bi bi-github"></i> Github</button>
                        <button><i className="bi bi-file-earmark-text-fill"></i> Démo</button>
                    </div>
                </div>
                <div className="card">
                    <p>En cours de développement</p>
                    <img src="/home.png" alt="Boutique"></img>
                    <div>
                        <button><i  class="bi bi-github"></i> Github</button>
                        <button><i className="bi bi-file-earmark-text-fill"></i> Démo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;