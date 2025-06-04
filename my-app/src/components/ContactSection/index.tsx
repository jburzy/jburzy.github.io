import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeading,
  ContactText,
  EmailButton
} from "./ContactElements";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactHeading>Contact Me</ContactHeading>
        <ContactText>
          Interested in working with me? I welcome both undergraduate and graduate students
          who are excited to explore new frontiers in particle physics. If you're interested
          in joining my group, please don’t hesitate to get in touch!
        </ContactText>
        <EmailButton href="mailto:jackson.carl.burzynski@cern.ch">Email Me</EmailButton>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
