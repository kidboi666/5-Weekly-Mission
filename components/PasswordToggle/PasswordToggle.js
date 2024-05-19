import Image from "next/image";

export function PasswordToggle({ isToggle, setIsToggle }) {
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Image
      width={16}
      height={16}
      src={isToggle ? "images/eye-off.svg" : "images/eye-on.svg"}
      alt="비밀번호 보기"
      onClick={handleToggle}
    />
  );
}
