document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });
    gsap.from(".hero h2", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".hero p", { duration: 1.5, x: -100, opacity: 0, delay: 1 });
    gsap.from(".cta-button", { duration: 1, scale: 0.5, opacity: 0, delay: 1.5 });

    gsap.utils.toArray(".feature").forEach((feature, i) => {
        gsap.from(feature, { duration: 1, y: 100, opacity: 0, delay: i * 0.3, scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }});
    });

    gsap.utils.toArray(".team-member").forEach((member, i) => {
        gsap.from(member, { duration: 1, scale: 0.5, opacity: 0, delay: i * 0.3, scrollTrigger: {
            trigger: member,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }});
    });
});
