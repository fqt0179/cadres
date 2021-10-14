<template>
	<view class="rural">
		<view class="top-box">
			123
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>道路公共设施统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>公共服务设施统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施投入趋势</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施投入占比</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施明细</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"userName": "rural"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rural {
		.top-box {
			width: 100%;
			height: 512rpx;
			background: #fff;
			margin-bottom: 20rpx;
			padding: 44rpx 32rpx;
		}

		.content-box {
			background: #fff;
			margin-bottom: 20rpx;
			overflow: hidden;

			.content-title {
				background: #fff;
				padding: 0 32rpx;
				font-size: 26rpx;
				line-height: 120rpx;
				font-weight: bold;
				margin: 0;
				justify-content: space-between;
				align-items: center;

				.title-btn-box {
					.btn {
						font-size: 20rpx;
						color: #333;
						font-weight: normal;
						width: 100rpx;
						height: 40rpx;
						border: 2rpx solid #0099ff;
						border-radius: 4rpx;
						text-align: center;
						line-height: 36rpx;

						&+.btn {
							margin-left: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
