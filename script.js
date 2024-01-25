const library = document.getElementById("movies");

const movies = [
       
        {
            "id": 6,
            "title": "Ratatouille",
            "year": "2007",
            "runtime": "111",
            "genres": [
                
                "Comedy",
                "Family"
            ],
            "director": "Brad Bird, Jan Pinkava",
            "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
            "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
            "poster": "6.jpg"
        },
        {
            "id": 7,
            "title": "City of God",
            "year": "2002",
            "runtime": "130",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Fernando Meirelles, Kátia Lund",
            "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "poster": "7.jpg"
        },
       
        {
            "id": 9,
            "title": "The Intouchables",
            "year": "2011",
            "runtime": "112",
            "genres": [
                "Biography",
                "Comedy",
            
            ],
            "director": "Olivier Nakache, Eric Toledano",
            "actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
            "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            "poster": "9.jpg"
        },
        {
            "id": 10,
            "title": "Stardust",
            "year": "2007",
            "runtime": "127",
            "genres": [
                
                "Family",
                "Fantasy"
            ],
            "director": "Matthew Vaughn",
            "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            "poster": "10.jpg"
        },
        {
            "id": 11,
            "title": "Apocalypto",
            "year": "2006",
            "runtime": "139",
            "genres": [
                "Action",
            
                "Drama"
            ],
            "director": "Mel Gibson",
            "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            "poster": "11.jpg"
        },
        {
            "id": 12,
            "title": "Taxi Driver",
            "year": "1976",
            "runtime": "113",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Martin Scorsese",
            "actors": "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
            "plot": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            "poster": "12.jpg"
        },
      
        {
            "id": 14,
            "title": "Planet 51",
            "year": "2009",
            "runtime": "91",
            "genres": [
        
                "Adventure",
                "Comedy"
            ],
            "director": "Jorge Blanco, Javier Abad, Marcos Martínez",
            "actors": "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
            "plot": "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
            "poster": "14.jpg"
        },
        {
            "id": 15,
            "title": "Looper",
            "year": "2012",
            "runtime": "119",
            "genres": [
                "Action",
                "Crime",
                
            ],
            "director": "Rian Johnson",
            "actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
            "plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
            "poster": "15.jpg"
        },
        {
            "id": 16,
            "title": "Corpse Bride",
            "year": "2005",
            "runtime": "77",
            "genres": [
            
                "Drama",
                "Family"
            ],
            "director": "Tim Burton, Mike Johnson",
            "actors": "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
            "plot": "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
            "poster": "16.jpg"
        },
        {
            "id": 17,
            "title": "The Third Man",
            "year": "1949",
            "runtime": "93",
            "genres": [
        
                "Mystery",
                "Thriller"
            ],
            "director": "Carol Reed",
            "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
            "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
            "poster": "17.jpg"
        },
        {
            "id": 18,
            "title": "The Beach",
            "year": "2000",
            "runtime": "119",
            "genres": [
            
                "Drama",
                "Romance"
            ],
            "director": "Danny Boyle",
            "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            "poster": "18.jpg"
        },
        {
            "id": 19,
            "title": "Scarface",
            "year": "1983",
            "runtime": "170",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Brian De Palma",
            "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
            "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            "poster": "19.jpg"
        },
        {
            "id": 20,
            "title": "Sid and Nancy",
            "year": "1986",
            "runtime": "112",
            "genres": [
                "Biography",
        
                "Music"
            ],
            "director": "Alex Cox",
            "actors": "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
            "plot": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
            "poster": "20.jpg"
        },
        {
            "id": 21,
            "title": "Black Swan",
            "year": "2010",
            "runtime": "108",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Darren Aronofsky",
            "actors": "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
            "plot": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
            "poster": "21.jpg"
        },
        {
            "id": 22,
            "title": "Inception",
            "year": "2010",
            "runtime": "148",
            "genres": [
                "Action",
            
                "Sci-Fi"
            ],
            "director": "Christopher Nolan",
            "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "poster": "22.jpg"
        },
        {
            "id": 23,
            "title": "The Deer Hunter",
            "year": "1978",
            "runtime": "183",
            "genres": [
                "Drama",
                "War"
            ],
            "director": "Michael Cimino",
            "actors": "Robert De Niro, John Cazale, John Savage, Christopher Walken",
            "plot": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
            "poster": "23.jpg"
        },
        {
            "id": 24,
            "title": "Chasing Amy",
            "year": "1997",
            "runtime": "113",
            "genres": [
                "Comedy",
            
                "Romance"
            ],
            "director": "Kevin Smith",
            "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
            "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
            "poster": "24.jpg"
        },
        {
            "id": 25,
            "title": "Django Unchained",
            "year": "2012",
            "runtime": "165",
            "genres": [
                "Drama",
                "Western"
            ],
            "director": "Quentin Tarantino",
            "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
            "plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "poster": "25.jpg"
        },
        {
            "id": 26,
            "title": "The Silence of the Lambs",
            "year": "1991",
            "runtime": "118",
            "genres": [
                "Crime",
                "Thriller"
            ],
            "director": "Jonathan Demme",
            "actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
            "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
            "poster": "26.jpg"
        },
        {
            "id": 27,
            "title": "American Beauty",
            "year": "1999",
            "runtime": "122",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Sam Mendes",
            "actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
            "plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
            "poster": "27.jpg"
        },
        {
            "id": 28,
            "title": "Snatch",
            "year": "2000",
            "runtime": "102",
            "genres": [
                "Comedy",
                "Crime"
            ],
            "director": "Guy Ritchie",
            "actors": "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
            "plot": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
            "poster": "28.jpg"
        },
        {
            "id": 29,
            "title": "Midnight Express",
            "year": "1978",
            "runtime": "121",
            "genres": [
                "Crime",
                "Drama"
                
            ],
            "director": "Alan Parker",
            "actors": "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
            "plot": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
            "poster": "29.jpg"
        },
        {
            "id": 30,
            "title": "Pulp Fiction",
            "year": "1994",
            "runtime": "154",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Quentin Tarantino",
            "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
            "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "poster": "30.jpg"
        },
        {
            "id": 3,
            "title": "The Shawshank Redemption",
            "year": "1994",
            "runtime": "142",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Frank Darabont",
            "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "poster": "3.jpg"
        },
        {
            "id": 1,
            "title": "Beetlejuice",
            "year": "1988",
            "runtime": "92",
            "genres": [
                "Comedy",
                "Fantasy"
            ],
            "director": "Tim Burton",
            "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
            "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
            "poster": "1.jpg"
        },
        {
            "id": 2,
            "title": "The Cotton Club",
            "year": "1984",
            "runtime": "127",
            "genres": [
                "Crime",
                "Drama",
                
            ],
            "director": "Francis Ford",
            "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            "poster": "2.jpg"
            
        },
        {
            "id": 24,
            "title": "Chasing Amy",
            "year": "1997",
            "runtime": "113",
            "genres": [
                "Comedy",
            
                "Romance"
            ],
            "director": "Kevin Smith",
            "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
            "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
            "poster": "24.jpg"
        },
        {
            "id": 4,
            "title": "Crocodile Dundee",
            "year": "1986",
            "runtime": "97",
            "genres": [
                "Adventure",
                "Comedy"
            ],
            "director": "Peter Faiman",
            "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            "poster": "4.jpg"
        },
        {
            "id": 8,
            "title": "Memento",
            "year": "2000",
            "runtime": "113",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Christopher Nolan",
            "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            "poster": "8.jpg"
        },
       
       
        {
            "id": 5,
            "title": "Valkyrie",
            "year": "2008",
            "runtime": "121",
            "genres": [
        
                "History",
                "Thriller"
            ],
            "director": "Bryan Singer",
            "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
            "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
            "poster": "5.jpg"
        },
        {
            "id": 25,
            "title": "Django Unchained",
            "year": "2012",
            "runtime": "165",
            "genres": [
                "Drama",
                "Western"
            ],
            "director": "Quentin Tarantino",
            "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
            "plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "poster": "25.jpg"
        },
        {
            "id": 18,
            "title": "The Beach",
            "year": "2000",
            "runtime": "119",
            "genres": [
            
                "Drama",
                "Romance"
            ],
            "director": "Danny Boyle",
            "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            "poster": "18.jpg"
        },
       
       

    ]
console.log(movies.length)

movies.forEach(function (movie){
    
    console.log(movie)
    const movieDiv = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent= movie.title;
    const genres = document.createElement("h3");
    genres.textContent= "Genres:" + movie.genres;
    const image= document.createElement("img")
    image.src = movie.poster
    image.setAttribute("alt",movie.title)
   
    const director = document.createElement("p")
    const runtime = document.createElement("h4")
    director.textContent = "Director:" + movie.director
    runtime.textContent = "Runtime:" + movie.runtime


    movieDiv.append(image,title,genres,director)
    movieDiv.classList.add("movie")
    library.appendChild(movieDiv)

    
})

