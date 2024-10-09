import React from 'react';
import FormationCardContent from './FormationCardContent';

function Formation() {

  return (
    
    <div >
      <FormationCardContent
        image="static/amex.jpg"
        altText="American Express Global Business Travel"
        name="American Express Global Business Travel"
        degree="Stage"
        date="Avr. 2024 - Sept. 2024"
        activities=""
      />
        <FormationCardContent
        image="static/universit_paris_cit_logo.jpg"
        altText="Université Paris Cité"
        name="Université Paris Cité"
        degree="Master en informatique"
        date="Sept. 2022 - Avr. 2024"
        activities="Salsa, photographie et vidéo"
      />
        <FormationCardContent
        image="static/universit_paris_cit_logo.jpg"
        altText="Université Paris Cité"
        name="Université Paris Cité"
        degree="License informatique générale"
        date="Sept. 2019 - Juin. 2022"
        activities="Photographie"
      />
    </div> 
  );
}

export default Formation;
