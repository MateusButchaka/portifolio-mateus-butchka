const text = "Mateus Gotardi Butchaka"; 
const typingSpan = document.querySelector(".typing-text");

function typeText() {
    let i = 0;
    const interval = setInterval(function() {
        typingSpan.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
        }
    }, 200); 
}
typeText();


