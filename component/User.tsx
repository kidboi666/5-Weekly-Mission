import useSampleFolder from "@/hooks/useSampleFolder";

interface UserData {
  id: number;
  name: string;
  email?: string;
  profileImageSource: string;
}

export default function User({ user }: { user: UserData }) {
  const { data } = useSampleFolder();

  return (
    <div className="flex flex-col items-center pt-5 py-[60px] bg-[#F0F6FF]">
      <img
        src={user?.profileImageSource}
        alt="profile"
        width="50px"
        className="rounded-full"
      />
      <div>@{user?.name}</div>
      <div className="text-center text-[#000] text-[40px] font-bold">
        {data?.folder?.name}
      </div>
    </div>
  );
}
