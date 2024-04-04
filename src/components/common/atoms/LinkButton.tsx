import { LinkModule } from "./LinkButtonStyle";
interface IButtonModule {
  children: React.ReactNode;
  $link: string;
  $linkClass: string;
}

export default function LinkButton({
  children,
  $link,
  $linkClass,
}: IButtonModule) {
  return (
    <LinkModule to={$link} className={$linkClass}>
      {children}
    </LinkModule>
  );
}
