import React, { useState } from "react";
import ProjectRow from "./components/ProjectRow";
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div>

<TypeAnimation
        sequence={[
          'Je suis un devloppeur',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Je suis un devloppeur passioné',
          1000,
          'Je suis un devloppeur autonome',
          1000,
          'Je suis un devloppeur disponible',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
        Je suis William Benakli, un passionné d'informatique. J'ai découvert ma vocation en m'initiant à la programmation à travers Minecraft en Java. Ce fut un véritable coup de cœur ; j'ai été fasciné par les possibilités créatives que l'informatique offre. Pour approfondir mes connaissances, j'ai suivi un parcours scientifique qui m'a conduit à obtenir un master en informatique.

        Au cours de mes études, j'ai eu l'occasion de travailler en freelance pendant les vacances, ce qui m'a permis de collaborer avec divers clients et d'acquérir une précieuse expérience professionnelle. En tant qu'étudiant tuteur, j'ai également pris le temps d'aider mes camarades en informatique, développant ainsi mes compétences pédagogiques et renforçant mes connaissances.

        J'ai effectué un stage chez American Express Global Business Travel, où j'ai considérablement développé mes compétences techniques et appris à travailler dans un environnement professionnel dynamique.

        Aujourd'hui, je suis à la recherche d'opportunités en informatique, en particulier dans le domaine de SPRING JAVA, afin de continuer à progresser dans ma carrière

        <h3> Formation : </h3>

        <h3> Projets : </h3>
        <ProjectRow />
    </div>
  );
}

export default App;
