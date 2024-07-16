import { MainImage } from "@components";
import { Colors, SCREEN_WIDTH } from "@design-system";
import styled, { ThemeProvider } from "styled-components";
import { ConfirmStatus } from "./components/ConfirmStatus";
import { CONFIRM_CARD_MOCKS } from "./mocks";
import ConfirmButton from "./components/ConfirmButton/ConfirmButton";

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Page>
        <Content>
          <MainImage
            title={"1만보 걷기"}
            imageUrl={
              "https://d246jgzr1jye8u.cloudfront.net/development/admin/1644299105539.png"
            }
          />
          <ConfirmStatus.Progress confirmInfoList={CONFIRM_CARD_MOCKS} />
          <ConfirmStatus.Count confirmInfoList={CONFIRM_CARD_MOCKS} />
          <ConfirmStatus.Thumbnail confirmInfoList={CONFIRM_CARD_MOCKS} />
          <ConfirmButton confirmInfoList={CONFIRM_CARD_MOCKS} />
        </Content>
      </Page>
    </ThemeProvider>
  );
}

export default App;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.BASIC_BLACK};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${SCREEN_WIDTH}px;
  background-color: ${Colors.BASIC_WHITE};
`;
