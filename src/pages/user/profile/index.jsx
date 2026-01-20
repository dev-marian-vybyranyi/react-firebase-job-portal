import { Form, message, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateUserProfile } from "../../../apis/users";
import PageTitle from "../../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../../redux/alertSlice";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.id) {
        throw new Error("User not found in local storage");
      }

      const response = await getUserProfile(user.id);
      dispatch(HideLoading());

      console.log("User Profile Response:", response);

      if (response.success) {
        setUserData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
      console.error("Profile Fetch Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await updateUserProfile(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const items = [
    {
      key: "1",
      label: "Personal Info",
      children: <PersonalInfo />,
    },
    {
      key: "2",
      label: "Education",
      children: <Education />,
    },
    {
      key: "3",
      label: "Experience",
      children: <Experience />,
    },
  ];

  return (
    <div>
      <PageTitle title="Profile" />
      {userData ? (
        <Form layout="vertical" onFinish={onFinish} initialValues={userData}>
          <Tabs defaultActiveKey="1" items={items} />
          <div className="d-flex justify-content-end gap-2">
            <button
              className="primary-outlined-btn"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button className="primary-contained-btn" type="submit">
              Save
            </button>
          </div>
        </Form>
      ) : (
        <div className="p-4 text-center">Loading profile data...</div>
      )}
    </div>
  );
};

export default Profile;
