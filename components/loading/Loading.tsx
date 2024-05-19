import { memo } from 'react';
import styled from './loading.module.css';
import Image from 'next/image';

function Loading() {
  return (
    <div className={styled.loadingWrap}>
      <Image
        src='/assets/icon/icon_loading.svg'
        alt='loading'
        width={100}
        height={100}
      />
    </div>
  );
}
export default memo(Loading);
