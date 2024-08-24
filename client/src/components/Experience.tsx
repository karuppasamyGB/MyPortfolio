// import { motion } from 'framer-motion';
// import './portfolio.scss';
// import Strings from "../Shared/Strings";

// const experiences = [
//   { title: 'Fullstack developer Intern at Innobyte services', description: 'Developed web application using React and Node.js.', link: '' },
// //   { title: 'Frontend Engineer at Company B', description: 'Worked on UI/UX design and implemented features using Angular.', logo: '', link: '' },
//   // Add more experience items as needed
// ];

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// function Experience() {
//   return (
//     <div id="experience" className='px-12 mt-12'>
//       <div className='flex items-center'>
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//         <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
//         <h2 className='text-[24px] font-bold'>{Strings.EXPERIENCE}</h2>
//         <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//       </div>
//       <div className="experience-container flex flex-wrap justify-center items-center gap-8 py-12">
//         {experiences.map((experience, index) => (
//           <motion.div
//             key={index}
//             className="experience-item flex flex-col items-center p-4 border rounded-lg shadow-lg"
//             initial="hidden"
//             animate="visible"
//             variants={itemVariants}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
            
//             <h3 className="text-xl font-medium">{experience.title}</h3>
//             <p className="text-gray-500 text-center">{experience.description}</p>
//             <a href={experience.link} className="text-blue-500 hover:underline mt-2">Show Credential</a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Experience;
