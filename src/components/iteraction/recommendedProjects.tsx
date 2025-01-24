/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Projects, allProjects } from "contentlayer/generated";
import { CardProject } from "../cards/cardProject";
import { useCallback, useEffect, useState } from "react";

export interface IRecommendedProjectsProps {
  qtde?: number;
  exclusion?: string;
}

export const RecommendedProjects = ({
  qtde = 2,
  exclusion,
}: IRecommendedProjectsProps) => {
  const [recommendedProj, setRecommendedProj] = useState<Projects[]>([]);

  const listProjects = !!exclusion
    ? allProjects.filter((proj) => proj.title !== exclusion)
    : allProjects;

  const getRandom = useCallback((list: Projects[]) => {
    return list[Math.floor(Math.random() * list.length)];
  }, []);

  useEffect(() => {
    var includedProjs: string[] = [];  
    var listRcommendedProjects: Projects[] = [];
    for (let index = 0; index < qtde; index++) {
      let proj: Projects = {} as Projects;

      do {
        proj = getRandom(listProjects);
      } while (includedProjs.includes(proj.title));

      listRcommendedProjects.push(proj);
      includedProjs.push(proj.title);
    } 
    setRecommendedProj(listRcommendedProjects);
  }, []);

  return (
    <div className="my-4 drop-shadow-lg bg-blend-difference backdrop-blur-md">
      <h3 className="font-mono text-lg md:text-4xl font-semibold tracking-wider	line-clamp-2 text-center">
        Recommended projects
      </h3>
      <div className=" lg:container lg:mx-auto grid md:grid-cols-2 gap-2 py-4  justify-items-center h-92">
        {recommendedProj.map((proj, idx) => (
          <CardProject
            key={idx}
            _id={proj._id}
            _raw={proj._raw}
            title={proj.title}
            description={proj.description}
            tags={proj.tags}
            date={proj.date}
            body={proj.body}
            imgSrc={proj.imgSrc}
            slug={proj.slug}
            slugAsParams={proj.slugAsParams}
            type={proj.type}
          />
        ))}
      </div>
    </div>
  );
};
