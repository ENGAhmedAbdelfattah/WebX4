"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
type props = {
  name: string;
};

function ThemeSwitcher({ name }: props) {
  const [mounted, setMounted] = useState(false);
  const [finishFirstEffect, setFinishFirstEffect] = useState(false);
  const { theme, setTheme, systemTheme }: any = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme(systemTheme);
    setFinishFirstEffect(true);
  }, []);
  useEffect(() => {
    if (finishFirstEffect) setTheme(theme || systemTheme);
  }, [finishFirstEffect, theme, systemTheme, setTheme]);

  if (!mounted) {
    return null;
  }

  let iconTheme = <BsSun size={25} cursor="pointer" className={name} onClick={() => setTheme("light")}/>;
  if(theme) {
    iconTheme = theme === "dark" ? (
      <BsSun
        size={25}
        cursor="pointer"
        className={name}
        onClick={() => setTheme("light")}
      />
    ) : (
      <FiMoon
        size={25}
        cursor="pointer"
        className={name}
        onClick={() => setTheme("dark")}
      />
    )
  }else {
    iconTheme = systemTheme === "dark" ? (
      <BsSun
        size={25}
        cursor="pointer"
        className={name}
        onClick={() => setTheme("light")}
      />
    ) : (
      <FiMoon
        size={25}
        cursor="pointer"
        className={name}
        onClick={() => setTheme("dark")}
      />
    );
  }
  return (
    <>
      {iconTheme}
    </>
  );
}

export default ThemeSwitcher;

{
  /*
<select value={theme} onChange={e => setTheme(e.target.value)}>
  <option value="system">System</option>
  <option value="dark">Dark</option>
  <option value="light">Light</option>
</select>
*/
}
