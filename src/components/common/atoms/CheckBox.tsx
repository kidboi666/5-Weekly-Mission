import { CheckBoxWrap } from './checkBoxStyle';
import { IModal } from '../modal/interface';

interface ICheckBoxData {
  $data: IModal['$modalData'];
}

function CheckBox({ $data }: ICheckBoxData) {
  if (typeof $data) {
    return (
      <CheckBoxWrap className="chk--list-type1">
        {$data &&
          $data.data.map((list: any) => (
            <div className="inner" key={list.id}>
              <input type="checkbox" id={list.id} />
              <label htmlFor={list.id}>
                <strong>{list.name}</strong>
                <span>{list.link.count}개 링크</span>
              </label>
            </div>
          ))}
      </CheckBoxWrap>
    );
  } else {
    return (
      <div>
        <input type="text" />
        <label htmlFor=""></label>
      </div>
    );
  }
}
export default CheckBox;
