// localStorage文件的转化

// 获取数据
export const parseJson = (data)=>{
  let string = localStorage.getItem(data)
  let i = JSON.parse(string)
  return i
}

