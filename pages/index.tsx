// 사용자에게 보이는 페이지(최상위)
import Link from "next/link";
import { MainSearchBar } from "../components/MainSearchBar/MainSearchBar";

export default function Home() {
  return (
    <div>
      <Link href="/folder">folder페이지</Link>
    </div>
  );
}
