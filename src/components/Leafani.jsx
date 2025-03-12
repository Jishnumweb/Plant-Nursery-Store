
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LeafAnimation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leafPositions = isMobile
    ? {
      home: { top: "18%", left: "50%", scale: 1, rotate: "-10deg", height: "50px"},
      service: { top: "40%", left: "40%", scale: 1.2, rotate: "360deg", height: "60px" },

      category: { top: "40%", left: "35%", scale: 1.2, rotate: "200deg", height: "60px" },
      ads: { top: "85%", left: "40%", scale: 1.5, rotate: "300deg", height: "60px" },
      contact: { top: "55%", left: "35%", scale: 1.5, rotate: "100deg", height: "60px" },
      review: { top: "55%", left: "30%", scale: 1.5, rotate: "90deg", height: "60px" },
      contactss: { top: "55%", left: "40%", scale: 1.5, rotate: "00deg", height: "60px",zIndex:-1 },
      productss: { top: "55%", left: "50%", scale: 1.5, rotate: "90deg", height: "60px" },
      productsss: { top: "85%", left: "40%", scale: 1.5, rotate: "45deg", height: "60px" },
      footer: { top: "188vw", left: "240px", scale: 1.5, rotate: "-10deg", height: "10px" },
      }
    : {
      home: { top: "28%", left: "30%", scale: 1, rotate: "-10deg"},
      service: { top: "40%", left: "40%", scale: 1.2, rotate: "360deg", height: "70px" },
      category: { top: "40%", left: "55%", scale: 1.2, rotate: "200deg", height: "90px" },
      ads: { top: "85%", left: "50%", scale: 1.5, rotate: "300deg", height: "90px" },
      contact: { top: "55%", left: "45%", scale: 1.5, rotate: "100deg", height: "90px" },
      review: { top: "55%", left: "50%", scale: 1.5, rotate: "90deg", height: "90px" },
      contactss: { top: "84%", left: "50%", scale: 1.5, rotate: "-10deg", height: "15px",zIndex:-1 },
      productss: { top: "55%", left: "50%", scale: 1.5, rotate: "90deg", height: "90px" },
      productsss: { top: "85%", left: "60%", scale: 1.5, rotate: "45deg", height: "90px" },
      footer: { top: "710px", left: "852px", scale: 1.5, rotate: "-10deg", height: "10px" },
      };

  return (
    <motion.img
      src="images/leaf.png"
      alt="Leaf"
      className="h-[150px] object-cover fixed"
      style={{
        zIndex: ["", "category", "ads", "contact","review","","productss","productsss"].includes(activeSection)
          ? -1
          : 50,
      }}
      initial={false}
      animate={leafPositions[activeSection]}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
};

export default LeafAnimation;



