/**
 * 请求
 * query_	--查询
 * add_		--新增
 * edit_		--修改
 * del_		--删除
 * uoload_	--上传
 * download_--下载
 */
import request from '~/plugins/request';
export const query_weather = data => request({
	method:'post',
	url:'/api/getWeather',
	data
})