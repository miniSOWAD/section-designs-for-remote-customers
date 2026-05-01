gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // 1. Unhide the section (prevents FOUC)
    gsap.set([".featured-works", ".cursor-dot", ".cursor-circle"], { visibility: "visible" });

    // --- Part A: Custom Cursor Follower ---
    const dot = document.querySelector(".cursor-dot");
    const circle = document.querySelector(".cursor-circle");

    if (dot && circle) {
        window.addEventListener("mousemove", (e) => {
            // dot moves instantly
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0
            });
            // circle has lag (power2.out creates inertia)
            gsap.to(circle, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }


    // --- Part B: The Pinned ScrollTrigger Timeline ---
    // The design and slanted effect are handled by CSS clip-path. The animation here is translation.
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".featured-works",
            pin: true,           // CAPTURES VERTICAL SCROLL
            scrub: 1.2,          // Smooth 1.2s lag on the scrub
            start: "top top",    // Triggers when section top hits viewport top
            end: "bottom 30%",   // Pins for a certain vertical distance
            // We're using standard toggleActions but on a scrubbing timeline, 
            // 'play none none reverse' is implied by scrolling up/down.
        }
    });

    // Header Text animation (Global fade & slight move up)
    tl.from([".title", ".meta"], {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
    }, 0);

    // 4. Center Card: Scale (zoom-in) and smooth reveal (triggers before side cards)
    tl.from(".center-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
    }, 0.2);

    // 5. Side Cards: Slide in from opposite directions + skew
    tl.from(".left-card", {
        x: -120,    // More dramatic translation
        skewX: 10,  // Reverted to pronounced skew from screenshot
        rotation: -5, // More rotation
        opacity: 0,
        duration: 1.8, // Slower reveal for premium feel
        ease: "power4.out"
    }, 0.4); // Starts slightly after center card

    tl.from(".right-card", {
        x: 120,
        skewX: -10,
        rotation: 5,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out"
    }, 0.4);

    // Text reveal within cards (staggered slightly after their cards arrive)
    tl.from([".card-content", ".card-meta-tags"], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
    }, 0.6);


    // --- Part C: Hover Interactions (Tilt & Zoom/Parallax effect) ---
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const img = card.querySelector("img");
        
        if(img) {
            card.addEventListener("mouseenter", () => {
                // Parallax zoom on image
                gsap.to(img, {
                    scale: 1.08,
                    duration: 0.6,
                    ease: "power2.out"
                });
                // Slightly tilt/rotate the whole card on hover
                gsap.to(card, {
                    rotation: card.classList.contains("left-card") ? -2 : 2,
                    duration: 0.6,
                    ease: "power2.out"
                });
                // If it's a side card, make sure it stays below center card depth
                if (card.classList.contains("side-card")) {
                    gsap.set(card, { zIndex: 3 }); 
                }
            });

            card.addEventListener("mouseleave", () => {
                // Reset image scale
                gsap.to(img, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out"
                });
                // Reset card rotation (preserving static CSS rotation)
                gsap.to(card, {
                    rotation: card.classList.contains("left-card") ? -1 : (card.classList.contains("center-card") ? 0 : 1),
                    duration: 0.6,
                    ease: "power2.out"
                });
                // Reset side card depth
                if (card.classList.contains("side-card")) {
                    gsap.set(card, { zIndex: 2 }); 
                }
            });
        }
    });
});