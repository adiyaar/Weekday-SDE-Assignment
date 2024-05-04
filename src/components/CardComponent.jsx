import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import './CardComponent.css';

const CardComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {});
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box className="card-container">
      {data && (
        <>
          <img src={data.logo} alt="" className="logo" />
          <Typography variant="h6" className="heading">
            {data.heading}
          </Typography>
          <Typography variant="body1" className="description">
            {data.description}
          </Typography>
          <Button variant="contained" color="primary" className="action-button">
            Apply Now
          </Button>
        </>
      )}
    </Box>
  );
};

export default CardComponent;