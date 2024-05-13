import LinkButton from "@/components/common/atoms/LinkButton";
import { InnerLarge } from "@/styles/commonStyle";

export default function Home() {
  return (
    <div>
      <InnerLarge style={{maxWidth:500}}>
        <br/><br/><br/>
        <LinkButton $link="/folder" $linkClass="link--gradient large">폴더 페이지</LinkButton>
        <br/>
        <LinkButton $link="/share/14" $linkClass="link--gradient large">쉐어 (즐겨찾기)페이지</LinkButton>
      </InnerLarge>
    </div>
  )
}
