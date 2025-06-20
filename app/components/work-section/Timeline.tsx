"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    jobTitle: "Data Science Virtual Intern",
    company: "Altair (via Eduskills Foundation)",
    jobType: "Internship",
    duration: "Oct 2024 - Dec 2024",
    stuffIDid: [
      "Completed a virtual internship program focused on Data Science fundamentals using Altair RapidMiner Studio.",
      "Built and deployed machine learning models using visual workflows to solve real-world data challenges.",
      "Explored classification, clustering, and regression techniques with hands-on practice.",
      "Gained practical experience in feature selection, model evaluation, and performance optimization.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Internship Experience</Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
