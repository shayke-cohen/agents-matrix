// Matrix Agent Presentation JavaScript

let currentSlide = 1;
const totalSlides = 22;

// Initialize presentation
document.addEventListener('DOMContentLoaded', function() {
    updateSlideCounter();
    updateProgressBar();
    updateNavigationButtons();
    createMatrixRain();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
    
    // Initialize animations for first slide
    initializeSlideAnimations(1);
});

// Navigation functions
function nextSlide() {
    if (currentSlide < totalSlides) {
        hideSlide(currentSlide);
        currentSlide++;
        showSlide(currentSlide);
        updateSlideCounter();
        updateProgressBar();
        updateNavigationButtons();
        initializeSlideAnimations(currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        hideSlide(currentSlide);
        currentSlide--;
        showSlide(currentSlide);
        updateSlideCounter();
        updateProgressBar();
        updateNavigationButtons();
        initializeSlideAnimations(currentSlide);
    }
}

function hideSlide(slideNumber) {
    const slide = document.getElementById(`slide-${slideNumber}`);
    if (slide) {
        slide.classList.remove('active');
    }
}

function showSlide(slideNumber) {
    const slide = document.getElementById(`slide-${slideNumber}`);
    if (slide) {
        slide.classList.add('active');
    }
}

function updateSlideCounter() {
    const counter = document.getElementById('slide-counter');
    if (counter) {
        counter.textContent = `${currentSlide} / ${totalSlides}`;
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const progress = (currentSlide / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSlide === totalSlides;
    }
}

// Keyboard navigation
function handleKeyPress(event) {
    switch(event.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
            event.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
            event.preventDefault();
            previousSlide();
            break;
        case 'Home':
            event.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            event.preventDefault();
            goToSlide(totalSlides);
            break;
    }
}

function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        hideSlide(currentSlide);
        currentSlide = slideNumber;
        showSlide(currentSlide);
        updateSlideCounter();
        updateProgressBar();
        updateNavigationButtons();
        initializeSlideAnimations(currentSlide);
    }
}

// Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.getElementById('matrix-rain');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Create falling characters
    for (let i = 0; i < 50; i++) {
        createMatrixColumn(matrixContainer, characters, i);
    }
}

function createMatrixColumn(container, characters, index) {
    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.left = `${index * 2}%`;
    column.style.top = '-100px';
    column.style.color = '#00ff00';
    column.style.fontSize = '14px';
    column.style.fontFamily = 'monospace';
    column.style.opacity = '0.7';
    column.style.pointerEvents = 'none';
    column.style.zIndex = '-1';
    
    // Random starting delay
    const delay = Math.random() * 5000;
    
    setTimeout(() => {
        animateMatrixColumn(column, characters);
        container.appendChild(column);
    }, delay);
}

function animateMatrixColumn(column, characters) {
    let position = -100;
    const speed = Math.random() * 3 + 1;
    const length = Math.floor(Math.random() * 20) + 10;
    
    function animate() {
        // Update character content
        let content = '';
        for (let i = 0; i < length; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            content += char + '<br>';
        }
        column.innerHTML = content;
        
        // Update position
        position += speed;
        column.style.top = `${position}px`;
        
        // Reset when off screen
        if (position > window.innerHeight + 100) {
            position = -100;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Slide-specific animations
function initializeSlideAnimations(slideNumber) {
    switch(slideNumber) {
        case 1:
            initializeSlide1();
            break;
        case 2:
            initializeSlide2();
            break;
        case 3:
            initializeSlide3();
            break;
        case 4:
            initializeSlide4();
            break;
        case 5:
            initializeSlide5();
            break;
        case 6:
            initializeSlide6();
            break;
        case 7:
            initializeSlide7();
            break;
        case 8:
            initializeSlide8();
            break;
        case 9:
            initializeSlide9();
            break;
        case 10:
            initializeSlide10();
            break;
        case 11:
            initializeSlide11();
            break;
        case 12:
            initializeSlide12();
            break;
        case 13:
            initializeSlide13();
            break;
        case 14:
            initializeSlide14();
            break;
        case 15:
            initializeSlide15();
            break;
        case 16:
            initializeSlide16();
            break;
        case 17:
            initializeSlide17();
            break;
        case 18:
            initializeSlide18();
            break;
        case 19:
            initializeSlide19();
            break;
        case 20:
            initializeSlide20();
            break;
        case 21:
            initializeSlide21();
            break;
        case 22:
            initializeSlide22();
            break;
    }
}

// Slide 1: Wake Up Neo
function initializeSlide1() {
    const phoneRing = document.querySelector('#slide-1 .phone-ring');
    if (phoneRing) {
        // Add phone ringing sound effect (visual)
        setTimeout(() => {
            phoneRing.style.animation = 'ring 0.5s infinite';
        }, 2000);
    }
}

// Slide 2: Speaker Introduction
function initializeSlide2() {
    // Speaker introduction animations
    const profilePic = document.querySelector('#slide-2 .profile-pic');
    const bioLines = document.querySelectorAll('#slide-2 .bio-line');
    const readyText = document.querySelector('#slide-2 .ready-text');
    
    if (profilePic) {
        // Add profile picture glow effect
        setTimeout(() => {
            profilePic.style.animation = 'profileGlow 3s ease-in-out infinite';
        }, 500);
    }
    
    // Animate bio lines sequentially
    bioLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 1000 + (index * 300));
    });
    
    // Animate ready text
    if (readyText) {
        setTimeout(() => {
            readyText.style.animation = 'typing 3s steps(40, end) forwards';
        }, 3000);
    }
}

