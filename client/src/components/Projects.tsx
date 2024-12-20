import { motion } from 'framer-motion';
import './portfolio.scss';
import Strings from "../Shared/Strings";

const projects = [
  { name: 'Cab Booking Web App', description: '', logo: 'favicon.png', link: 'https://cabbooking-frontend.onrender.com/' },
  { name: 'Book Store Project', description: '', logo: 'Book1.png', link: 'https://book-store-client-1b3l.onrender.com/' },
  // { name: 'Project Three', description: 'Description for project three.', logo: 'path/to/project3-logo.png', link: '#' },
  // { name: 'Project Four', description: 'Description for project four.', logo: 'path/to/project4-logo.png', link: '#' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <div id="projects" className='px-12 mt-12'>
      <div className='flex items-center'>
      <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
      <h2 className='text-[24px] font-bold'>{Strings.PROJECTS}</h2>
      <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
      <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
      <div className="projects-container flex flex-wrap justify-center items-center gap-8 py-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 5, delay: index * 1 }}
          >
            <img src={project.logo} alt={project.name} className="w-20 h-20 mb-4" />
            <h2 className="text-xl font-medium">{project.name}</h2>
            <p className="text-gray-500">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-2">Have a look</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
