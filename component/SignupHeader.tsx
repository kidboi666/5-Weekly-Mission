import { useRouter } from "next/router";

export default function SignupHeader() {
  const router = useRouter();

  return (
    <>
      <div className="mr-2">이미 회원이신가요?</div>
      <div
        className="text-[#6D6AFE] underline cursor-pointer"
        onClick={() => {
          router.push("/signin");
        }}
      >
        로그인 하기
      </div>
    </>
  );
}
