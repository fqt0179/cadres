<template>
	<view class="rural">
		<view class="top-box charts-box">
			<qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" :chartData="chartsDataMap1" />
		</view>
		<view class="content-box">
			<view class="content-title"><text>党员情况统计</text></view>
			<view class="uni-flex item-echart-box">
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="{
								title: { name: '30', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0099ff']
							}" :chartData="{
								series: [
									{
										name: '一班',
										data: 30 / 30
									}
								]
							}" />
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="{
								title: { name: '26', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0ff']
							}" :chartData="{
								series: [
									{
										name: '一班',
										data: 26 / 30
									}
								]
							}" />
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="{
								title: { name: '20', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#0c3']
							}" :chartData="{
								series: [
									{
										name: '一班',
										data: 20 / 30
									}
								]
							}" />
					</view>
					<view class="echart-name">党委数</view>
				</view>
				<view class="item-echart">
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="{
								title: { name: '6', color: '#333', fontSize: 20 },
								subtitle: { name: '' },
								extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 4 } },
								color: ['#f33']
							}" :chartData="{
								series: [
									{
										name: '一班',
										data: 6 / 30
									}
								]
							}" />
					</view>
					<view class="echart-name">党委数</view>
				</view>
			</view>
			<view class="charts-box line">
				<qiun-data-charts type="line" :chartData="chartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>数据统计</text></view>
			<view class="charts-box statistical uni-flex">
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">人口数量</view>
						<view class="info-value"><text>9527</text><text class="smallsmall">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">党员数</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">男性</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">女性</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">学生</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">新生</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">死亡</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">外出务工</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
				<view class="statistical-item uni-flex">
					<image class="item-img" src="@/static/image/tabs/logo.png"></image>
					<view class="item-info">
						<view class="info-name">贫困户</view>
						<view class="info-value"><text>9527</text><text class="small">人</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>产业情况</text></view>
			<view class="charts-box">
				<qiun-data-charts type="arcbar"
					:opts="{ title: { name: '', color: '#1890ff', fontSize: 35 }, subtitle: { name: '' }, extra: { arcbar: { type: 'circle', startAngle: 1.5, width: 24, gap: 10 } } }"
					:chartData="chartsDataArcbar2" />
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
			<view class="charts-box" v-if="current === 0">
				<qiun-data-charts type="pie" :chartData="plantChartData" background="none" />
			</view>
			<view class="charts-box" v-if="current === 1">
				<qiun-data-charts type="pie" :chartData="farmChartData" background="none" />
			</view>
		</view>
		<view class="content-box">
			<view class="content-title"><text>快处快报</text></view>
			<view class="charts-box">
				<view class="list-data">
					<view class="list-header uni-flex">
						<view class="list-header-item">事件类型</view>
						<view class="list-header-item">上报人</view>
						<view class="list-header-item">上报日期</view>
						<view class="list-header-item">状态</view>
						<view class="list-header-item">上报地点</view>
					</view>
					<view class="list">
						<view class="list-cell uni-flex" v-for="(item, index) in ageData" :key="index">
							<view class="list-cell-item">{{ item.a }}</view>
							<view class="list-cell-item">{{ item.b }}</view>
							<view class="list-cell-item">{{ item.c }}</view>
							<view class="list-cell-item">{{ item.c }}</view>
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
				userName: 'rural',
				chartsDataMap1: {},
				current: 0,
				chartData: {
					categories: ['18-30岁', '31-40岁', '41-50岁', '51-60岁', '60岁以上'],
					series: [{
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
				}
			};
		},
		created() {
			this.chartsDataMap1 = {
				series: mapdata.features
			}
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
