import { AutoColumn } from "components/Displays/Column";
import { Row, RowBetween } from "components/Displays/Row";
import { Text } from "components/Utils/Text";
import styled from "styled-components";
import Image from "next/image";
import City from "/public/static/images/cityHeader.svg";
import Decorator1 from "/public/static/images/background/backgroundDecorator.svg";
import Decorator2 from "/public/static/images/background/decorator2.svg";
import Decorator3 from "/public/static/images/background/decorator3.svg";
import Decorator4 from "/public/static/images/background/decorator4.svg";
import Building from "/public/static/images/background/building.svg";
import { BaseButton } from "components/Buttons";
import Colabs from "components/homeComponents/Colabs";
import Info from "components/homeComponents/Cards";
import Diagrama from "components/homeComponents/Diagram";
import InfoCards from "components/homeComponents/Info";
import { useState } from "react";
import Play from "components/Icons/Play";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  margin: 4rem 0;
  margin-top: 150px;
  width: 100%;
  height: 100%;
`;

const ImageBackground = styled.div<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}>`
  position: absolute;
  z-index: 0;
  overflow: hidden;
  left: ${({ left }) => left ?? "0"};
  right: ${({ right }) => right ?? "0"};
  top: ${({ top }) => top ?? "0"};
  bottom: ${({ bottom }) => bottom ?? "0"};
  justify-content: center;
  height: 100vh;
`;

const TopHeader = styled(Row)`
  width: 100%;
  min-height: 500px;
  z-index: 100;
`;

const HeaderInfo = styled(AutoColumn)`
  max-width: 29%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 65vh;
  border-bottom: 4px solid rgba(222, 230, 238, 1);
  padding: 0 2rem;
`;

const Explore = styled.div`
  height: 635px;
  background: linear-gradient(270.25deg, #ffffff 13.79%, #dee6ee 88.33%);
  margin-top: 80px;
`;

const ExploreText = styled(AutoColumn)`
  height: 100%;
  lign-items: center;
  align-content: center;
  position: relative;
  left: 5%;
`;

export default function MyAccount() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Wrapper>
      <Header>
        <ImageBackground>
          <Image
            src={Decorator1}
            alt="icon"
            style={{
              width: "140%",
              height: "125vh",
              position: "absolute",
              opacity: "0.3",
              transform: "rotate(10deg)",
            }}
          />
        </ImageBackground>
        <TopHeader align="center" justify="space-around">
          <HeaderInfo justify="flex-start">
            <Text size="40px" lHeight="60px">
              <strong>Where Real-World</strong> <br />
              Assets Meets Blockchain
            </Text>
            <Text size="16px" lHeight="60px">
              Junus seamlessly integrates real estate and bonds.
            </Text>
            <Text size="16px" lHeight="25px">
              Experience the future of financial ecosystems with flexible
              collateral options for your borrowing needs.
            </Text>

            <Row gap="10px" marginTop={15}>
              <BaseButton
                inverted={true}
                border={false}
                radius={100}
                padding="12px"
                width="138px"
              >
                Launch App
              </BaseButton>
              <BaseButton
                inverted={true}
                border={false}
                radius={100}
                padding="12px"
                width="138px"
              >
                Get JNU
              </BaseButton>
              <BaseButton
                inverted={false}
                border={true}
                radius={100}
                padding="12px"
                width="138px"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                gap="5px"
              >
                <Play fill={isHovering?'white':'#273039'}></Play>
                <strong>How it works</strong>
              </BaseButton>
            </Row>
          </HeaderInfo>
          <Image unoptimized={true} src={City} alt="city" />
        </TopHeader>
        <Colabs />
      </Header>
      <Info />
      <Diagrama />
      <InfoCards />
      <Explore>
        <Image
          src={Decorator2}
          alt="icon"
          style={{
            position: "absolute",
            opacity: "1",
            bottom: "7.5%",
          }}
        />
        <Image
          src={Decorator3}
          alt="icon"
          style={{
            position: "absolute",
            opacity: "1",
            left: "48%",
          }}
        />
        <Image
          src={Decorator4}
          alt="icon"
          style={{
            position: "absolute",
            opacity: "1",
            left: "85%",
          }}
        />

        <Image
          src={Building}
          alt="icon"
          style={{
            position: "absolute",
            opacity: "1",
            bottom: "1.4%",
            left: "58%",
          }}
        />

        <ExploreText gap="10px">
          <div>
            <Text size="34px">Discover unforeseen opportunities, broaden</Text>
            <Text size="34px">
              <strong>your horizons as an investor with Junus</strong>
            </Text>
          </div>
          <BaseButton
            inverted={true}
            border={false}
            radius={100}
            padding="12px"
            width="166px"
          >
            Explore Properties
          </BaseButton>
        </ExploreText>
      </Explore>
    </Wrapper>
  );
}
