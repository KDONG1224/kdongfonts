import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResponseHomeFont } from 'modules/font';
import { Card, Modal, ModalProps } from 'antd';
import { popupAction } from 'modules/ui';
import { useDispatch } from 'react-redux';

interface ModalCardProps extends ModalProps {
  modalData: ResponseHomeFont[];
  handleOnComplete?: () => void;
  handleOnClose?: () => void;
  modaltype?: string;
  cancelTxt?: string;
  okText?: string;
  btnColor?: string;
  okBtnColor?: string;
  cancleBtnColor?: string;
  family: string;
}

const StyledCardModal = styled(Modal)<{
  modaltype: string;
  btnColor: string;
  okBtnColor: string;
  cancleBtnColor: string;
  family: string;
}>`
  width: 60%;
  font-family: 'Pretendard-Regular';
  h6 {
    font-size: 28px;
  }
  .ant-modal-footer {
    padding: 0;
  }
  .ant-modal-footer button + button {
    margin: 0;
  }
  .textModal-content {
    width: 100%;
    padding: 120px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    letter-spacing: -1.08px;
    font-weight: 500;
    text-align: center;
  }
  .ant-modal-body {
    text-align: center;
    font-size: 28px;
    line-height: 1.5715;
    list-style: none;
  }
  Button {
    height: 130px;
    width: ${props =>
      props.modaltype === 'confirm' ? '50%' : '100%'} !important;
    font-size: 36px;
    line-height: 1.5715;
    list-style: none;
    border-radius: 2px;
    color: #fff;
    font-family: ${props =>
      props.family ? props.family : 'Noto Sans KR'} !important;
    background: ${props =>
      props.btnColor ? props.btnColor : '#fc5509'} !important;
  }

  .ant-modal-footer {
    button:nth-child(1) {
      display: ${props =>
        props.modaltype === 'confirm' ? 'inline-block' : 'none'} !important;
      background: ${props =>
        props.cancleBtnColor ? props.cancleBtnColor : '#afafaf'} !important;
    }
    button:nth-child(2) {
      background: ${props =>
        props.okBtnColor ? props.okBtnColor : '#fc5509'} !important;
    }
  }

  .ant-modal-footer .ant-btn + .ant-btn:not(.ant-dropdown-trigger) {
    margin-left: 0 !important;
  }
`;

const StyledModalCard = styled(Card)<{ family?: string }>`
  width: 100%;

  .ant-card {
    border: 0 !important;
  }

  .ant-card-meta-detail {
    font-family: ${props =>
      props.family ? props.family : 'Noto Sans KR'} !important;
  }

  .ant-card-meta-title {
    font-size: 28px;
  }

  .ant-card-meta-description {
    font-size: 24px;
  }
`;

export const ModalCard = (props: ModalCardProps) => {
  const {
    modalData,
    family,
    handleOnComplete,
    handleOnClose,
    modaltype = 'single',
    cancelTxt = '취소',
    okText = '닫기',
    btnColor = '#fc5509',
    okBtnColor = '#000000',
    cancleBtnColor = '#afafaf'
  } = props;

  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleFont = useCallback(() => {
    if (modalData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [modalData]);

  const modalClose = () => {
    dispatch(
      popupAction({
        noticeMessage: '',
        isModalVisible: false,
        okText: okText,
        cancelTxt: cancelTxt,
        modaltype: modaltype
      })
    );
  };

  useEffect(() => {
    handleFont();
  }, [handleFont, modalData]);

  return (
    <StyledCardModal
      {...props}
      modaltype={modaltype}
      width={'45%'}
      centered
      destroyOnClose
      closable={false}
      maskClosable={false}
      okButtonProps={{ style: { width: '100%', height: '80px' } }}
      onOk={handleOnComplete ? handleOnComplete : modalClose}
      onCancel={handleOnClose ? handleOnClose : modalClose}
      cancelText={cancelTxt}
      okText={okText}
      btnColor={btnColor}
      okBtnColor={okBtnColor}
      cancleBtnColor={cancleBtnColor}
      zIndex={99999}
      family={family}
    >
      <StyledModalCard
        family={family}
        loading={loading}
        cover={<img alt={modalData[0]?.koKR} src={modalData[0]?.thumbnails} />}
      >
        <Card.Meta
          title={modalData[0]?.koKR}
          description={modalData[0]?.desc}
        />
      </StyledModalCard>
    </StyledCardModal>
  );
};
