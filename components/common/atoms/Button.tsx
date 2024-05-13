import { ButtonModule } from './buttonStyle';
interface IButtonModule {
  children: React.ReactNode;
  $btnClass: string;
  $BeforButtonIcon?: string;
  $id?: string | number;
  $afterButtonIcon?: string;
  $type?: 'button' | 'reset' | 'submit' | undefined;
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
