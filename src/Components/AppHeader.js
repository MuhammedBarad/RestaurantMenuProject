import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Col, Row } from "react-bootstrap";

const AppHeader = () => {
  return (
    <div>
      <Row>
        <Col
          sm="12"
          className="d-flex flex-column  justify-content-center text-center"
          style={{ alignItems: "center",marginTop:"90px" }}
        >
          <Typography>
            <Title>
              <div style={{color:"#0f4c5c",fontWeight:"700"}} className="fs-3">Rasturant Menu</div>
            </Title>
          </Typography>
          <div className="mt-1">
            <p
              style={{
                height: "1px",
                width: "300px",
                border: "1px solid #fb8500",
              }}
            ></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppHeader;
