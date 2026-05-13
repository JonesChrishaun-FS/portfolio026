"use client";
import { HomePage } from "./pages/home";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Contact } from "./pages/contact";
import { Footer } from "@/components/footer";
import { ProjectWork } from "./pages/work";

export default function Home() {
  return (
    <div>
      <HomePage />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Featured Work */}
      <ProjectWork />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
