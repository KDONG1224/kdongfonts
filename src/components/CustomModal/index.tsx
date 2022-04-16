import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { popupAction } from 'modules/ui';

interface CustomModalProps extends ModalProps {
  message: string;
  handleOnComplete?: () => void;
  handleOnClose?: () => void;
  modaltype?: string;
  cancelTxt?: string;
  okText?: string;
  btnColor?: string;
  okBtnColor?: string;
  cancleBtnColor?: string;
}

const StyledTextModal = styled(Modal)<{
  modaltype: string;
  btnColor: string;
  okBtnColor: string;
  cancleBtnColor: string;
}>`
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
`;

export const CustomModal = (props: CustomModalProps) => {
  const {
    handleOnComplete,
    handleOnClose,
    message,
    modaltype = 'single',
    cancelTxt = '취소',
    okText = '확인',
    btnColor = '#fc5509',
    okBtnColor = '#000000',
    cancleBtnColor = '#afafaf'
  } = props;
  const dispatch = useDispatch();

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

  return (
    <StyledTextModal
      {...props}
      modaltype={modaltype}
      width={'80%'}
      centered
      destroyOnClose
      closable={false}
      maskClosable={false}
      okButtonProps={{ style: { width: '100%', height: '130px' } }}
      onOk={handleOnComplete ? handleOnComplete : modalClose}
      onCancel={handleOnClose ? handleOnClose : modalClose}
      cancelText={cancelTxt}
      okText={okText}
      btnColor={btnColor}
      okBtnColor={okBtnColor}
      cancleBtnColor={cancleBtnColor}
      zIndex={99999}
    >
      <div
        className='textModal-content'
        dangerouslySetInnerHTML={{
          __html: message
        }}
      />
    </StyledTextModal>
  );
};
