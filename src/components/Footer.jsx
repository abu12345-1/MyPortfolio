import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left Text */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Abubucker. Built with React & Tailwind.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
        <FaGithub size={20} />
      </a> */}
          <a href="https://www.linkedin.com/in/abubucker-j" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin size={20} />
          </a>
          {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
        <FaTwitter size={20} />
      </a> */}
        </div>
      </div>
    </footer>)
}


