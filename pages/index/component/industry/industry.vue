<template>
	<view class="rural">
		<view class="top-box">
123
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>产业情况</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>土地使用情况分析</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>数据统计</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title uni-flex">
				<text>种养殖信息</text>
				<view class="title-btn-box uni-flex">
					<view class="btn">种植</view>
					<view class="btn">养殖</view>
				</view>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>农产品去向分析</text>
			</view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title uni-flex">
				<text>现有种养殖信息</text>
				<view class="title-btn-box uni-flex">
					<view class="btn">种植</view>
					<view class="btn">养殖</view>
				</view>
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
