
// Input Elements

const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");

// Button

const clearBtn = document.getElementById("clearBtn");

// Display Elements

const greetingText = document.getElementById("greetingText");
const greetingMessage = document.getElementById("greetingMessage");
const ageResult = document.getElementById("ageResult");
const charCount = document.getElementById("charCount");
const timeGreeting = document.getElementById("timeGreeting");

// Greeting Card

const greetingCard = document.getElementById("greetingCard");





 // Premium Live Greeting Animation


userName.addEventListener("input", () => {

    const name = userName.value.trim();

    // Update selected greeting style
    updateGreetingStyle();

    // Update character counter
    charCount.textContent = `${userName.value.length} / 30`;

    // Animate greeting
    gsap.fromTo(
        [greetingText, greetingMessage],
        {
            opacity: 0,
            y: 12
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out"
        }
    );

});




// Age Detection

userAge.addEventListener("input", () => {

    const age = Number(userAge.value);

    if (userAge.value === "") {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>Waiting for your age...</strong>
        `;

    }

    else if (age < 1 || age > 120 || !Number.isInteger(age)) {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>Enter a valid age!</strong>
        `;

    }

    else if (age >= 18) {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>✓ You are an Adult</strong>
        `;

    }

    else {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>✓ You are a Minor</strong>
        `;

    }

});



// Age Detection

