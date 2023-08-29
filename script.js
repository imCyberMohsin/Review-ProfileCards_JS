//* Review Profile Cards Script

//? Dynamic Card Data
const reviewCards = [
    {
        id: 1,
        name: 'Mohsin',
        job: 'Web Developer',
        img: './img/image1.jpg',
        about: "I'm Mohsin, a skilled web developer passionate about crafting exceptional online experiences. Proficient in HTML, CSS, and JavaScript, I bring ideas to life through code."
    },
    {
        id: 2,
        name: 'Saman',
        job: 'AI/ML Expert',
        img: './img/image2.png',
        about: "I'm Saman an AI and ML expert,I craft innovation through data. With a passion for algorithms, I can reshapes the future by decoding patterns and enabling smart decisions."
    },
    {
        id: 3,
        name: 'Sujal',
        job: 'Cloud Expert',
        img: './img/image3.png',
        about: "I'm Sujal a cloud expert driving innovation. Deep AWS proficiency. Problem solver, architecting scalable solutions. Passion for optimizing infrastructure, enhancing efficiency."
    },
    {
        id: 4,
        name: 'Sayem',
        job: 'UI/UX Expert',
        img: './img/image4.JPG',
        about: "I'm Sayem, a visionary UI/UX design expert, crafts seamless digital experiences. With an eye for aesthetics and user-centricity, I transform ideas into intuitive, captivating designs."
    },
    {
        id: 5,
        name: 'Zaid',
        job: 'Project Manager',
        img: './img/image5.JPG',
        about: "I'm Zaid,I'm project and event manager, orchestrates seamless experiences. With a keen eye for detail,I can shape ideas into memorable occasions, leaving lasting impressions."
    },

    // Add more here....
];
// console.log(cards);

//? Select HTML Elements
const img = document.getElementById('person-img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
const shuffleBtn = document.querySelector('.random-btn');

//? Set Starting Card 
let currentCard = 0;

//? Functions to Display the cards Dynamically
// Load Inital Card
window.addEventListener("DOMContentLoaded", () => {
    showCard();
});


//! Function to Show card objects
const showCard = () => {
    const card = reviewCards[currentCard];
    img.src = card.img;
    name.textContent = card.name;
    job.textContent = card.job;
    job.style.color = 'var(--accent-color)'
    info.textContent = card.about;
}

//! Next Button
nextBtn.addEventListener('click', () => {
    currentCard++;
    // If its the end of the cards than move back to first card
    if (currentCard > reviewCards.length - 1) {
        currentCard = 0;
    }
    showCard();
})

//! Prev Button
prevBtn.addEventListener('click', () => {
    currentCard--;
    // If its the start of the card than move to the last card 
    if (currentCard < 0) {
        currentCard = reviewCards.length - 1;
    }
    showCard();
})

//! Shuffle Button
shuffleBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * reviewCards.length);
    currentCard = random;
    // console.log(random);
    // console.log(currentCard);
    showCard();
})