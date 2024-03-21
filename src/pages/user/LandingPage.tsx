import CallToAction from "../../components/features/user/landing-page/CallToAction";
import FAQ from "../../components/features/user/landing-page/FAQ";
import Features from "../../components/features/user/landing-page/Features";
import Services from "../../components/features/user/landing-page/Services";
import Testimonial from "../../components/features/user/landing-page/Testimonial";

export default function LandingPage() {
  return (
    <>
      <Features />
      <Services />
      <Testimonial />
      <CallToAction />
      <FAQ />
    </>
  );
}
