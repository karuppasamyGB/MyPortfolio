// import { motion } from 'framer-motion';
// import Strings from "../Shared/Strings";
// import './portfolio.scss';

// const letterVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const containerVariants = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// function Contact() {
//   return (
//     <div id="services" className="px-12 mt-12">
//       <div className="contact-container">
//         <div className="dot"></div>
//         <div className="line"></div>
//         <h2 className="heading">{Strings.CONTACT}</h2>
//         <div className="line"></div>
//         <div className="dot"></div>
//       </div>
//       <motion.div
//         className="text-24 font-bold flex"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {Strings.EMAIL.split("").map((char, index) => (
//           <motion.span key={index} variants={letterVariants}>
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>
//       <motion.div
//         className="text-24 font-bold flex"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {Strings.PHONE.split("").map((char, index) => (
//           <motion.span key={index} variants={letterVariants}>
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Contact;