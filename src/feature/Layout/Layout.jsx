import { useGetUser } from "data-access/useGetUser";
import Footer from "../Footer/Footer";
import { NavigationBar } from "../NavigationBar/NavigationBar";

export default function Layout({ children }) {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  // 왜 빈 값이면 객체가 되야 하는걸까? 어차피 data 가 falsy 값이면 profile 은 null 이 할당되는데.
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
