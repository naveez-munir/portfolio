import worksData from "@/data/workData.json";
export const getCompanyBySlug = (slug: string) =>
  worksData.find((company: { slug: string }) => company.slug === slug);
