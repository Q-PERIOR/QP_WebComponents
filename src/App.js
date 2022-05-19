import {
  ThemeProvider
} from '@ui5/webcomponents-react';
import React from 'react';
import {TechInnovation} from "./TechInnovation"
import './App.css';

// const express = require('express')
// const cors = require('cors')
// const axios = require('axios').default
// const _ = require('lodash')

// const config = require('./config')

// const app=express()
// app.use(cors())
// const port = 3009

// app.get('/ibm/token',async(req,res)=>{
//   try{
//     const formdata=new URLSearchParams({
//       grant_type:'urn:ibm:params:oauth:grant-type:apikey',
//       apikey: config.ibm.apikey,
//     })
//     const response=await axios.post('httpsL//iam.cloud.ibm/identity/token',formdata)
//     const access_token=_.get(response,'data.access_token','')
//     res.status(200).json({
//       access_token,
//     })
//   }catch(error){
//     res.status(500).json({
//       error:error.message,
//     })
//   }
// })

// app.listen(port,()=>{
//   console.log(`app listening on port ${port}`)
// })


function App() {
  return (
    <ThemeProvider>
      <TechInnovation/>
    </ThemeProvider>
  );
}

export default App;
