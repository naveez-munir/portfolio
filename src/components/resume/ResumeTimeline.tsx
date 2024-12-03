import { ResumeDataType } from "@/types/resumeType";
import { ResumeTimelineItem } from "./ResumeTimelineItem";

interface ResumeTimelineProps {
  title: string;
  items: ResumeDataType[];
}

export const ResumeTimeline = ({ title, items }: ResumeTimelineProps) => (
  <div className="relative">
    <h2 className="text-2xl font-bold text-foreground mb-8 pl-8">{title}</h2>
    <div className="relative pl-8">
      <div className="absolute left-[1.87rem] top-6 w-1 h-[73%] bg-accent" />
      {items.map((item, index) => (
        <ResumeTimelineItem key={index} data={item} />
      ))}
    </div>
  </div>
);
