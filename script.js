window.addEventListener('load', () => {
    gsap.from("#title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("#message", { duration: 1, delay: 0.5, y: 50, opacity: 0 });
    gsap.from("#sheep", { duration: 1.5, delay: 1, scale: 0, opacity: 0, ease: "elastic" });
    gsap.from("#children", { duration: 1.5, delay: 1.2, scale: 0, opacity: 0, ease: "elastic" });
    gsap.from(".whatsapp-btn", { duration: 1, delay: 1.8, opacity: 0, y: 20 });
});
