import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustumerStorySection,
  CtaSection
} from "@/templates/landing-page/sections"

export const LandingPage = () => {

  return (

    <article className="flex flex-col">
      <HeroSection /> 
      <FeatureSection />
      <SupportSection />
      <CustumerStorySection />
      <CtaSection />
    </article>
  )

}