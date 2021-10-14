<template>
	<view class="rural">
		<view class="top-box">
			123
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员/党组织统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员年龄情况</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员年龄统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员数量增长趋势</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员名族统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员职业统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党务动态</text>
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
