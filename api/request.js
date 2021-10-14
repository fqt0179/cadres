// http://www.laycattech.com/index.html
import baseUrl from '../mode.config.js'

const httpRequest = async (url, {
	params = {},
	showLoading = true,
	hideLoading = true,
	method = 'Post'
} = {}) => {
	if (showLoading) uni.showLoading({
		title: '加载中',
		mask: true
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: method,
			data: params,
			header: {
				'Authorization': 'Bearer ' + uni.getStorageSync("token")
			},
			success: (res) => {
				if (res.statusCode == 200 && res.data.isOK) {
					resolve(res.data)
				} else if (res.statusCode == 401) {
					// 中断请求任务
					// if(url.includes('terminal/operator/dDJsApiSign')) return
					uni.showModal({
						title: '提示',
						content: '登录失效，是否重新登录',
						confirmText: '重新登录',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定')
								uni.redirectTo({
									url: '/pages/login/login'
								})
							} else if (res.cancel) {
								console.log('用户点击取消')
							}
						}
					})
					reject(res.data.msg)
				} else {
					// 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据
					//接口后面的then执行
					// 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
					//不会被阻断在那里执行不下去！
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					reject(res.data.msg)
				}
			},
			fail: (err) => {
				let title = '请求失败'
				if (err.errMsg.includes('timeout')) title = '请求超时'
				uni.showToast({
					title: title,
					icon: 'none'
				})
				console.log(err)
				reject(err)
			},
			complete: () => {
				if (showLoading && hideLoading) uni.hideLoading()
			}
		})
	})
}

export default httpRequest
