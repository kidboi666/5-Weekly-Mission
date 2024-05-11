import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.mainList}>
        <Link href="shared" className="btn-primary btn-sm">
          공유
        </Link>
        <Link href="/folder" className="btn-primary btn-sm">
          폴더
        </Link>
      </div>
    </>
  );
}
