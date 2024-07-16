import { MainImage } from "@components";
import { Colors } from "@design-system";
import styled, { ThemeProvider } from "styled-components";
import { ConfirmStatus } from "./components/ConfirmStatus";

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
          <ConfirmStatus.Progress confirmCard={[]} />
          <ConfirmStatus.Count confirmCard={[]} />
          <ConfirmStatus.Thumbnail confirmCard={[]} />
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
