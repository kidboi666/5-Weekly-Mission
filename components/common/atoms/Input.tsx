import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { InputModule } from './inputStyle';
import Button from './Button';
import { Relative } from '@/styles/commonStyle';

interface IButtonModule {
  $id?:string,
  $type?: string;
  $inputClass?: string;
  $btnShow?: boolean;
  $placeholder?: string;
  $beforeBgIcon?: string;
  $btnClass?: string;
  $clickEvent?:string | undefined;
  children?: ReactNode;
  onclick?:() => void;
  onchange?: (value: string) => void;
}

function Input({ $id, $btnShow = false, $type = 'text', $inputClass, $placeholder, $beforeBgIcon = '', $btnClass = '', $clickEvent, children, onchange}: IButtonModule) {

  const [value, setValue] = useState('');
  const refInput = useRef(null);

  const handleChangInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    if (onchange) {
      // value값 전달
      onchange(value);
    }
  };
  const handleEventInput = (event:string) => {
    if(!event) return ;
    if(event === 'reset') {
      setValue('');
      if (onchange) {
        onchange('');
      }
    }
  }

  return (
   <>
     <Relative>
        <InputModule
          id={$id}
          type={$type}
          className={$inputClass}
          placeholder={$placeholder}
          value={value}
          onChange={handleChangInput}
          $beforeBgIcon={$beforeBgIcon}
          ref={refInput}
        />
        {($btnShow && $clickEvent) &&    
          <Button $btnClass={$btnClass} onclick={() => handleEventInput($clickEvent)}>
            {children}
          </Button>
        }
      </Relative>
      
   </>
  );
}
export default Input;
