import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../images/bg4.jpeg";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]
    {
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
    }
    `
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);
  }, []);

  // Pagination logic
  const totalPages = projectData ? Math.ceil(projectData.length / projectsPerPage) : 0;
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectData ? projectData.slice(startIndex, endIndex) : [];
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  return (
    <main className="bg-gree-100 min-h-screen">
      <img
        src={image}
        alt="Auckland city"
        className="absolute object-cover w-full h-full p-0"
      />
      <section className="container mx-auto relative z-10">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my project's page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {currentProjects.map((project) => (
              <article key={project.title} className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
        
        {/* Pagination Controls */}
        {projectData && totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-500 text-white hover:bg-red-600 transition-colors'
              }`}
            >
              Previous
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-lg font-semibold ${
                    currentPage === pageNum
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-red-500 border border-red-500 hover:bg-red-50 transition-colors'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-500 text-white hover:bg-red-600 transition-colors'
              }`}
            >
              Next
            </button>
          </div>
        )}
        
        {/* Page Info */}
        {projectData && totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <span className="text-gray-600 bg-white px-4 py-2 rounded-lg shadow">
              Page {currentPage} of {totalPages} ({projectData ? projectData.length : 0} total projects)
            </span>
          </div>
        )}
      </section>
    </main>
  );
}
