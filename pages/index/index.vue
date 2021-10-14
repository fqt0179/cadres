<template>
	<view class="warp">
		<view class="role" v-if="role === 'admin'">
			<view class="segmentation uni-flex">
				<view class="segmentation-item" v-for="(item,index) in items" :key="index" @click="onClickItem(index)"
					:class="{active: current === index}">
					{{item}}
				</view>
			</view>
			<view class="data-content">
				<rural v-if="current === 0"></rural>
				<party v-if="current === 1"></party>
				<industry v-if="current === 2"></industry>
				<resources v-if="current === 3"></resources>
			</view>
		</view>
		<view v-else class="role">
			<view class="content-box">
				<uni-row class="people-row">
					<uni-col :span="12">
						<view class="num-item uni-flex uni-column">
							<view class="num">19555</view>
							<view class="num_name">村民总数</view>
						</view>
					</uni-col>
					<uni-col :span="12">
						<view class="num-item uni-flex uni-column">
							<view class="num">1256</view>
							<view class="num_name">党员人数</view>
						</view>
					</uni-col>
				</uni-row>
				<uni-row class="people-row">
					<uni-col :span="12">
						<view class="num-item uni-flex uni-column">
							<view class="num">966</view>
							<view class="num_name">男性</view>
						</view>
					</uni-col>
					<uni-col :span="12">
						<view class="num-item uni-flex uni-column">
							<view class="num">528</view>
							<view class="num_name">女性</view>
						</view>
					</uni-col>
				</uni-row>
			</view>
			<view class="content-box">
				<uni-section class="uni-section title" title="人员分布"></uni-section>
				<view class="charts-box">
					<qiun-data-charts type="ring" :opts="{legend: { position: 'bottom' },title: { name
						: '总' }, subtitle : { name : '12568' },  extra: { ring: { ringWidth: 20}}}" :chartData="chartsDataRing1" />
				</view>
				<view class="list-data">
					<view class="list-header uni-flex">
						<view class="list-header-item area">地区</view>
						<view class="list-header-item">人数</view>
						<view class="list-header-item">人数占比</view>
					</view>
					<view class="list">
						<view class="list-cell uni-flex" v-for="(item, index) in tableData" :key="index">
							<view class="list-cell-item area">{{ item.a }}</view>
							<view class="list-cell-item">{{ item.b }}</view>
							<view class="list-cell-item">{{ item.c }}</view>
						</view>
					</view>
				</view>
				<view class="pages-box">
					<uni-pagination :total="50" title="标题文字" />
					<!-- <button type="primary" size="mini" plain="true" class="button">上一页</button>
					<view class="page-num">
						<text class="current-page">1</text>
						<text>/</text>
						<text>5</text>
					</view>
					<button type="primary" size="mini" plain="true" class="button">下一页</button> -->
				</view>
			</view>
			<view class="content-box">
				<uni-section class="uni-section title" title="性别占比"></uni-section>
				<view class="gender-icon uni-flex">
					<image src="../../static/image/tabs/logo.png" class="image"></image>
					<image src="../../static/image/tabs/logo.png" class="image"></image>
				</view>
				<view class="scale-draw uni-flex">
					<view class="male" :style="{ width: male + '%' }"></view>
					<view class="female" :style="{ width: female + '%' }"></view>
				</view>
				<view class="number-show uni-flex">
					<view class="scale-item">
						<view class="scale-name">男性占比</view>
						<view class="scale-value man">{{ male }}%</view>
					</view>
					<view class="scale-item">
						<view class="scale-name">女性占比</view>
						<view class="scale-value">{{ female }}%</view>
					</view>
				</view>
			</view>
			<view class="content-box">
				<uni-section class="uni-section title" title="年龄分布"></uni-section>
				<view class="charts-box">
					<qiun-data-charts type="rose" :opts="{legend: { position : 'bottom' }}" :chartData="ageChartData"
						background="none" />
				</view>
				<view class="list-data age-list-data">
					<view class="list-header uni-flex">
						<view class="list-header-item area">村民年龄</view>
						<view class="list-header-item">村民数量</view>
						<view class="list-header-item">数量占比</view>
					</view>
					<view class="list">
						<view class="list-cell uni-flex" v-for="(item, index) in ageData" :key="index">
							<view class="list-cell-item uni-flex area">
								<text class="round" :style="{ background: item.color }"></text>
								<text>{{ item.a }}</text>
							</view>
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
	import rural from './component/rural/rural.vue'
	import party from './component/party/party.vue'
	import industry from './component/industry/industry.vue'
	import resources from './component/resources/resources.vue'
	export default {
		components: {
			rural,
			party,
			industry,
			resources
		},
		data() {
			return {
				role: 'admin1',
				items: ['乡村总览', '智慧党建', '产业大数据', '资源大数据'],
				current: 0,
				title: 'Hello',
				loading: false,
				tableData: [{
						a: 'XXX网格',
						b: 2000,
						c: '10%'
					},
					{
						a: 'XXX网格',
						b: 10000,
						c: '10%'
					},
					{
						a: 'XXX网格',
						b: 10000,
						c: '10%'
					},
					{
						a: 'XXX网格',
						b: 10000,
						c: '10%'
					},
					{
						a: 'XXX网格',
						b: 10000,
						c: '10%'
					}
				],
				male: 30,
				female: 70,
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
				ageChartData: {
					"series": [{
						"data": [{
								"name": "20岁以下",
								"value": 50
							},
							{
								"name": "20-30岁",
								"value": 30
							},
							{
								"name": "30-40岁",
								"value": 20
							},
							{
								"name": "40-50岁",
								"value": 18
							},
							{
								"name": "50岁以上",
								"value": 8
							}
						]
					}]
				}
			};
		},
		onLoad() {},
		methods: {
			onClickItem(index) {
				this.current = index
			},
		}
	};
