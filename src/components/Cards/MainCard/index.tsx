import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";
import { ResponseFont } from "modules/font";

interface MainCardProps {
  data: ResponseFont[];
}

const StyledMainCard = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const MainCard = (props: MainCardProps) => {
  const { data } = props;

  return (
    <StyledMainCard>
      <Row gutter={[16, 24]}>
        {data.map((arr, idx) => {
          return (
            <Col className="gutter-row" span={6} key={idx}>
              <Card
                hoverable
                key={idx}
                cover={<img alt={arr.title} src={arr.thumbnails} />}
              >
                <Card.Meta title={arr.title} description={arr.enUS} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </StyledMainCard>
  );
};
