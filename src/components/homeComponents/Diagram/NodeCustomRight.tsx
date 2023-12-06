import { Row } from "components/Displays/Row";
import { Text } from "components/Utils/Text";
import React, { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import styled from "styled-components";

const Node = styled(Row)`
  padding: 10px 18px;
  border-radius: 20px;
  color: rgba(39, 48, 57, 1);
  width: fit-content;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 12.87148666381836px 12.87148666381836px 0px
    rgba(53, 111, 165, 0.12);

  .react-flow__handle {
    visibility: hidden;
  }

  &:hover {
    background: rgba(39, 48, 57, 1);
    color: white;
  }
`;

const NodeCustomRight = ({ data }: NodeProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Node
      justify="center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Handle type="source" position={Position.Right} id="right" />
      <Text
        width="90px"
        size="8px"
        lHeight="10px"
        align="left"
        color={isHovering ? "white" : "black"}
      >
        <strong>{data.label}</strong>
      </Text>
    </Node>
  );
};

export default memo(NodeCustomRight);
