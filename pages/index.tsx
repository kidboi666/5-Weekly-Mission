import styles from "./folder.module.css";
import Link from "next/link";
import InputBtn from "@/components/InputBtn";
import Nav from "@/components/Nav";
import AddLinkInput from "@/components/AddLinkInput";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <AddLinkInput />
      <section className={styles.folderContent}>
        <div>
          <Link href="/shared">
            <InputBtn>공유</InputBtn>
          </Link>
          <Link href="/folder">
            <InputBtn>폴더</InputBtn>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
