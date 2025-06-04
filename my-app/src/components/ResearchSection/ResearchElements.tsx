import styled from 'styled-components';

export const ResearchContainer = styled.div`
  background: #f9f9f9;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
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

export const Section = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

interface RowProps {
  reverse?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  padding: 24px;
  min-width: 300px;
  max-width: 600px;
`;

export const ImageWrap = styled.div`
  flex: 1;
  padding: 24px;
  min-width: 300px;
  max-width: 800px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  border: 0px solid #ccc;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 1.6;
  color: #222;
  margin-bottom: 16px;
`;

export const ExternalLink = styled.a`
  color: #841617;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid #841617;
  }
`;
