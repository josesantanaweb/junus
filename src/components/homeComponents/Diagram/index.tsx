import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
  Position,
  ConnectionMode,
  MarkerType,
  ConnectionLineType,
} from "reactflow";
import "reactflow/dist/style.css";

import ButtonEdge from "./EdgeCustom";
import { initialEdges, initialNodes } from "./NodeEdge";
import NodeCustom from "./NodeCustom";
import NodeCustomRight from "./NodeCustomRight";
import { AutoColumn } from "components/Displays/Column";
import styled from "styled-components";
import { Text } from "components/Utils/Text";
import { useIsMobile } from "lib/Hooks/useWindowSize";

const Wrapper = styled.div`
  height: 900px;
  z-index: 100;
`;

const proOptions = { hideAttribution: true };
const edgeTypes = {
  buttonedge: ButtonEdge,
};

const nodeTypes = {
  customNode: NodeCustom,
  customNodeRight: NodeCustomRight,
};

const Diagram = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const isMobile = useIsMobile()

  return (
    <Wrapper>
      <AutoColumn justify="center">
        <Text size="34px" align="center" weight="500" lHeight="90px">
          <strong>Explore </strong>
          Junus
        </Text>
        <Text
          size="15px"
          align="center"
          weight="300"
          lHeight="22px"
          width="35%"
        >
          Junus provides a wide range of investment opportunities, catering to
          the diverse needs of investors and democratizing access to
          opportunities that were previously inaccessible to the majority. Junus
          delivers a user-friendly, secure, and regulatory-compliant product,
          sharing 100% of the revenue with the community.
        </Text>
      </AutoColumn>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          connectionMode={ConnectionMode.Loose}
          elementsSelectable={true}
          nodesConnectable={false}
          nodesDraggable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          panOnDrag={isMobile}
          fitView
        >
        </ReactFlow>
    </Wrapper>
  );
};

export default Diagram;
