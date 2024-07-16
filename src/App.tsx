import { MainImage } from "@components";
import { Colors } from "@design-system";
import styled, { ThemeProvider } from "styled-components";
import { ConfirmStatus } from "./components/ConfirmStatus";
import { CONFIRM_CARD_MOCKS } from "./mocks";
import ConfirmButton from "./components/ConfirmButton/ConfirmButton";

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <Wrapper>
          <MainImage
            title={"1만보 걷기"}
            imageUrl={
              "https://d246jgzr1jye8u.cloudfront.net/development/admin/1644299105539.png"
            }
          />
          <ConfirmStatus.Progress confirmCard={CONFIRM_CARD_MOCKS} />
          <ConfirmStatus.Count confirmCard={CONFIRM_CARD_MOCKS} />
          <ConfirmStatus.Thumbnail confirmCard={CONFIRM_CARD_MOCKS} />
          <ConfirmButton confirmCard={CONFIRM_CARD_MOCKS} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
`;
