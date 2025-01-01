function changeImage() {
    const img = document.getElementById("mode-button");
    img.classList.add("fade"); // Start fading out

    setTimeout(() => {
        // Change the image source after fading out
        img.src = img.src.includes("asset/moon_dark_mode.jpg") ? "asset/sun_light_mode.jpg" : "asset/moon_dark_mode.jpg";
        img.classList.remove("fade"); // Fade back in
    }, 500); // Match timeout with CSS transition duration
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        highlightMatches();
    }
});

searchButton.addEventListener('click', highlightMatches);

function highlightMatches() {
    const searchTerm = searchInput.value;
    const content = document.getElementById('searchableContent');

    // Clear previous highlights
    clearHighlights(content);

    if (searchTerm) {
        highlightText(content, searchTerm);
    }
}

function clearHighlights(container) {
    const highlights = container.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.replaceWith(highlight.textContent); // Restore original text
    });
}

function highlightText(container, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    
    // Recursively search through all child nodes
    function searchNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.match(regex)) {
                const span = document.createElement('span');
                span.innerHTML = node.textContent.replace(regex, '<span class="highlight">$1</span>');
                node.replaceWith(span);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (let child of node.childNodes) {
                searchNodes(child);
            }
        }
    }

    // Start searching from the content container
    Array.from(container.childNodes).forEach(searchNodes);
}

document.querySelector('.toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// light-dark mode button
function toggleMode() {
    document.body.classList.toggle('light-mode');
    updateImages();
    changeIcon();
    changeMusicIcon();
    changeNextButton();
}

const image = document.getElementById('image-transition');
let isImageOne = true;

function updateImages() {
    const images = document.querySelectorAll('.toggle-image');
    images.forEach(img => {
        if (document.body.classList.contains('light-mode')) {
          image.classList.add('fade-out');    

        // Wait for the transition to finish before changing the image
          setTimeout(() => {
              image.src = 'asset/sun_light_mode.jpg'; // Change to your second image
              image.classList.remove('fade-out');
          }, 300);
        } 
        
        else {
          image.classList.add('fade-out');    

        // Wait for the transition to finish before changing the image
          setTimeout(() => {
            image.src = 'asset/moon_dark_mode.jpg'; // Change to your second image
            image.classList.remove('fade-out');
          }, 300);
        }
        isImageOne = !isImageOne;
    });
}

function changeIcon() {
    const image2 = document.getElementById('iconMode');
    if (document.body.classList.contains('light-mode')) {
        image2.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            image2.src = 'asset/search_icon_light.png'; // Change to your second image
            image2.classList.remove('fade-out');
        }, 500);
      } 
      
      else {
        image2.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
          image2.src = 'asset/search_icon_dark.png'; // Change to your second image
          image2.classList.remove('fade-out');
        }, 500);
      }
}

document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.fade-in');
    setTimeout(() => {
        element.classList.add('visible'); // Add the class after a delay
    },2000); // 1000 milliseconds = 1 second
});

const audio = document.getElementById('audio');
audio.volume = 0.5;
const playPauseImage = document.getElementById('play-pause-image');

playPauseImage.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        if (!document.body.classList.contains('light-mode')) {
            playPauseImage.src = 'asset/music_icon_dark.png'; // Change to your second image
        }
        else if (document.body.classList.contains('light-mode')) {
            playPauseImage.src = 'asset/music_icon_light.png'; // Change to your second image
        }     
    } 
    else {
        audio.pause();
        if (!document.body.classList.contains('light-mode')) {
            playPauseImage.src = 'asset/music_muted_icon_dark.png'; // Change to your second image
        }
        else if (document.body.classList.contains('light-mode')) {
            playPauseImage.src = 'asset/music_muted_icon_light.png'; // Change to your second image
        }  
    }
});

function changeMusicIcon() {
    const playPauseImage = document.getElementById('play-pause-image');
    if (!document.body.classList.contains('light-mode') && !audio.paused) {
        playPauseImage.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            playPauseImage.src = 'asset/music_icon_dark.png'; // Change to your second image
            playPauseImage.classList.remove('fade-out');
        }, 500);
    }
    else if (!document.body.classList.contains('light-mode') && audio.paused) {
        playPauseImage.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            playPauseImage.src = 'asset/music_muted_icon_dark.png'; // Change to your second image
            playPauseImage.classList.remove('fade-out');
        }, 500);
    } 
    else if (document.body.classList.contains('light-mode') && !audio.paused) {
        playPauseImage.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            playPauseImage.src = 'asset/music_icon_light.png'; // Change to your second image
            playPauseImage.classList.remove('fade-out');
        }, 500);
    }
    else if (document.body.classList.contains('light-mode') && audio.paused) {
        playPauseImage.classList.add('fade-out');    

      // Wait for the transition to finish before changing the image
        setTimeout(() => {
            playPauseImage.src = 'asset/music_muted_icon_light.png'; // Change to your second image
            playPauseImage.classList.remove('fade-out');
        }, 500);
    }
}

/*
to make music stop when page loaded

window.onload = function() {
    const audio = document.getElementById('myAudio');
    audio.pause();
    audio.currentTime = 0; // Optional: Reset to the start
};
*/