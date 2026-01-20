import { Form, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import PageTitle from "../../../components/PageTitle";
import Education from "./Education";
import Experince from "./Experience";
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />
      <Form layout="vertical">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Info" key="1">
            <PersonalInfo />
          </TabPane>
          <TabPane tab="Education" key="2">
            <Education />
          </TabPane>
          <TabPane tab="Experience" key="3">
            <Experince />
          </TabPane>
        </Tabs>
      </Form>
    </div>
  );
};

export default Profile;
