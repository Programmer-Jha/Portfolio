document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Logic
    const typingSpan = document.getElementById('typing');
    const texts = ["Software Developer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
    let textIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const fullText = texts[textIdx];
        typingSpan.textContent = isDeleting 
            ? fullText.substring(0, charIdx--) 
            : fullText.substring(0, charIdx++);

        if (!isDeleting && charIdx > fullText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIdx < 0) {
            isDeleting = false;
            textIdx = (textIdx + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 40 : 100);
        }
    }
    type();

    // 2. Cursor Follower
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
