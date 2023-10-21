import React from 'react';
import { useParams } from 'react-router-dom';
import Project1 from './projects/project1/Project1'; // Import the individual project components
import Project2 from './projects/project2/Project2';
import Project3 from './projects/project3/Project3';
import Project4 from './projects/project4/Project4';
import Project5 from './projects/project5/Project5';
import Project6 from './projects/project6/Project6';
function ProjectDetail() {
  const { id } = useParams();

  // Determine which project component to render based on the id
  let ProjectComponent;
  switch (id) {
    case '1':
      ProjectComponent = Project1;
      break;
    case '2':
      ProjectComponent = Project2;
      break;
    case '3':
      ProjectComponent = Project3;
      break;
    case '4':
      ProjectComponent = Project4;
      break;
    case '5':
      ProjectComponent = Project5;
      break;
    case '6':
      ProjectComponent = Project6;
      break;
    // Add cases for other projects as needed
    default:
      ProjectComponent = null; // Handle unknown project IDs
  }

  return (
    <div>
      {ProjectComponent ? (
        <ProjectComponent />
      ) : (
        <div>
          <h2>Project {id}</h2>
          <p>Details about Project {id}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
