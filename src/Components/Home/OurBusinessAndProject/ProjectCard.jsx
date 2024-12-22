import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

import { Tilt } from "react-tilt";
import { github } from "../../../assets/images/OurProjects";
function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=" m-auto">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // [#002639]
        className="bg-transparent border-2 border-[#857f7f] p-5 rounded-2xl   ">
        <div className="relative w-full h-[230px] border-2 border-[#857f7f] rounded-2xl">
          <img
            src={image}
            alt={`project-${name}`}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-black  font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;
