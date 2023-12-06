import { Row } from "components/Displays/Row";
import { Text } from "components/Utils/Text";
import React, { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import styled from "styled-components";

const Node = styled(Row)`
  padding: 10px 10px;
  border-radius: 15px;
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
  }
`;

const NodeCustom = ({ data }: NodeProps) => {
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
      <Handle type="source" position={Position.Bottom} id="top" />
      <Text
        width="65px"
        size="8px"
        lHeight="10px"
        color={isHovering ? "white" : "black"}
        align="center"
      >
        <strong>{data.label}</strong>
      </Text>

      <Handle type="source" position={Position.Top} id="bottom" />
    </Node>
  );
};

export default memo(NodeCustom);
