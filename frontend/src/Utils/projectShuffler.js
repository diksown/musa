import projects from "../Static/projects";
import shuffle from "knuth-shuffle-seeded";

const shuffler = () => {
  const projectIds = [...Array(projects.length).keys()]; // [0, 1, ..., n]
  shuffle(projectIds);
  return projectIds;
};

const projectIds = shuffler();

const findProject = (projectNumber) => {
  return projects[projectIds[(projectNumber - 1) % projectIds.length]];
};

export default findProject;
