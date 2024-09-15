import React, { FunctionComponent } from "react";
import { PortfolioFeature } from "@/types/portfolioFeature";
import AnimatedSection from "./AnimatedSection";

import { motion } from "framer-motion";

type HighLightProps = {
  feature: PortfolioFeature;
};

const HighLight: FunctionComponent<HighLightProps> = ({ feature }) => {
  return (
    <motion.div key={feature.title} className="flex flex-col">
      <AnimatedSection delay={0.2}>
        <h2 className="text-accent text-sm font-semibold">{feature.title}</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <h3 className="text-2xl font-bold mb-4">{feature.subTitle}</h3>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <p className="mb-4">{feature.description}</p>
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <button className="flex items-center gap-2 text-accent font-semibold">
          Learn more
          <span>↓</span>
        </button>
      </AnimatedSection>
    </motion.div>
  );
};

export default HighLight;
