import { AutoColumn } from "components/Displays/Column";
import { Row, RowBetween, RowEnd } from "components/Displays/Row";
import Logo from "/public/static/images/junusLogo.svg";
import Image from "next/image";
import styled from "styled-components";
import { Text } from "components/Utils/Text";
import Discord from "components/Icons/Discord";
import Twitter from "components/Icons/Twitter";
import Telegram from "components/Icons/Telegram";
import Medium from "components/Icons/Medium";
import GitBook from "components/Icons/GitBook";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 0 9rem;
  height: 516px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const TextHover = styled(Text)`
  transition: 0.4s ease-out;
  cursor: pointer;
  &:hover {
    color: rgba(89, 107, 122, 1);
  }
`;

const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Disclaimer = styled.div`
  border-top: 1px solid rgba(203, 213, 224, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const FooterNav = styled(RowBetween)`
`

export default function Footer() {
  return (
    <Wrapper>
      <FooterNav>
        <AutoColumn gap="15px">
          <Image unoptimized={true} src={Logo} alt="Logo" />
          <Text
            size="14px"
            color="rgba(131, 146, 160, 1)"
            width="90%"
            lHeight="20px"
          >
            Cutting-Edge Real World Asset Protocol
          </Text>

          <Text size="12px" lHeight="10px">
            All rights reserved (c) Junus Finance
          </Text>
          <Row gap="15px">
            <Discord width={24} height={24}></Discord>
            <Twitter width={24} height={24}></Twitter>
            <Telegram width={24} height={24}></Telegram>
            <Medium></Medium>
            <GitBook></GitBook>
          </Row>
        </AutoColumn>
        <RowEnd gap="4rem">
          <MenuOptions>
            <Text size="16px" lHeight="15px" align="right">
              <strong>Navigation</strong>
            </Text>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Real Estate
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              ETFs
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Lending and Borrowing
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Sell Assets
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Staking
            </TextHover>
          </MenuOptions>
          <MenuOptions>
            <Text size="16px" lHeight="10px" align="right">
              <strong>Company</strong>
            </Text>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Whitepaper
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Contact
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Legal
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Privacy Policy
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Terms and Conditions
            </TextHover>
          </MenuOptions>
          <MenuOptions>
            <Text size="16px" lHeight="10px" align="right">
              <strong>Resources</strong>
            </Text>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Analytics
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Community
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Brand Assets
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Documentation
            </TextHover>
            <TextHover
              size="12px"
              lHeight="10px"
              color="rgba(131, 146, 160, 1)"
              align="right"
            >
              Developers
            </TextHover>
          </MenuOptions>
        </RowEnd>
      </FooterNav>
      <Disclaimer>
        <Text size="16px" weight="500">
          Disclaimer
        </Text>
        <Text
          size="12px"
          weight="300"
          color="rgba(131, 146, 160, 1)"
          lHeight="20px"
        >
          Junus Finance is a technology services provider. Use of the Junus
          Protocol involves risks, including but not limited to the potential
          loss of digital assets. Before using the Junus Protocol, you should
          review our documentation to ensure you understand how the Protocol
          works. As described in our Terms, the Junus Protocol is provided on an
          “as is” and “as available” basis, at your own risk. We explicitly
          disclaim any representation or warranties of any kind relating to the
          Protocol, and no developer or entity will be liable for claims or
          damages of any kind associated with use or inability to use the
          Protocol. Junus is not engaged in the business of the offer, sale, or
          trading of securities. The Protocol token, Junus (JNU), is a utility
          token that is not tied to profits or growth of the Protocol or efforts
          of Junus. Purchasers should have no expectation of profit and should
          not consider it an investment. Holding, lending, or borrowing digital
          assets involve a substantial degree of risk, including the risk of
          complete loss. The information contained on this website is intended
          for informational purposes only. Although Maple strives to ensure
          accuracy of that information, some communications may not reflect the
          most current information, and Junus cannot guarantee that all content
          is updated, complete, reliable, or accurate.
        </Text>
      </Disclaimer>
    </Wrapper>
  );
}
