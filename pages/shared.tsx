import Footer from "@/component/Footer";
import LinkCardList from "@/component/LinkCardList";
import Navbar from "@/component/Navbar";
import User from "@/component/User";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Shared() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar user={user} />
      <User user={user} />
      <div className="relative px-8 xl:px-[200px]">
        <form>
          <img
            src="/images/search.svg"
            alt="search"
            className="absolute top-[57px] xl:left-[210px] lg:left-[40px] sm:left-[40px]"
          />
          <input
            placeholder="링크를 검색해 보세요."
            className="w-full mt-[40px] px-4 py-4 rounded-md bg-[#F5F5F5] indent-[20px]"
          />
        </form>
      </div>
      <LinkCardList />
      <Footer />
    </>
  );
}
