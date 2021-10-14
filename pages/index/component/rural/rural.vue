<template>
	<view class="rural">
		<view class="top-box">123</view>
		<view class="content-box">
			<view class="content-title"><text>党员情况统计</text></view>
			<view class="uni-flex item-echart-box">
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts
							type="arcbar"
							:opts="{
								title: { name: '30', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0099ff']
							}"
							:chartData="{
								series: [
									{
										name: '一班',
										data: 30 / 30
									}
								]
							}"
						/>
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts
							type="arcbar"
							:opts="{
								title: { name: '26', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0ff']
							}"
							:chartData="{
								series: [
									{
										name: '一班',
										data: 26 / 30
									}
								]
							}"
						/>
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts
							type="arcbar"
							:opts="{
								title: { name: '20', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0c3']
							}"
							:chartData="{
								series: [
									{
										name: '一班',
										data: 20 / 30
									}
								]
							}"
						/>
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts
							type="arcbar"
							:opts="{
								title: { name: '6', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#f33']
							}"
							:chartData="{
								series: [
									{
										name: '一班',
										data: 6 / 30
									}
								]
							}"
						/>
					</view>
					<view class="echart-name">党委数</view>
				</view>
			</view>
			<view class="charts-box line"><qiun-data-charts type="line" :chartData="chartData" background="none" /></view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>数据统计</text></view>
			<view class="chart-box">图表box</view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>产业情况</text></view>
			<view class="charts-box">
				<qiun-data-charts
					type="arcbar"
					:opts="{ title: { name: '', color: '#1890ff', fontSize: 35 }, subtitle: { name: '' }, extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 24, gap: 10 } } }"
					:chartData="chartsDataArcbar2"
				/>
			</view>
		</view>
		<view class="content-box">
			<view class="content-title uni-flex">
				<text>种养殖情况分析</text>
				<view class="title-btn-box uni-flex">
					<view class="btn" :class="{ active: current === 0 }" @click="toggle(0)">种植</view>
					<view class="btn" :class="{ active: current === 1 }" @click="toggle(1)">养殖</view>
				</view>
			</view>
			<view class="charts-box" v-if="current === 0"><qiun-data-charts type="pie" :chartData="plantChartData" background="none" /></view>
			<view class="charts-box" v-if="current === 1"><qiun-data-charts type="pie" :chartData="farmChartData" background="none" /></view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>快处快报</text></view>
			<view class="chart-box">图表box</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userName: 'rural',
			current: 0,
			chartData: {
				categories: ['18-30岁', '31-40岁', '41-50岁', '51-60岁', '60岁以上'],
				series: [
					{
						name: '男',
						data: [35, 39, 45, 21, 9]
					},
					{
						name: '女',
						data: [20, 15, 16, 6, 3]
					}
				]
			},
			plantChartData: {
				series: [
					{
						data: [
							{
								name: '水稻',
								value: 50
							},
							{
								name: '麦子',
								value: 30
							},
							{
								name: '西瓜',
								value: 20
							},
							{
								name: '香蕉',
								value: 18
							},
							{
								name: '核桃',
								value: 8
							}
						]
					}
				]
			},
			farmChartData: {
				series: [
					{
						data: [
							{
								name: '猪',
								value: 20
							},
							{
								name: '牛',
								value: 6
							},
							{
								name: '羊',
								value: 60
							},
							{
								name: '狗',
								value: 18
							},
							{
								name: '鸡',
								value: 100
							}
						]
					}
				]
			},
			chartsDataArcbar2: {
				series: [
					{
						name: '一班',
						data: 0.8
					},
					{
						name: '二班',
						data: 0.6
					},
					{
						name: '三班',
						data: 0.45
					}
				]
			}
		};
	},
	methods: {
		toggle(index) {
			this.current = index;
		}
	}
};
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
					&.active {
						color: #fff;
						background: #008dec;
					}

					& + .btn {
						margin-left: 10rpx;
					}
				}
			}
		}
		.charts-box {
			&.line {
				height: 284rpx;
			}
		}

		.item-echart-box {
			justify-content: space-around;
			margin-bottom: 30rpx;
			.item-echart {
				.charts-box {
					height: 130rpx;
					width: 130rpx;
				}
				.echart-name {
					font-size: 28rpx;
					color: #333;
					text-align: center;
				}
			}
		}
	}
}
</style>
