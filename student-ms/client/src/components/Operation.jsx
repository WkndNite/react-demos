import React from 'react';
import { addStuApi, updateStuApi } from '../api/stuApi';
import { useNavigate } from 'react-router-dom';
import { getStuListApi } from '../api/stuApi';
import { useParams } from 'react-router-dom';

export default function Operation() {
  const [stuList, setStuList] = React.useState({
    id: '',
    name: '',
    age: '',
    sex: 'F',
    course: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getStuListApi().then((res) => {
        let stu = res.data.find((item) => item.id === id);
        setStuList(stu);
      });
    }
  }, [id]);

  function changeHandle(e) {
    setStuList({
      ...stuList,
      [e.target.id]: e.target.value,
    });
  }

  function submitHandle(e) {
    e.preventDefault();
    for (let key in stuList) {
      if (!stuList[key]) {
        alert('请填写完整信息');
        return;
      }
    }
    if(id){
      updateStuApi(stuList).then((res) => {
        navigate('/home', {
          state: { msg: '已更新', type: 'success' },
        });
      });
      return;
    }
    addStuApi(stuList).then((res) => {
      navigate('/home', {
        state: { msg: '已添加', type: 'success' },
      });
    });
  }

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={stuList.id}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={stuList.name}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={stuList.age}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sex" className="form-label">
            sex
          </label>
          <input
            type="text"
            className="form-control"
            id="sex"
            value={stuList.sex}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            course
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            value={stuList.course}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={stuList.phone}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={stuList.email}
            onChange={(e) => changeHandle(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          提交
        </button>
      </form>
    </div>
  );
}
