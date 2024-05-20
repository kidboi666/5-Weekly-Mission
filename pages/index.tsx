
import Header from "@/widgets/home/ui/header/Header";
import Footer from "../widgets/home/ui/footer/Footer";
import MainSection from "../widgets/home/ui/mainSection/MainSection";
import ManagedSection from "../widgets/home/ui/manageSection/ManagedSection";
import SaveSection from "../widgets/home/ui/saveSection/SaveSection";
import SearchedSection from "../widgets/home/ui/searchSection/SearchedSection";
import SharedSection from "../widgets/home/ui/shareSection/SharedSection";



export default function Home() {
  return (
    <>

      <Header />
      <MainSection />
      <SaveSection />
      <ManagedSection />
      <SharedSection />
      <SearchedSection />
      <Footer />
    </>
  );

}
