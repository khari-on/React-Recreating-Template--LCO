import React from "react";
import Card from "./cardp";

const Proftfolio = ()=>{
    return(
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
         
            <div className="row justify-content-center">
             <Card  img="assets/img/portfolio/cabin.png"/>
             <Card  img="assets/img/portfolio/cake.png" />
             <Card  img="assets/img/portfolio/circus.png" />
             <Card  img="assets/img/portfolio/game.png" />
             <Card  img="assets/img/portfolio/safe.png" />
             <Card  img="assets/img/portfolio/submarine.png" />
            </div>

         </div>
    </section>
    )
}

export default Proftfolio;