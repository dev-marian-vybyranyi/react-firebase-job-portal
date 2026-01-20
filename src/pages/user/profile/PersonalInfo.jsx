import { Col, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

const PersonalInfo = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col span={8}>
        <FormItem label="First Name" name="firstName">
          <input type="text" />
        </FormItem>
      </Col>
      <Col span={8}>
        <FormItem label="Last Name" name="lastName">
          <input type="text" />
        </FormItem>
      </Col>
      <Col span={8}>
        <FormItem label="Email" name="email">
          <input type="text" />
        </FormItem>
      </Col>
      <Col span={8}>
        <FormItem label="Phone Number" name="phoneNumber">
          <input type="text" />
        </FormItem>
      </Col>
      <Col span={8}>
        <FormItem label="Portfolio" name="portfolio">
          <input type="text" />
        </FormItem>
      </Col>
      <Col span={24}>
        <FormItem label="Career Objective" name="careerObjective">
          <textarea type="text" rows={4} />
        </FormItem>
      </Col>
      <Col span={24}>
        <FormItem label="Address" name="address">
          <textarea type="text" rows={4} />
        </FormItem>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
