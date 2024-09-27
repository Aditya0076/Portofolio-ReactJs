import React, { useState } from "react";
import { Button, Card } from "flowbite-react";

export const PortofolioPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A comprehensive e-commerce platform built using Java Spring Boot and React.js with integrated payment gateway for seamless transactions.",
      image: "/path/to/project1-image.jpg",
      details:
        "This project integrates secure payment processing, inventory management, and customer order tracking. Developed using a RESTful API with Spring Boot.",
    },
    {
      title: "Mobile Banking App",
      description:
        "A cross-platform mobile banking app developed with React Native, offering secure account management and transaction features.",
      image: "/path/to/project2-image.jpg",
      details:
        "This mobile banking application includes authentication with JWT, secure transfers, and real-time account updates using React Native and Expo.",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A real-time social media management dashboard built using Node.js and Express, allowing users to manage multiple social profiles efficiently.",
      image: "/path/to/project3-image.jpg",
      details:
        "The dashboard integrates social media APIs to provide live updates and analytics. Built using Node.js, Express, and a NoSQL database for scalability.",
    },
    {
      title: "Image Processing for Humanoid Robots",
      description:
        "A machine learning-based image processing application for humanoid robots, utilizing OpenCV and C++ for real-time visual recognition.",
      image: "/path/to/project4-image.jpg",
      details:
        "Implemented face and object detection for humanoid robots using Python and OpenCV. The system processes images in real-time for robot interaction.",
    },
    {
      title: "BarberBro - Mobile App",
      description:
        "A mobile application for managing barber shop appointments, built as part of the EnigmaCamp Batch 3 program using React Native and Spring Boot.",
      image: "/path/to/project5-image.jpg",
      details:
        "This app allows customers to schedule appointments and track barber availability in real-time. Developed using React Native with a Spring Boot backend.",
    },
    {
      title: "Humanoid Robot Research",
      description:
        "Published international journal on humanoid robot control systems using cost-oriented automation (COA) and edge detection techniques.",
      image: "/path/to/project6-image.jpg",
      details:
        "Research focused on cost-efficient control of humanoid robots using edge detection techniques. Published by E3S Web of Conferences.",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-12 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Portofolio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Explore my projects showcasing expertise in full-stack development,
          robotics, and IoT engineering.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Project Content */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-3">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <Button
                color="success"
                pill
                className="hover:bg-green-600 dark:hover:bg-green-500 transition duration-200"
                onClick={() => openModal(project)}
              >
                <p className="dark:text-white text-black font-bold">
                  View Project &rarr;
                </p>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div
          id="defaultModal"
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                {/* Image in modal */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                />
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedProject.details}
                </p>
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortofolioPage;