// Slide 3: Follow the White Rabbit
function initializeSlide3() {
    const rabbit = document.querySelector('#slide-3 .white-rabbit');
    if (rabbit) {
        // Add trail effect
        let trail = [];
        setInterval(() => {
            const rect = rabbit.getBoundingClientRect();
            trail.push({x: rect.left, y: rect.top, time: Date.now()});
            
            // Remove old trail points
            trail = trail.filter(point => Date.now() - point.time < 1000);
        }, 100);
    }
}

// Slide 4: There is No Spoon
function initializeSlide4() {
    const spoon = document.querySelector('#slide-4 .spoon');
    if (spoon) {
        // Add reality distortion effect
        setTimeout(() => {
            spoon.style.filter = 'blur(2px)';
            setTimeout(() => {
                spoon.style.filter = 'none';
            }, 1000);
        }, 2000);
    }
}

// Slide 5: What is the Matrix
function initializeSlide5() {
    const scanner = document.querySelector('#slide-5 .agent-scanner');
    if (scanner) {
        // Trigger agent detection
        setTimeout(() => {
            const detectionText = scanner.querySelector('.detection-text');
            if (detectionText) {
                detectionText.style.color = '#ff0000';
                detectionText.style.animation = 'blink 0.3s infinite';
            }
        }, 3000);
    }
}

// Slide 6: The Architect
function initializeSlide6() {
    const pillars = document.querySelectorAll('#slide-6 .pillar');
    pillars.forEach((pillar, index) => {
        setTimeout(() => {
            pillar.style.animation = 'riseUp 1s ease-out forwards';
        }, index * 500);
    });
}

// Slide 7: The Oracle Speaks
function initializeSlide7() {
    const predictions = document.querySelectorAll('#slide-7 .prediction');
    predictions.forEach((prediction, index) => {
        setTimeout(() => {
            prediction.style.opacity = '1';
            prediction.style.transform = 'scale(1.1)';
            setTimeout(() => {
                prediction.style.transform = 'scale(1)';
            }, 200);
        }, (index + 1) * 800);
    });
}

// Slide 8: The Conversation
function initializeSlide8() {
    const chatBubbles = document.querySelectorAll('#slide-8 .chat-bubble');
    chatBubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, index * 1000);
    });
}

// Slide 8: Loading the Program
function initializeSlide8() {
    const progressFill = document.querySelector('#slide-8 .progress-fill');
    if (progressFill) {
        progressFill.style.animation = 'loading 3s ease-in-out infinite';
    }
}

// Slide 9: The Conversation
function initializeSlide9() {
    const chatBubbles = document.querySelectorAll('#slide-9 .chat-bubble');
    chatBubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, index * 1000);
    });
}

// Slide 10: The Upgrade
function initializeSlide10() {
    const transformation = document.querySelector('#slide-10 .transformation');
    if (transformation) {
        setTimeout(() => {
            const before = transformation.querySelector('.before');
            const after = transformation.querySelector('.after');
            if (before && after) {
                before.style.opacity = '0.3';
                after.style.opacity = '1';
            }
        }, 2000);
    }
}

