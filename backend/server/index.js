const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middle ware 
app.use(bodyParser.json());
app.use(cors());

//länka till filen post
const posts = require('./routes/api/posts');

//skicka vidare till filen post- routern tar över
app.use('/api/posts', posts);

//ta hand om produktion
if(process.env.NODE_ENV === 'production') {
    //statisk mapp
    app.use(express.static(__dirname + '/public/'));
    
    //hanetra routes
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
//herouk
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servern startade på port ${port}`));