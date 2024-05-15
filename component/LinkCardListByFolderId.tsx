import LinkCardByFolderId from "./LinkCardByFolderId";

interface Link {
  id: string;
  created_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export default function LinkCardListByFolderId({
  links,
  filteredLinks,
  inputValue,
  modalStates,
  setModalStates,
  openModal,
  closeModal,
}: {
  links: Link[];
  filteredLinks: Link[];
  inputValue: string;
  modalStates: any;
  setModalStates: any;
  openModal: any;
  closeModal: any;
}) {
  if (!links) {
    return <div>Loading...</div>;
  }

  if (links.length === 0) {
    return (
      <div className="flex justify-center items-center mt-[50px]">
        저장된 링크가 없습니다.
      </div>
    );
  }

  if (inputValue === "") {
    links = [...links];
  } else {
    links = [...filteredLinks];
  }

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-[40px] xl:px-[200px] w-full">
      {links.map((link: Link) => {
        return (
          <LinkCardByFolderId
            key={link.id}
            link={link}
            modalStates={modalStates}
            setModalStates={setModalStates}
            openModal={openModal}
            closeModal={closeModal}
          />
        );
      })}
    </div>
  );
}
