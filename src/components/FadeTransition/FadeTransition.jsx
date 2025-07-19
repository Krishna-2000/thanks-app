import React, { useEffect, useState } from "react";
import "./FadeTransition.css";

const FadeTransition = ({ children, trigger }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 600); // 600ms fade
    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <>
      {fade && <div className="fade-overlay"></div>}
      {children}
    </>
  );
};

export default FadeTransition;