import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between items-center mt-[120px] px-[32px] xl:px-[100px] pt-8 pb-[64px] bg-black">
      <div className="text-[#676767]">©codeit - 2023</div>
      <div className="flex gap-5">
        <div className="text-[#CFCFCF]">Privacy Policy</div>
        <div className="text-[#CFCFCF]">FAQ</div>
      </div>
      <div className="flex gap-2">
        <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src="/images/facebook.svg" alt="facebook" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank">
          <img src="/images/twitter.svg" alt="twitter" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <img src="/images/youtube.svg" alt="youtube" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <img src="/images/instagram.svg" alt="instagram" />
        </Link>
      </div>
    </div>
  );
}
