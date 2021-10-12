import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

interface StringProps {
  borderWidth?: number;
  borderRadius?: number;
  gap?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.4);

  & > p {
    text-indent: 25px;
    letter-spacing: 25px;
  }
`;

const String = styled.div<StringProps>`
  ${({ borderWidth = 7, borderRadius = 13, gap = 8 }) => css`
    --border-width: ${borderWidth}px; /* 1px / 7px / 13px */
    --border-radius: ${borderRadius}px; /* 7px / 13px */
    --gap: ${gap}px;
  `}

  display: flex;
  flex-direction: row;
  gap: var(--gap);

  & > .word {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 40px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    animation: border-width-animation 5s ease-in-out;
  }

  @keyframes border-width-animation {
    0% {
      border-radius: 0px;
    }
  }

  & > .word-d {
    border: var(--border-width) solid black;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  & > .word-a {
    border-top: var(--border-width) solid black;
    border-left: var(--border-width) solid black;
    border-right: var(--border-width) solid black;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  & > .word-n {
    border-top: var(--border-width) solid black;
    border-left: var(--border-width) solid black;
    border-right: var(--border-width) solid black;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  & > .word-t {
    border-top: var(--border-width) solid black;
  }

  & > .word-e {
    border-top: var(--border-width) solid black;
    border-left: var(--border-width) solid black;
    border-bottom: var(--border-width) solid black;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  & > .word > .center-horizon {
    width: 100%;
    height: var(--border-width);
    background-color: black;
    margin: 0px;
    padding: 0px;
  }

  & > .word > .center-vertical {
    width: var(--border-width);
    height: 100%;
    background-color: black;
    margin: 0px;
    padding: 0px;
  }
`;

const Home = () => {
  const [degree, setDegree] = useState(0);
  const sine = useMemo(() => Math.sin((degree * Math.PI) / 180), [degree]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDegree((degree) => degree + 1);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <String>
        <div className="word word-d"></div>
        <div className="word word-a ">
          <div className="center-horizon"></div>
        </div>
        <div className="word word-n"></div>
        <div className="word word-t">
          <div className="center-vertical"></div>
        </div>
        <div className="word word-e">
          <div className="center-horizon"></div>
        </div>
      </String>
      <p>COMPANY</p>
    </Container>
  );
};

export default Home;
