<template>
	<view class="rural">
		<view class="top-box charts-box">
			<qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" :chartData="chartsDataMap1" />
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员/党组织统计</text>
			</view>
			<view class="charts-box statistical uni-flex">
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">党委数量</view>
						<view class="info-value"><text>9527</text><text class="smallsmall">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">党总支数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">联合党支部数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">党支部数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">正式党员数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">预备党员数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员党龄情况</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="pie" :chartData="plantChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员年龄统计</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="funnel" :chartData="funnelChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员数量增长趋势</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="line" :chartData="lineChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员名族统计</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="bar" :opts="{xAxis:{max:6}, extra: {bar: {width: 20, categoryGap: 3}}}"
					:chartData="barChartsDataColumn1" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党员职业统计</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="ring" :opts="{legend: { position: 'bottom' },title: { name
					: '总' }, subtitle : { name : '12568' },  extra: { ring: { ringWidth: 20}}}" :chartData="chartsDataRing1" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>党务动态</text>
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
				barChartsDataColumn1: {
					"categories": ["汉族", "傣族", "回族", "白族", "景颇族", "阿昌族", '蒙古族', '其他民族'],
					"series": [{
						"name": "万人",
						"data": [5.2, 1.2, 1.1, 0.78, 0.56, 0.51, 0.23, 0.12]
					}]
				},
				lineChartData: {
					categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
							name: '男',
							data: [6100, 12300, 18200, 23100, 36400, 62100, 86300, 103200, 116100, 139800, 159600,
								173000
							]
						},
						{
							name: '女',
							data: [2300, 8100, 10200, 13600, 16500, 23600, 31200, 40200, 53200, 60900, 70200, 83200]
						}
					]
				},
				funnelChartData: {
					"series": [{
						"data": [{
								"name": "18-30岁",
								"value": 50
							},
							{
								"name": "31-40岁",
								"value": 30
							},
							{
								"name": "41-50岁",
								"value": 20
							},
							{
								"name": "51-60岁",
								"value": 18
							},
							{
								"name": "60岁以上",
								"value": 8
							}
						]
					}]
				},
				plantChartData: {
					series: [{
						data: [{
								name: '1年以下',
								value: 50
							},
							{
								name: '1-3年',
								value: 30
							},
							{
								name: '3-5年',
								value: 20
							},
							{
								name: '5-10年',
								value: 18
							},
							{
								name: '10年以上',
								value: 8
							}
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
				&.line {
					height: 284rpx;
				}

				&.statistical {
					justify-content: space-around;
					flex-wrap: wrap;
					padding: 0 32rpx;

					.statistical-item {
						width: 228rpx;
						margin-bottom: 32rpx;

						.item-img {
							width: 56rpx;
							height: 56rpx;
							border-radius: 8rpx;
						}

						.item-info {
							margin-left: 10rpx;

							.info-name {
								font-size: 22rpx;
								color: #333;
							}

							.info-value {
								font-size: 36rpx;
								color: #333;
								line-height: 48rpx;
								font-weight: bold;

								.small {
									font-size: 28rpx;
								}
							}
						}
					}
				}

				.list-data {
					padding: 0 32rpx;



					.list-header {
						.list-header-item {
							box-sizing: border-box;
							flex: none;
							font-size: 26rpx;
							color: #333333;
							font-weight: 700;
							width: 230rpx;
							line-height: 100rpx;
							box-sizing: border-box;
							text-align: center;

							&+.list-header-item {
								width: 186rpx;
								text-align: left;

								&+.list-header-item {
									width: auto;
									flex: 1;
									text-align: left;
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
							width: 230rpx;
							line-height: 100rpx;
							box-sizing: border-box;
							text-align: center;

							&+.list-cell-item {
								width: 186rpx;
								text-align: left;

								&+.list-cell-item {
									text-align: left;
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
</style>
