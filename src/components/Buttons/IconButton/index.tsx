// base
import React from 'react';

// packages
import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface IconButtonProps extends ButtonProps {
  color?: string;
}

const StyledIconButton = styled(Button)`
  border: 0;
  background: transparent !important;
  color: ${props => props.color};
  box-shadow: none;
  animation-duration: 0s !important;
`;

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
