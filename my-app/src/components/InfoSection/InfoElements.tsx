import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #f9f9f9;
  padding: 64px 0;
  display: flex;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 24px;
`;

export const Heading = styled.h1`
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

export const SectionHeader = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: #000;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const EntryList = styled.ul`
  margin-left: 24px;
  margin-bottom: 20px;
  padding-left: 16px;
`;

export const Entry = styled.li`
  margin-bottom: 16px;
  font-size: 26px;
  line-height: 1.6;
  color: #000;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const EntrySub = styled.div`
  font-size: 22px;
  color: #555;
  margin-left: 0.5rem;
`;