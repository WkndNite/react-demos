import { request } from './request';

export const getStuListApi = () => {
  return request({
    url: '/students',
    method: 'get',
  })
};

export function addStuApi(data) {
  return request({
    url: '/students',
    method: 'post',
    data,
  });
}

export function updateStuApi(data) {
  return request({
    url: '/students/' + data.id,
    method: 'put',
    data,
  });
}
