
// function Header() {
//   return (
//     <div className="header-container">
//       <div className="mail-icon-container">
//         <a
//           href="mailto:itsmekaruppasamy@gmail.com"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Header;
///20
// function Header() {
//   const menu = [
//     {
//       id: 1,
//       name: "HOME",
//     },
//     {
//       id: 2,
//       name: "SKILLS",
//     },
//     {
//       id: 3,
//       name: "PROJECTS",
//     },
//   ];
//   return (
//     <div className="flex items-center fixed
//     w-full justify-between border-b-[1px] bg-white">
//       <div className="mail-icon-container">
//         <a
//           href="mailto:itsmekaruppasamy@gmail.com"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//             />
//           </svg>
//         </a>
//       </div>
//       <div className="hidden md:flex gap-14">
//         {menu.map((item,index) => (
//           <div key={index}
//             className="cursor-pointer"
//           >
//             <h2>{item.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Header;
//20 4 0 clock final
// function Header() {
//   return (
//     <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white">
//       <div className="mail-icon-container">
//         <a href="mailto:itsmekaruppasamy@gmail.com">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//             />
//           </svg>
//         </a>
//       </div>

//       {/* Navigation Menu */}
//       <div className="hidden md:flex gap-14 text-center">
//         <div className="cursor-pointer">
//           <a href="#">
//             <h2 className="text-center">HOME</h2>
//           </a>
//         </div>
//         <div className="cursor-pointer">
//           <a href="#skills">
//             <h2 className="text-center">SKILLS</h2>
//           </a>
//         </div>
//         <div className="cursor-pointer">
//           <a href="#projects">
//             <h2 className="text-center">PROJECTS</h2>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

// function Header() {
//   const menu = [
//     {
//       id: 1,
//       name: "HOME",
//     },
//     {
//       id: 2,
//       name: "SKILLS",
//     },
//     {
//       id: 3,
//       name: "PROJECTS",
//     },
//     {
//       id: 4,
//       name: "CONTACT",
//     },
//   ];
//   return (
//     <div className="flex items-center fixed
//     w-full justify-between border-b-[1px] bg-white">
//       <div
//         className="w-[90px] h-[90px]
//         bg-black"
//       >
//         <img src="/logo.png" className="p-7" />
//       </div>
//       <div className="hidden md:flex gap-14">
//         {menu.map((item,index) => (
//           <div key={index}
//             className="cursor-pointer
//                 hover:underline font-medium"
//           >
//             <h2>{item.name}</h2>
//           </div>
//         ))}
//       </div>
//       <div
//         className="w-[90px] h-[90px]
//         bg-red-500 flex justify-center items-center"
//       >
//         <a href="mailto:itsmekaruppasamy@gmail.com">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-10 h-10 text-white"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//           />
//         </svg>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Header;
//20 time 4-16
// function Header() {
//   return (
//     <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white">
//       <div className="w-[90px] h-[90px] bg-black">
//         <img src="/logo.png" className="p-7" alt="Logo" />
//       </div>

//       <div className="hidden md:flex gap-14">
//         <div className="cursor-pointer font-medium">
//           <a href="#">
//             <h4>HOME</h4>
//           </a>
//         </div>
//         <div className="cursor-pointer font-medium">
//           <a href="#skills">
//             <h4>SKILLS</h4>
//           </a>
//         </div>
//         <div className="cursor-pointer font-medium">
//           <a href="#projects">
//           <h4>PROJECTS</h4>
//           </a>
//         </div>
//       </div>

//       <div className="w-[90px] h-[90px] bg-red-500 flex justify-center items-center">
//         <a href="mailto:itsmekaruppasamy@gmail.com">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-10 h-10 text-white"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Header;
//24 - 8- 2024
// import { useState } from 'react';
// import './portfolio.scss'
// function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleScrollToSkills = () => {
//     const skillsSection = document.querySelector('.skills-container');
//     if (skillsSection) {
//       skillsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleScrollToProjects = () => {
//     const projectsSection = document.querySelector('.projects-container');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white">
    
