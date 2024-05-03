import {
  MainContainer,
  MainImage,
  MainText,
  NameText,
  CallButton,
} from "./styles";
const Main = () => {
  return (
    <MainContainer>
      <MainImage></MainImage>
      <MainText>
        각자 다른 길을 걸어온 저희가
        <br /> 부부의 연으로 한 길을 걸어가고자 합니다.
        <br /> 한곳을 바라보며 첫 발을 떼는
        <br /> 그 시작의 자리에 함께해 주시기 바랍니다.
      </MainText>
      <MainText>
        정영석 · 한경림<NameText> 의 차남 </NameText> 지수
      </MainText>
      <MainText isnormal="true">
        김석구 · 김성숙<NameText> 의 장녀 </NameText> 소연
      </MainText>
      <CallButton>연락하기</CallButton>
      <MainText>오시는 길</MainText>
      <MainText isnormal="true">
        이비스 앰버서더 수원 15층 베르사이유 홀
      </MainText>
      <MainText issub="true">경기도 수원시 팔달구 권광로 132</MainText>
    </MainContainer>
  );
};
export default Main;