</script>

<style lang="scss" scoped>
	.warp {
		overflow: hidden;

		.role {
			overflow: hidden;

			.segmentation {
				position: fixed;
				top: env(safe-area-inset-top);
				width: 100%;
				justify-content: space-around;
				background: #fff;
				z-index: 999;

				.segmentation-item {
					line-height: 90rpx;
					color: #ccc;
					font-size: 28rpx;
					flex: 1;
					text-align: center;
					box-sizing: border-box;
					font-weight: 400;

					&.active {
						color: #3b8bec;
						border-bottom: 4rpx solid #3b8bec;
					}
				}
			}

			.data-content {
				margin-top: 110rpx;
			}

			.content-box {
				background: #fff;
				margin-bottom: 20rpx;
				overflow: hidden;

				.people-row {
					justify-content: space-around;

					.num-item {
						align-items: center;
						height: 180rpx;
						justify-content: center;

						.num {
							font-size: 48rpx;
							color: #666;
							font-weight: bold;
							line-height: 56rpx;
						}

						.num_name {
							font-size: 24rpx;
							color: #999;
							line-height: 56rpx;
						}
					}
				}

				.title {
					background: #fff;
					padding: 0 32rpx;
					font-size: 26rpx;
					line-height: 120rpx;
					font-weight: bold;
					margin: 0;
				}

				.chart-box {
					background: #666;
					height: 400rpx;
				}

				.list-data {
					padding: 0 32rpx;

					&.age-list-data {
						margin-bottom: 20rpx;
					}

					.list-header {
						.list-header-item {
							flex: none;
							font-size: 26rpx;
							color: #333333;
							font-weight: 700;
							width: 200rpx;
							padding-left: 30rpx;
							line-height: 100rpx;
							box-sizing: border-box;

							&.area {
								flex: 1;
							}
						}
					}

					.list-cell {
						border-top: 2rpx solid #eeeeee;

						.list-cell-item {
							flex: none;
							font-size: 26rpx;
							color: #333333;
							width: 200rpx;
							padding-left: 30rpx;
							line-height: 100rpx;
							box-sizing: border-box;

							&.area {
								color: #666666;
								flex: 1;
								align-items: center;
							}

							.round {
								display: inline-block;
								width: 10rpx;
								height: 10rpx;
								border-radius: 50%;
								background: #333;
								margin-right: 10rpx;
							}
						}
					}
				}

				.pages-box {
					padding: 0 154rpx;
					// justify-content: center;
					margin-bottom: 30rpx;
					// .page-num {
					// 	font-size: 24rpx;
					// 	color: #999999;
					// 	line-height: 60rpx;
					// 	width: 160rpx;
					// 	flex: none;
					// 	text-align: center;
					// 	.current-page {
					// 		color: #409eff;
					// 	}
					// }
					// .button {
					// 	margin: 0;
					// 	width: 140rpx;
					// 	font-size: 24rpx;
					// 	line-height: 60rpx;
					// 	padding: 0;
					// 	box-sizing: border-box;
					// }
				}

				.gender-icon {
					padding: 0 32rpx;
					justify-content: space-between;

					.image {
						width: 128rpx;
						height: 128rpx;
						background: #eeeeee;
					}
				}

				.scale-draw {
					margin: 60rpx 0;
					height: 66rpx;
					padding: 0 32rpx;

					.male {
						height: 40rpx;
						background: #52c1f5;
						border-radius: 20rpx 0 0 20rpx;
					}

					.female {
						height: 40rpx;
						background: #fec03d;
						position: relative;
						border-radius: 0 20rpx 20rpx 0;

						&::after {
							position: absolute;
							content: '';
							width: 4rpx;
							height: 66rpx;
							border-radius: 2rpx;
							background: #fec03d;
							left: 0;
							top: 50%;
							transform: translateY(-50%);
						}
					}
				}

				.number-show {
					padding: 0 32rpx;
					justify-content: space-between;
					margin-bottom: 80rpx;

					.scale-item {
						.scale-name {
							font-size: 28rpx;
							color: #999;
							line-height: 38rpx;
						}

						.scale-value {
							font-size: 56rpx;
							font-weight: 700;
							color: #fec03d;
							line-height: 76rpx;

							&.man {
								color: #52c1f5;
							}
						}
					}
				}
			}
		}

	}
</style>
