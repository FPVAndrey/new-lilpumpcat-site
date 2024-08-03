document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".header h1", { duration: 1.5, y: -50, opacity: 0 });
    gsap.from(".header p", { duration: 1.5, y: -30, opacity: 0, delay: 0.5 });
    gsap.from(".cta-button", { duration: 1.5, y: 20, opacity: 0, delay: 1 });
    gsap.from(".hero-image img", { duration: 2, scale: 0.5, opacity: 0, delay: 1.5 });

    gsap.utils.toArray(".feature").forEach((feature, i) => {
        gsap.from(feature, { duration: 1.5, y: 50, opacity: 0, delay: i * 0.3, scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }});
    });
});
