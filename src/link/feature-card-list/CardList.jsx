import { EditableCard } from "link/ui-editable-card";
import { NoLink } from "link/ui-no-link";
import { useRef } from "react";
import { CardList as UiCardList } from "link/ui-card-list";
export const CardList = ({ links }) => {
  const cardListRef = useRef(null);

  if (links.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard key={link?.id} {...link} />
      ))}
    </UiCardList>
  );
};
