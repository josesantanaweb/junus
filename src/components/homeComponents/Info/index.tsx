import { AutoColumn } from "components/Displays/Column";
import { Row } from "components/Displays/Row";
import { Text } from "components/Utils/Text";
import styled from "styled-components";
import Coins from "/public/static/images/infoIcons/coins.svg";
import Credit from "/public/static/images/infoIcons/creditCard.svg";
import Fire from "/public/static/images/infoIcons/fire.svg";
import Gift from "/public/static/images/infoIcons/gift.svg";
import House from "/public/static/images/infoIcons/houseHand.svg";
import Interface from "/public/static/images/infoIcons/interface.svg";
import Reward from "/public/static/images/infoIcons/reward.svg";
import World from "/public/static/images/infoIcons/world.svg";
import Card from "./card";

const Wrapper = styled(AutoColumn)`
  margin: 0 14rem;
  margin-top: 7rem;
  z-index: 100;
`;

const CardDisplay = styled(Row)`
  flex-wrap: wrap;
`;

export default function InfoCards() {
  return (
    <Wrapper gap="5rem">
      <AutoColumn justify="center">
        <Text
          size="20px"
          align="center"
          weight="500"
          color="rgba(135, 149, 164, 1)"
        >
          Why Junus?
        </Text>
        <Text size="34px" align="center" weight="500">
          <strong>What makes us different </strong>
          from other platforms
        </Text>
      </AutoColumn>
      <CardDisplay justify="center" gap="30px">
        <Card
          src={World}
          title={"Tokenization of"}
          caption={"Real World Assets"}
          text={
            "Redefined ownership, users benefit from unprecedented flexibility and accessibility thanks to fractional stakes in real estate and bonds."
          }
        />
        <Card
          src={House}
          title={"Disruptive"}
          caption={"Real Estate"}
          text={
            "Democratized access to exclusive real estate opportunities featuring exotic properties and high-return investments without the need for significant capital."
          }
        />
        <Card
          src={Gift}
          title={"On-chain"}
          caption={"U.S. Bonds"}
          text={
            "Diversified portfolios, thanks to strategic investments in U.S. bonds. Junus ensures stability in your investment strategy amidst the dynamic economic landscape."
          }
        />
        <Card
          src={Credit}
          title={"- Money Services Businesses"}
          caption={"Private Credit"}
          captionFirst={true}
          text={
            "Junus revolutionizes cross-border paymants by connecting Web3 lenders with global paymant entities, challenging SWIFT’s pre-funding model. Unlike the capital-intensive and inflexible processes of traditional systems, Junus ensures real-time liquidity, liberating bussinesses from fund locking."
          }
        />
        <Card
          src={Interface}
          title={"Transparency and"}
          caption={"User-Friendly Interface"}
          text={
            "Effortlessly monitor your investments in real-time on our user-friendly platform, coupled with transparent governance processes for clarity and trust."
          }
        />
        <Card
          src={Reward}
          title={"Staking for"}
          caption={"Enhanced Rewards"}
          text={
            "Maximize Returns staking your JUN tokens to earn a share of the platform's revenue."
          }
        />
        <Card
          src={Coins}
          title={"Regulatory-Compliant"}
          caption={"Investments"}
          text={
            "Security is paramount, invest with confidence, knowing your assets are protected within a secure, and fully compliant framework."
          }
        />
        <Card
          src={Fire}
          title={"Macrotrend"}
          caption={"ETFs"}
          text={
            "Junus helps investors align their investments with the ever-evolving landscape of global markets, staying ahead of emerging themes and capturing growth opportunities"
          }
        />
      </CardDisplay>
    </Wrapper>
  );
}
