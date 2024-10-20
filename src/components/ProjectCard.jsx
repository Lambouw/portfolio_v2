import React, { useState } from "react";

// Import Components
import CustomDialog from "./CustomDialog";

// Import Styles
import "../styles/css/projectcard.css";

// Import Images
import ilhomepage5 from "../assets/images/ilhomepage5.png";
import portfoliov1 from "../assets/images/portfoliov1.png";
import fmmg from "../assets/images/fmmg.png";
import hmi from "../assets/images/hmi.png";
import twinstore from "../assets/images/twinstore.png";

const imageMap = {
  ilhomepage5: ilhomepage5,
  portfoliov1: portfoliov1,
  fmmg: fmmg,
  hmi: hmi,
  twinstore: twinstore,
};

const ProjectCard = React.forwardRef(({ project }, ref) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="project-card" ref={ref} onClick={handleClickOpen}>
        <div className="project-card--upper">
          <img
            className="project-card--upper--image"
            aria-label={project.name}
            alt={project.name}
            src={imageMap[project.image]}
          />
          <div className="height-s"></div>
          <h3 className="project-card--upper--name">{project.name}</h3>
        </div>
        <div className="height-s"></div>
        <div className="project-card--description">{project.description}</div>
      </div>

      {/* Dialog to show details */}
      <CustomDialog
        open={open}
        onClose={handleClose}
        type="project"
        data={project}
      />
    </>
  );
});

export default ProjectCard;
