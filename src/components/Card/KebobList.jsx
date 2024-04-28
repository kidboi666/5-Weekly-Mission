import "./KebobList.css";

function KebobList() {
  return (
    <ul className="kebob-list">
      <li>
        <button>삭제하기</button>
      </li>
      <li>
        <button>폴더에 추가</button>
      </li>
    </ul>
  );
}

export default KebobList;
