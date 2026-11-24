import 'dotenv/config';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
       
    })
    .catch((err) => console.log('Connection Error', err)) 

   
const app = express();

const port = 3000;

app.get()


app.listen(port, () => {
    console.log('Server running on port: http://localhost:' + port)
})