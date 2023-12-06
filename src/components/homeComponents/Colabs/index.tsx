import { Row } from "components/Displays/Row";
import styled from "styled-components";
import Image from "next/image";
import Aza from "/public/static/images/logos/aza.svg";
import Dkk from "/public/static/images/logos/dkk.svg";
import FreeMarket from "/public/static/images/logos/freeMarket.svg";
import Kapook from "/public/static/images/logos/kapook.svg";
import MoneySwitch from "/public/static/images/logos/moneySwitch.svg";
import Smartway from "/public/static/images/logos/smartway.svg";

const Wrapper = styled.div`
  margin: 0 20%;
  z-index: 100;
`;

export default function Colabs() {
  return (
    <Wrapper>
      <Row gap="10rem" justify="center" align="center">
        <Image src={Aza} alt="icon" style={{ width: "100%" }} />
        <Image src={Kapook} alt="icon" style={{ width: "100%" }} />
        <Image src={Dkk} alt="icon" style={{ width: "100%" }} />
        <Image src={FreeMarket} alt="icon" style={{ width: "100%" }} />
        <Image src={MoneySwitch} alt="icon" style={{ width: "100%" }} />
        <Image src={Smartway} alt="icon" style={{ width: "100%" }} />
      </Row>
    </Wrapper>
  );
}
