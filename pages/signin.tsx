import { useRouter } from "next/router";

export default function signin() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-[#F0F6FF]">
      <div className="flex flex-col items-center w-[400px]">
        <img
          src="/images/logo.svg"
          alt="logo"
          width="210px"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex mt-4">
          <div className="mr-2">회원이 아니신가요?</div>
          <div
            className="text-[#6D6AFE] underline cursor-pointer"
            onClick={() => {
              router.push("/signup");
            }}
          >
            회원 가입하기
          </div>
        </div>
        <div className="w-full pt-[30px]">
          <label htmlFor="email" className="block text-[14px]">
            이메일
          </label>
          <input
            id="email"
            placeholder="이메일을 입력해 주세요."
            className="w-full mt-3 px-[15px] py-[18px] rounded-md"
          />
        </div>
        <div className="w-full pt-[30px]">
          <label htmlFor="password" className="block text-[14px]">
            비밀번호
          </label>
          <input
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            className="w-full mt-3 px-[15px] py-[18px] rounded-md"
          />
        </div>
        <button className="mt-[30px] w-full px-5 py-4 bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] rounded-md text-[#F5F5F5]">
          로그인
        </button>
        <div className="w-full flex justify-between items-center mt-8 px-6 py-3 border border-[#CCD5E3] rounded-md">
          <div>소셜 로그인</div>
          <div className="flex gap-6">
            <div className="bg-[white] rounded-full cursor-pointer">
              <img
                src="/images/google.png"
                alt="google"
                className="p-[10px] w-[42px] h-[42px]"
              />
            </div>
            <div className="bg-[#F5E14B] rounded-full cursor-pointer">
              <img
                src="/images/kakao.svg"
                alt="kakao"
                className="p-[10px] w-[42px] h-[42px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
