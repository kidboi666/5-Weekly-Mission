import { useRouter } from "next/router";

export default function SigninHeader() {
  const router = useRouter();

  return (
    <>
      <div className="mr-2">회원이 아니신가요?</div>
      <div
        className="text-[#6D6AFE] underline cursor-pointer"
        onClick={() => {
          router.push("/signup");
        }}
      >
        회원 가입하기
      </div>
    </>
  );
}
