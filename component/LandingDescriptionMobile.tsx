export default function LandingDescriptionMobile() {
  return (
    <div className="md:hidden px-[32px]">
      <div className="mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#FE8A8A] to-[#A4CEFF] bg-clip-text text-transparent">
              원하는 링크
            </span>
            를 저장하세요.
          </div>
          <img
            src="/images/dog.png"
            alt="dog"
            className="w-[400px] h-[300px] mt-5"
          />
          <p className="w-[400px] text-sm text-[#6B6B6B] mt-5">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요.
          </p>
        </div>
      </div>
      <div className="mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            링크를 폴더로{" "}
            <span className="bg-gradient-to-r from-[#6FBAFF] to-[#FFD88B] bg-clip-text text-transparent">
              관리
            </span>
            하세요.
          </div>
          <img
            src="/images/edit-folder.png"
            alt="edit-folder"
            className="w-[400px] h-[300px] mt-5"
          />
          <p className="text-sm text-[#6B6B6B] mt-5">
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
          </p>
        </div>
      </div>
      <div className="mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            저장한 링크를{" "}
            <span className="bg-gradient-to-r from-[#6D7CCD] to-[rgba(82, 136, 133, 0.22) 52.69%] bg-clip-text text-transparent">
              공유
            </span>
            해 보세요.
          </div>
          <img
            src="/images/share-folder.png"
            alt="share-folder"
            className="w-[400px] h-[300px] mt-5"
          />
          <p className="w-[400px] text-sm text-[#6B6B6B] mt-5">
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </p>
        </div>
      </div>
      <div className="mt-[120px]">
        <div>
          <div className="text-4xl font-bold">
            저장한 링크를{" "}
            <span className="bg-gradient-to-r from-[#FE578F] to-[#68E8F9] bg-clip-text text-transparent">
              검색
            </span>
            해 보세요.
          </div>
          <img
            src="/images/search-folder.png"
            alt="search-folder"
            className="w-[400px] h-[300px] mt-5"
          />
          <p className="text-sm text-[#6B6B6B] mt-5">
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
