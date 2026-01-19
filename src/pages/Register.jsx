import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../apis/auntetication";
import { HideLoading, ShowLoading } from "../redux/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="h-screen d-flex align-items-center  justify-content-center bg-primary">
      <div className="bg-white p-4 w-400">
        <h4>Job Portal - Register</h4>
        <div className="divider"></div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input type="text" />
          </Form.Item>{" "}
          <Form.Item name="password" label="Password">
            <Input type="password" />
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
