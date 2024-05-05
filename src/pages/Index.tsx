import { InnerLarge } from "../styles/commonStyle";
import { MainWrap } from "./mainStyle";
import LinkButton from "../components/common/atoms/LinkButton";

function Index() {
  return (
    <MainWrap>
      <InnerLarge style={{maxWidth:500}}>
        <br/><br/><br/>
        <LinkButton $link="/folder" $linkClass="link--gradient large">폴더 페이지</LinkButton>
        <br/>
        <LinkButton $link="/share" $linkClass="link--gradient large">쉐어 페이지</LinkButton>
      </InnerLarge>
 
    </MainWrap>
  );
}
export default Index;
