import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Fade from "react-reveal/Fade";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const HeroDiss = ({ disc }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Fade bottom>
          <DissGroup>
            <Text>{disc}</Text>
          </DissGroup>{" "}
        </Fade>
      </ThemeProvider>
    </>
  );
};

export default HeroDiss;

const DissGroup = styled.div`
  display: flex;
  max-width: 100%;
  padding: 15px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const Text = styled.h1`
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 25px;
`;
