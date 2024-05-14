import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function signin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-[#F0F6FF]">
      <div className="flex flex-col items-center w-full px-[32px] md:w-[400px]">
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
        <form
          className="w-full"
          onSubmit={handleSubmit((data) => {
            axios
              .post("https://bootcamp-api.codeit.kr/api/sign-in", data)
              .then((r) => {
                console.log(r);
                //로컬스토리지에 토큰 저장
                router.push("/folder");
              })
              .catch((error) => console.error(error));
          })}
        >
          <div className="pt-[30px]">
            <label htmlFor="email" className="block text-[14px]">
              이메일
            </label>
            <input
              id="email"
              {...register("email", {
                required: "이메일을 입력해 주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "올바른 이메일 주소가 아닙니다.",
                },
              })}
              placeholder="이메일을 입력해 주세요."
              className="w-full mt-3 px-[15px] py-[18px] rounded-md"
            />
            <p className="text-[14px] text-[#FF5B56]">
              {errors.email?.message}
            </p>
          </div>
          <div className="relative pt-[30px]">
            <label htmlFor="password" className="block text-[14px]">
              비밀번호
            </label>
            <input
              id="password"
              {...register("password", {
                required: "비밀번호를 입력해 주세요.",
                minLength: {
                  value: 4,
                  message: "Min Length is 4",
                },
              })}
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              className="w-full mt-3 px-[15px] py-[18px] rounded-md"
            />
            <img
              src="/images/eye-off.svg"
              alt="eye-off"
              className="absolute right-3 bottom-5"
            />
            <p className="text-[14px] text-[#FF5B56]">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="mt-[30px] w-full px-5 py-4 bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] rounded-md text-[#F5F5F5]"
          >
            로그인
          </button>
        </form>
        <div className="w-full flex justify-between items-center mt-8 px-6 py-3 border border-[#CCD5E3] rounded-md">
          <div>소셜 로그인</div>
          <div className="flex gap-6">
            <Link href="https://www.google.com">
              <div className="bg-[white] rounded-full cursor-pointer">
                <img
                  src="/images/google.png"
                  alt="google"
                  className="p-[10px] w-[42px] h-[42px]"
                />
              </div>
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <div className="bg-[#F5E14B] rounded-full cursor-pointer">
                <img
                  src="/images/kakao.svg"
                  alt="kakao"
                  className="p-[10px] w-[42px] h-[42px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
