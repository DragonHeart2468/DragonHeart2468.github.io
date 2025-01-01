const toggleImage = document.getElementById('toggleImage');
const nextButton = document.getElementById('nextButton');
const textDisplay = document.getElementById('textDisplay');
const audioPlayer = document.querySelector('.audioPlayer');
const backgroundImage = document.getElementById('backgroundImage');
const audioImage = document.getElementById('play-pause-image');
const gameLink = document.getElementById('gameLink');
const contentContainerFade = document.querySelector('.blurred-text-container');

const images = [
    'asset/dark_souls_3_cover.jpg',
    'asset/elden_ring_cover.jpeg',
    'asset/sekiro_cover.png',
    'asset/lies_of_p_cover.jpeg'
];

const texts = [
    // dark souls 3
    `In the decaying kingdom of Lothric, the Age of Fire is fading, 
    threatening to plunge the world into darkness. As the Ashen One,
    you must defeat the Lords of Cinder and decide 
    whether to rekindle the First Flame or let it die.`,
    // elden ring
    `The Lands Between lies fractured after the destruction of the Elden Ring, 
    with its power scattered among corrupted demigods. As a Tarnished, 
    you must gather the shards, confront these rulers, 
    and determine the fate of this shattered world.`,
    // sekiro
    `In Sengoku-era Japan, war and supernatural forces 
    threaten to destroy everything. As the one-armed shinobi Sekiro, 
    you must rescue the Divine Heir 
    and end the curse of immortality tied to his bloodline.`,
    // lies of p
    `The once-thriving steampunk city of Krat has fallen to chaos 
    as rogue puppets terrorize its inhabitants. As Pinocchio, 
    you must uncover the truth of your creation, rescue Geppetto, 
    and shape the destiny of the city through your lies and choices.`
];

const audioFiles = [
    'asset/dark_souls_3_music.mp3',
    'asset/elden_ring_music.mp3',
    'asset/sekiro_music.mp3',
    'asset/lies_of_p_music.mp3'
];

const backgroundImages = [
    'asset/dark_souls_3_background.jpeg',
    'asset/elden_ring_background.png',
    'asset/sekiro_background.jpg',
    'asset/lies_of_p_background.jpeg',
]

const links = [
    'https://store.steampowered.com/app/374320/DARK_SOULS_III/',
    'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',
    'https://store.steampowered.com/app/1627720/Lies_of_P/'
]

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    audioPlayer.src = audioFiles[currentIndex]; // Change the audio source

    toggleImage.classList.add('fade-out');
    textDisplay.classList.add('fade-out');
    backgroundImage.classList.add('fade-out');
    contentContainerFade.classList.add('fade-out');
    nextButton.classList.add('fade-out');

    setTimeout(() => {
        toggleImage.src = images[currentIndex]; // Update the image source
        textDisplay.textContent = texts[currentIndex]; // Update the text
        backgroundImage.src = backgroundImages[currentIndex];
        gameLink.href = links[currentIndex];

        toggleImage.classList.remove('fade-out');
        textDisplay.classList.remove('fade-out');
        backgroundImage.classList.remove('fade-out');
        contentContainerFade.classList.remove('fade-out');
        nextButton.classList.remove('fade-out');
    }, 700);

    if (!document.body.classList.contains('light-mode')) {
        playPauseImage.src = 'asset/music_muted_icon_dark.png'; // Change to your second image
    }
    else {
        playPauseImage.src = 'asset/music_muted_icon_light.png'; // Change to your second image
    }
});

function changeNextButton() {
    const image2 = document.getElementById('nextButton');
    if (document.body.classList.contains('light-mode')) {
        image2.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            image2.src = 'asset/next_button_light.png'; // Change to your second image
            image2.classList.remove('fade-out');
        }, 500);
      } 
      
      else {
        image2.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
          image2.src = 'asset/next_button_dark.png'; // Change to your second image
          image2.classList.remove('fade-out');
        }, 500);
      }
}