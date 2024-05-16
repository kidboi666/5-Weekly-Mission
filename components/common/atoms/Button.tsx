import { ButtonHTMLAttributes } from 'react';
import { ButtonModule } from './buttonStyle';
interface IButtonModule {
  children: React.ReactNode;
  $btnClass?: string;
  $BeforButtonIcon?: string;
  $id?: string;
  $afterButtonIcon?: string;
  $type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onclick?: () => void;
}

export default function Button({
  children,
  $btnClass,
  $type = 'button',
  $BeforButtonIcon = '',
  $afterButtonIcon = '',
  onclick,
}: IButtonModule) {
  return (
    <ButtonModule
      className={$btnClass}
      type={$type}
      $BeforButtonIcon={$BeforButtonIcon}
      $afterButtonIcon={$afterButtonIcon}
      onClick={onclick}
    >
      {children}
    </ButtonModule>
  );
}
