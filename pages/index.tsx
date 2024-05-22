import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import LandingDescription from "@/component/LandingDescription";
import LandingDescriptionMobile from "@/component/LandingDescriptionMobile";
import Navbar from "@/component/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar user={user} />
      <Hero />
      <LandingDescription />
      <LandingDescriptionMobile />
      <Footer />
    </>
  );
}
