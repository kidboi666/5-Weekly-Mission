import { ButtonModule } from './buttonStyle';
interface IButtonModule {
  children: React.ReactNode;
  $btnClass: string;
  $BeforButtonIcon?: string;
  $id?: string;
  $afterButtonIcon?: string;
  $type?: 'button' | 'reset' | 'submit' | undefined;
  $clickEvent?: () => void;
}

export default function Button({
  children,
  $btnClass,
  $type = 'button',
  $BeforButtonIcon = '',
  $afterButtonIcon = '',
  $clickEvent,
}: IButtonModule) {
  return (
    <ButtonModule
      className={$btnClass}
      type={$type}
      $BeforButtonIcon={$BeforButtonIcon}
      $afterButtonIcon={$afterButtonIcon}
      onClick={$clickEvent}
    >
      {children}
    </ButtonModule>
  );
}
