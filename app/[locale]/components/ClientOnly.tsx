"use client";

import { useEffect, useState } from "react";

interface ClinetOnlyProps {
  children: React.ReactNode;
}
const ClinetOnly: React.FC<ClinetOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>
  
};

export default ClinetOnly;
