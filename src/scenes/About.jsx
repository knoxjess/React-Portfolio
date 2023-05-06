import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="about"
      className="md:flex md:justify-center md:items-center gap-0 md:h-full py-40"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-26 md:20 mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative">
            <img
              alt="me"
              className="transition duration-500 z-10 w-full max-h-[900px] md:max-w-[400px]"
              src="assets/me.jpg"
            />
          </div>
        ) : (
          <img
            alt="me"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/me.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-center">
          About <span className="text-[#F29F05]">Me</span>
          </p>

          <p className="mt-10 mb-1 text-m text-center md:text-center">
          Hello, I'm Jessica, a beginner in software engineering based in Nashville TN.
           I'm passionate about technology and its ability to create solutions to real-world problems.
            I've recently completing my education in cooding and I'm eager to start my career in software engineering.
             While I may be a beginner, I'm constantly learning and expanding my knowledge base.
            In my free time, I enjoy spending time with my twins, which also allows me to develop my creative and critical thinking skills. 
            I'm excited about the endless possibilities that software engineering offers and I'm eager to embark on this journey. 
            If you're looking for a motivated and dedicated beginner in software engineering, I'm your person!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
