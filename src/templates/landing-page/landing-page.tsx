import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustumerStorySection,
  CtaSection
} from "@/templates/landing-page/sections"

export const LandingPage = () => {

  return (

    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection /> 
      <FeatureSection />
      <SupportSection />
      <CustumerStorySection />
      <CtaSection />
    </article>
  )

}