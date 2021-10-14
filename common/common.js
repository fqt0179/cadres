export const customToast = ({
	title = '提示内容',
	hide = () => {},
	duration = 1500,
	icon = "none"
} = {}) => {
	uni.showToast({
		title,
		icon,
		duration
	})
	let r = setTimeout(() => {
		// toast 关闭后执行
		hide()
		clearTimeout(r)
	}, duration)
}
