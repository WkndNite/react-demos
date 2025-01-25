import React from 'react';
import { addStuApi } from '../api/stuApi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getStuListApi } from '../api/stuApi';

export default function Operation() {
  const [stuList, setStuList] = React.useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getStuListApi().then((res) => {
        let stu = res.data.find((item) => item.id === id);
        setStuList(stu);
      });
    }
  });

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      <h1>Student Details</h1>
      <button className="btn btn-info mb-3 me-3" onClick={() => navigate('/home')}>
        返回
      </button>
      <button className="btn btn-primary mb-3" onClick={() => navigate(`/operation/${id}`)}>
        edit
      </button>
      <div className="mb-3">
        <span>id:{stuList.id}</span>
      </div>
      <div className="mb-3">
        <span>name:{stuList.name}</span>
      </div>
      <div className="mb-3">
        <span>age:{stuList.age}</span>
      </div>
      <div className="mb-3">
        <span>sex:{stuList.sex}</span>
      </div>
      <div className="mb-3">
        <span>email:{stuList.email}</span>
        </div>
        <div className="mb-3">
        <span>phone:{stuList.phone}</span>
        </div>
        <div className="mb-3">
        <span>address:{stuList.course}</span>
        </div>
    </div>
  );
}
