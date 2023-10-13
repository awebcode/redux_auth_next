// pages/HomePage.js

import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "NextJs", icon: "css" },
  { name: "MongoDB", icon: "css" },
  // Add more skills as needed
]

const scrollVariants = {
  initial: { opacity: 0, y: 50, scale: 0.2 },
//   animate: { opacity: 1, y: 0, scale: 1 },
  whileInView: { opacity: 1, y: 10, scale: 1.2 },
  transition: { duration: 0.8 },
};

const SkillCard = ({ name, icon, index }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded shadow-lg m-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, x: 500 }}
      whileInView={{ opacity: 1, scale: 1, x: 0,transition:{delay:0.09*index} }}
      transition={{ duration: 1 }}
    //   style={{ transitionDelay: `${index * 0.1}s` }} // Delay based on index
    >
      <div className="text-2xl mb-2">{name}</div>
      <img src={`/icons/${icon}.svg`} alt={name} className="w-12 h-12 mx-auto" />
    </motion.div>
  );
};
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-500 text-white">
      {/* Home Section */}
      <motion.div
        className="section flex flex-col items-center justify-center h-screen"
              variants={scrollVariants}
              initial="initial"
              whileInView="whileInView"
              transition="transition"
              animate="animate"
      >
        <h1 className="text-4xl font-bold mb-4">Home</h1>
        <p className="text-xl">Dummy content for the Home section</p>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="section flex flex-col items-center justify-center h-screen bg-green-400"
         variants={scrollVariants}
              initial="initial"
              whileInView="whileInView"
              transition="transition"
              animate="animate"
      >
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-xl">Dummy content for the About section</p>
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        className="section flex flex-col items-center justify-center h-screen bg-green-300"
         variants={scrollVariants}
              initial="initial"
              whileInView="whileInView"
              transition="transition"
              animate="animate"
      >
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl">Dummy content for the Portfolio section</p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="section flex flex-col items-center justify-center h-screen bg-green-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} index={index} icon={skill.icon} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
