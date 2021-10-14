<template>
	<view class="one-step">
		<input class="title" type="text" value="" placeholder="输入标题" />
		<textarea :maxlength="-1" auto-height class="text-area" value="" placeholder="请输入正文" />
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="next">下一步(1/2)</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			next() {
				uni.navigateTo({
					url: '/pages/workbench/work/notice/addNoticeLast'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		background-color: #fff !important;
	}

	.one-step {
		padding-bottom: 180rpx;
		width: 100%;
		min-height: 100%;
		background: #fff;
		padding: 0 32rpx;

		.title {
			height: 100rpx;
			border-bottom: 2rpx solid #F5F5F5;
		}

		.text-area {
			padding: 30rpx 0;
			width: 686rpx;
		}
	}
</style>