// Slide 11: The Arsenal
function initializeSlide11() {
    const tools = document.querySelectorAll('#slide-11 .tool');
    tools.forEach((tool, index) => {
        setTimeout(() => {
            tool.style.transform = 'scale(1.05)';
            tool.style.boxShadow = '0 0 20px #00ff00';
            setTimeout(() => {
                tool.style.transform = 'scale(1)';
                tool.style.boxShadow = 'none';
            }, 300);
        }, index * 200);
    });
}

// Slide 12: Agent Smith vs The Agents
function initializeSlide12() {
    const smiths = document.querySelectorAll('#slide-12 .smith');
    smiths.forEach((smith, index) => {
        setTimeout(() => {
            smith.style.transform = 'scale(1)';
            smith.style.opacity = '1';
        }, index * 500);
    });
}

// Slide 12: The Loop
function initializeSlide12() {
    const loopSteps = document.querySelectorAll('#slide-12 .loop-step');
    let currentStep = 0;
    
    setInterval(() => {
        loopSteps.forEach(step => step.style.background = 'rgba(0, 255, 0, 0.1)');
        loopSteps[currentStep].style.background = 'rgba(0, 255, 0, 0.3)';
        currentStep = (currentStep + 1) % loopSteps.length;
    }, 1000);
}

// Slide 13: Agent Smith vs The Agents
function initializeSlide13() {
    const smiths = document.querySelectorAll('#slide-13 .smith');
    smiths.forEach((smith, index) => {
        setTimeout(() => {
            smith.style.transform = 'scale(1)';
            smith.style.opacity = '1';
        }, index * 500);
    });
}

// Slide 14: Red Pill or Blue Pill
function initializeSlide14() {
    // Pills are already interactive via onclick
}

// Slide 14: The One
function initializeSlide14() {
    const skills = document.querySelectorAll('#slide-14 .skill');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        }, index * 200);
    });
}

// Slide 15: Red Pill or Blue Pill
function initializeSlide15() {
    // Pills are already interactive via onclick
}

// Slide 16: Welcome to the Real World
function initializeSlide16() {
    const wixLogo = document.querySelector('#slide-16 .wix-logo');
    if (wixLogo) {
        wixLogo.style.animation = 'glow 2s infinite';
    }
}

// Slide 17: The Resistance
function initializeSlide17() {
    const steps = document.querySelectorAll('#slide-17 .step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.transform = 'scale(1.05)';
            setTimeout(() => {
                step.style.transform = 'scale(1)';
            }, 200);
        }, index * 500);
    });
}

// Slide 18: The Matrix Reloaded
function initializeSlide18() {
    const rocket = document.querySelector('#slide-18 .evolution-animation');
    if (rocket) {
        rocket.style.animation = 'launch 2s ease-in-out infinite';
    }
}

// Slide 19: System Anomaly Detected
function initializeSlide19() {
    const alertBanner = document.querySelector('#slide-19 .alert-banner');
    if (alertBanner) {
        alertBanner.style.animation = 'alertBlink 0.5s infinite';
    }
}

// Slide 20: The Prophecy
function initializeSlide20() {
    const visionItems = document.querySelectorAll('#slide-20 .vision-item');
    visionItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 700);
    });
}

// Slide 21: Exit the Matrix
function initializeSlide21() {
    const takeaways = document.querySelectorAll('#slide-21 .key-takeaways li');
    const nextSteps = document.querySelectorAll('#slide-21 .next-steps li');
    
    takeaways.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    nextSteps.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, (takeaways.length + index) * 300);
    });
}

// Slide 22: Thank You & Questions
function initializeSlide22() {
    const redPill = document.querySelector('#slide-22 .red-pill-taken');
    const questionsTitle = document.querySelector('#slide-22 .questions-title');
    const scanner = document.querySelector('#slide-22 .matrix-scanner');
    
    if (redPill) {
        setTimeout(() => {
            redPill.style.animation = 'pillGlow 2s ease-in-out infinite';
        }, 500);
    }
    
    if (questionsTitle) {
        setTimeout(() => {
            questionsTitle.style.animation = 'questionPulse 3s ease-in-out infinite';
        }, 1000);
    }
    
    if (scanner) {
        setTimeout(() => {
            const scannerLine = scanner.querySelector('.scanner-line');
            if (scannerLine) {
                scannerLine.style.animation = 'scannerSweep 3s infinite';
            }
        }, 1500);
    }
}

