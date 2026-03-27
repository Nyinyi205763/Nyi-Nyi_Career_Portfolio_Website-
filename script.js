AOS.init({ duration: 1000, once: true });

// --- Typewriter Effect ---
const textElement = document.getElementById('typewriter');
const phrases = ["Creative Marketer", "Graphic Designer", "Operations Specialist"];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIdx];
    if (textElement) {
        textElement.textContent = isDeleting ? currentPhrase.substring(0, charIdx--) : currentPhrase.substring(0, charIdx++);
        if (!isDeleting && charIdx > currentPhrase.length) { isDeleting = true; setTimeout(type, 2000); }
        else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; setTimeout(type, 500); }
        else { setTimeout(type, isDeleting ? 50 : 100); }
    }
}
type();

// --- Lightbox Logic ---
document.querySelectorAll('.portfolio-grid img').forEach(img => {
    img.onclick = () => { 
        document.getElementById('lightbox').style.display = 'flex'; 
        document.getElementById('lightbox-img').src = img.src; 
    };
});
document.querySelector('.close-btn').onclick = () => { document.getElementById('lightbox').style.display = 'none'; };
window.onclick = (e) => { if(e.target.className === 'lightbox-modal') document.getElementById('lightbox').style.display = 'none'; };
