export default function LandingDescription() {
  return (
    <div className="hidden md:block px-[32px]">
      <div className="flex justify-center items-center mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#FE8A8A] to-[#A4CEFF] bg-clip-text text-transparent">
              원하는 링크
            </span>
            를 <br />
            저장하세요.
          </div>
          <p className="text-sm text-[#6B6B6B] mr-[150px] ">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
          </p>
        </div>
        <img src="/images/dog.png" alt="dog" className="w-[400px] h-[300px]" />
      </div>
      <div className="flex justify-center items-center mt-[120px]">
        <img
          src="/images/edit-folder.png"
          alt="edit-folder"
          className="w-[400px] h-[300px] mr-[150px]"
        />
        <div className="pl-[50px]">
          <div className="text-4xl font-bold">
            링크를 폴더로 <br />
            <span className="bg-gradient-to-r from-[#6FBAFF] to-[#FFD88B] bg-clip-text text-transparent">
              관리
            </span>
            하세요.
          </div>
          <p className="text-sm text-[#6B6B6B]">
            나만의 폴더를 무제한으로 만들고 <br />
            다양하게 활용할 수 있습니다.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            저장한 링크를 <br />
            <span className="bg-gradient-to-r from-[#6D7CCD] to-[rgba(82, 136, 133, 0.22) 52.69%] bg-clip-text text-transparent">
              공유
            </span>
            해 보세요.
          </div>
          <p className="text-sm text-[#6B6B6B] mr-[150px]">
            여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
            공유해 보세요.
          </p>
        </div>
        <img
          src="/images/share-folder.png"
          alt="share-folder"
          className="w-[400px] h-[300px]"
        />
      </div>
      <div className="flex justify-center items-center mt-[120px]">
        <img
          src="/images/search-folder.png"
          alt="search-folder"
          className="w-[400px] h-[300px] mr-[150px]"
        />
        <div>
          <div className="text-4xl font-bold">
            저장한 링크를 <br />
            <span className="bg-gradient-to-r from-[#FE578F] to-[#68E8F9] bg-clip-text text-transparent">
              검색
            </span>
            해 보세요.
          </div>
          <p className="text-sm text-[#6B6B6B]">
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
