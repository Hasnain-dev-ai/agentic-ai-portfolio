// components/CoolBeansButton.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import styles from "./CoolBeansButton.module.css"
import { cn } from "@/lib/utils"; // If you use cn for conditional classes

interface CoolBeansButtonProps {
  text: string;
  href: string; // This button will always be a link
  children?: ReactNode; // Optional: to pass an icon or other elements inside
  className?: string; // Optional: for additional Tailwind classes if needed
}

const CoolBeansButton: React.FC<CoolBeansButtonProps> = ({ text, href, children, className }) => {
  return (
    <Link href={href} passHref>
      <div className={cn(styles.coolBeans, className)}>
        {text}
        {children} {/* Render any passed children (e.g., icon) */}
      </div>
    </Link>
  );
};

export default CoolBeansButton;