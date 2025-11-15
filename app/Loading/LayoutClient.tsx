"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent any flash of content
    document.body.style.overflow = "hidden";
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);

    return () => {
      clearTimeout(loadingTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}