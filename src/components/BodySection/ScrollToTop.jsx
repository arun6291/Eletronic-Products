import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // current route
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      color="primary"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        display: visible ? "flex" : "none",
        zIndex: 1000,
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTop;
