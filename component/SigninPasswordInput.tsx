export default function SigninPasswordInput({
  register,
  inputType,
  isClosed,
  errors,
  handleToggleImage,
}: {
  register: any;
  inputType: any;
  isClosed: any;
  errors: any;
  handleToggleImage: any;
}) {
  return (
    <div className="relative pt-[30px]">
      <label htmlFor="password" className="block text-[14px]">
        비밀번호
      </label>
      <input
        id="password"
        {...register("password", {
          required: "비밀번호를 입력해 주세요.",
        })}
        type={inputType}
        placeholder="비밀번호를 입력해 주세요."
        className="w-full mt-3 px-[15px] py-[18px] rounded-md"
      />
      <img
        src={isClosed ? "/images/eye-off.svg" : "/images/eye-one.svg"}
        alt="eye-off"
        className={`absolute right-3 ${
          errors.password?.message ? "bottom-10" : "bottom-5"
        }`}
        onClick={handleToggleImage}
      />
      <p className="text-[14px] text-[#FF5B56]">{errors.password?.message}</p>
    </div>
  );
}
