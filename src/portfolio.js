import React from "react";
import Card from "./cardp";

const Proftfolio = ()=>{
    return(
        <section class="page-section portfolio" id="portfolio">
        <div class="container">
            
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
         
            <div class="row justify-content-center">
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