import React from 'react';

import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

const StyledFooterButton = styled(Button)<{
  opacity?: number;
  height?: number;
}>`
  &.ant-btn {
    width: 100%;
    height: ${props => props.height || 100}px;
    border-radius: 0;
    border: 0;
    background: rgba(255, 181, 36, ${props => props.opacity || 1});
    font-size: 26px;
    font-weight: 700;
    color: #333333;
  }
`;

interface FooterButtonProps extends ButtonProps {
  opacity?: number;
  height?: number;
}

export const FooterButton = ({ children, ...props }: FooterButtonProps) => {
  return <StyledFooterButton {...props}>{children}</StyledFooterButton>;
};
