<template>
	<view class="rural">
		<view class="top-box charts-box">
			<qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" :chartData="chartsDataMap1" />
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>产业情况</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="arcbar"
					:opts="{ title: { name: '', color: '#1890ff', fontSize: 35 }, subtitle: { name: '' }, extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 24, gap: 10 } } }"
					:chartData="chartsDataArcbar2" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>土地使用情况分析</text>
			</view>
			<view class="charts-box statistical uni-flex">
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">耕地面积</view>
						<view class="info-value"><text>9527</text><text class="small">亩</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">种植面积</view>
						<view class="info-value"><text>9527</text><text class="small">亩</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">种植率</view>
						<view class="info-value"><text>9527</text><text class="small">%</text></view>
					</view>
				</view>
			</view>
			<view class="charts-box group-chart">
				<qiun-data-charts type="column" :chartData="colChartData"
					:opts="{ xAxis: {rotateLabel: true, calibration: true}, yAxis: { gridType:'dash',  splitNumber:2 ,data:[{format:'mu', axisLine: false}]},extra: {column: {seriesGap: 0,categoryGap: 5, width: 20}}}"
					background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>数据统计</text>
			</view>
			<view class="charts-box statistical uni-flex">
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">种植面积</view>
						<view class="info-value"><text>9527</text><text class="small">亩</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">劳动力</view>
						<view class="info-value"><text>9527</text><text class="small">亩</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">年均收入</view>
						<view class="info-value"><text>9527</text><text class="small">%</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">养殖数量</view>
						<view class="info-value"><text>9527</text><text class="small">%</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">年产值</view>
						<view class="info-value"><text>9527</text><text class="small">%</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">年产值增长</view>
						<view class="info-value"><text>9527</text><text class="small">%</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="content-title uni-flex">
				<text>种养殖信息</text>
				<view class="title-btn-box uni-flex">
					<view class="btn" :class="{ active: current === 0 }" @click="toggle(0)">种植</view>
					<view class="btn" :class="{ active: current === 1 }" @click="toggle(1)">养殖</view>
				</view>
			</view>
			<view class="charts-box" v-if="current === 0">
				<qiun-data-charts type="ring" :opts="{legend: { position: 'bottom' },title: { name
					: '总' }, subtitle : { name : '12568' },  extra: { ring: { ringWidth: 20}}}" :chartData="plantChartData" />
			</view>
			<view class="charts-box" v-if="current === 1">
				<qiun-data-charts type="ring" :opts="{legend: { position: 'bottom' },title: { name
					: '总' }, subtitle : { name : '12568' },  extra: { ring: { ringWidth: 20}}}" :chartData="farmChartData" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title">
				<text>农产品去向分析</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="funnel" :chartData="funnelChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title uni-flex">
				<text>现有种养殖信息</text>
				<view class="title-btn-box uni-flex">
					<view class="btn" :class="{ active: tableCurrent === 0 }" @click="tableToggle(0)">种植</view>
					<view class="btn" :class="{ active: tableCurrent === 1 }" @click="tableToggle(1)">养殖</view>
				</view>
			</view>
			<view class="charts-box">
				<view class="list-data">
					<view class="list-header uni-flex">
						<view class="list-header-item">名称</view>
						<view class="list-header-item">类别</view>
						<view class="list-header-item">单位</view>
						<view class="list-header-item">数量</view>
					</view>
					<view class="list">
						<view class="list-cell uni-flex"
							v-for="(item, index) in (tableCurrent === 0? plantTableData:frameTableData)" :key="index">
							<view class="list-cell-item">{{ item.name }}</view>
							<view class="list-cell-item">{{ item.type }}</view>
							<view class="list-cell-item">{{ item.unit }}</view>
							<view class="list-cell-item">{{ item.number }}</view>
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
				userName: "rural",
				current: 0,
				tableCurrent: 0,
				chartsDataMap1: {},
				plantTableData: [{
					name: '西瓜',
					type: '水果',
					unit: '吨',
					number: '20'
				}, {
					name: '西瓜',
					type: '水果',
					unit: '吨',
					number: '20'
				}, {
					name: '西瓜',
					type: '水果',
					unit: '吨',
					number: '20'
				}, {
					name: '西瓜',
					type: '水果',
					unit: '吨',
					number: '20'
				}, {
					name: '西瓜',
					type: '水果',
					unit: '吨',
					number: '20'
				}],
				frameTableData: [{
					name: '猪',
					type: '家畜',
					unit: '吨',
					number: '20'
				}, {
					name: '猪',
					type: '家畜',
					unit: '吨',
					number: '20'
				}, {
					name: '猪',
					type: '家畜',
					unit: '吨',
					number: '20'
				}, {
					name: '猪',
					type: '家畜',
					unit: '吨',
					number: '20'
				}, {
					name: '猪',
					type: '家畜',
					unit: '吨',
					number: '20'
				}],
				colChartData: {
					"categories": [
						"隆阳区",
						"施甸县",
						"腾冲市",
						"龙陵县",
						"昌宁县",
					],
					"series": [{
							"name": "耕地面积",
							"data": [
								35,
								36,
								31,
								33,
								13
							]
						},
						{
							"name": "种植面积",
							"data": [
								18,
								27,
								21,
								24,
								6
							]
						}
					]
				},
				chartsDataArcbar2: {
					series: [{
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
				},
				plantChartData: {
					series: [{
						data: [{
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
					}]
				},
				farmChartData: {
					series: [{
						data: [{
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
					}]
				},
				funnelChartData: {
					"series": [{
						"data": [{
								"name": "出口",
								"value": 50
							},
							{
								"name": "加工",
								"value": 30
							},
							{
								"name": "餐饮",
								"value": 20
							},
							{
								"name": "零售",
								"value": 18
							},
							{
								"name": "批发",
								"value": 8
							},
							{
								"name": "自用",
								"value": 8
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
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			})
		},
		methods: {
			toggle(index) {
				this.current = index;
			},
			tableToggle(index) {
				this.tableCurrent = index;
			},
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

						&.active {
							color: #fff;
							background: #008dec;
						}

						&+.btn {
							margin-left: 10rpx;
						}
					}
				}
			}

			.charts-box {
				&.group-chart {
					height: 282rpx;
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
							width: 170rpx;
							line-height: 100rpx;
							box-sizing: border-box;
							text-align: center;

							&+.list-header-item {
								text-align: left;

							}

						}
					}

					.list-cell {
						border-top: 2rpx solid #eeeeee;

						.list-cell-item {
							flex: none;
							font-size: 26rpx;
							color: #333333;
							width: 170rpx;
							line-height: 100rpx;
							box-sizing: border-box;
							text-align: center;

							&+.list-cell-item {
								text-align: left;
							}
						}
					}
				}
			}
		}
	}
</style>
