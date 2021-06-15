/**
 * 请求
 */
import request from '~/plugins/request';
export const getWeather = data => request({
	method:'post',
	url:'/api/getWeather',
	data
})