import { AutoColumn } from "components/Displays/Column";
import { Row } from "components/Displays/Row";
import { Text } from "components/Utils/Text";
import styled from "styled-components";
import Card from "./card";
import House from "/public/static/images/house.svg";
import Etfs from "/public/static/images/etfs.svg";
import Credit from "/public/static/images/credit.svg";
import Bank from "/public/static/images/bank.svg";

const Wrapper = styled(AutoColumn)`
  margin: 0 2rem;
  z-index: 100;
`;


const CardsContainer = styled(Row)`
  flex-wrap: wrap;
`

export default function Info() {
  return (
    <Wrapper gap="5rem">
      <AutoColumn justify="center">
        <Text size="34px" align="center" weight="500" width="30%">
          Elevate Your Finances with
          <strong>
            {" "}
            Institutional-Grade Solutions, Now On the Blockchain.
          </strong>
        </Text>
        <Text size="14px" align="center" weight="300">
          Junus leads the way in constructing the next era of
          financialinfrastructure, enhancing market efficiency, transparency,
          and accessibility.
        </Text>
      </AutoColumn>
      <CardsContainer justify="center" gap="30px">
        <Card
          title="Tokenize Real Estate"
          src={House}
          apy1={7}
          apy2={25}
        ></Card>
        <Card
          title="ETFs and Treasury Bonds"
          src={Etfs}
          apy1={4}
          apy2={10}
        ></Card>
        <Card
          title="Lending and Borrowing "
          src={Bank}
          apy1={5}
          apy2={8}
        ></Card>
        <Card title="Private Credit" src={Credit} apy1={7} apy2={12}></Card>
      </CardsContainer>
    </Wrapper>
  );
}
