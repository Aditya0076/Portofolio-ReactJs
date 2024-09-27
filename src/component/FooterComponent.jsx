import { useState } from "react";
import { Footer, Modal, Button } from "flowbite-react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const FooterComponent = () => {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const openPortfolioModal = () => setShowPortfolioModal(true);
  const closePortfolioModal = () => setShowPortfolioModal(false);
  const openAboutModal = () => setShowAboutModal(true);
  const closeAboutModal = () => setShowAboutModal(false);

  const portfolioContent = [
    {
      title: "Recent Projects",
      description:
        "A showcase of my latest work, including cutting-edge technologies and innovative solutions.",
      image: "/path/to/recent-projects-image.jpg",
    },
    {
      title: "Previous Projects",
      description:
        "A look back at earlier projects that helped shape my skills and expertise.",
      image: "/path/to/previous-projects-image.jpg",
    },
    {
      title: "Case Studies",
      description:
        "In-depth analysis of select projects, detailing challenges and solutions.",
      image: "/path/to/case-studies-image.jpg",
    },
  ];

  const aboutMeContent = {
    title: "About Me",
    description:
      "I am a software developer with experience in various technologies such as Spring Boot, React, and IoT. My educational background in computer science empowers me to create innovative solutions.",
    image: "/path/to/about-me-image.jpg",
  };

  return (
    <>
      {/* Footer Section */}
      <Footer
        container={false}
        className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-8 border-t border-gray-700 rounded-none"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Portfolio Section */}
            <div className="w-full md:w-1/4 mb-6">
              <Footer.Title
                title="Portfolio"
                className="text-white text-lg font-semibold mb-4"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                  onClick={openPortfolioModal}
                >
                  Recent Projects
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                  onClick={openPortfolioModal}
                >
                  Previous Projects
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                  onClick={openPortfolioModal}
                >
                  Case Studies
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* About Me Section */}
            <div className="w-full md:w-1/4 mb-6">
              <Footer.Title
                title="About Me"
                className="text-white text-lg font-semibold mb-4"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                  onClick={openAboutModal}
                >
                  Experience
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                  onClick={openAboutModal}
                >
                  Education
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-1/4 mb-6">
              <Footer.Title
                title="Contact"
                className="text-white text-lg font-semibold mb-4"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="mailto:aditya07bayu@gmail.com"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Email
                </Footer.Link>
                <Footer.Link
                  href="tel:+6288227661015"
                  className="hover:underline text-gray-300 hover:text-gray-100"
                >
                  Phone
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Me Section */}
            <div className="w-full md:w-1/4 mb-6">
              <Footer.Title
                title="Follow Me"
                className="text-white text-lg font-semibold mb-4"
              />
              <div className="flex space-x-4 items-center">
                <a
                  href="https://www.instagram.com/aditya0076/"
                  className="text-white hover:text-pink-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://x.com/aditya_bay75722"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-bayu-prabowo/"
                  className="text-white hover:text-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com/Aditya0076"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          <Footer.Divider className="my-6 border-gray-700" />
          <div className="text-center py-4">
            <Footer.Copyright href="#" by="Aditya Bayu Prabowo" year={2024} />
          </div>
        </div>
      </Footer>

      {/* Portfolio Modal */}
      {showPortfolioModal && (
        <div
          id="portfolioModal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-3xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Portfolio
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closePortfolioModal}
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
              <div className="p-4 space-y-4">
                {portfolioContent.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Button
                  onClick={closePortfolioModal}
                  size={"lg"}
                  className="text-white bg-blue-700 hover:bg-blue-800"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Me Modal */}
      {showAboutModal && (
        <div
          id="aboutModal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-3xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  About Me
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeAboutModal}
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
              <div className="p-4 space-y-4">
                <img
                  src={aboutMeContent.image}
                  alt={aboutMeContent.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
                />
                <h4 className="text-xl font-bold">{aboutMeContent.title}</h4>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {aboutMeContent.description}
                </p>
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Button
                  onClick={closeAboutModal}
                  size={"lg"}
                  className="text-white bg-blue-700 hover:bg-blue-800"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
