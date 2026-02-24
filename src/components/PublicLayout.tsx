import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const PublicLayout = () => {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
