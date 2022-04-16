import React, { useState } from 'react';
import { Card, Col, Input, InputNumber, Row } from 'antd';
import styled from 'styled-components';
import { homeFont } from 'lib/homeFont';
import { ResponseHomeFont } from 'modules/font';
import { ModalCard } from 'components';

const StyledHome = styled.div<{ fontSize: number; font?: string }>`
  width: 100%;

  .input-box {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    input {
      width: 80%;
      height: 50px;
    }

    .ant-input-number {
      width: 15%;
    }
  }

  .ant-input-number-input-wrap {
    .ant-input-number-input {
      position: relative;

      &::after {
        content: 'px';
        position: absolute;
      }
    }
  }

  .card-box {
    margin-bottom: 16px;
  }

  .ant-card {
    border: 1px solid #000;
  }

  .ant-card-head {
    border-bottom: 1px solid #000;
    font-family: ${props => (props.font ? props.font : '')};
  }

  .ant-card-body {
    word-break: break-all;
    font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '15px')};
    font-family: ${props => (props.font ? props.font : '')};
  }
`;

export const Home = () => {
  const data = homeFont as ResponseHomeFont[];

  const [visivble, setVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ResponseHomeFont[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [family, setFamily] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(0);

  const handleCloseModal = () => {
    setVisible(!visivble);
  };

  const handleShowModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const num = Number(e.currentTarget.id);

    if (data) {
      if (data[num - 1].id === num) {
        setModalData([data[num - 1]]);
        setFamily(data[num - 1].webType.fontFamily);
      }
      setVisible(!visivble);
    }
  };

  const handleFontInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleFontSize = (value: number) => {
    setFontSize(value);
  };

  return (
    <StyledHome fontSize={fontSize}>
      <div className='input-box'>
        <Input
          placeholder='폰트 적용 미리보기'
          onChange={e => handleFontInput(e)}
        />
        <InputNumber
          min={1}
          max={100}
          defaultValue={15}
          // formatter={value => `${value} px`}
          onChange={e => handleFontSize(e)}
        />
      </div>
      <Row className='card-wrapper' gutter={16}>
        {data.map((arr, idx) => {
          return (
            <Col
              className='card-box'
              span={8}
              key={idx}
              id={`${arr.id}`}
              onClick={e => handleShowModal(e)}
            >
              <Card
                title={arr.title}
                style={{
                  fontFamily: `'${arr.webType?.fontFamily}'`
                }}
                hoverable
                defaultValue={arr.title}
              >
                {inputText ? inputText : arr.desc}
              </Card>
            </Col>
          );
        })}
      </Row>
      <ModalCard
        modalData={modalData}
        visible={visivble}
        handleOnComplete={handleCloseModal}
        family={family}
      />
    </StyledHome>
  );
};
