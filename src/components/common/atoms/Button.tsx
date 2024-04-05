import { ButtonModule } from "./buttonStyle";
interface IButtonModule {
  children: React.ReactNode;
  $btnClass: string;
  $BeforButtonIcon?: string;
  $id?: string;
  $afterButtonIcon?: string;
  $type?: "button" | "reset" | "submit" | undefined;
  clickEvent?: (value: any) => void;
  $clickEventName?: string;
}

export default function Button({
  $id,
  children,
  $btnClass,
  $type = "button",
  $BeforButtonIcon = "",
  $afterButtonIcon = "",
  clickEvent,
  $clickEventName,
}: IButtonModule) {
  const buttonHenlerEvent = () => {
    if (!clickEvent) return;
    if ($clickEventName === "bookmarkId") {
      clickEvent($id);
    }
  };

  return (
    <ButtonModule
      className={$btnClass}
      type={$type}
      $BeforButtonIcon={$BeforButtonIcon}
      $afterButtonIcon={$afterButtonIcon}
      onClick={buttonHenlerEvent}
    >
      {children}
    </ButtonModule>
  );
}
