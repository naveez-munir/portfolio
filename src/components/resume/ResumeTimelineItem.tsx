import { motion } from "framer-motion";
import { ResumeDataType } from "@/types/resumeType";

export const ResumeTimelineItem = ({ data }: { data: ResumeDataType }) => {
  const title = 'degree' in data ? data.degree : data.role;
  const subtitle = 'institution' in data ? data.institution : data.company;

  return (
    <div className="relative mb-12">
      <div className="absolute left-0 top-6 w-4 h-4 bg-accent rounded-full -ml-2" />
      <motion.div
        className="ml-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-medium text-accent text-lg mb-2">{data.year}</div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <h4 className="text-lg text-accent mt-1">{subtitle}</h4>
        <p className="text-foreground/80 mt-2">{data.description}</p>
      </motion.div>
    </div>
  );
};
