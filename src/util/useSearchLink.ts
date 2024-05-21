import { Link } from "@/src/type";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";


/**
 * useSearchLink 훅은 링크 배열에서 검색어에 맞는 링크를 필터링하는 기능을 제공합니다.
 *
 * @param {Link[]} links - 검색할 링크 배열입니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {string} return.searchValue - 현재 검색어 값입니다.
 * @returns {ChangeEventHandler<HTMLInputElement>} return.handleChange - 검색어가 변경될 때 호출되는 함수입니다.
 * @returns {MouseEventHandler<HTMLButtonElement>} return.handleCloseClick - 검색어를 초기화할 때 호출되는 함수입니다.
 * @returns {Link[]} return.result - 검색어에 맞는 필터링된 링크 배열입니다.
 *
 * @example
 * const { searchValue, handleChange, handleCloseClick, result } = useSearchLink(links);
 *
 * return (
 *   <div>
 *     <input type="text" value={searchValue} onChange={handleChange} />
 *     <button onClick={handleCloseClick}>Clear</button>
 *     <ul>
 *       {result.map(link => (
 *         <li key={link.id}>{link.title}</li>
 *       ))}
 *     </ul>
 *   </div>
 * );
 */
export const useSearchLink = (links: Link[]) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchValue("");
  };

  const result = links.filter((link) => {
    const searchValueLowerCase = searchValue?.toLowerCase();
    const titleLowerCase = link?.title?.toLowerCase();
    const descriptionLowerCase = link?.description?.toLowerCase();
    const urlLowerCase = link?.url?.toLowerCase();

    return (
      titleLowerCase?.includes(searchValueLowerCase) ||
      descriptionLowerCase?.includes(searchValueLowerCase) ||
      urlLowerCase?.includes(searchValueLowerCase)
    );
  });

  return { searchValue, handleChange, handleCloseClick, result };
};
