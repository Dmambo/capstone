const ham = document.querySelector(".ham");
const list = document.querySelector(".list_nav");
const head = document.querySelector('.head')
ham.addEventListener('click', () => {
    head.classList.toggle('active');
});

list.addEventListener('click', () => {
    head.classList.toggle('active');
});


// Adding the feature speakers dynamically 

// declaring a div shorcut function 



//   declaration of object 

const speakerData = [
    {
        id: 'speaker1',
      Image: './images/speaker1.jpg',
      Name: 'Daniel Xavier',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
        id: 'speaker2',
      Image: './images/speaker2.jpg',
      Name: 'Dziana Hasanbekava',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
        id: 'speaker3',
      Image: './images/speaker3.jpg',
      Name: 'ketut-subiyanto',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
        id: 'speaker4',
      Image: './images/speaker4.jpg',
      Name: 'Kilnan Chon',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
        id: 'speaker5',
      Image: './images/speaker5.jpg',
      Name: 'Anna Nekrashevich',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
        id: 'speaker6',
      Image: './images/speaker6.jpg',
      Name: 'Ryan Mclkley',
      Work: 'Professor of Entreprenuer studies',
      Quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    
];

function iDiv(f = 'div') {
    if (!f) {
      f = 'div';
    }
    return document.createElement(f);
  };

function featureSpeakers() {
    const speakers = document.getElementById('grid_speaker');
    speakerData.forEach((speaker) => {
        // create a parent div 
        const speak = iDiv();
        speak.classList.add('speaker');
        
        // create and image tag
        const images = iDiv();
        images.classList.add('speaker-img');
        images.innerHTML = `<img class='speaker-img' src='${speaker.Image}' alt='${speaker.Name}'/>`;
        
        
        // create detail tag 
        const detail = iDiv();
        detail.classList.add('details');

        // create name tag
        const name = iDiv('h2');
        name.classList.add('names');
        name.innerText = speaker.Name;
        
        // create work tag
        const work = iDiv('h4');
        work.classList.add('work');
        work.innerText = speaker.Work;

        // create quate tag 
        const quote = iDiv('p');
        quote.classList.add('quote');
        quote.innerText = speaker.Quote;

        detail.append(name, work, quote);
        speak.append(images, detail)
        speakers.appendChild(speak);
    });
    

}

window.onload = () => {
    featureSpeakers();
};