//       <div className="w-[90px] h-[90px] bg-black">
//         <img src="/logo.png" className="p-7" alt="Logo" />
//       </div>

      
//       <div className="hidden md:flex gap-14">
//         <div className="cursor-pointer font-medium">
//           <a onClick={handleScrollToTop}>
//             <h5 style={{ color: '#16a34a' }}>HOME</h5>
//           </a>
//         </div>
//         <div className="cursor-pointer font-medium">
//           <a onClick={handleScrollToSkills}>
//             <h5 style={{ color: '#16a34a' }}>SKILLS</h5>
//           </a>
//         </div>
//         <div className="cursor-pointer font-medium">
//           <a onClick={handleScrollToProjects}>
//             <h5 style={{ color: '#16a34a' }}>PROJECTS</h5>
//           </a>
//         </div>
//       </div>

      
//       <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-10 h-10 text-black"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
//           />
//         </svg>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center md:hidden">
//           <div className="cursor-pointer font-medium mb-8">
//             <a onClick={() => { handleScrollToTop(); toggleMobileMenu(); }}>
//               <h5 style={{ color: '#16a34a' }}>HOME</h5>
//             </a>
//           </div>
//           <div className="cursor-pointer font-medium mb-8">
//             <a onClick={() => { handleScrollToSkills(); toggleMobileMenu(); }}>
//               <h5 style={{ color: '#16a34a' }}>SKILLS</h5>
//             </a>
//           </div>
//           <div className="cursor-pointer font-medium mb-8">
//             <a onClick={() => { handleScrollToProjects(); toggleMobileMenu(); }}>
//               <h5 style={{ color: '#16a34a' }}>PROJECTS</h5>
//             </a>
//           </div>
//         </div>
//       )}
//       <div className="w-[90px] h-[90px] bg-red-500 flex justify-center items-center">
//         <a href="mailto:itsmekaruppasamy@gmail.com">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-10 h-10 text-white"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Header;

//navbar replaced with mail

import { useState } from 'react';
import './portfolio.scss';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSkills = () => {
    const skillsSection = document.querySelector('.skills-container');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-container');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white">

      <div className="w-[90px] h-[90px] bg-black">
        <img src="/logo.png" className="p-7" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-14">
        <div className="cursor-pointer font-medium">
          <a onClick={handleScrollToTop}>
            <h5 style={{ color: '#16a34a' }}>HOME</h5>
          </a>
        </div>
        <div className="cursor-pointer font-medium">
          <a onClick={handleScrollToSkills}>
            <h5 style={{ color: '#16a34a' }}>SKILLS</h5>
          </a>
        </div>
        <div className="cursor-pointer font-medium">
          <a onClick={handleScrollToProjects}>
            <h5 style={{ color: '#16a34a' }}>PROJECTS</h5>
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center md:hidden">
          <div className="cursor-pointer font-medium mb-8">
            <a onClick={() => { handleScrollToTop(); toggleMobileMenu(); }}>
              <h5 style={{ color: '#16a34a' }}>HOME</h5>
            </a>
          </div>
          <div className="cursor-pointer font-medium mb-8">
            <a onClick={() => { handleScrollToSkills(); toggleMobileMenu(); }}>
              <h5 style={{ color: '#16a34a' }}>SKILLS</h5>
            </a>
          </div>
          <div className="cursor-pointer font-medium mb-8">
            <a onClick={() => { handleScrollToProjects(); toggleMobileMenu(); }}>
              <h5 style={{ color: '#16a34a' }}>PROJECTS</h5>
            </a>
          </div>
        </div>
      )}

      {/* Contact Button - Hidden on Mobile */}
      <div className="hidden md:flex w-[90px] h-[90px] bg-red-500 justify-center items-center">
        <a href="mailto:itsmekaruppasamy@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;





