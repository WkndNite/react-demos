import React from 'react';
import { getStuListApi } from '../api/stuApi';
import Alert from './Alert';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [stuList, setStuList] = React.useState([]);
  const [searchName, setSearchName] = React.useState('');
  const location = useLocation();
  const [alert, setAlert] = React.useState(null);
  const showAlert = alert ? <Alert {...alert} /> : null;

  function changeHandle(e) {
    setSearchName(e.target.value);
  }

  React.useEffect(() => {
    getStuListApi().then((res) => {
      setStuList(res.data);
    });
  }, []);

  React.useEffect(() => {
    console.log(location.state);
    if (location.state) {
      setAlert(location.state);
    }
  }, [location]);

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      {showAlert}
      <h1 className="mb-4">学生列表</h1>
      <input
        type="text"
        placeholder="请输入学生姓名"
        value={searchName}
        className="form-control mb-4"
        onChange={() => {
          changeHandle();
        }}
      />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">年龄</th>
            <th scope="col">性别</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {stuList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>
                <button className="btn btn-info">
                  <NavLink to={`/details/${item.id}`}>详情</NavLink>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
