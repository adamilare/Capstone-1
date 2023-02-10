function mobileMenuClicked() {
  const menu = document.getElementById('mobile-menu-icon');
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-xmark');
  document.getElementById('nav-wrapper').toggleAttribute('hidden');
}

document
  .querySelector('#mobile-menu-icon')
  .addEventListener('click', mobileMenuClicked);

document.querySelectorAll('#mobile-menu-items li').forEach((item) => {
  item.addEventListener('click', mobileMenuClicked);
});

const speakersData = [
  {
    name: 'Dr Adewumi Adeshina',
    title: 'President of the African Development Bank Group',
    about:
      "Akinwumi Adesina is a Nigerian economist, who is currently serving as the President of the African Development Bank. He previously served as Nigeria's Minister of Agriculture and Rural Development.",
    image: '/images/speaker-1.jpg',
  },
  {
    name: 'Ngozi Iweala',
    title: 'Director general of the World Trade Organization',
    about:
      'Ngozi Okonjo-Iweala GCON is a Nigerian economist, who has been serving as the Director-General of the World Trade Organization since March 2021. Notably, she is the first woman and first African to lead the World Trade Organization as Director-General.',
    image: '/images/speaker-2.jpg',
  },
  {
    name: 'Peter Obi',
    title: 'Business man and Former Governor of Anambra State',
    about:
      'Peter Gregory Obi CON is a Nigerian businessman and politician who served as governor of Anambra from March to November 2006, February to May 2007, and June 2007 to March 2014',
    image: '/images/speaker-3.jpg',
  },
  {
    name: 'Nuhu Ribadu',
    title: 'Nigeria policeman',
    about:
      'Mallam Nuhu Ribadu mni is a former Nigerian police officer and politician who was the Chairman of the Petroleum Revenue Task Force and a former Nigerian government anti-corruption official.',
    image: '/images/speaker-4.jpg',
  },
  {
    name: 'Dora Akinyuli',
    title: 'Pharmacist and Government Official',
    about:
      'Dora Nkem Akunyili OFR was the Director-General of National Agency for Food and Drug Administration and Control of Nigeria from 2001 to 2008.',
    image: '/images/speaker-5.jpg',
  },
  {
    name: 'Damilare Adepoju',
    title: 'Programer',
    about:
      'Passionate innovator, serial inventor, visionary with widespread interest in responsible community projects.',
    image: '/images/speaker-6.jpg',
  },
];

function speakers() {
  let contents = '';
  for (let i = 0; i < speakersData.length; i += 1) {
    const {
      name, title, about, image,
    } = speakersData[i];
    contents += `<div class="speaker-item ${i > 1 ? 'extra desktop' : ''}">
            <div class="speaker-img">
                <span class="square-cap"></span>
                <img src="${image}"></img>
            </div>
            <div class="speaker-info">
              <span class="speaker-name">${name}</span>
              <span class="speaker-title">${title}</span>
              <span class="dashed"></span>
              <span class="speaker-about">${about}</span>
            </div>
          </div>`;
  }

  return contents;
}

function makeSpeakers() {
  const elem = document.getElementById('speakers-list');
  elem.innerHTML = speakers();
}

const showMore = document.getElementById('more-speakers');
showMore.onclick = () => {
  const context = showMore.textContent;
  const items = document.querySelectorAll('.speaker-item.extra');
  if (context.includes('Show More')) {
    showMore.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
    items.forEach((item) => {
      item.classList.remove('desktop');
    });
  } else {
    showMore.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
    items.forEach((item) => {
      item.classList.add('desktop');
    });
  }
};

window.onload = () => {
  makeSpeakers();
};
