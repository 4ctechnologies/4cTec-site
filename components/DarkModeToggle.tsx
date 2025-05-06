"use client";
// components/ThemeToggle.tsx
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, isDark } = useTheme();

  const options = [
    { label: "Light", value: "light", icon: <Sun size={16} /> },
    { label: "Dark", value: "dark", icon: <Moon size={16} /> },
    { label: "System", value: "system", icon: <Monitor size={16} /> },
  ];

  return (
    <div className='flex items-center space-x-2 bg-muted p-2 rounded-xl shadow-sm'>
      {options.map(({ label, value, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value as any)}
          className='relative px-3 py-2 text-sm rounded-md font-medium transition hover:bg-accent'
        >
          {theme === value && (
            <motion.div
              layoutId='themeToggle'
              className='absolute inset-0 bg-accent rounded-md z-0'
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
          <span className='relative z-10 flex items-center gap-1'>
            {icon}
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
