/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const heights = {
  small: '8px',
  medium: '12px',
  large: '24px',
}

const radii = {
  small: '4px',
  medium: '8px',
  large: '8px',
}


const Wrapper = styled.progress`
  width: 370px;
  height: ${p => heights[p.size]};
  padding: ${p => p.size == 'large' ? '4px' : 0};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${p => radii[p.size]};

  &::-webkit-progress-bar {
    background: ${COLORS.gray50};
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
  }
`

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
        size={size}
        max="1"
        value={value / 100}
        aria-valuenow={value}
    >
    </Wrapper>
  )
};

export default ProgressBar;
