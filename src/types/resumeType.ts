export type ResumeEducationDataType = {
  year: string;
  degree: string;
  institution: string;
  description: string;
}
export type ResumeExperienceDataType = {
  year: string;
  role: string;
  company: string;
  description: string;
}

export type ResumeDataType = ResumeEducationDataType | ResumeExperienceDataType
