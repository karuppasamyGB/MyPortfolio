// import ProgressBar from '@ramonak/react-progress-bar';
// import './portfolio.scss';

// const skills = [
//   { name: 'HTML',  progress: 90 },
//   { name: 'CSS',  progress: 85 },
//   { name: 'JavaScript',  progress: 80 },
//   { name: 'React.js', progress: 80 },
//   { name: 'Node.js', progress: 75 },
//   { name: 'MongoDB',  progress: 85 },
//   { name: 'Express',  progress: 75},
//   { name: 'MYSQL',  progress: 75}
// ];

// function Skills() {
//   return (
//     <div className="skills-container">
//       {skills.map((skill, index) => (
//         <div key={index} className="skill-item">
//           <span>{skill.name}</span>
//           <div className="w-96 mt-2">
//             <ProgressBar
//               completed={skill.progress}
//               bgColor='#2896b2'
//               animateOnRender={true}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Skills;
import { useInView } from 'react-intersection-observer';
import ProgressBar from '@ramonak/react-progress-bar';
import './portfolio.scss';

const skills = [
  { name: 'HTML', progress: 90 },
  { name: 'CSS', progress: 85 },
  { name: 'JavaScript', progress: 80 },
  { name: 'React.js', progress: 80 },
  { name: 'Node.js', progress: 75 },
  { name: 'MongoDB', progress: 85 },
  { name: 'Express', progress: 75 },
  { name: 'MYSQL', progress: 75 },
];

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="skills-container" id='skills'>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span>{skill.name}</span>
          <div className="w-96 mt-2">
            <ProgressBar
              completed={inView ? skill.progress : 0}
              bgColor='#16a34a'
              animateOnRender={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
