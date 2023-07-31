import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "antd";
const AppCategories = ({ filterByCategory, allCategory }) => {
  const [categorys,setCategories] = useState(allCategory);
  // To Filter By Category
  const OnFilter = (item) => {
    filterByCategory(item);
  };

  return (
    <div>
      <Row className="mb-5 mt-4">
        <Col sm="12" className="d-flex justify-content-center text-center">
          {categorys.length >= 1
            ? categorys.map((item) => {
                return (
                  <Button
                    key={Math.random()}
                    onClick={() => OnFilter(item)}
                    className="mx-2"
                  >
                    {item}
                  </Button>
                );
              })
            : null}
        </Col>
      </Row>
    </div>
  );
};

export default AppCategories;
