import InputField from "@/components/Input/InputField";

const test = () => {
  return (
    <div>
      <InputField
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
      />
      <InputField
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
  );
};

export default test;
