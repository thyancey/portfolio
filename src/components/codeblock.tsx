import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const ScCode = styled.pre`
  background-color: var(--theme-bg);
  color: var(--theme-neutral);
  border: 3px solid var(--theme-primary);
  padding: 1rem;
  overflow: auto;
  filter: drop-shadow(3px 3px 5px black);
  border-radius: 1rem;

  font-family: monospace;
`;

function Codeblock({ children }: Props) {
  return (
    <ScCode>
      <code>{children}</code>
    </ScCode>
  );
}

export default Codeblock;
