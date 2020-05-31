//använd dessa
const express = require('express');
const mongodb = require('mongodb');

//skapa routern
const router = express.Router(); 

//Hämta poster (/ är samma som /api/post eftersom vi sa de i index)
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Lägg till poster
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        activity: req.body.activity,
        date: req.body.date,
        distance: req.body.distance,
        time: req.body.time,
        text: req.body.text,
        intensity: req.body.intensity,
    });
    res.status(201).send();
});

//Radera poster
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://sandra:SandrasDatabas94@workoutcluster-09bfl.mongodb.net/test?retryWrites=true&w=majority'
    , {
        useNewUrlParser: true
    })

    return client.db('workoutcluster').collection('vue_workout_project');
}

//exportera routern
module.exports = router;