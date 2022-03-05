import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

interface MainLayoutProps extends React.HTMLProps<HTMLDivElement> {
  headerType?: string;
  border?: boolean;
  isMain?: string;
}

const StyledMainLayout = styled.div<{
  headerType?: string;
}>`
  position: relative;

  ${(props) => props.headerType && '.ant-layout-content { padding-top: 130px;}'}
  .slick-dots {
    text-align: left;
    li {
      &:before {
        content: none;
      }
      button {
        &:before {
          content: none;
        }
      }
    }
  }
`;

export const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <>
      <StyledMainLayout headerType={props.headerType}>
        <Layout.Content>{children}</Layout.Content>
      </StyledMainLayout>
    </>
  );
};
