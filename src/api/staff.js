import request from '@/uilts/request'

/* 
获取员工列表

*/
export const getStaffList = ({ username, name ,currentPage,pageSize}) => {
  return request(`/staff/list/search/${currentPage}/${pageSize}`,'post',{ username, name })
}