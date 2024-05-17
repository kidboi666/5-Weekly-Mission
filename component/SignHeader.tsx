import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function SignHeader() {
  const router = useRouter();
  const params = usePathname();

  return (
    <>
      <img
        src="/images/logo.svg"
        alt="logo"
        width="210px"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="flex mt-4">
        {params === "/signup" ? (
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
        ) : (
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
        )}
      </div>
    </>
  );
}
