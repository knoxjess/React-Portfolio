import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-20 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-center  mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-[#F29F05]">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          If you're looking for a software engineer who is passionate about web development and has a foundation in programming languages like HTML, CSS, JavaScript, 
          then I believe I am the perfect candidate for the job. I have hands-on experience with a variety of development tools and platforms, including Git, GitHub, GitLab, Heroku, VS Code, and Node.js,
           which has allowed me to design and develop high-quality web applications. I also have experience working with databases such as MySQL and ORMs like Sequelize, as well as front-end frameworks like React.
            This has helped me to create responsive and intuitive user interfaces that are both user-friendly and efficient.
          </p>
          <p className="mt-10 mb-7">
          <a href="https://skillicons.dev">
                     <img alt="icons" src="https://skillicons.dev/icons?i=git,css,github,gitlab,heroku,html,java,js,mysql,react,sequelize,vscode,nodejs" /></a>
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full "
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/girl-working-from-home.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/girl-working-from-home.png" />
          )}
        </div>
      </div>

    </section>
  );
};

export default MySkills;
