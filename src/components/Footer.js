import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      {/* Floating footer for desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#FDFCF9]/70 backdrop-blur-md border border-[#E8E3DA] px-6 py-3 rounded-full shadow-sm hidden sm:flex items-center gap-6 text-xs uppercase tracking-widest text-[#A68A7B] font-serif"
      >
        <a
          href="#home"
          className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
        >
          Home
        </a>
        <a
          href="#about"
          className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
        >
          About
        </a>
        <a
          href="#cv"
          className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
        >
          CV
        </a>
        <span className="text-[#404140]">© {new Date().getFullYear()} Rachel Peterson</span>
      </motion.div>

      {/* Normal footer for mobile */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#FDFCF9] border-t border-[#E8E3DA] mt-24 sm:hidden"
      >
        <div className="px-6 py-12 flex flex-col items-center text-center gap-5">
          <nav className="flex gap-5 text-sm uppercase tracking-widest text-[#A68A7B] font-serif">
            <a
              href="#home"
              className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
            >
              About
            </a>
            <a
              href="#cv"
              className="no-underline text-[#4A6043] relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#6B5A4F] after:transition-all hover:after:w-full"
            >
              CV
            </a>
          </nav>

          <p className="text-[10px] uppercase tracking-widest text-[#b7aaa6] font-serif pt-2">
            © {new Date().getFullYear()} Rachel Peterson
          </p>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;

