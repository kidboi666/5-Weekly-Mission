export default function Footer() {
  return (
    <div className="flex justify-between items-center mt-[120px] px-[32px] xl:px-[100px] pt-8 pb-[64px] bg-black">
      <div className="text-[#676767]">©codeit - 2023</div>
      <div className="flex gap-5">
        <div className="text-[#CFCFCF]">Privacy Policy</div>
        <div className="text-[#CFCFCF]">FAQ</div>
      </div>
      <div className="flex gap-2">
        <img src="/images/facebook.svg" alt="facebook" />
        <img src="/images/twitter.svg" alt="twitter" />
        <img src="/images/youtube.svg" alt="youtube" />
        <img src="/images/instagram.svg" alt="instagram" />
      </div>
    </div>
  );
}
