export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center px-[32px] xl:px-[360px] py-[70px] bg-[#F0F6FF]">
      <div className="text-center text-[32px] md:text-[64px] font-bold">
        <p>
          <span className="bg-gradient-to-r from-[#6D6AFE] to-[#FF9F9F] bg-clip-text text-transparent">
            세상의 모든 정보
          </span>
          를 <br />
          쉽게 저장하고 <br className="md:hidden" /> 관리해 보세요
        </p>
      </div>
      <button className="my-10 px-5 py-4 w-[200px] md:w-[350px] bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] rounded-md text-[18px] text-white">
        링크 추가하기
      </button>
      <img src="/images/hero.png" alt="hero" />
    </div>
  );
}
