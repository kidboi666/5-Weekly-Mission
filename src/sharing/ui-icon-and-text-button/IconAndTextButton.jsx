import React from 'react';
import classNames from 'classnames/bind';
import styles from './IconAndTextButton.module.scss';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const cx = classNames.bind(styles);

const IconAndTextButton = ({ iconSource, text }) => {
  const popover = (
    <Popover>
      <Popover.Header as="h3">상세 정보</Popover.Header>
      <Popover.Body>
        여기에 {text} 관련 상세 내용을 넣어주세요.
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="secondary" className={cx("container")}>
        <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx("text")}>{text}</span>
      </Button>
    </OverlayTrigger>
  );
};

export default IconAndTextButton;
