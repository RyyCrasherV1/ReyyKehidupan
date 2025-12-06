// Subscrbe YouTube ReyyXPloiter Zhouu

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Animasi Menulis

const texts = [
    "DEVELOPER",
    "TRUEE HEAVANLY DEMON GOD",
    "PROGAMER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

   }
   
}


// ====== SOUND SYSTEM ======
const menuOpenSound = new Audio("/audio/menu-open.mp3");
const menuCloseSound = new Audio("/audio/menu-close.mp3");

// Play sound saat menu dibuka
function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    menuOpenSound.currentTime = 0;
    menuOpenSound.play();
}

// Play sound saat menu ditutup
function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    menuCloseSound.currentTime = 0;
    menuCloseSound.play();
}

// Subscrbe YouTube ReyyKou
