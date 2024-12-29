import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <motion.section
        id={idName} // Ensure smooth scrolling target
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-transparent ">
        <span className="hash-span"></span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
