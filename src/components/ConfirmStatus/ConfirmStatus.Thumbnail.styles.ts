import styled from "styled-components";

export const Container = styled.div<{ $showshadow?: boolean }>`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  box-shadow: ${({ $showshadow }) =>
    $showshadow ? "rgba(100, 100, 111, 0.3) 0px 0px 5px 0px" : "none"};
`;
