const express = require('express');
const app = express();
const morgan = require('morgan');;
const bodyParser = require('body-parser');
const uuid = require('uuid');

app.use(express.static(__dirname + '/public'));

let topMooBees = [
    {
        title: "Punch-Drunk Love",
        director: "Paul Thomas Anderson",
        genre: ["Drama"],
        description: "A frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know that he will land in huge trouble and will also jeopardise his relationship with Lena.",
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        title: 'There Will Be Blood',
        director: 'Paul Thomas Anderson',
        genre: 'Drama'
    },
    {
        title: 'The House that Jack Built',
        director: 'Lars Von Trier',
        genre: 'Thriller'
    },
    {
        title: 'Stalker',
        director: 'Andrei Tarkovsky',
        genre: 'Sci-Fi Art Drama'
    },
    {
        title: 'The Antichrist',
        director: 'Lars Von Trier',
        genre: 'Neo-Noir Drama Thriller'
    },
    {
        title: 'Into the Wild',
        director: 'Sean Penn',
        genre: 'Biopic Drama'
    },
    {
        title: 'Oldboy',
        director: 'Park Chan-wook',
        genre: 'Neo-Noir Thriller'
    },
    {
        title: 'The Master',
        director: 'Paul Thomas Anderson',
        genre: 'Drama'
    },
    {
        title: 'Snatch',
        director: 'Guy Ritchie',
        genre: 'Dark Comedie Action'
    },
    {
        title: 'Dogville',
        director: 'Lars Von Trier',
        genre: 'Neo-Noir Drama'
    }
];

let directors = [
    {
        name: "Quentin Tarantino",
        bio: "Quentin Tarantino is an American film director, screenwriter, producer, and actor. His films are characterized by nonlinear storylines, dark humor, aestheticization of violence, extended scenes of dialogue, ensemble casts, references to popular culture and a wide variety of other films, eclectic soundtracks primarily containing songs and score pieces from the 1960s to the 1980s, alternate history, and features of neo-noir film.",
        born: "1963-03-27"

    },
    {
        name: "Paul Thomas Anderson",
        bio: "He was one of the first of the video store generation of film-makers. His father was the first man on his block to own a V.C.R., and from a very early age Anderson had an infinite number of titles available to him.",
        born: "1970-06-26"
    },
    {
        name: "Alfred Hitchcock",
        bio: "was an English film director, producer, and screenwriter. He is one of the most influential and widely studied filmmakers in the history of cinema. Known as the 'Master of Suspense', he directed over 50 feature films in a career",
        born: "13 August 1899",
        dead: "29 April 1980)"
    }

];

let actors = [
    {
        name: "Samuel Leroy Jackson",
        bio: "is an American actor and producer. Widely regarded as one of the most popular actors of his generation, the films in which he has appeared have collectively grossed over $27 billion worldwide, making him the highest-grossing actor of all time",
        born: "December 21, 1948"

    },
    {
        name: "Alfredo James Pacino",
        bio: "is an American actor and filmmaker. In a career spanning over five decades, he has received many awards and nominations, including an Academy Award, two Tony Awards, and two Primetime Emmy Awards. He is one of the few performers to have received the Triple Crown of Acting. He has also been honored with the AFI Life Achievement Award, the Cecil B. DeMille Award, and the National Medal of Arts.",
        born: "April 25, 1940"
    },
    {
        name: "Robert Anthony De Niro Jr.",
        bio: "is an American actor, producer, and director. He is particularly known for his nine collaborations with filmmaker Martin Scorsese, and is the recipient of various accolades, including two Academy Awards, a Golden Globe Award, the Cecil B. DeMille Award, and a Screen Actors Guild Life Achievement Award. In 2009, De Niro received the Kennedy Center Honor, and received a Presidential Medal of Freedom from U.S. President Barack Obama in 2016.",
        born: "August 17, 1943"
    }

];

let users = [
    {
        name: "Kenny Bell",
        username: "@kenny_bell",
        Birthday: new Date("1991-09-20")
    },
    {
        favouriteMovie: ObjectId("6094eb3378af87dbecf35d07"),
        username: ObjectId("6093f4d478af87dbecf35cf9")
    }
];

// Loggin
app.use(morgan('common'));

// GET requests
app.get('/', (req, res) => {
    res.send('Welcome to MooBee!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/mooBees', (req, res) => {
    res.json(topMooBees);
});

app.get('/mooBees/:title', (req, res) => {
    res.json(topMooBees.find((moobee) => { return moobee.title === req.params.title }));
});

app.get('/mooBees/:genre', (req, res) => {
    res.json(mooBees.find((moobee) => { return moobee.genre === req.params.genre }));
});
 
app.get('/directors', (req, res) => {
    res.json(directors);

});

app.get('/directors/:name', (req, res) => {
    res.json(directors.find((directors) => {
        return directors.name === req.params.name
    }));

});

app.get('/actors', (req, res) => {
    res.json(actors);
});

app.get('/actors/:name', (req, res) => {
    res.json(actors.find((actors) => {
        return actors.name === req.params.name
    }));
});

app.get('/topMooBees/:directors', (req, res) => {
    res.json(topMooBees.find((director) => { return director.details === req.params.details }));
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users:username', (req, res) => {
    res.json(users.find((user) => { return user.name === req.params.name }));
});

app.get('/users/:username/favorites', (req, res) => {
    res.send("list of favorites")
});

// POST requests

app.post('/users/:username', (req, res) => {
    res.send("user add")
});

app.post('/users/:username/favorites', (req, res) => {
    res.send("add list favorites")
});

// DELETE requests

app.delete('/users/:username/favorites/:movie', (req, res) => {
    res.send("remove from favorites")
});

app.delete('/users/:username',(req,res)=>{
    res.send('user was deleted')
});

// PUT requests

app.put('users/:username', (req, res) => {
    res.send('user name has been updated')
});

// Listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});

// Serves static files
app.use(express.static('public'));

// Error handling 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
