"use client";

// IMPORTS -
import { useEffect, useState } from "react";
import { hydrateProps } from "./types";

const Hydrate: React.FC<hydrateProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return children;
};

export default Hydrate;
