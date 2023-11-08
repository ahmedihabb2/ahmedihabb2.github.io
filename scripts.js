
const rainContainer = document.querySelector('.rain-container');


const logos = [
    'logos/cicd-logo.png',
    'logos/grafana.png',
    'logos/aws.png',
    'logos/bash.png',
    'logos/docker.png',
    'logos/kube.png',
    'logos/terraform.png',
    
];


shuffleArray(logos);


function createLogo() {
    const logoPath = logos[Math.floor(Math.random() * logos.length)]; 
    const logo = document.createElement('img');
    logo.src = logoPath;
    logo.alt = 'DevOps Logo'; 
    logo.classList.add('logo');
    logo.style.setProperty('--random-x', Math.random()); 
    logo.style.setProperty('--random-y', -Math.random()); 
    logo.style.animationDelay = `${Math.random() * 2}s`; 
    rainContainer.appendChild(logo);
    logo.addEventListener('animationiteration', () => {
        
        logo.style.setProperty('--random-y', -Math.random());
    });
}


for (let i = 0; i < 25; i++) {
    createLogo();
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
