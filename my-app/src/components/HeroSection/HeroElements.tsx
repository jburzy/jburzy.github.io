import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #841617;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 40px 20px; /* Added more space at the top */
  min-height: 70vh;
  font-family: 'Raleway', sans-serif;

  @media screen and (max-width: 768px) {
    padding: 120px 20px 40px 20px; /* Even more top space on mobile */
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1400px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 60px;
  border: 3px solid #ffffff;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  color: #ffffff;
`;

export const Name = styled.h1`
  font-weight: 700; /* Bold */
  font-size: 64px;
  margin-bottom: 16px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Title = styled.h2`
  font-weight: 200; /* Light */
  font-size: 36px;
  margin-bottom: 8px;
  color: #f0f0f0;
`;

export const University = styled.h3`
  font-weight: 200; /* Light */
  font-size: 32px;
  margin-bottom: 24px;
  color: #f0f0f0;
`;

export const About = styled.p`
  font-weight: 400; /* Regular */
  font-size: 24px;
  max-width: 700px;
  line-height: 1.6;
  color: #f0f0f0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CVButton = styled.a`
  display: inline-block;
  margin-top: 32px;
  background: #f0f0f0;
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  padding: 14px 28px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;
