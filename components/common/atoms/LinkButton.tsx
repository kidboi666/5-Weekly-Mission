import { LinkModule } from './LinkButtonStyle';
interface IButtonModule {
  children: React.ReactNode;
  $link: string;
  $linkClass?: string;
  $target?: string;
}

export default function LinkButton({ children, $link, $linkClass, $target = '_self' }: IButtonModule) {
  return (
    <LinkModule
      href={$link}
      className={$linkClass}
      target={$target}>
      {children}
    </LinkModule>
  );
}
