import starTrue from "@/assets/icons/star_true.svg";
import starFalse from "@/assets/icons/star_false.svg";
import * as S from "./Star.styled";
import useToggle from "../../hooks/useToggle";
import { useRouter } from "next/router";
import Image from "next/image";
import { Link } from "@/services/types";
import { useAppDispatch } from "@/hooks/useApp";
import { openToast } from "@/redux/reducers/toast";

interface StarProps {
  link: Link;
}
/** 즐겨찾기 기능 추가를 위해선 api의 baseUrl과 리스폰스 데이터 형식이 전부 바뀌어서 추후 작업 예정 */
const Star = ({ link }: StarProps) => {
  const [value, toggle] = useToggle();
  const currentLocation = useRouter();
  const dispatch = useAppDispatch();

  if (currentLocation.pathname.includes("/shared")) {
    return null;
  }

  const onClickFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggle();
    dispatch(openToast({ type: "pendingTask" }));
  };

  return (
    <S.StarBox onClick={onClickFavorite}>
      <Image src={value ? starTrue : starFalse} alt='즐겨찾기 아이콘' />
    </S.StarBox>
  );
};

export default Star;
