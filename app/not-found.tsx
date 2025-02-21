import { FlexCol, Wrapper } from './styles';
import { HeaderMd, StyledLink, TextMd } from './styles/utils/Typography';

export default function NotFound() {
  return (
    <Wrapper
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center'
      }}
    >
      <FlexCol style={{ alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
        <HeaderMd>Not Found</HeaderMd>
        <TextMd>Could not find requested page</TextMd>

        <TextMd>
          <StyledLink href="/">Return Home</StyledLink>
        </TextMd>
      </FlexCol>
    </Wrapper>
  );
}
