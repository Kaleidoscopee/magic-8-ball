const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users

magic8BallResponse = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
];

app.get('/magic/:question', (req, res)=> {
    const question = req.params.question;
    const response = magic8BallResponse[Math.floor(Math.random() * magic8BallResponse.length)];

    res.send(`
        <h1>Your Question: ${question}</h1>
        <h1>Magic 8 Ball Response: ${response}</h1>
    `)
});


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});