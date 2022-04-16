/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ReactNode } from 'react';
// import { useHistory } from "react-router";
import {
  // useDispatch,
  useSelector
} from 'react-redux';

import { Menu } from 'antd';

import {
  UserOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
  FileImageOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  MessageOutlined,
  HistoryOutlined,
  SolutionOutlined,
  TeamOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

import { StoreState } from 'modules';
// import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import SubMenu from 'antd/lib/menu/SubMenu';
// import {
//   getReceiptListAction,
//   getWhistleblowingListAction
// } from 'modules/content';
// import { storeCode } from 'libs';
// import { getQuestionNewCheckAction } from 'modules/proxy';
// import moment from "moment";

const opacityAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const pauseAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

interface MenuType {
  [key: string]: {
    icon: ReactNode;
    title: string;
  };
}

interface MainNavProps {
  collapsed?: boolean;
}

const StyledMainNavMenu = styled(Menu)`
  .new-menu {
    display: inline-block;
    background: rgb(165, 213, 250);
    color: #000 !important;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 1.7;
    text-align: center;
    font-weight: bold;
    animation: ${opacityAnimation} 2s 2s infinite linear,
      ${pauseAnimation} 4s infinite linear;
  }
  .ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon + span,
  .ant-menu-dark .ant-menu-item-selected .anticon + span {
    color: #000 !important;
  }
`;

export const MainNav = ({ collapsed }: MainNavProps) => {
  // const { user } = useSelector((state: StoreState) => state.authState);
  // const { receiptList } = useSelector(
  //   (state: StoreState) => state.contentState
  // );
  // const { questionList, questionNewCheck } = useSelector(
  //   (state: StoreState) => state.ProxyState
  // );
  // const { whistleblowingList } = useSelector(
  //   (state: StoreState) => state.contentState
  // );

  const [openKeys, setOpenkeys] = useState<string[]>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  // const [catalogToken, setCatalogToken] = useState<string>("");

  // const history = useHistory();

  // const dispatch = useDispatch();

  // const getReceiptList = useCallback(() => {
  //   dispatch(
  //     getReceiptListAction.request({
  //       filter: {
  //         where: { contentType: { inq: ['receipt'], options: 'i' } },
  //         order: 'created DESC',
  //         limit: 1
  //       }
  //     })
  //   );
  // }, [dispatch]);

  // const getQuestionNewCheck = useCallback(() => {
  //   let code = [{ storeCd: '', storeName: '' }];
  //   if (user?.brandType) {
  //     code = storeCode.filter(x => {
  //       return x.storeName === user?.name;
  //     });
  //   } else {
  //     code = [{ storeCd: '', storeName: '' }];
  //   }

  //   dispatch(
  //     getQuestionNewCheckAction.request({
  //       startWDay: moment().format('YYYYMMDD'),
  //       endWDay: moment().format('YYYYMMDD'),
  //       reVoiceYN: 'N',
  //       storeCd: code[0].storeCd ? code[0].storeCd : undefined
  //     })
  //   );
  // }, [dispatch, user]);

  // const getWhistleblowingList = useCallback(() => {
  //   dispatch(
  //     getWhistleblowingListAction.request({
  //       filter: {
  //         where: { contentType: { inq: 'report', options: 'i' } },
  //         order: 'created DESC',
  //         limit: 1
  //       }
  //     })
  //   );
  // }, [dispatch]);

  // const questionNewCheckFn = useCallback(() => {
  //   if (receiptList?.data[0]?.answerStatus === 'waiting' || questionNewCheck) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, [receiptList, questionList]);

  // const whistleblowingNewCheck = useCallback(() => {
  //   if (whistleblowingList?.data[0]?.answerStatus === "waiting") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, [whistleblowingList]);

  // useEffect(() => {
  //   if (window.location.pathname !== '/question/receiptBoards') {
  //     getReceiptList();
  //   }
  // }, [getReceiptList]);

  // useEffect(() => {
  //   getQuestionNewCheck();
  // }, [getQuestionNewCheck]);

  // useEffect(() => {
  //   if (window.location.pathname !== '/whistleblowing/boards') {
  //     getWhistleblowingList();
  //   }
  // }, [getWhistleblowingList]);

  useEffect(() => {
    if (!collapsed) {
      return;
    }

    setOpenkeys([]);
    setSelectedKeys([]);
  }, [collapsed]);

  // useEffect(() => {
  //   if (collapsed) {
  //     return;
  //   }

  //   const pathname = history.location.pathname;

  //   const splitPathName = pathname.split(/(?=\/)/g);
  //   const openKey =
  //     splitPathName.length === 3
  //       ? [`${splitPathName[0]}`, `${splitPathName[0]}${splitPathName[1]}`]
  //       : [`${splitPathName[0]}`];

  //   setCatalogToken(user?.szCatalogToken as string);
  //   setOpenkeys(openKey);
  //   setSelectedKeys([pathname]);
  // }, [collapsed, history.location.pathname, user]);

  // if (!user || !selectedKeys) {
  //   return <div />;
  // }

  // const roots = user.menus;
  // ? Array.from(new Set(user.menus.map((item) => item.root)).values())
  // : [];

  const menuType: MenuType = {
    user: {
      icon: <UserOutlined />,
      title: '지점 관리'
    },
    shop: {
      icon: <ShopOutlined />,
      title: '페이지 관리'
    },
    question: {
      icon: <QuestionCircleOutlined />,
      title: '문의 관리'
    },
    goods: {
      icon: <ShoppingCartOutlined />,
      title: '상품 관리'
    },
    order: {
      icon: <FileDoneOutlined />,
      title: '주문 관리'
    },
    imagebank: {
      icon: <FileImageOutlined />,
      title: '이미지 관리'
    },
    benefit: {
      icon: <GiftOutlined />,
      title: '혜택 관리'
    },
    content: {
      icon: <ReadOutlined />,
      title: '게시판 관리'
    },
    // statistics: {
    //   icon: <BarChartOutlined />,
    //   title: '통계 관리',
    // },
    partners: {
      icon: <SolutionOutlined />,
      title: '협력 업체'
    },
    push: {
      icon: <MessageOutlined />,
      title: '푸시 관리'
    },
    appVersion: {
      icon: <HistoryOutlined />,
      title: '버전 관리'
    },
    whistleblowing: {
      icon: <QuestionCircleOutlined />,
      title: '신고내역관리'
    },
    recommend: {
      icon: <TeamOutlined />,
      title: '추천인 관리'
    }
  };

  return (
    <StyledMainNavMenu
      className='main-nav'
      // theme="dark"
      // mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={openKeys => setOpenkeys(openKeys)}
      defaultSelectedKeys={['1']}
      mode='inline'
      theme='dark'
      inlineCollapsed={collapsed}
    >
      {/* <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      > */}
      <Menu.Item key='1' icon={<PieChartOutlined />}>
        폰트사이트인데...?
      </Menu.Item>
      <Menu.Item key='2' icon={<DesktopOutlined />}>
        뭘 어떻게?
      </Menu.Item>
      <Menu.Item key='3' icon={<ContainerOutlined />}>
        {/* 현재 : {Date().moment()} */}
        귀찮아
      </Menu.Item>
      <SubMenu key='sub1' icon={<MailOutlined />} title='UPDATE'>
        <Menu.Item key='5'>update: 22.04.15</Menu.Item>
        <Menu.Item key='6'>update: 22.04.16</Menu.Item>
        <Menu.Item key='7'>무얼넣어야 하지? 7</Menu.Item>
        <Menu.Item key='8'>무얼넣어야 하지? 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<AppstoreOutlined />} title='그냥폰트?'>
        <Menu.Item key='9'>무얼넣어야 하지? 9</Menu.Item>
        <Menu.Item key='10'>무얼넣어야 하지? 10</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='11'>update: 22.04.15</Menu.Item>
          <Menu.Item key='11'>update: 22.04.16</Menu.Item>
        </SubMenu>
      </SubMenu>
      {/* </Menu> */}
      {/* {roots.map((root: any) => {
        if (!menuType[root]) {
          return null;
        }

        return (
          <Menu.SubMenu
            key={`/${root}`}
            title={
              <>
                {menuType[root].icon}
                <span className="main-nav__menu-title">
                  {menuType[root].title}&nbsp;&nbsp;
                </span>
                {menuType[root].title === "문의 관리" &&
                  questionNewCheckFn() && <div className="new-menu">N</div>}
                {menuType[root].title === "신고내역관리" &&
                  whistleblowingNewCheck() && <div className="new-menu">N</div>}
              </>
            }
          >
            {user.menus &&
              user.menus
                .filter((item) => item.root === root)
                .map((item, i) => {
                  const pathname = `/${item.root}/${item.key}`;
                  if (item.key === "upload-video") return null;
                  return pathname.split("/")[2] === "banner" && i === 0 ? (
                    <Menu.SubMenu key={pathname} title="메인페이지 관리">
                      <Menu.Item key={"/shop/banner/pc"}>
                        // // <Link to={"/shop/banner/pc"}>pc 메인</Link>
                      </Menu.Item>
                      <Menu.Item key={"/shop/banner/mobile"}>
                        // // <Link to={"/shop/banner/mobile"}>모바일 메인</Link>
                      </Menu.Item>
                    </Menu.SubMenu>
                  ) : (
                    <Menu.Item key={pathname}>
                      {pathname.split("/")[2] === "catalog" ? (
                        <a
                          href={`${process.env.REACT_APP_CATALOG_API_URL}?access=${catalogToken}`}
                          target="blank"
                        >
                          {item.name}
                        </a>
                      ) : (
                        // <Link to={pathname}>{item.name}</Link>
                      )}
                    </Menu.Item>
                  );
                })}
          </Menu.SubMenu>
        );
      })} */}
    </StyledMainNavMenu>
  );
};
