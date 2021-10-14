<template>
	<view class="rural">
		<view class="top-box charts-box">
			<qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" :chartData="chartsDataMap1" />
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>道路公共设施统计</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="pie" :chartData="farmChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>公共服务设施统计</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="ring" :opts="{legend: { position: 'bottom' },title: { name
					: '总' }, subtitle : { name : '12568' },  extra: { ring: { ringWidth: 20}}}" :chartData="chartsDataRing1" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施投入趋势</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="line" :chartData="lineChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施投入占比</text>
			</view>
			<view class="charts-box group-chart">
				<qiun-data-charts type="column" :chartData="colChartData"
					:opts="{  yAxis: { gridType:'dash',  splitNumber:2 },extra: {column: {seriesGap: 0,categoryGap: 5, width: 40}}}"
					background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>设施明细</text>
			</view>
			<view class="charts-box">
				<view class="list-data">
					<view class="list-header uni-flex">
						<view class="list-header-item">文件名</view>
						<view class="list-header-item">来源</view>
						<view class="list-header-item">发布时间</view>
					</view>
					<view class="list">
						<view class="list-cell uni-flex" v-for="(item, index) in ageData" :key="index">
							<view class="list-cell-item">{{ item.a }}</view>
							<view class="list-cell-item">{{ item.b }}</view>
							<view class="list-cell-item">{{ item.c }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
	import mapdata from '@/mockdata/mapdata.json'
	export default {
		data() {
			return {
				"userName": "rural",
				chartsDataMap1: {},
				ageData: [{
						color: '#826AF9',
						a: '20岁以下',
						b: 10000,
						c: '10%'
					},
					{
						color: '#FFE700',
						a: '20-30岁',
						b: 10000,
						c: '10%'
					},
					{
						color: '#FF6C40',
						a: '30-40岁',
						b: 10000,
						c: '10%'
					},
					{
						color: '#2D99FF',
						a: '40-50岁',
						b: 10000,
						c: '10%'
					},
					{
						color: '#505D6F',
						a: '50岁以上',
						b: 10000,
						c: '10%'
					}
				],
				farmChartData: {
					series: [{
						data: [{
								name: '电力设施',
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
					}]
				},
				chartsDataRing1: {
					"series": [{
						"data": [{
							"name": "党政机关",
							"value": 50
						}, {
							"name": "事业单位",
							"value": 30
						}, {
							"name": "国有企业",
							"value": 20
						}, {
							"name": "非国有企业",
							"value": 18
						}, {
							"name": "社会组织",
							"value": 80
						}]
					}]
				},
				lineChartData: {
					categories: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年',
						'2020年', '2021年'
					],
					series: [{
						name: '投入金额',
						data: [6100, 12300, 18200, 23100, 36400, 62100, 86300, 103200, 116100, 139800, 159600,
							173000
						]
					}]
				},
				colChartData: {
					"categories": [
						"教育设施",
						"医疗设施",
						"社会福利设施",
						"商业设施"
					],
					"series": [{
						"name": "投入金额",
						"data": [
							35,
							36,
							31,
							33
						]
					}]
				},
			}
		},
		created() {
			this.chartsDataMap1 = {
				series: mapdata.features
			}
		},
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

			.charts-box {
				.list-data {
					padding: 0 32rpx;



					.list-header {
						.list-header-item {
							box-sizing: border-box;
							flex: none;
							font-size: 26rpx;
							color: #333333;
							font-weight: 700;
							width: 130rpx;
							line-height: 100rpx;
							box-sizing: border-box;

							&+.list-header-item {
								width: 112rpx;

								&+.list-header-item {
									width: 148rpx;

									&+.list-header-item {
										width: 108rpx;

										&+.list-header-item {
											width: auto;
											flex: 1;
										}
									}
								}
							}

						}
					}

					.list-cell {
						border-top: 2rpx solid #eeeeee;

						.list-cell-item {
							flex: none;
							font-size: 26rpx;
							color: #333333;
							width: 130rpx;
							line-height: 100rpx;
							box-sizing: border-box;

							&+.list-cell-item {
								width: 112rpx;

								&+.list-cell-item {
									width: 148rpx;

									&+.list-cell-item {
										width: 108rpx;

										&+.list-cell-item {
											width: auto;
											flex: 1;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
