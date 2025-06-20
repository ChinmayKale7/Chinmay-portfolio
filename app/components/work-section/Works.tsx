"use client";
import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Tomato Disease Recognition",
      gitLink: "https://github.com/ChinmayKale7/Tomato-Disease-Recognition-System",
      liveLink: "https://tomato-ai.streamlit.app/",
      about:
        "A deep learning-based web app that classifies tomato leaf images into healthy or diseased categories. Built using CNN, trained on a public dataset, and deployed with Streamlit for farmers and researchers.",
      stack: ["Python", "CNN", "Streamlit", "OpenCV", "Deep Learning"],
      img: "/tomato.png", // Make sure you add this image to /public
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          />
      ))}

      <Timeline />
    </section>
  );
}
