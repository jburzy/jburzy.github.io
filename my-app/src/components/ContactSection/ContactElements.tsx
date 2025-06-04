import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #f9f9f9;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const ContactHeading = styled.h1`
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

export const ContactText = styled.p`
  font-size: 26px;
  color: #333;
  line-height: 1.6;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const EmailButton = styled.a`
  display: inline-block;
  margin-top: 32px;
  background: #841617; /* Crimson, OU color */
  color: #fff;
  padding: 14px 28px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #a92a2b; /* Slightly lighter on hover */
    color: #fff;
  }
`;