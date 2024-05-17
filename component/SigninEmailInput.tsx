export default function SigninEmailInput({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
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
      <p className="text-[14px] text-[#FF5B56]">{errors.email?.message}</p>
    </div>
  );
}
