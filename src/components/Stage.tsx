import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

export type STAGECELL = [keyof typeof import('../tetrominos').TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
}

const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
)

export default Stage;