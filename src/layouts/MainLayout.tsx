// base
import React, { useState, HTMLAttributes } from 'react';

// packages
import styled from 'styled-components';
import {
  Layout,
  Row,
  Col
  // Button,
} from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { IconButton } from 'components/Buttons';
import { MainNav } from 'container';
import Search from 'antd/lib/input/Search';

const { Header, Content, Sider, Footer } = Layout;

const StyledMainLayout = styled.div<{ headerType?: string }>`
  height: 100vh;
  ${props => props.headerType && '.ant-layout-content { padding-top: 130px;}'}
  .main-nav__inner {
    height: 100%;

    & > .ant-row {
      height: 100%;
    }

    & > .ant-row,
    .ant-col {
      width: 100%;
      /* height: 100%; */

      .ant-input-group-wrapper {
        .ant-input-wrapper {
          input {
            height: 30px;
          }
        }
      }
    }
  }

  .ant-layout {
    height: 100%;
  }

  .ant-layout-header {
    padding: 0 20px;
    background: #ffffff;
  }

  .ant-layout-sider {
    overflow: scroll;
    background: #001529;
  }

  .ant-layout-content {
    min-width: 800px;
    background: #ffffff;
    overflow: scroll;
  }

  .ant-layout-footer {
    margin: 50px 0 20px 0;
    padding: 0;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.65);
    background: transparent;
    a {
      color: #fff;
    }
  }

  .btn-collapse {
    background: transparent;
    border: 0;
    color: #ffffff;
  }
`;

const LogoBox = styled.h1`
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  color: #ff4c01;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  padding: 0 15px;
  margin-bottom: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
`;

const ProfileBoxText = styled.span<{ fontSize?: string }>`
  font-size: ${props => props.fontSize || '16px'};
`;

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  headerType?: string;
}

export const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handle = () => {
    setVisible(true);
  };

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledMainLayout {...props} key='main' headerType={props.headerType}>
      <Layout>
        <Sider
          theme='light'
          trigger={null}
          width={250}
          collapsible
          collapsed={collapsed}
        >
          <div className='main-nav__inner'>
            <Row>
              <Col>
                <LogoBox onClick={handle}>
                  {collapsed ? 'FONT WORLD' : 'FONT-WORLD'}
                  <br />
                  {collapsed ? '' : 'KDONG'}
                </LogoBox>
                {!collapsed && (
                  <ProfileBox>
                    <Row justify='center'>
                      <Col>
                        <ProfileBoxText>"제작자"</ProfileBoxText>
                      </Col>
                      <Col>
                        <ProfileBoxText fontSize='21px'>강동재</ProfileBoxText>
                      </Col>
                      <Col>
                        <ProfileBoxText fontSize='14px'>
                          gkfl8809@naver.com
                        </ProfileBoxText>
                      </Col>
                    </Row>
                  </ProfileBox>
                )}
                <MainNav collapsed={collapsed} />
              </Col>
              <Col style={{ alignSelf: 'flex-end' }}>
                {!collapsed && (
                  <Footer>
                    <a
                      href='https://rice-price-kdong.web.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      ⓒ KDONG
                    </a>
                    <br />
                    [고객센터]
                    <br />
                    INSTA | @noyclah_jdk
                    <br />
                    EMAIL | gkfl8807@gmail.com
                    <br />
                    ver.__VERSION__
                  </Footer>
                )}
              </Col>
            </Row>
          </div>
        </Sider>
        <Layout>
          <Header>
            <Row justify='space-between' align='middle'>
              <Col>
                <IconButton
                  icon={visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={handleToggle}
                />
              </Col>
              <Col>만드는중... (update: 22. 04. 16)</Col>
              <Col>
                <Search
                  placeholder='input search text'
                  onSearch={() => console.log('search')}
                  enterButton
                />
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              fontSize: 40
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </StyledMainLayout>
  );
};
