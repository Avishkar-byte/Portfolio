
import { Home, Briefcase, FileText, Map, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function PortfolioNav() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Papers", url: "#papers-patents", icon: FileText },
    { name: "Experience", url: "#experience", icon: Map },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} className="sm:absolute" />;
}
