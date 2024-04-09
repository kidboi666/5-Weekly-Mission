import styled from 'styled-components';
import { GRAY2 } from '../color';
import shareImg from '../../asset/share.svg';
import penImg from '../../asset/pen.svg';
import deleteImg from '../../asset/delete.svg';

const ICON_MARGIN = '4px';
const ICON_H_W = '18px';

const Bar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const Name = styled.h3`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  width @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Tools = styled.div`
  display: flex;
  column-gap: 12px;
`;

const Tool = styled.button`
  color: ${GRAY2};
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
`;

const ToolShared = styled(Tool)`
  &::before {
    content: '';
    background-image: url(${shareImg});
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;

const ToolNameChange = styled(Tool)`
  &::before {
    content: '';
    background-image: url(${penImg});
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;

const ToolDelete = styled(Tool)`
  &::before {
    content: '';
    background-image: url(${deleteImg});
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;

function FolderNameBar({ selectedFolder }) {
  return (
    <Bar>
      <Name>{selectedFolder?.name ?? '전체'}</Name>
      {selectedFolder?.name && (
        <Tools>
          <ToolShared type="button" className="Tool_shared">
            공유
          </ToolShared>
          <ToolNameChange type="button" className="Tool_nameChange">
            이름 변경
          </ToolNameChange>
          <ToolDelete type="button" className="Tool_delete">
            삭제
          </ToolDelete>
        </Tools>
      )}
    </Bar>
  );
}

export default FolderNameBar;
