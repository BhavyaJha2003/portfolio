import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="mb-32 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Bhavya Jha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10"
        >
          Backend & Systems Developer | Java | DSA | Quantitative Strategy |
          Building scalable and structured applications.
        </motion.p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/BhavyaJha2003"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition"
            />
          </a>

          <a
            href="https://linkedin.com/in/bhavya-j-7468a7259/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition"
            />
          </a>

          <a
            href="mailto:jhab977@gmail.com"
            className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mb-32 relative z-10">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">Imagify</h3>
            <p className="text-gray-400 mb-4">
              Full-stack AI image generation platform with Razorpay payments,
              secure credit management, and dynamic prompt-based functionality.
            </p>
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm"
            >
              View Project <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-zinc-800 hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Quant Strategy Backtesting
            </h3>
            <p className="text-gray-400 mb-4">
              Designed and backtested SMA-based algorithmic trading strategies
              with risk optimization and performance analytics.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
            >
              View Project <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-500 text-sm border-t border-zinc-800 pt-6 relative z-10">
        © {new Date().getFullYear()} Bhavya Jha. Built with React & Tailwind.
      </footer>
    </div>
  );
}
