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
            <h3 className="text-lg font-bold text-white">Post Production Assistant</h3>
            <p className="text-gray-400">Naval Films Inc. | 2022 - 2023</p>
            <p className="text-gray-500">Assisted in editing and production for major film projects.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-white">Game Planner</h3>
            <p className="text-gray-400">Jijing Culture Co., China | 2019 - 2022</p>
            <p className="text-gray-500">Planned and executed game development strategies.</p>
          </li>
        </ul>
      </div>
    ),
    Education: (
      <div>
        <h2 className="text-xl font-bold text-green-500">Education</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-lg font-bold text-white">Master's in Interdisciplinary Information Studies</h3>
            <p className="text-gray-400">The University of Tokyo | 2022 - 2024 (Expected)</p>
            <p className="text-gray-500">Specialized in multimedia and information systems.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-white">Bachelor's in Visual Media Arts</h3>
            <p className="text-gray-400">Emerson College, Boston | 2017 - 2021</p>
            <p className="text-gray-500">Focused on film production and media studies.</p>
          </li>
        </ul>
      </div>
    ),
    Skills: (
      <div>
        <h2 className="text-xl font-bold text-green-500">Skills</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {['Editing', 'Game Planning', 'UI/UX Design', 'Video Production', 'Japanese N1', 'TOEFL Tutoring'].map(
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
          Hi, I'm Jiayi Li, an experienced multimedia specialist and game planner with a passion for combining
          creativity and technology to deliver impactful projects.
        </p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex flex-row flex-grow">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-900 p-4">
          <ul className="space-y-4">
            {Object.keys(contentMap).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab as Tab)} // Cast the tab to the Tab type
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
        <div className="w-3/4 bg-gray-800 p-8 overflow-y-auto">{contentMap[activeTab]}</div>
      </div>
    </div>
  );
};

export default Resume;
