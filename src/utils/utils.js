const magazineData = [
    
    {
        id:1, title:"Don't close your eyes", date:"September 22, 2022", badge:"street art",authorId:6 , readTime:"50 Min", img:"/assets/magazine-data/close-eyes.png", imgLarge:"/assets/magazine-data/close-eyes-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:2, title:"Hope dies last", date:"October 15, 2022", badge:"art",authorId:3 , readTime:"10 Min", img:"/assets/magazine-data/hope-die.png", imgLarge:"/assets/magazine-data/hope-die-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:3, title:"The best art museums", date:"July 20, 2022", badge:"sculptures",authorId:2 , readTime:"10 Min", img:"/assets/magazine-data/best-art.png", imgLarge:"/assets/magazine-data/best-art-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:4, title:"The devil is in the details", date:"June 4, 2022", badge:"art",authorId:5,  readTime:"35 Min", img:"/assets/magazine-data/the-devil.png", imgLarge:"/assets/magazine-data/the-devil-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:5, title:"An indestructible hope", date:"June 1, 2022", badge:"art",authorId:2 ,  readTime:"12 Min", img:"/assets/magazine-data/pyramid-eye.png", imgLarge:"/assets/magazine-data/pyramid-eye-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:6, title:"Street art festival", date:"May 10, 2022", badge:"street art",authorId:6 ,  readTime:"5 Min", img:"/assets/magazine-data/street-art.png", imgLarge:"/assets/magazine-data/street-art-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:7, title:"The chains of our lives", date:"April 15, 2022", badge:"sculptures",authorId:2 ,  readTime:"30 Min", img:"/assets/magazine-data/the-chains.png", imgLarge:"/assets/magazine-data/the-chains-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:8, title:"Artists who want to rise above", date:"March 9, 2022", badge:"street art",authorId:4 ,  readTime:"10 Min", img:"/assets/magazine-data/artists-who.png", imgLarge:"/assets/magazine-data/artists-who-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:9, title:"Secret garden", date:"February 18, 2022", badge:"art",authorId:3 ,  readTime:"30 Min", img:"/assets/magazine-data/secret-garden.png", imgLarge:"/assets/magazine-data/secret-garden-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:10, title:"Getting real", date:"January 1, 2022", badge:"art",authorId:1,  readTime:"30 Min", img:"/assets/magazine-data/getting-real.png", imgLarge:"/assets/magazine-data/getting-real-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:11, title:"Keep on smiling", date:"October 28, 2021", badge:"street art",authorId:2 ,  readTime:"20 Min", img:"/assets/magazine-data/keep-smiling.png", imgLarge:"/assets/magazine-data/keep-smiling-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:12, title:"How are you, really?", date:"September 1, 2021", badge:"sculptures",authorId:4 ,  readTime:"15 Min", img:"/assets/magazine-data/how-are-you.png", imgLarge:"/assets/magazine-data/how-are-you-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:13, title:"The future is colorful", date:"July 7, 2021", badge:"art",authorId:3 ,  readTime:"30 Min", img:"/assets/magazine-data/the-future.png", imgLarge:"/assets/magazine-data/the-future-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:14, title:"Only in your heart", date:"June 16, 2021", badge:"sculptures",authorId:1,  readTime:"10 Min", img:"/assets/magazine-data/your-heart.png", imgLarge:"/assets/magazine-data/your-heart-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:15, title:"History of paper", date:"October 3, 2021", badge:"art",authorId:6 , readTime:"35 Min", img:"/assets/magazine-data/history-of-paper.jpg", imgLarge:"/assets/magazine-data/history-of-paper-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
    {
        id:16, title:"Colorful places", date:"November 19, 2021", badge:"street art",authorId:5, readTime:"15 Min", img:"/assets/magazine-data/colorful-places.jpg", imgLarge:"/assets/magazine-data/colorful-places-large.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.", 
        postText:"",
    },
];
export function getMagazineData(){
    return magazineData
}

const podcastData = [
    {id:1,title:"10 artists your should definitely know",date:"October 12, 2021",duration:"1 h 20 Min",img:"/assets/podcast-data/podcast-1.jpg"},
    {id:2,title:"The art of movement",date:"December 1, 2021",duration:"40 Min",img:"/assets/podcast-data/podcast-2.jpg"},
    {id:3,title:"Behind the scenes of the street art culture",date:"January 21, 2022",duration:"56 Min",img:"/assets/podcast-data/podcast-3.jpg"},
    {id:4,title:"The hidden messages of Jack Nielson",date:"January 21, 2022",duration:"1 h 4 Min",img:"/assets/podcast-data/podcast-4.jpg"},
    {id:5,title:"The Problem of today's cultural development",date:"January 21, 2022",duration:"45 Min",img:"/assets/podcast-data/podcast-5.jpg"},
]
export function getPodcastData(){
    return podcastData
}

const authors = [
    {id:1,name:"Jakob Grønberg",job:"Artist",city:"Berlin",img:"/assets/authors-data/author-jakob.jpg"},
    {id:2,name:"Louise Jensen",job:"Artist",city:"Stockholm",img:"/assets/authors-data/author-louise.jpg"},
    {id:3,name:"Anne Henry",job:"Photograph",city:"New York",img:"/assets/authors-data/author-anne.jpg"},
    {id:4,name:"Anna Nielsen",job:"Columnist",city:"Copenhagen",img:"/assets/authors-data/author-anna.jpg"},
    {id:5,name:"Jane Cooper",job:"Artist",city:"Berlin",img:"/assets/authors-data/author-jane.jpg"},
    {id:6,name:"Cristofer Vaccaro",job:"Artist",city:"Lisabon",img:"/assets/authors-data/author-cristofer.jpg"},
]
export function getAuthorsData(){
    return authors
}