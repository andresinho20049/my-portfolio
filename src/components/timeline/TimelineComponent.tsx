"use client";

import { ITimeline } from "@/interface/ITimeline";
import { listTimeline } from "@/utils/ListTimeline";
import { Timeline } from "flowbite-react";
import Image from "next/image";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { LinkAppearanceButton } from "../button/link-appearance-button";

const TimelineItem = ({ time, title, body, link, imgSrc }: ITimeline) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <div className="sticky top-0 drop-shadow-lg bg-blend-difference backdrop-blur-md">
          <Timeline.Time>{time}</Timeline.Time>
          <Timeline.Title>{title}</Timeline.Title>
        </div>
        <Timeline.Body>
          {imgSrc && (
            <Image
              className="object-contain h-96 w-full"
              alt="Ilustrate"
              src={imgSrc}
              height={1920}
              width={1080}
            />
          )}
          <p className="clear-left text-justify text-pretty whitespace-pre-line">
            {body}
          </p>
        </Timeline.Body>

        {link && (
          <LinkAppearanceButton href={link} isBlank>
            See more
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </LinkAppearanceButton>
        )}
      </Timeline.Content>
    </Timeline.Item>
  );
};

export const TimelineComponent = () => {
  return (
    <Timeline className="my-4 max-w-5xl">
      {listTimeline.map((time, idx) => (
        <TimelineItem
          key={idx}
          time={time.time}
          title={time.title}
          body={time.body}
          link={time.link}
          imgSrc={time.imgSrc}
        />
      ))}
    </Timeline>
  );
};
