import { message, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostedJobsByUserId } from "../../../apis/jobs";
import PageTitle from "../../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../../redux/alertSlice";

const PostedJobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Last Date to Apply",
      dataIndex: "lastDateToApply",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="d-flex gap-3 align-items-center">
          <i className="ri-delete-bin-line"></i>
          <i
            className="ri-pencil-line"
            onClick={() => navigate(`/posted-jobs/edit/${record.id}`)}
          ></i>
        </div>
      ),
    },
  ];

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await getPostedJobsByUserId(user.id);
      if (response.success) {
        setData(response.data);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <PageTitle title="Posted Jobs" />
        <button
          className="primary-outlined-btn"
          onClick={() => navigate("/posted-jobs/new")}
        >
          New Job
        </button>
      </div>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default PostedJobs;
