import { Github, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <div className="flex justify-between dark:bg-gray-600 mt-7 p-3">
      <div className="flex gap-6">
        <a href="https://github.com/Gintama32" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/furba-sherpa-555785208/" target="_blank">
          <Linkedin />
        </a>
      </div>
      <p>© 2025 Furba Lama Sherpa</p>
    </div>
  );
}
