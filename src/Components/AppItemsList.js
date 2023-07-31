import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AppItemsList = ({ items }) => {
  return (
    <div>
      <Row className="my-3">
        {items.length >= 1 ? (
          items.map((item) => {
            return (
              <Col key={item.id} sm="12" className="my-3">
                <Card
                  className="d-flex flex-row"
                  style={{ borderRadius: "5px",background:"#eee" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.imgUrl}
                    width="120px"
                    style={{ maxWidth: "300px", borderRadius: "10px" }}
                    height="250px"
                  />
                  <Card.Body className="mx-3 mt-3">
                    <Card.Title className="d-flex justify-content-between">
                      <div style={{fontWeight:"900",textTransform:"uppercase"}}>{item.title}</div>
                      <div style={{fontWeight:"900",textTransform:"uppercase"}}>{item.price}</div>
                    </Card.Title>
                    <Card.Text style={{maxWidth:"80%",fontWeight:"500"}} className="mt-3">{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1 className="text-center">Not Found Any Item</h1>
        )}
      </Row>
    </div>
  );
};

export default AppItemsList;
