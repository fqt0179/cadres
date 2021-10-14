<template>
	<view class="clock-in">
		<view v-if="tabCurrent === 0" class="">
			<view class="clock-in-box uni-flex uni-column">
				<view class="clock-in-btn uni-flex uni-column">
					<view>入户打卡</view>
					<view class="time">
						{{nowTime}}
					</view>
				</view>
				<view v-if="1" class="tip uni-flex">
					<uni-icons type="checkbox" color="#4BD863"></uni-icons>
					<text>已进入打卡范围</text>
				</view>
				<view v-else class="tip uni-flex">
					<uni-icons type="close" color="#f00"></uni-icons>
					<text>不在打卡范围</text>
				</view>
			</view>
			<view class="record-list">
				<view class="record-item uni-flex" v-for="(item,index) in recordList" :key="index">
					<view class="item-left"></view>
					<view class="record-info">
						<view class="cell clock-in-time uni-flex">
							<uni-icons class="icon" type="person"></uni-icons>
							<view class="label-name">
								打卡时间：
							</view>
							<view class="cell-value">
								17：00：01
							</view>
						</view>
						<view class="cell uni-flex">
							<uni-icons class="icon" type="person"></uni-icons>
							<view class="label-name">
								户主姓名：
							</view>
							<view class="cell-value">
								张三
							</view>
						</view>
						<view class="cell uni-flex">
							<uni-icons class="icon" type="location"></uni-icons>
							<view class="cell-value">
								xxxxxxxxxxx地址
							</view>
						</view>
						<view class="cell uni-flex">
							<uni-icons class="icon" type="person"></uni-icons>
							<view class="label-name">
								备注：
							</view>
							<view class="cell-value">
								xxxxxxxxxxxxxx备注
							</view>
						</view>
						<view class="imgs uni-flex">
							<image src="/static/image/tabs/logo.png" v-for="(item,index) in [1,1]" :key="index"></image>
						</view>
					</view>
				</view>

			</view>
		</view>
		<view v-else class="ren-calenda">
			<view class="content">
				<ren-calendar ref='ren' :markDays='markDays' @getMonth="getMonth" @onDayClick='onDayClick'>
					<view class="statistical" slot="center">
						<view class="title">
							{{month}}月总汇
						</view>
						<view class="information uni-flex">
							<view class="information-item">
								<view class="num">
									196
								</view>
								<view class="num-name">
									打卡次数
								</view>
							</view>
							<view class="information-item">
								<view class="num">
									89
								</view>
								<view class="num-name">
									打卡户数
								</view>
							</view>
							<view class="information-item">
								<view class="num">
									12
								</view>
								<view class="num-name">
									打卡天数
								</view>
							</view>
						</view>
					</view>
					<view class="calender-title" slot="title">
						打卡记录
					</view>
				</ren-calendar>
				<view class="record-list">
					<view class="record-item uni-flex" v-for="(item,index) in recordList" :key="index">
						<view class="item-left"></view>
						<view class="record-info">
							<view class="cell clock-in-time uni-flex">
								<uni-icons class="icon" type="person"></uni-icons>
								<view class="label-name">
									打卡时间：
								</view>
								<view class="cell-value">
									17：00：01
								</view>
							</view>
							<view class="cell uni-flex">
								<uni-icons class="icon" type="person"></uni-icons>
								<view class="label-name">
									户主姓名：
								</view>
								<view class="cell-value">
									张三
								</view>
							</view>
							<view class="cell uni-flex">
								<uni-icons class="icon" type="location"></uni-icons>
								<view class="cell-value">
									xxxxxxxxxxx地址
								</view>
							</view>
							<view class="cell uni-flex">
								<uni-icons class="icon" type="person"></uni-icons>
								<view class="label-name">
									备注：
								</view>
								<view class="cell-value">
									xxxxxxxxxxxxxx备注
								</view>
							</view>
							<view class="imgs uni-flex">
								<image src="/static/image/tabs/logo.png" v-for="(item,index) in [1,1]" :key="index"></image>
							</view>
						</view>
					</view>
				
				</view>
			</view>
		</view>
		<view class="footer-bar uni-flex">
			<view class="tabs uni-flex uni-column" :class="{active: tabCurrent === 0}" @click="tabClick(0)">
				<uni-icons type="person" :color="tabCurrent === 0?'#3b8bec':'#999'"></uni-icons>
				<text>打卡</text>
			</view>
			<view class="tabs uni-flex uni-column" :class="{active: tabCurrent === 1}" @click="tabClick(1)">
				<uni-icons type="person" :color="tabCurrent === 1?'#3b8bec':'#999'"></uni-icons>
				<text>统计</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nowHours: '00',
				NowMinutes: '00',
				nowSeconds: '00',
				r: null,
				recordList: [1, 1, 1],
				tabCurrent: 0,
				curDate: '',
				markDays: [],
				month: new Date().getMonth() + 1
			};
		},
		onLoad() {
			this.r = setInterval(() => {
				this.getNowTime()
			}, 1000)
		},
		onReady() {
			let today = this.$refs.ren.getToday().date;
			this.curDate = today;
			this.markDays.push(today);
		},
		onUnload() {
			clearInterval(this.r)
		},
		computed: {
			nowTime() {

				return `${this.nowHours}:${this.NowMinutes}:${this.nowSeconds}`
			}
		},
		methods: {
			getMonth(e) {
				console.log(e)
				this.month = e
			},
			onDayClick(data) {
				this.curDate = data.date;
			},
			getNowTime() {
				this.nowHours = new Date().getHours()
				this.nowHours = +this.nowHours >= 10 ? this.nowHours : '0' + this.nowHours
				this.NowMinutes = new Date().getMinutes()
				this.NowMinutes = +this.NowMinutes >= 10 ? this.NowMinutes : '0' + this.NowMinutes
				this.nowSeconds = new Date().getSeconds()
				this.nowSeconds = +this.nowSeconds >= 10 ? this.nowSeconds : '0' + this.nowSeconds
			},
			tabClick(current) {
				this.tabCurrent = current
				if(current === 1) {
					uni.setNavigationBarTitle({
						title: '打卡统计'
					})
				} else {
					uni.setNavigationBarTitle({
						title: '入户打卡'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.clock-in {
		overflow: hidden;
		padding-bottom: 120rpx;

		.clock-in-box {
			align-items: center;
			background: #fff;
			padding: 60rpx 0;

			.clock-in-btn {
				justify-content: center;
				align-items: center;
				width: 240rpx;
				height: 240rpx;
				background: #3b8bec;
				border-radius: 50%;
				font-size: 32rpx;
				color: #fff;
				line-height: 56rpx;

				.time {
					line-height: 48rpx;
					font-size: 36rpx;
				}
			}

			.tip {
				font-size: 24rpx;
				color: #999;
				margin-top: 24rpx;

				text {
					margin-left: 10rpx;
				}
			}

		}

		.record-list {
			background: #fff;
			margin-bottom: 30rpx;
			padding-bottom: 30rpx;

			.record-item {
				padding: 50rpx 32rpx 20rpx;
				position: relative;

				&:not(:last-child)::after {
					content: "";
					position: absolute;
					top: 82rpx;
					left: 42rpx;
					width: 2rpx;
					height: 100%;
					background: #f6f6f6;
					transform: translateX(-1rpx);
					z-index: 2;
				}

				.item-left {
					position: relative;
					z-index: 3;
					flex: none;
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background: #CCCCCC;
					margin-top: 22rpx;
					margin-right: 20rpx;
				}

				.record-info {
					.cell {
						font-size: 24rpx;
						color: #333;
						line-height: 40rpx;

						&.clock-in-time {
							line-height: 64rpx;
						}

						.icon {
							margin-right: 8rpx;
						}
					}

					.imgs {
						flex-wrap: wrap;
						margin-top: 16rpx;

						image {
							width: 160rpx;
							height: 160rpx;
							margin-right: 20rpx;
							margin-bottom: 20rpx;
						}
					}
				}

			}

		}

		.ren-calenda {
			.record-list{
				margin: 0 32rpx;
				border-top: 2rpx solid #f5f5f5;
			}
			.statistical {
				.title {
					font-size: 26rpx;
					color: #333;
					font-weight: bold;
					text-align: left;
					background: #fff;
					border-radius: 20rpx 20rpx 0 0;
					margin: 0 32rpx;
					line-height: 80rpx;
					padding: 0 32rpx;
					margin-top: 20rpx;
				}

				.information {
					justify-content: space-around;
					margin: 0 32rpx 20rpx;
					background: #fff;
					border-radius: 0 0 20rpx 20rpx;
					padding: 20rpx 0 36rpx;

					.information-item {
						.num {
							font-size: 52rpx;
							color: #333;
							font-weight: bold;
							text-align: center;
						}

						.num-name {
							font-size: 28rpx;
							color: #7f7f7f;
							text-align: center;
						}

					}
				}
			}

			.calender-title {
				font-size: 26rpx;
				color: #333;
				font-weight: bold;
				text-align: left;
				background: #fff;
				border-radius: 20rpx 20rpx 0 0;
				margin: 0 32rpx;
				line-height: 80rpx;
				padding: 0 32rpx;
			}
		}


		.footer-bar {
			justify-content: space-around;
			position: fixed;
			width: 100%;
			height: 120rpx;
			left: 0;
			bottom: 0;
			background: #fff;
			border-top: 1rpx solid #eee;
			z-index: 999;

			.tabs {
				justify-content: center;

				&.active {
					color: #3b8bec;
				}
			}
		}
	}
</style>
