import axios from 'axios';
export let baseUrl = 'http://192.168.35.04:8080';
//登录提交
export const login = params=>axios.post(`${baseUrl}/login`, params).then( res => res.data);
//列表界面
export const reqlist=()=>axios.get(`${baseUrl}/list`).then(res=>res.data)
//删除数据
export const reqdelete=(params)=>axios.get(`${baseUrl}/delete`,params).then(res=>res.data)
//添加用户，包含头像
export const reqadd=(params,config)=>axios.post(`${baseUrl}/add`,params,config).then(res=>res.data)
//添加用户不包含头像
export const reqadd1=(params)=>axios.post(`${baseUrl}/add2`,params).then(res=>res.data)
//查询用户
export const reqfind=(params)=>axios.get(`${baseUrl}/update`,params).then(res=>res.data)
//修改用户
export const requpdate=(params,config)=>axios.post(`${baseUrl}/update`,params,config).then(res=>res.data)
//产品列表
export const reqproductlist=()=>axios.get(`${baseUrl}/productlist`).then(res=>res.data)
//添加产品
export const reqaddproduct=(params)=>axios.post(`${baseUrl}/addproduct`,params).then(res=>res.data)
//删除商品
export const reqproductdelete=(params)=>axios.get(`${baseUrl}/productdelete`,params).then(res=>res.data)
//查询商品
export const reqproductfind=(params)=>axios.get(`${baseUrl}/productupdate`,params).then(res=>res.data)
//修改商品
export const requpdateproduct=(params)=>axios.post(`${baseUrl}/productupdate1`,params).then(res=>res.data)