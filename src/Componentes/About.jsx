import './style.css';
import Security from '../assets/images/icon-security.svg'
import Collaboration from '../assets/images/icon-collaboration.svg'


function About(){


    return(
        <section className="about Acontainer">

            <article className="about__item">
                <figure className="about__picture">
                    <img src="" className="about__img"/>
                </figure>
        
                <h3 className="about__title"> Access your files, anywhere</h3>
        
                <p className="about__paragraph"> The ability to use a smartphone, tablet, or computer to access your account means your 
                    files follow you everywhere.
                </p>
            </article>
    
            <article className="about__item">
                <figure className="about__picture">
                    <img src={Security} className="about__img"/>
                </figure>
        
                <h3 className="about__title">  Security you can trust
                </h3>
        
                <p className="about__paragraph"> 2-factor authentication and user-controlled encryption are just a couple of the security 
                    features we allow to help secure your files.
                </p>
            </article>
    
            <article className="about__item">
                <figure className="about__picture">
                    <img src={Collaboration} className="about__img"/>
                </figure>
        
                <h3 className="about__title">Real-time collaboration</h3>
        
                <p className="about__paragraph">
                    Securely share files and folders with friends, family and colleagues for live collaboration. 
                    No email attachments required.
                </p>
            </article>
    
            <article className="about__item">
                <figure className="about__picture">
                    <img src="" className="about__img"/>
                </figure>
        
                <h3 className="about__title">  Store any type of file</h3>
        
                <p className="about__paragraph">  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                    file types to be securely stored and shared.
                </p>
            </article>
    
        </section>
    )
}

export default About;