import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>찾을 수 없는 페이지입니다.</h1>
      <Link href="/folder">folder페이지</Link>
    </div>
  );
}