// Pill choice interaction
function choosePill(color) {
    const resultDiv = document.getElementById('choice-result');
    if (!resultDiv) return;
    
    if (color === 'blue') {
        resultDiv.className = 'choice-consequence blue-choice';
        resultDiv.innerHTML = `
            <div>
                <strong>Blue Pill Chosen</strong><br>
                You remain in comfortable ignorance.<br>
                Agents will still transform the world around you,<br>
                but you won't see it coming.
            </div>
        `;
    } else if (color === 'red') {
        resultDiv.className = 'choice-consequence red-choice';
        resultDiv.innerHTML = `
            <div>
                <strong>Red Pill Chosen</strong><br>
                Welcome to the real world of AI agents!<br>
                You now see the Matrix for what it is:<br>
                A world where agents are everywhere.
            </div>
        `;
    }
    
    // Add glitch effect
    resultDiv.style.animation = 'glitch 0.5s ease-in-out';
    setTimeout(() => {
        resultDiv.style.animation = 'none';
    }, 500);
}

// Terminal typing effect
function typeText(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Glitch effect for text
function glitchText(element, duration = 2000) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const interval = setInterval(() => {
        let glitchedText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.1) {
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += originalText[i];
            }
        }
        element.textContent = glitchedText;
    }, 50);
    
    setTimeout(() => {
        clearInterval(interval);
        element.textContent = originalText;
    }, duration);
}

// Add sound effects (visual feedback)
function playSound(type) {
    // Since we can't play actual audio without user interaction,
    // we'll create visual feedback instead
    const soundIndicator = document.createElement('div');
    soundIndicator.style.position = 'fixed';
    soundIndicator.style.top = '10px';
    soundIndicator.style.right = '10px';
    soundIndicator.style.background = '#00ff00';
    soundIndicator.style.color = '#000';
    soundIndicator.style.padding = '5px 10px';
    soundIndicator.style.borderRadius = '5px';
    soundIndicator.style.fontSize = '12px';
    soundIndicator.style.zIndex = '9999';
    soundIndicator.style.animation = 'fadeIn 0.3s ease-in-out';
    
    switch(type) {
        case 'beep':
            soundIndicator.textContent = '♪ BEEP';
            break;
        case 'whoosh':
            soundIndicator.textContent = '♪ WHOOSH';
            break;
        case 'glitch':
            soundIndicator.textContent = '♪ GLITCH';
            break;
        default:
            soundIndicator.textContent = '♪ SOUND';
    }
    
    document.body.appendChild(soundIndicator);
    
    setTimeout(() => {
        soundIndicator.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => {
            document.body.removeChild(soundIndicator);
        }, 300);
    }, 1000);
}

// Add CSS for sound indicator animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            previousSlide();
        }
    }
}

// Preload animations and effects
function preloadEffects() {
    // Preload any heavy animations or effects here
    console.log('Matrix effects loaded and ready...');
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', preloadEffects);

// Add fullscreen support
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Add F11 key support for fullscreen
document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
        event.preventDefault();
        toggleFullscreen();
    }
});

// Auto-advance slides (optional - can be enabled for demo mode)
let autoAdvance = false;
let autoAdvanceInterval;

function startAutoAdvance(intervalMs = 30000) {
    if (autoAdvance) return;
    
    autoAdvance = true;
    autoAdvanceInterval = setInterval(() => {
        if (currentSlide < totalSlides) {
            nextSlide();
        } else {
            stopAutoAdvance();
        }
    }, intervalMs);
}

function stopAutoAdvance() {
    autoAdvance = false;
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
    }
}

// Add presentation timer
let presentationStartTime = Date.now();

function getPresentationTime() {
    const elapsed = Date.now() - presentationStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update timer every second (optional display)
setInterval(() => {
    // Could display timer if needed
    // console.log('Presentation time:', getPresentationTime());
}, 1000);

// Export functions for global access
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.choosePill = choosePill;
window.goToSlide = goToSlide;
window.toggleFullscreen = toggleFullscreen;
window.startAutoAdvance = startAutoAdvance;
window.stopAutoAdvance = stopAutoAdvance; 