import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        <i class="ti-link">click to view</i>
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-[#F29F05]">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-15">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-[#F29F05]
              max-w-[600px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
           “Don’t wait for inspiration. It comes while working." - Henri Matisse
          </div>
          <a href="https://humor-me-daily.herokuapp.com/"><Project title="Project 1" />Humor-Me-Daily</a>
          <a href="https://restaurant-dotation-app.herokuapp.com/"><Project title="Project 2" />Shared Lunch App</a>

          {/* ROW 2 */}
          <a href="https://knoxjess.github.io/M.IPHY/"><Project title="Project 3" />M.IPHY-Movie Gifs</a>
          <a href="https://knoxjess.github.io/weather-Third-Party-APIs/"><Project title="Project 4" />Weather-Third-Party-APIs</a>
          <a href="https://github.com/knoxjess/Social-Network-API"><Project title="Project 5" />Social-Network-API</a>
          {/* ROW 3 */}
          <a href="https://fuzzy-giggle13.herokuapp.com/"><Project title="Project 6" />Note Taker</a>
          <a href="https://knoxjess.github.io/CoadingQuizchallenge-4/"><Project title="Project 7" />Coading-Quiz</a>
          <div
            className="flex justify-center text-center items-center p-10 bg-[#F29F05]
              max-w-[600px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
           “The future depends on what you do today.” — Mahatma Gandhi 
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
