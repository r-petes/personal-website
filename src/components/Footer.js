import { motion } from "framer-motion";
import footerImage from "../assets/footer.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-[#b7aaa6] font-serif">
          Contact Me
        </p>

        <nav className="flex gap-6 text-sm uppercase tracking-widest font-serif">
          <a
            href="https://www.linkedin.com/in/r-petes/"
            className="text-[#ffffff] relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/r-petes"
            className="text-[#ffffff] relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            GitHub
          </a>
        </nav>
      </div>
    </motion.footer>
  );
};

export default Footer;


