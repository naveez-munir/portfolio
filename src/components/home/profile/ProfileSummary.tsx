import { ProfileImage } from "./ProfileImage";
import { IntroSection } from "./Intro";
import { ProfessionalHighlights } from "./ProfessionalHighlights";

export const ProfileSummary = () => {
  return (
    <div className="w-full h-2/4 p-4 bg-background text-foreground">
      <div className="flex flex-col mt-40 justify-around sm:flex-row">
        <IntroSection />
        <ProfileImage />
        <ProfessionalHighlights />
      </div>
    </div>
  );
};
