import React, { useEffect, useRef } from "react";

// Import Components
import ExperienceItem from "../components/ExperienceItem";

// Import Styles
import "../styles/css/experience.css";

// Import Data
import experience from "../assets/data/experience.json";

function Experience() {
  const cardRefs = useRef([]);
  const animatedItems = useRef(new Set()); // Set to track already animated items

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate if the item hasn't been animated before
            if (!animatedItems.current.has(entry.target)) {
              entry.target.classList.add("slide-in");
              animatedItems.current.add(entry.target); // Add to animated set
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the card must be visible to trigger
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div id="experience" className="experience">
      <div className="experience--heading">
        {/* <h1 className="experience--heading--icon">/</h1> */}
        {/* <h1 className="experience--heading--icon">&#8594;</h1> */}
        <h1 className="experience--heading--icon">&#8811;</h1>
        {/* <h1 className="experience--heading--icon">&#8810;</h1> */}
        {/* <h1 className="experience--heading--icon">&#8827;</h1> */}
        {/* <h1 className="experience--heading--icon">&#8826;</h1> */}
        {/* <h1 className="experience--heading--icon">&#8883;</h1> */}
        <div className="width-s"></div>
        <h1 className="experience--heading--text">experience</h1>
        <div className="width-m"></div>
        <div className="experience--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div className="experience--container">
        {experience.map((experienceItem, index) => (
          <ExperienceItem
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            experienceItem={experienceItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;