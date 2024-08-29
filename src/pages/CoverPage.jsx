import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import help from "../assets/broandsis.png";
import man from "../assets/Frame 2.png";
import woman from "../assets/Frame 3.png";

const CoverPage = () => {
  const homeImages = [help, man, woman];

  // State to track the index of the current imagebeing displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to control whether the transition effect is active
  const [isTransitioning, setIsTransitioning] = useState(false);

  // UseEffect hook to handle the image transition logic
  useEffect(() => {
    // Set up an interval to change the images every 6sec
    const animation = setInterval(() => {
      setIsTransitioning(true); // Start the transition effect

      // After 0.5sec, update the current image index and stop the transition effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          // Calculate the next image index (loop back to the first image if at the end)
          return (prevIndex + 1) % homeImages.length;
        });

        setIsTransitioning(false); // End the transition effect
      }, 500);
    }, 2500);
    // Clean up function of setInterval when the component unmount
    return () => {
      clearInterval(animation);
    };
  }, [homeImages.length]); // Dependency array to re-run the effect if the length of homeImages changes

  return (
    <main className="homepage-con">
      <div className="home-content">
        <div className="text-start home-text">
          <h1 className="m-0">
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link className="home-a" to="/tasks">
            Go to My Tasks
          </Link>
        </div>

        {/* ============================== */}
        <div className="home-img">
          <img
            // Applying the "change" className if transitioning is true and removing "chnange" when its false
            className={`illu ${isTransitioning ? "change" : ""}`}
            src={homeImages[currentImageIndex]}
            alt=""
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default CoverPage;
