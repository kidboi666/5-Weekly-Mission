import useSampleFolder from "@/hooks/useSampleFolder";
import LinkCard from "./LinkCard";

interface Link {
  id: string;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function LinkCardList() {
  const { data } = useSampleFolder();

  const links: Link[] = data?.folder?.links;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center mt-[40px] xl:px-[200px] w-full">
      {links?.map((link) => {
        return <LinkCard key={link.id} link={link} />;
      })}
    </div>
  );
}
