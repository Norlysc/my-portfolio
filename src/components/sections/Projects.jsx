import React from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import useScrollReveal from "../../hooks/useScrollReveal";
import GridItem from "../elements/GridItem";
import Section from "../elements/Section";
import StyledSubtitle from "../elements/Subtitle";

const StyledGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 40px 20px 0;

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const projects = [
  {
    title: "Ubuntu",
    imageUrl: require("../../assets/images/Ubuntu.png"),
    stack: ["React", "MaterialUI", "Formik"],
    demoUrl: "https://github.com/Norlysc/Ubuntu_02_front",
    GithubUrl: "https://github.com/Norlysc/Ubuntu_02_front",
    id: "left",
  },
  {
    title: "Nails studio",
    imageUrl: require("../../assets/images/nails-studio.png"),
    stack: ["React", "Styled-components"],
    demoUrl: "https://norlysc.github.io/nails-studio/",
    GithubUrl: "https://github.com/Norlysc/nails-studio",
    id: "right",
  },
  {
    title: "Cinemo",
    imageUrl: require("../../assets/images/cinemo.webp"),
    stack: ["React", "Css modules", "Firebase"],
    demoUrl: "https://norlysc.github.io/cinemo/",
    GithubUrl: "https://github.com/Norlysc/cinemo",
    id: "left",
  },
  {
    title: "E-commerce",
    imageUrl: require("../../assets/images/e-commerce.png"),
    stack: ["React", "Styled-components", "express"],
    demoUrl: "https://pool1541.github.io/e-commerce/",
    GithubUrl: "https://github.com/Norlysc/e-commerce",
    id: "right",
  },
  {
    title: "Calculadora",
    imageUrl: require("../../assets/images/cal.png"),
    stack: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://norlysc.github.io/CALCULADORA-JS/",
    GithubUrl: "https://github.com/Norlysc/CALCULADORA-JS",
    id: "left",
  },
];

export default function Projects() {
  const { lang } = useLang();

  useScrollReveal(["#proyect-title"], {
    origin: "bottom",
    distance: "50px",
  });
  useScrollReveal(["#left"], {
    origin: "left",
    distance: "50px",
  });
  useScrollReveal(["#right"], {
    origin: "right",
    distance: "50px",
  });
  return (
    <Section id="projects">
      <StyledSubtitle id="proyect-title">{lang.projects}</StyledSubtitle>
      <StyledGrid>
        {projects.map((proyect, index) => (
          <GridItem data={proyect} key={index} id={proyect.id} />
        ))}
      </StyledGrid>
    </Section>
  );
}
