import styled from "styled-components";

export const Text = styled.div<{
  size?: string;
  color?: string;
  align?: string;
  weight?: string;
  lHeight?: string;
  width?: string;
}>`
  font-family: TT Firs Neue Trial Var Roman;
  font-size: ${({ size }) => (size ? size : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : "300")};
  color: ${({ color, theme }) => (color ? color : theme.black)};
  text-align: ${({ align }) => (align ? align : "left")};
  line-height: ${({ lHeight }) => (lHeight ? lHeight : "50px")};
  width: ${({ width }) => (width ? width : "100%")};
`;
