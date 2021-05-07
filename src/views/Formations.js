import React, { Component } from 'react';

/* IMPORT ALL FORMATIONS LOGOS HERE  */
import CHEC from '../images/CHEC.png';
import CHEE from '../images/CHEE.png';
import CHEMI from '../images/CHEMI.png';
import IFORE from '../images/IFORE.png';
import IGPDE from '../images/IGPDE.png';
import IHEDATE from '../images/IHEDATE.png';
import IHEDN from '../images/IHEDN.png';
import IHEE from '../images/IHEE.png';
import IHEMR from '../images/IHEMR.png';
import IHEST from '../images/IHEST.png';    
import PLANET from '../images/PLANET.png';    











const formations = [
    {
        title: 'CHEC',
        description: 'Cycle des Hautes Études de la Culture',
        image: CHEC,
        website: 'https://www.culture.gouv.fr/Nous-connaitre/Organisation/Cycle-des-Hautes-Etudes-de-la-Culture-CHEC',
    },
    {
        title: 'CHEE',
        description: 'Cycle des hautes études européennes',
        image: CHEE,
        website: 'https://www.ena.fr/Formation-continue/Cycles-internationaux-adosses-aux-formations-Fonction-Publique/CHEE',
    },
    {
        title: 'CHEMI',
        description: "Centre des Hautes Études du Ministère de l'Intérieur",
        image: CHEMI,
        website: 'https://www.interieur.gouv.fr/Le-ministere/Secretariat-general/Centre-des-Hautes-Etudes-du-Ministere-de-l-Interieur',
    },
    {
        title: 'IFORE',
        description: 'Institut des hautes études d’aménagement des territoires',
        image: IFORE,
        website: 'http://www.ipec.developpement-durable.gouv.fr/',
    },
    {
        title: 'IGPDE',
        description: 'Institut de la gestion publique et du développement économique',
        image: IGPDE,
        website: 'https://www.economie.gouv.fr/igpde',
    },
    {
        title: 'IHEDATE',
        description: 'Institut des hautes études d’aménagement des territoires',
        image: IHEDATE,
        website: 'https://ihedate.org/',
    },
    {
        title: 'IHEDN',
        description: 'Institut des hautes études de défense nationale',
        image: IHEDN,
        website: 'https://google.comhttps://ihedn.fr/',
    },
    {
        title: 'IHEE',
        description: 'Institut des Hautes Études de l’Entreprise',
        image: IHEE,
        website: 'https://www.ihee.fr/',
    },
    {
        title: 'IHEMR',
        description: 'Institut des Hautes Études du Monde Religieux',
        image: IHEMR,
        website: 'https://www.ihemr.org/',
    },
    {
        title: 'IHEST',
        description: 'Institut des Hautes Etudes pour la Science et la Technologie',
        image: IHEST,
        website: 'https://www.ihest.fr/',
    },
    {
        title: 'PLANET A',
        description: "Institut planet A des Hautes Études de l'Agriculture",
        image: PLANET,
        website: 'https://www.planet-a-initiative.com/accueil/',

    },
];

class Formations extends Component {
    render() {
        return (
            <div>
                <div className="post-header flexCenter column">
                    <h1>Les Instituts des Hautes Etudes</h1>
                    <b><i>
                    Relier les intelligences
                    </i></b>
                </div>
                <div className="blueBkg flexCenter">
                    
                    {
                        formations.map(formation => {

                            const {
                                title,
                                description,
                                image,
                                website,
                            } = formation;

                            return <div className="card" style={window.innerWidth < 500 ? { height: '60vh' } : {}}>
                                <img className="card-image" src={image} />
                                <h3>{ title }</h3>
                                <p className="horizontal-margin">{ description }</p>
                                <a className="app-button" href={website} rel='noopener noreferer' target='_blank'>
                                    Site web
                                </a>
                            </div>
                        })
                    }
                    
                </div>
            </div>
            
        );
    }
}

export default Formations;