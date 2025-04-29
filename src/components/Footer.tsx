import { Github, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <div className="flex justify-between dark:bg-gray-600 mt-7 p-3">
      <div className="flex gap-6">
        <Github />
        <Linkedin />
      </div>
      <p>© 2025 Furba Lama Sherpa</p>
    </div>
  );
}
