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
  title: 'Real estate project',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

},
{
  id: 1,
  title: 'School Software System',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

},
{
  id: 2,
  title: 'School Software System',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

},
{
  id: 3,
  title: 'School Software System',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

},
{
  id: 4,
  title: 'School Software System',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

},
{
  id: 5,
  title: 'School Software System',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
  livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',

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
    title: 'Real estate test',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img/s-p.png',
    tech: ['html', 'css', 'bootstrap', 'javaScript'],
    btnText: 'See Project',
    sourceURL: 'https://github.com/Zainab-Alzubair/portfolio',
    livePreview: 'https://zainab-alzubair.github.io/portfolio.github.io/',
  };
  document.getElementById('featured-post').innerHTML = `
  <img class="featured-img" src="img/card1-Placeholder.png">
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
    <a href="#"> <button class="featured-btn card-btn-open">${card1.btnText}</button></a>
     
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
              <p class="card-p">
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