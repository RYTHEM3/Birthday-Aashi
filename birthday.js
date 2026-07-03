// ==============================
// TYPEWRITER EFFECT
// ==============================

const message =
`My favourite person deserves something a little more special than just a birthday message.

So I made you your own little corner of the internet.

Happy Birthday ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}

window.onload = typeWriter;


// ==============================
// GOLDEN PARTICLES
// ==============================

const particles = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration = (8 + Math.random() * 8) + "s";

    particle.style.opacity = Math.random();

    particle.style.width =
        particle.style.height =
        (4 + Math.random() * 6) + "px";

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 16000);

}

setInterval(createParticle, 250);


// ==============================
// SURPRISE BUTTON
// ==============================

const surprises = [

"❤️ You are my favourite person.",

"✨ Thank you for existing.",

"🌸 You're prettier than every sunset.",

"💛 You deserve the whole universe.",

"🎂 Happy Birthday Kuchu Puchu!",

"🥹 You make every day brighter.",

"🌙 I hope this year gives you everything you dream of.",

"💖 Never forget how amazing you are.",

"⭐ You will always be special to me."

];

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.onclick = () => {

    const random = Math.floor(Math.random() * surprises.length);

    surpriseMessage.style.opacity = 0;

    setTimeout(() => {

        surpriseMessage.innerHTML = surprises[random];

        surpriseMessage.style.opacity = 1;

    }, 300);

};


// ==============================
// FADE-IN ON SCROLL
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// MOUSE SPARKLES
// ==============================

document.addEventListener("mousemove", e => {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.clientX + "px";

    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 700);

});


// ==============================
// GALLERY EFFECT
// ==============================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mousemove", e => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        img.style.transform =
            `perspective(800px)
            rotateY(${(x - rect.width / 2) / 20}deg)
            rotateX(${-(y - rect.height / 2) / 20}deg)
            scale(1.05)`;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});


// ==============================
// GOLD CURSOR GLOW
// ==============================

const cursor = document.createElement("div");

cursor.id = "cursorGlow";

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// ==============================
// MUSIC BUTTON
// ==============================

const musicButton = document.querySelector(".glassBtn");

const music = new Audio("music.mp3");

music.loop = true;

let playing = false;

musicButton.onclick = () => {

    if (!playing) {

        music.play();

        playing = true;

        musicButton.innerHTML = "Pause Music";

    }

    else {

        music.pause();

        playing = false;

        musicButton.innerHTML = "Play Music";

    }

};


// ==============================
// CONFETTI
// ==============================

function confetti() {

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDelay = Math.random() * 3 + "s";

        piece.style.background =
            ["gold", "#d4af37", "#fff2a8", "#ffffff"][Math.floor(Math.random() * 4)];

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}

surpriseBtn.addEventListener("click", confetti);


// ==============================
// BUTTON RIPPLE
// ==============================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const year = new Date().getFullYear();

console.log("Made with ❤️ in " + year);