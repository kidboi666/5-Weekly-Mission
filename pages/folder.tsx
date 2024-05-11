import AddLinkInput from "@/component/AddLinkInput";
import FolderMain from "@/component/FolderMain";
import Navbar from "@/component/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import { useState } from "react";

export default function Folder() {
  const [inputValue, setInputValue] = useState<string>("");

  const { data: user } = useCurrentUser();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/input", { inputValue });
      setInputValue(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    setInputValue("");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar user={user} />
      <AddLinkInput />
      <div className="relative px-8 xl:px-[200px]">
        <form onSubmit={handleSubmit}>
          <img
            src="/images/search.svg"
            alt="search"
            className="absolute top-[57px] left-[40px] xl:left-[210px] cursor-pointer"
            onClick={handleSubmit}
          />
          <input
            placeholder="링크를 검색해 보세요."
            className="w-full mt-[40px] px-4 py-4 rounded-md bg-[#F5F5F5] indent-[20px]"
            name="inputValue"
            value={inputValue}
            onChange={handleChange}
          />
          <img
            src="/images/close.svg"
            alt="close"
            className="absolute right-[50px] xl:right-[210px] top-[55px] cursor-pointer "
            onClick={handleClose}
          />
        </form>
      </div>
      <FolderMain user={user} inputValue={inputValue} />
    </>
  );
}
