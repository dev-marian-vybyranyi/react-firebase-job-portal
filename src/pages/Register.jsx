import { Form } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen d-flex align-items-center  justify-content-center bg-primary">
      <div className="bg-white p-4 w-400">
        <h4>Job Portal - Register</h4>
        <div className="divider"></div>
        <Form layout="vertical ">
          <Form.Item name="name" label="Name">
            <input type="text" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <input type="text" />
          </Form.Item>{" "}
          <Form.Item name="password" label="Password">
            <input type="password" />
          </Form.Item>
          <button className="primary-contained-btn w-100 mt-2">Register</button>
          <Link to="/login" className="d-block mt-2">
            Already have an account?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
