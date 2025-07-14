import React from 'react';
import { Users, Lightbulb, Code, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    { 
      icon: <Users size={24} className="text-blue-600" />, 
      title: 'Team Builder',
      description: 'Creating high-performing, engaged engineering teams that deliver exceptional results.' 
    },
    { 
      icon: <Lightbulb size={24} className="text-yellow-500" />, 
      title: 'Strategic Thinker',
      description: 'Connecting technology decisions to business objectives for maximum impact.' 
    },
    { 
      icon: <Code size={24} className="text-green-600" />, 
      title: 'Technical Expert',
      description: 'Deep understanding of software architecture and engineering best practices.' 
    },
    { 
      icon: <TrendingUp size={24} className="text-purple-600" />, 
      title: 'Innovation Driver',
      description: 'Fostering a culture of continuous improvement and forward thinking.' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate engineering leader with over 11 years of experience building and scaling engineering teams.
            My expertise lies in transforming business challenges into technological solutions while fostering a culture of innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {qualities.map((quality, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-transform hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4">{quality.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{quality.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{quality.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Leadership Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I believe in empowering teams through clear vision, transparent communication, and fostering an environment 
                where innovation thrives. My approach balances strategic business goals with engineering excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By focusing on people first and creating a culture of continuous learning, I help organizations build 
                scalable, resilient technology solutions that drive business growth.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Leadership Principles</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Lead with empathy and emotional intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Set clear expectations and provide regular feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Focus on outcomes rather than micromanaging processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Create opportunities for growth and development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Foster a culture of accountability and autonomy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
//             About Me
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 I'm a passionate engineering leader with over 6 years of experience in building 
//                 scalable backend systems, native mobile applications, and leading high-performing 
//                 development teams.
//               </p>
              
//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 My journey spans from hands-on development to engineering management, where I've 
//                 successfully architected microservices platforms, led cross-functional teams, and 
//                 delivered products used by millions of users.
//               </p>
              
//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 I believe in writing clean, maintainable code, fostering collaborative team 
//                 environments, and continuously learning new technologies to stay at the forefront 
//                 of innovation.
//               </p>
//             </div>
            
//             <div className="relative">
//               <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
//                 <img 
//                   src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Professional headshot"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white text-2xl font-bold">6+</span>
//               </div>
//               <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white text-lg font-bold">YRS</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;