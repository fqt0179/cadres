<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './common/uni.css';

/* 自定义通用样式 */
@import './common/custom.css';

/* H5 兼容 pc 所需 */
/* #ifdef H5 */
@media screen and (min-width: 768px) {
	body {
		overflow-y: scroll;
	}
}

/* 顶栏通栏样式 */
/* .uni-top-window {
	    left: 0;
	    right: 0;
	} */

uni-page-body {
	background-color: #f5f5f5 !important;
	min-height: 100% !important;
	height: auto !important;
}

.uni-top-window uni-tabbar .uni-tabbar {
	background-color: #fff !important;
}

.uni-app--showleftwindow .hideOnPc {
	display: none !important;
}
/* #endif */
</style>
