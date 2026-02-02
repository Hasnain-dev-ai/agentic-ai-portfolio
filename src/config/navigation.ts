export type NavItem = {
  name: string;
  path: string;
  icon?: string;
};

export const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: "Home" },
  { name: "Projects", path: "/projects", icon: "Layout" },
  { name: "Case Studies", path: "/case-studies", icon: "FileText" },
  { name: "Services", path: "/services", icon: "Cpu" },
  { name: "Skills", path: "/skills", icon: "Zap" },
  { name: "About", path: "/about", icon: "User" },
  { name: "Blog", path: "/blog", icon: "BookOpen" },
  { name: "Legacy", path: "/legacy", icon: "History" },
  { name: "Contact", path: "/contact", icon: "Send" },
];