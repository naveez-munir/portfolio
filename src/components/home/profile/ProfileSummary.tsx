import { ProfileImage } from "./ProfileImage";
import { IntroSection } from "./Intro";
export const ProfileSummary = () => {
  return (
    <div className="relative min-h-[80vh] bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-foreground">
        <div className="max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-20 lg:pt-0">
            <IntroSection />
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  );
};
