import React, { forwardRef } from "react";
import styled from "styled-components";

type Props = { children: React.ReactNode };
type Ref = HTMLDivElement;

const ForwardRefDiv = forwardRef<Ref, Props>((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

const ColumnWrapper = styled(ForwardRefDiv)`
  overflow: "hidden";
  overflow-x: "scroll";
  white-space: "nowrap";
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default ColumnWrapper;
