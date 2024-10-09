import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const FormationCardContent = ({ image, altText, name, degree, date, activities }) => {
  return (
    <Card 
        className='card-formation' 
        elevation={0}
        sx={{ display: 'flex', flexDirection: 'row', margin: '30px'}}>
      <CardMedia
        component='img'
        height="50"
        width="50"
        
        image={image}
        alt={altText}
        sx={{ maxHeight: '50px', maxWidth: '50px' }}
      />
      
      <CardContent>
        <Typography variant='h5' component='div'>{name}</Typography>
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {degree}
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {date}
          </Typography>
          {activities.length > 0 && 
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                Activités et associations : {activities}
            </Typography>
            }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FormationCardContent;
