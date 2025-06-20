"use client";
import Image from "next/image";
import React from "react";
import styles from "./TimelineItem.module.css";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function TimelineItem({
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: {
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  stuffIDid: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <Image
        src="/position-icon.svg"
        width={24}
        height={24}
        alt="position icon"
        className="absolute -translate-x-[29px] sm:-translate-x-8 left-0"
      />

      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        {/* Empty div to preserve spacing where image used to be */}
        <div className="w-[70px] h-[70px] col-span-1 bg-transparent" />

        {/* TEXT SECTION */}
        <div className={`${styles.timeline} col-span-4`}>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-[2rem] font-bold">{jobTitle}</h1>
            <p className="text-base sm:text-lg font-bold my-2 sm:my-3">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60 my-3">{duration}</p>

          <ul className="list-disc ml-5 text-white/80 space-y-2">
            {stuffIDid.map((stuff, index) => (
              <li key={index}>{stuff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
