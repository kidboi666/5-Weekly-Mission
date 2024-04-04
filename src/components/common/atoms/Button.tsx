import { ButtonModule } from "./buttonStyle";
interface IButtonModule {
  children: React.ReactNode;
  $btnClass: string;
  $BeforButtonIcon?: string;
  $afterButtonIcon?: string;
  $type?: "button" | "reset" | "submit" | undefined;
}

export default function Button({
  children,
  $btnClass,
  $type = "button",
  $BeforButtonIcon = "",
  $afterButtonIcon = "",
}: IButtonModule) {
  return (
    <ButtonModule
      className={$btnClass}
      type={$type}
      $BeforButtonIcon={$BeforButtonIcon}
      $afterButtonIcon={$afterButtonIcon}
    >
      {children}
    </ButtonModule>
  );
}
