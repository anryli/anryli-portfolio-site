"use client";

import { useState } from 'react';

const Resume = () => {
  // Define the type for the tabs
  type Tab = 'Experience' | 'Education' | 'Skills' | 'About Me';

  // State for the active tab, strongly typed
  const [activeTab, setActiveTab] = useState<Tab>('Experience');

  // Content mapping with type safety
  const contentMap: Record<Tab, JSX.Element> = {
    Experience: (
      <div>
        <h2 className="text-xl font-bold text-green-500">Experience</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
            <p className="text-gray-400">Tech Solutions Inc. | 2023 - Present</p>
            <p className="text-gray-500">Developed and maintained scalable web applications.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-white">Front-End Developer Intern</h3>
            <p className="text-gray-400">Web Design Studio | Summer 2022</p>
            <p className="text-gray-500">Created modern UI/UX designs and interactive components.</p>
          </li>
        </ul>
      </div>
    ),
    Education: (
      <div>
        <h2 className="text-xl font-bold text-green-500">Education</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-lg font-bold text-white">Master's in Computer Science</h3>
            <p className="text-gray-400">ABC University | 2021 - 2023</p>
            <p className="text-gray-500">Focused on web development and artificial intelligence.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-white">Bachelor's in Information Technology</h3>
            <p className="text-gray-400">XYZ University | 2017 - 2021</p>
            <p className="text-gray-500">Specialized in software engineering and system design.</p>
          </li>
        </ul>
      </div>
    ),
    Skills: (
      <div>
        <h2 className="text-xl font-bold text-green-500">Skills</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Figma'].map(
            (skill) => (
              <div
                key={skill}
                className="flex items-center justify-center bg-gray-800 rounded-md h-16 text-white text-sm font-bold"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    'About Me': (
      <div>
        <h2 className="text-xl font-bold text-green-500">About Me</h2>
        <p className="mt-4 text-gray-500">
          Hi, I'm Jiayi Li, a passionate Software Developer with expertise in web development and design. I
          love creating seamless user experiences and building scalable, efficient applications.
        </p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-4">
        <ul className="space-y-4">
          {Object.keys(contentMap).map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab as Tab)} // Cast the tab to the `Tab` type
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 bg-gray-800 p-8">{contentMap[activeTab]}</div>
    </div>
  );
};

export default Resume;
