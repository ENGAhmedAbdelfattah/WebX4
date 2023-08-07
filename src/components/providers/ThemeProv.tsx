"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from 'next-themes';

type props = {
  children: React.ReactNode;
};

function ThemeProv({ children }: props) {
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true),[]);
  if(!mounted) return <>{children}</>;

  return (
      <ThemeProvider attribute="class">{children}</ThemeProvider>
  );
}

export default ThemeProv;