userAge.addEventListener("input", () => {

    const age = Number(userAge.value);

    if (userAge.value === "") {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>Waiting for your age...</strong>
        `;

    }

    else if (age < 1 || age > 120 || !Number.isInteger(age)) {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>Enter a valid age!</strong>
        `;

    }

    else if (age >= 18) {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>✓ You are an Adult</strong>
        `;

    }

    else {

        ageResult.innerHTML = `
            <span>AGE STATUS</span>
            <strong>✓ You are a Minor</strong>
        `;

    }

});



// Character Counter

userName.addEventListener("input", () => {

    const currentLength = userName.value.length;

    charCount.textContent = `${currentLength} / 30`;

});



// Dynamic Time Greeting

function updateTimeGreeting() {

    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {

        timeGreeting.textContent = "GOOD MORNING ✦";

    }

    else if (currentHour >= 12 && currentHour < 17) {

        timeGreeting.textContent = "GOOD AFTERNOON ✦";

    }

    else {

        timeGreeting.textContent = "GOOD EVENING ✦";

    }

}

// Run Function

updateTimeGreeting();



// Clear All Functionality

clearBtn.addEventListener("click", () => {

    // Reset Inputs

    userName.value = "";
    userAge.value = "";

    // Reset Greeting

    greetingText.textContent = "Hello, Friend!";

    greetingMessage.textContent =
        "It's wonderful to have you here. Let's create something beautiful.";

    // Reset Age Status

    ageResult.innerHTML = `
        <span>AGE STATUS</span>
        <strong>Waiting for your age...</strong>
    `;

    // Reset Character Counter

    charCount.textContent = "0 / 30";

});



// GSAP Entrance Animation

gsap.from(".navbar", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-label", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
});

gsap.from(".hero h1", {
    y: 45,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
});

gsap.from(".hero p", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    delay: 0.6
});

// Panels Animation

gsap.from(".input-panel", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".preview-panel", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});
// Greeting Text Animation

userName.addEventListener("input", () => {

    gsap.fromTo(
        greetingText,
        {
            opacity: 0,
            y: 12
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        }
    );

});

// Clear Button Animation

clearBtn.addEventListener("click", () => {

    gsap.fromTo(
        greetingCard,
        {
            scale: 0.97
        },
        {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)"
        }
    );

});



// Create Particle Layer

const particleLayer = document.createElement("div");

particleLayer.id = "particlesLayer";

document.body.appendChild(particleLayer);


// Generate 25 Particles

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particleLayer.appendChild(particle);

    gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 1.5 + 0.5
    });

    gsap.to(particle, {

        y: "-=120",
        x: `+=${Math.random() * 80 - 40}`,

        opacity: 0.1,

        duration: Math.random() * 5 + 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: Math.random() * 3

    });

}



// 3D Card Tilt Effect

greetingCard.addEventListener("mousemove", (e) => {

    const rect = greetingCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 18;
    const rotateY = (x - centerX) / 18;

    gsap.to(greetingCard, {

        rotateX: rotateX,
        rotateY: rotateY,

        duration: 0.4,
        ease: "power2.out",

        transformPerspective: 800

    });

});


// Reset Card Position

greetingCard.addEventListener("mouseleave", () => {

    gsap.to(greetingCard, {

        rotateX: 0,
        rotateY: 0,

        duration: 0.7,
        ease: "elastic.out(1, 0.5)"

    });

});


// Magnetic Button Effect

clearBtn.addEventListener("mousemove", (e) => {

    const rect = clearBtn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(clearBtn, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.3,
        ease: "power2.out"
    });

});

clearBtn.addEventListener("mouseleave", () => {

    gsap.to(clearBtn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)"
    });

});




// Create Floating Orbs

const orbOne = document.createElement("div");
const orbTwo = document.createElement("div");

orbOne.className = "background-orb orb-one";
orbTwo.className = "background-orb orb-two";

document.body.append(orbOne, orbTwo);


// Orb One Animation

gsap.to(orbOne, {
    x: 150,
    y: 100,
    scale: 1.4,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// Orb Two Animation

gsap.to(orbTwo, {
    x: -150,
    y: -100,
    scale: 1.3,
    duration: 9,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});



// Greeting Theme Selector

const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove old active class
        themeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        // Get selected theme
        const selectedTheme = button.dataset.theme;

        // Remove previous themes
        greetingCard.classList.remove(
            "theme-gold",
            "theme-rose",
            "theme-emerald",
            "theme-purple"
        );

        // Apply new theme
        greetingCard.classList.add(`theme-${selectedTheme}`);

    });

});



/* Copy Greeting Function */

const copyGreetingBtn = document.getElementById("copyGreetingBtn");

copyGreetingBtn.addEventListener("click", async () => {

    const greeting = `${greetingText.textContent}

${greetingMessage.textContent}`;

    try {

        await navigator.clipboard.writeText(greeting);

        copyGreetingBtn.innerHTML = "✓ Copied Successfully!";

        gsap.fromTo(copyGreetingBtn,
            {
                scale: 0.9
            },
            {
                scale: 1,
                duration: 0.4,
                ease: "back.out(2)"
            }
        );

        setTimeout(() => {
            copyGreetingBtn.innerHTML = "<span>✦</span> Copy Greeting";
        }, 2000);

    } catch (error) {

        alert("Unable to copy greeting. Please try again!");

    }

});



/* Celebration Animation */

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

    const colors = [
        "#D7B98A",
        "#F5EDE0",
        "#E8A0B4",
        "#7DD6AE",
        "#BFA2F5"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("span");

        confetti.classList.add("confetti");

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);

        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;

        gsap.set(confetti, {
            x: startX,
            y: startY,
            scale: Math.random() * 1.2 + 0.5,
            rotation: Math.random() * 360
        });

        gsap.to(confetti, {
            x: startX + (Math.random() - 0.5) * 700,
            y: startY + Math.random() * 650,
            rotation: Math.random() * 720,
            opacity: 0,
            duration: Math.random() * 2 + 1,
            ease: "power2.out",
            onComplete: () => {
                confetti.remove();
            }
        });

    }

});



/* Greeting Style Selector */

const styleButtons = document.querySelectorAll(".style-btn");

const greetingStyles = {

    friendly: {
        title: name => `Hello, ${name}!`,
        message: name => `Great to see you, ${name}! Hope you're having a wonderful day.`
    },

    professional: {
        title: name => `Welcome, ${name}.`,
        message: name => `It's a pleasure to have you here, ${name}.`
    },

    cute: {
        title: name => `Heyyy ${name}! 💗`,
        message: name => `Sending you lots of smiles and happiness, ${name}!`
    },

    funny: {
        title: name => `${name} is here! `,
        message: name => `Warning: Too much awesomeness detected! `
    }

};

let selectedStyle = "friendly";
let lastSurpriseStyle = "friendly";

function updateGreetingStyle() {

    const name = userName.value.trim() || "Friend";

    const style = greetingStyles[selectedStyle];

    greetingText.textContent = style.title(name);
    greetingMessage.textContent = style.message(name);

function updateGreetingStyle() {

    const name = userName.value.trim() || "Friend";

    const style = greetingStyles[selectedStyle];

    greetingText.textContent = style.title(name);
    greetingMessage.textContent = style.message(name);
gsap.from([greetingText, greetingMessage], {
    y: 15,
    opacity: 0,
    duration: 0.7,
    stagger: 0.6,
    ease: "power2.out"
});

    
}

}

styleButtons.forEach(button => {

    button.addEventListener("click", () => {

        styleButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedStyle = button.dataset.style;

        updateGreetingStyle();

        gsap.fromTo(
            [greetingText, greetingMessage],
            { opacity: 0, y: 12 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }
        );

    });

});



/* Surprise Me Feature */

const surpriseBtn = document.getElementById("surpriseBtn");

const greetingStyleNames = [
    "friendly",
    "professional",
    "cute",
    "funny"
];
surpriseBtn.addEventListener("click", () => {

    // Current style ke ilawa baqi styles select karo
    const availableStyles = greetingStyleNames.filter(
        style => style !== selectedStyle
    );

    // Random different style
    const randomIndex = Math.floor(
        Math.random() * availableStyles.length
    );

    const randomStyle = availableStyles[randomIndex];

    // Update selected style
    selectedStyle = randomStyle;

    // Update active button
    styleButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.style === randomStyle
        );
    });

    // Update greeting
    updateGreetingStyle();

    // GSAP animation
    gsap.fromTo(
        greetingCard,
        {
            scale: 0.92,
            rotationY: -8
        },
        {
            scale: 1,
            rotationY: 0,
            duration: 0.7,
            ease: "back.out(1.7)"
        }
    );

});


/* Download Greeting Card as PNG */

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {

    downloadBtn.innerHTML = "⏳ Preparing Card...";
    downloadBtn.disabled = true;

    try {

        const canvas = await html2canvas(greetingCard, {
            scale: 2,
            backgroundColor: null,
            useCORS: true
        });

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.download = "My-Greeting-Card.png";
        link.href = image;

        link.click();

        downloadBtn.innerHTML = "✓ Downloaded!";

        gsap.fromTo(
            downloadBtn,
            { scale: 0.9 },
            {
                scale: 1,
                duration: 0.4,
                ease: "back.out(2)"
            }
        );

    } catch (error) {

        console.error("Download Error:", error);

        alert("Unable to download card. Please try again.");

        downloadBtn.innerHTML = "↓ Download Card";

    }

    downloadBtn.disabled = false;

    setTimeout(() => {
        downloadBtn.innerHTML = "<span>↓</span> Download Card";
    }, 2500);

});


window.addEventListener("load", () => {

    gsap.to("#welcomeScreen", {
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
        onComplete: () => {
            document.getElementById("welcomeScreen").style.display = "none";
        }
    });

});