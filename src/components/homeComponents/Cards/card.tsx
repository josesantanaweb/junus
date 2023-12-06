import styled from "styled-components";
import Image from "next/image";
import { AutoColumn, ColumnCenter } from "components/Displays/Column";
import { Text } from "components/Utils/Text";
import { Row } from "components/Displays/Row";
import { useState } from "react";

const Wrapper = styled(Row)`
  border: 3px solid rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 1);
  width: 400px;
  height: 440px;
  border-radius: 20px;
  padding: 10px;
  z-index: 100;

  transition: 0.4s ease-out;
  &:hover {
    box-shadow: 0px 15px 15px 0px rgba(53, 111, 165, 0.12);
  }
`;

const ApyBox = styled(Row)`
  background: rgba(135, 149, 164, 1);
  width: 124px;
  height: 38px;
  padding: 10px, 16px, 10px, 16px;
  border-radius: 20px;
`;

const ImageWrapper = styled.div<{isHover: boolean}>`
  min-height: 275px;
  transition: 0.4s ease-out; 
  transform: ${({isHover}) => isHover? 'scale(1.05)': 'scale(1)'};
`;

export default function Card({
  src,
  title, 
  apy1,
  apy2,
}: {
  src: any;
  title: string;
  apy1: number; 
  apy2: number;
}) {

  const [isHovering, setIsHovering] = useState(false); 
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Wrapper justify="center" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ColumnCenter>
        <ImageWrapper isHover={isHovering}>
          <Image unoptimized={true} src={src} alt="image" />
        </ImageWrapper>
        <Text align="center" size="20px" weight="400">
          {title}
        </Text>
        <ApyBox justify="center">
          <Text align="center" size="16px" weight="400" color="white">
            <strong>
              {apy1}-{apy2}% APY
            </strong>
          </Text>
        </ApyBox>
      </ColumnCenter>
    </Wrapper>
  );
}
