import styled from "styled-components";
import Image from "next/image";
import { AutoColumn, ColumnCenter } from "components/Displays/Column";
import { Text } from "components/Utils/Text";
import { Row } from "components/Displays/Row";
import { useState } from "react";

const Wrapper = styled(Row)`
  background: rgba(163, 174, 186, 0.2);
  width: 406px;
  height: 273px;
  border-radius: 20px;
  padding: 30px;
  z-index: 100;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export default function Card({
  src,
  title,
  caption,
  text,
  captionFirst,
}: {
  src: any;
  title: string;
  caption: string;
  text: string;
  captionFirst?: boolean;
}) {
  return (
    <Wrapper justify="center">
      <ImageWrapper>
        <Image
          unoptimized={true}
          src={src}
          alt="image"
          style={{ position: "absolute", top: "-160px", left: "110px" }}
        />
      </ImageWrapper>
      <ColumnCenter>
        {captionFirst ? (
          <>
            <Text align="center" size="18px" lHeight="10px" weight="400">
              <strong>{caption}</strong>
            </Text>
            <Text align="center" size="18px" lHeight="50px" weight="400">
              {title}
            </Text>
          </>
        ) : (
          <>
            <Text align="center" size="20px" lHeight="10px" weight="400">
              {title}
            </Text>
            <Text align="center" size="20px" lHeight="50px" weight="400">
              <strong>{caption}</strong>
            </Text>
          </>
        )}
        <Text
          align="center"
          size="14px"
          weight="400"
          color="rgba(135, 149, 164, 1)"
          lHeight="20px"
        >
          {text}
        </Text>
      </ColumnCenter>
    </Wrapper>
  );
}
