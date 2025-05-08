"use client";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Light", value: "light", icon: <Sun size={16} /> },
    { label: "Dark", value: "dark", icon: <Moon size={16} /> },
    { label: "System", value: "system", icon: <Monitor size={16} /> },
  ];

  const activeOption = options.find((option) => option.value === theme);

  const handleSelect = (value: string) => {
    setTheme(value as never);
    setIsOpen(false); // Collapse the menu after selection
  };

  return (
    <motion.div
      className='fixed top-0 bottom-0 right-0 dark:border dark:border-primary rounded-xl flex backdrop-blur-xs flex-col h-fit my-auto items-center z-50'
      initial={{ translateX: 40 }}
      whileHover={{ translateX: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
    >
      <motion.div
        className='bg-muted p-3 rounded-xl shadow-md overflow-hidden'
        animate={{ height: isOpen ? "150px" : "56px" }} // Adjust height dynamically
        initial={{ height: "56px" }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={`Current theme is ${activeOption?.label}`}
          className='relative px-4 py-2 text-sm rounded-md font-medium transition-all duration-200 bg-accent text-primary dark:text-white hover:text-primary flex items-center gap-2'
        >
          {activeOption?.icon}
          {activeOption?.label}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='mt-2 flex flex-col space-y-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {options
                .filter((option) => option.value !== theme) // Exclude the active theme
                .map(({ label, value, icon }) => (
                  <button
                    key={value}
                    onClick={() => handleSelect(value)}
                    aria-label={`Set theme to ${label}`}
                    className='relative px-4 py-2 text-sm rounded-md font-medium transition-all duration-200 hover:bg-accent dark:text-white hover:text-primary flex items-center gap-2'
                  >
                    {icon}
                    {label}
                  </button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
