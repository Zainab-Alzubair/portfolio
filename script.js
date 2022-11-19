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
  title: 'TO-DO-list App',
  description: "To Do List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.",
  descriptionPopup: "To Do List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. || Technologies: used CURD operation, JavaScript, jest testing , webpack , ES6 modules",
  img: 'img/todolist.png',
  tech: ['html', 'css', 'JavaScript'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/to-do-list',
  livePreview: 'https://zainab-alzubair.github.io/to-do-list/dist/',

},
{
  id: 1,
  title: 'Awesome Book',
  description: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
  descriptionPopup: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list || Technologies: JavaScript, CURD operation , DOM manipulation",
  img: 'img/book.png',
  tech: ['html', 'css', 'JavaScript'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/awesome-books',
  livePreview: 'https://zainab-alzubair.github.io/awesome-books/',

},
{
  id: 2,
  title: 'Tech Academy',
  description: "An online website for a Tech academy that show the available courses and the top instructors.",
  descriptionPopup: "An online website for a Tech academy that show the available courses and the top instructors || created with HTM , CSS , JavaScript",
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
    title: 'LeaderBoard App',
    description: "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external",
    img: 'img/leaderboard.png',
    tech: ['html', 'css', 'javaScript', 'API'],
    btnText: 'See Project',
    sourceURL: 'https://github.com/Zainab-Alzubair/leaderboard',
    livePreview: 'https://zainab-alzubair.github.io/leaderboard/dist/',
  };
  document.getElementById('featured-post').innerHTML = `
  <img class="featured-img" src="img/leaderboard.png">
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
