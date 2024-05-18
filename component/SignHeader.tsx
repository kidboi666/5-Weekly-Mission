import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import SignupHeader from "./SignupHeader";
import SigninHeader from "./SigninHeader";

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
        {params === "/signup" ? <SignupHeader /> : <SigninHeader />}
      </div>
    </>
  );
}
