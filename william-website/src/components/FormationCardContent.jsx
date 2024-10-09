import React from 'react';
import { Card, CardMedia, CardContent, Typography, useMediaQuery, useTheme} from '@mui/material';

const FormationCardContent = ({ image, altText, name, degree, date, activities }) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();
  return (
    <Card 
        className='card-formation' 
        elevation={0}
        sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        margin: '30px',      
        backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.background.paper,
        color: isDarkMode ? '#fff' : '#000'
      }}
        >
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
        <Typography variant='body2'>
          {degree}
          <Typography variant='body2'>
            {date}
          </Typography>
          {activities.length > 0 && 
            <Typography variant='body2'>
                Activités et associations : {activities}
            </Typography>
            }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FormationCardContent;
