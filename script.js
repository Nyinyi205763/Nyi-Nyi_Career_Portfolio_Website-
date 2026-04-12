AOS.init({ duration: 1000, once: true });

// --- Typewriter Effect ---
const textElement = document.getElementById('typewriter');
const phrases = ["Marketing Specialist","Visual Strategist"];
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
// Chat ပွင့်/ပိတ် လုပ်ရန်
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = (chatBox.style.display === 'none') ? 'flex' : 'none';
}

// Enter ခေါက်ရင် စာပို့ရန်
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// စာပို့ခြင်း logic
function sendMessage() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    const message = input.value.trim();

    if (message !== "") {
        // User Message ပြရန်
        const userDiv = document.createElement('div');
        userDiv.className = 'user-msg';
        userDiv.textContent = message;
        body.appendChild(userDiv);
        
        input.value = ""; // Input ရှင်းပစ်ရန်
        body.scrollTop = body.scrollHeight; // အောက်ဆုံးကို scroll ဆွဲရန်

        // Bot က ပြန်ဖြေတဲ့ ပုံစံလေး (၂ စက္ကန့်အကြာမှာ ပေါ်လာမယ်)
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'bot-msg';
            botDiv.textContent = "Please leave your phone number or email address. I will get back to you soon!";
            body.appendChild(botDiv);
            body.scrollTop = body.scrollHeight;
        }, 1000);
    }
}
// ဖိုင်ရဲ့ အောက်ဆုံးမှာ ဒါလေးကို copy ယူထည့်ပါ
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Blob တွေကို scroll speed မတူဘဲ ရွေ့ခိုင်းတာ
    if(document.querySelector('.blob-1')) {
        document.querySelector('.blob-1').style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    if(document.querySelector('.blob-2')) {
        document.querySelector('.blob-2').style.transform = `translateY(${scrollY * -0.2}px)`;
    }
    if(document.querySelector('.blob-3')) {
        document.querySelector('.blob-3').style.transform = `translateY(${scrollY * 0.1}px)`;
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page ကို Refresh မဖြစ်အောင် တားတာ

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // ဒီနေရာမှာ တကယ့် Database နဲ့ ချိတ်ရမှာဖြစ်ပေမဲ့ အခုတော့ အစမ်းစစ်မယ်
    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
        // အောင်မြင်ရင် တခြား Page ကို လွှတ်ချင်ရင် အောက်က Code သုံးပါ
        // window.location.href = "dashboard.html"; 
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid Username or Password!";
    }
});
