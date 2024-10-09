import React, { useState, useEffect } from 'react';
import './ProjectRow.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

function ProjectRow() {
  const [items, setItems] = useState([]);    

  useEffect(() => {
    setItems(
      [
        {
          title: 'CatchGhost - Projet académique',
          description :"Dans le cadre de mes études, nous avons développé un jeu en réseau intitulé CatchGhost. Ce projet académique avait pour objectif de mettre en pratique les concepts de programmation réseau et de communication entre machines. Nous avons suivi un protocole strict défini par nos enseignants, avec un serveur programmé en C et un client en Java.",          respository: 'https://github.com/william-benakli/pac-man',
          skills: [' C (langage de programmation)', 'Développement Java', 'Java Swing', 'Suite des protocoles Internet (TCP/IP)', 'Protocole TCP', 'Protocole UDP'],
          image: 'projects/images/ghost-lab-menu.png',
          team: false
        },
        {
          title: 'Logiciel Fractal avec des threads - Project académique',
          description: 'Dans le cadre de mes études, et en binôme, j\'ai développé un logiciel en Java visant à maîtriser les concepts du multithreading, notamment avec l\'utilisation de ForkJoinPool, les approches linéaires, etc.   Nous avons conçu une application en Java Swing permettant d\'explorer le monde mathématique des nombres complexes et d\'obtenir une représentation visuelle de fractales.',
          respository: 'https://github.com/william-benakli/fractal-software-swing',
          skills: ['Multithreading', 'ForkJoinPool', 'Java', 'Concurrence', 'Java Swing'],
          image: 'projects/images/projet-fractal-menu.png',
          team: false
        },
        {
          title: 'LearnDico - Projet académique',
          description: "Apprendre une nouvelle langue peut sembler difficile, mais grâce à ce projet intitulé LearnDico, réalisé en binôme dans le cadre de mes études, vous réduirez votre temps d'apprentissage de moitié. Sur notre application Android, chaque jour, vous recevrez une notification avec un nouveau mot et sa définition. Après plusieurs balayages, le mot ne réapparaîtra plus et sera considéré comme acquis.",
          respository: 'https://github.com/william-benakli/pcm-projet-2022',
          skills: ['Kotlin', 'Fragment navigation' , 'JPA', 'API REST', 'Développement Android', 'Android Studio'],
          image: 'projects/images/learn-dico.png',
          team: false
        },
        {
          title: 'IG-Energy - Projet académique',
          description: "IG-Energy est un projet développé en binôme dans le cadre de mes études. Nous avons utilisé le patron de conception Observateur. Nous avons mis en place ce projet en suivant une architecture MVC avec Java, en utilisant la bibliothèque graphique officielle Swing pour l'interface utilisateur.",
          respository: 'https://github.com/william-benakli/ig-energy',
          skills: ['Java Swing',  'Java',  'Patrons de conception', 'Patron Observer', 'Logiciel', 'Swing', 'Architecture MVC'],
          image: 'projects/images/result-energy.gif',
          team: false
        },
        {
          title: 'TrainGo - Projet académique',
          description: "Durant un semestre, en équipe et dans le cadre de nos études, nous avons simulé une situation où un client souhaitait une application type Google Maps, avec un cahier des charges flexible. Cela nous a amenés à concevoir un code générique, capable de s'adapter à diverses situations. C'est dans ce contexte que TrainGo a vu le jour : un logiciel reprenant les fonctionnalités de Google Maps, permettant de trouver un itinéraire de n'importe quel point A à un point B.",
          respository: 'https://github.com/william-benakli/gla-calcul-itineraire',
          skills: ['Java', 'Swing'],
          image: 'projects/images/train-go-menu.png',
          team: true
        },
        {
          title: 'Discool - Projet académique',
          description: "Ce projet a été initié durant la pandémie de COVID-19. L'idée principale était de combiner deux plateformes: Discord, une plateforme de messagerie, et Moodle, un système de gestion de l’apprentissage utilisé pour la notation et la remise des devoirs.  C’est ainsi qu’est né Discool. En équipe de quatre, nous avons développé cette application qui intègre plusieurs fonctionnalités : envoi de messages, création de classes, remise de devoirs, messagerie privée, et bien plus encore.",
          respository: 'https://github.com/william-benakli/discool',
          skills: ['Framework Spring', 'Spring Boot', 'Vaadin', 'Java', 'JPA DAO', 'GitHub'],
          image: 'projects/images/discool-menu.png',
          team: true
        }
      ]
    )
  }, []);
    
  const listItems = items.map((item, index) => (
    <Card key={index}  sx={{display: 'flex', flexDirection: 'row-reverse'}}>
        <CardMedia
          component='img'
          image={item.image}
          alt={item.title}/>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>{item.title} <p disable={item.team}> Teams</p> </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {item.description}
          </Typography>
            <p><b>Compétences aquises</b>: {item.skills.join(' · ')} </p>
        </CardContent>
    </Card>
  ));
    
  return (
    
    <div className='card-container'>
      {listItems}
    </div> 
  );
}

export default ProjectRow;
