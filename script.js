document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Typewriter Effect
    const typewriterText = 'Hritik Mandloi';
    let index = 0;
    function typeWriter() {
        if (index < typewriterText.length) {
            document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
