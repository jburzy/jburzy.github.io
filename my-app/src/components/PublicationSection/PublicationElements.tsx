import styled from "styled-components";

export const PubContainer = styled.div`
  background: #f9f9f9;
  padding: 48px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const PubWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const PubList = styled.ul`
  list-style: square;
  text-align: left;
  margin: 32px 64px;
  color: #000000;
  font-size: 26px;
  line-height: 1.6;
`;

export const PubItem = styled.li`
  margin-bottom: 24px;
  color: #000000;
`;

export const PubH1 = styled.h1`
  font-size: 56px;
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;
