const cross = document.querySelector('#close-button');
const navWBtn = document.getElementsByClassName('nav-w-btn');
const humberger = document.querySelector('#humberger');

humberger.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = 0;
});

cross.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = '100%';
});

for (let i = 0; i < navWBtn.length; i += 1) {
  navWBtn[i].addEventListener('click', () => {
    document.getElementById('nav-wrap').style.left = '100%';
  });
}

// dynamic preview-cards
const cards = [{
  id: 0,
  title: 'Budget App',
  description: "A mobile web application where you can manage your budget and you have a list of transactions associated with a category.",
  descriptionPopup: "A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
  img: 'img/budget-app.PNG',
  tech: ['Ruby on Rails', 'css', 'Bootstrap', 'PostgreSQL', 'API'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/RoR-budget-app',
  livePreview: 'https://rails-deploying-app.herokuapp.com/splashs',
  
  },
  {
  id: 1,
  title: 'Movie App',
  description: "Movie App is a website to display a list of Movies with the ability to check the details for the selected movie.",
  descriptionPopup: "Movie App is a website to display a list of Movies with the ability to check the details for the selected movie.Display a list of Movies, Select a movie to view the details, Search in the movie list.",
  img: 'img/movie.PNG',
  tech: ['React', 'Redux', 'css', 'JavaScript', 'Webpack', 'Jest'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/movie-app',
  livePreview: 'https://stupendous-alpaca-c2a486.netlify.app/',
  
  },
  {
  id: 2,
  title: 'Space Traveler App',
  description: "Space Traveler - The application will allow users to book rockets and join selected space missions.",
  descriptionPopup: "Space Traveler - The application will allow users to book rockets and join selected space missions.",
  img: 'img/space.PNG',
  tech: ['React', 'css', 'JavaScript'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/space-travelers',
  livePreview: 'https://aesthetic-cocada-15db6d.netlify.app/',
  
  },
  
{
id: 3,
title: 'LeaderBoard App',
description: "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external.",
descriptionPopup: "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external.",
img: 'img/leaderboard.png',
tech: ['html', 'css', 'javaScript', 'API'],
btnText: 'See Project',
sourceURL: 'https://github.com/Zainab-Alzubair/leaderboard',
livePreview: 'https://zainab-alzubair.github.io/leaderboard/dist/',

},
{
id: 4,
title: 'Awesome Book',
description: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
descriptionPopup: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list || Technologies: JavaScript, CURD operation , DOM manipulation.",
img: 'img/book.png',
tech: ['html', 'css', 'JavaScript'],
btnText: 'See Project',
sourceURL: 'https://github.com/Zainab-Alzubair/awesome-books',
livePreview: 'https://zainab-alzubair.github.io/awesome-books/',

},
{
id: 5,
title: 'Tech Academy',
description: "An online website for a Tech academy that show the available courses and the top instructors.",
descriptionPopup: "An online website for a Tech academy that show the available courses and the top instructors || Technologies: HTM , CSS , JavaScript.",
img: 'img/techacademy.png',
tech: ['html', 'css', 'JavaScript'],
btnText: 'See Project',
sourceURL: 'https://github.com/Zainab-Alzubair/tech-academy',
livePreview: 'https://zainab-alzubair.github.io/tech-academy/',

},

];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `<div class="simple-post">
      <div class="sp-content">
        <div class="sp-h-wrapper">
          <h2 id="card-title">${card.title}</h2>
        </div>
        <p>${card.description}</p>
        <ul class="sp-lang-wrapper"> 
          <li>${card.tech[0]}</li> 
          <li>${card.tech[1]}</li> 
          <li>${card.tech[2]}</li>
        </ul>
      </div>
      <a class="sp-link">
      <button class="sp-button card-btn-open">${card.btnText}</button>
      </a>
    </div>`;
  });

  document.getElementById('simple-posts-wrapper').innerHTML = result;
}

displayCards();

function displayFeachuredPost() {
  const card1 = {
    title: 'World Vision Clinic App',
    description: "A full-stack project. In which you can register yourself create a doctor, book an appointment with the docotor, see all appiontmnets, delete a doctor(s).",
    img: 'img/clinic.PNG',
    tech: ['Rails', 'React', 'PostgreSQL', 'API'],
    btnText: 'See Project',
    sourceURL: 'https://github.com/Zainab-Alzubair/Book-Appointment-Front-End',
    livePreview: 'https://world-vision-clinic.netlify.app/',
  };
  document.getElementById('featured-post').innerHTML = `
  <img class="featured-img" src="img/clinic.PNG">
  <div class="featured-content">
    <h3 id="card-title">${card1.title}</h3>
    <p>
    ${card1.description}
    </p>
    <ul class="lang-list">
    <li>${card1.tech[0]}</li> 
    <li>${card1.tech[1]}</li> 
    <li>${card1.tech[2]}</li>
    <li>${card1.tech[3]}</li>
    </ul>
    <div class="card-b-wrap">
    <a href= "${card1.livePreview}" class="card-link">
      <button class="card-button" >See Live <img src="img/ellipse.svg" alt="" ></button>
    </a>
    <a href= "${card1.sourceURL}"class="card-link">
      <button class="card-button">See Source<img src="img/git-btn.svg" alt=""></button>
    </a>
  </div>
     
  </div>
`;
}

displayFeachuredPost();

// Opening the window
const btn = document.getElementsByClassName('card-btn-open');
const popUpWrapper = document.getElementById('pop_up_wrapper');
cards.forEach((card) => {
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      if (i === card.id) {
        let res = '';
        popUpWrapper.style.display = 'block';
        res
        += `<div class="content-card-wrap">
         <div class="content-card">
          <div class="close-button card-x"><img src="img/popup-x.svg" alt="X"></div>
          <div class="cc-h-wrap">
            <h2 class="card-h">${card.title}</h2>
            <ul class="card-lang-wrapper">
            <li>${card.tech[0]}</li> 
            <li>${card.tech[1]}</li> 
            <li>${card.tech[2]}</li>
            </ul>
          </div>
          <div class="card-content">
            <div class="card-img-w">
              <img src="${card.img}" alt="card-preview" class="card-img">
            </div>
            <div class="card-cb-wrap">
              <p class="card-p des">
              ${card.descriptionPopup}
              </p>
              <div class="card-b-wrap">
                <a href= "${card.livePreview}" class="card-link">
                  <button class="card-button" >See Live <img src="img/ellipse.svg" alt="" ></button>
                </a>
                <a href= "${card.sourceURL}"class="card-link">
                  <button class="card-button">See Source<img src="img/git-btn.svg" alt=""></button>
                </a>
              </div>
            </div>
         </div>
        </div>
        </div>`;

        popUpWrapper.innerHTML = res;

        // close the card

        const cardX = document.getElementsByClassName('card-x');
        for (let j = 0; j < cardX.length; j += 1) {
          cardX[j].addEventListener('click', () => {
            popUpWrapper.style.display = 'none';
          });
        }
      }
    });
  }
});
