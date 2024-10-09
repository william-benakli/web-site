import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Presentation() {
  return (
    <Card 
        className='card-formation' 
        elevation={0}
        sx={{ display: 'flex', flexDirection: 'row', margin: '30px'}}>
      <CardMedia
        component='img'
        height="50"
        width="50"
        
        image='static/profile.png'
        alt='photo william'
        sx={{ maxHeight: '50px', maxWidth: '50px' }}
      />
      
      <CardContent>
        <Typography variant='h5' component='div'>
            <TypeAnimation
            sequence={[
            'Bonjour, je suis William Benakli, je suis un développeur ',
            1000,
            'Bonjour, je suis William Benakli, je suis un développeur passioné',
            1000,
            'Bonjour, je suis William Benakli, je suis un développeur autonome',
            1000,
            'Bonjour, je suis William Benakli, je suis un développeur disponible',
            1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '17px', display: 'inline-block' }}
            repeat={Infinity}
        />

        </Typography>
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
            J'ai découvert ma vocation en m'initiant à la programmation à travers Minecraft en Java vers l'âge de 14ans. Ce fut un véritable coup de cœur, j'ai été fasciné par les possibilités créatives que la programmation offre. Pour approfondir mes connaissances, j'ai suivi un parcours scientifique qui m'a conduit à obtenir un master en informatique.
        </Typography>
        <br/>
        <a href="mailto:william.benakli.4.2@gmail.com">Contactez moi par mail: william.benakli.4.2@gmail.com</a>
        <br/>
        <a href='https://www.linkedin.com/in/william-benakli-4b7121298/'>Retrouvez moi sur Linkedin<FaLinkedin /></a>
        <br/>
        <a href='https://github.com/william-benakli' target='blank'>Retrouvez moi sur GitHub<FaGithub /></a>

      </CardContent>
    </Card>
  );
}

export default Presentation;
