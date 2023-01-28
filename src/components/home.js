import React,{useState} from 'react';
import Fileupload from './fileupload';
import Stats from './stats';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import './styles/home.css'


const Home = () => {
  const [isloading, setIsloading] = useState(false)
  const [data, setData] = useState(null);
  const [error, setError] = useState(false)

  const analyseCall =(data) => {
    fetch('http://localhost:3005/text',{
      method: 'POST',
      body:data,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setIsloading(false)
      setData(data);
      
    })
    .catch((err) => {
      setError(err.message);
    });
  }

  return (
    <Container maxWidth="md">
    {
      isloading ?
      <div className='home-loader'>
        <CircularProgress />
        <div> Please wait analysing text ...</div>
      </div> : <div>
        {data ?
         <Stats data={data} />
        :
        <div className='home-text'>
        <Typography variant="h1" gutterBottom>
          Text Analyser... 
        </Typography>
        <Fileupload setIsloading={setIsloading} analyseCall={analyseCall} />
      </div>}
      </div>
    }
    </Container>
  );
}

export default Home;