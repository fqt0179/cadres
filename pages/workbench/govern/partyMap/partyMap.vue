<template>
	<view class="map">
		<map :style="{width: '750rpx', height: height + 'px'}" :markers="markers" :latitude="latitude"
			:longitude="longitude"  @markertap="markertap()"></map>
		<view class="top-box uni-flex">
			<view class="address-box uni-flex">
				<view class="address-name">金鸡村</view>
				<uni-icons type="arrowdown" color="#666"></uni-icons>
			</view>
			<view class="search-box uni-flex">
				<uni-icons type="search" size="18"></uni-icons>
				<input class="input" confirm-type="search" v-model="searchValue" type="text" :value="searchValue"
					placeholder="请输入房主姓名" />
			</view>
			<view v-if="searchValue" class="cancel">
				取消
			</view>
		</view>
		<uni-popup ref="popup" @change="change">
			<view class="popup">
				<view class="top-icon uni-flex uni-column">
					<view class="line"></view>
					<view class="line"></view>
				</view>
				<view class="pop-top-box uni-flex">
					<view class="top-item uni-flex uni-column">
						<view class="item-val">99</view>
						<view class="item-name">党员</view>
					</view>
					<view class="top-item uni-flex uni-column">
						<view class="item-val">99</view>
						<view class="item-name">男</view>
					</view>
					<view class="top-item uni-flex uni-column">
						<view class="item-val">99</view>
						<view class="item-name">女</view>
					</view>
				</view>
				<view class="pop-info-box">
					<view class="cell uni-flex">
						<view class="label">党组织名称：</view>
						<view class="value">xxxxxxxxx</view>
					</view>
					<view class="cell uni-flex">
						<view class="label">党组织类型：</view>
						<view class="value">xxxxxxxxx</view>
					</view>
					<view class="cell uni-flex">
						<view class="label">联系电话：</view>
						<view class="value">xxxxxxxxx</view>
					</view>
					<view class="cell uni-flex">
						<view class="label">简介：</view>
						<view class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</view>
					</view>
				</view>
				<view class="button-box">
					<button class="btn" type="default" @click="pageToList">查看党员</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: '',
				longitude: '',
				height: 0,
				searchValue: '',
				markers: []
			};
		},
		onLoad() {
			this.height = uni.getSystemInfoSync().windowHeight
			uni.getLocation({
				type: 'gcj02',
				success: (res) => {
					this.latitude = res.latitude
					this.longitude = res.longitude
					this.markers.push({
						latitude: this.latitude,
						longitude: this.longitude,
						iconPath: '/static/logo.png'
					})
				}
			})
		},
		methods: {
			markertap(e) {
				console.log(1, e)
				this.$refs.popup.open('bottom')
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
			},
			pageToList() {
				uni.navigateTo({
					url: '/pages/workbench/govern/partyMap/partyList'
				})
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},

		}
	}
</script>

<style lang="scss" scoped>
	.map {
		.top-box {
			width: 686rpx;
			box-sizing: border-box;
			z-index: 9;
			position: fixed;
			top: 88rpx;
			background: #fff;
			height: 90rpx;
			align-items: center;
			margin: 20rpx 32rpx;
			border-radius: 8rpx;
			box-shadow: 10rpx 10rpx 12rpx rgba(170, 170, 170, 0.3);

			.address-box {
				border-right: 2rpx solid #eee;
				padding: 0 16rpx;

				.address-name {

					margin-left: 8rpx;
					margin-right: 8rpx;
					font-size: 26rpx;
					color: #666;
				}
			}

			.search-box {
				flex: 1;
				margin-left: 16rpx;
				align-items: center;

				.input {
					margin-left: 8rpx;
				}
			}

			.cancel {
				padding: 0 32rpx;
				font-size: 28rpx;
				color: #666;
			}

		}

		.popup {
			border-radius: 20rpx 20rpx 0 0;
			background: #fff;

			.top-icon {
				height: 64rpx;
				margin: 0 auto;
				width: 100rpx;
				justify-content: center;
				align-items: center;

				.line {
					width: 52rpx;
					height: 6rpx;
					border-radius: 3rpx;
					background: #f5f5f5;
					margin: 6rpx 0;
				}
			}

			.pop-top-box {
				justify-content: space-around;
				padding: 40rpx 0;

				.top-item {
					justify-content: center;
					align-items: center;
					flex: 1;

					&+.top-item {
						.item-val {
							border: 8rpx solid #00BFBF;
							color: #00BFBF;
						}
					}

					&+.top-item+.top-item {
						.item-val {
							border: 8rpx solid #70B603;
							color: #70B603;
						}
					}

					.item-val {
						border: 8rpx solid #f59a23;
						width: 134rpx;
						height: 134rpx;
						border-radius: 50%;
						text-align: center;
						line-height: 126rpx;
						color: #f59a23;
						font-size: 48rpx;
						box-sizing: border-box;
					}

					.item-name {
						font-size: 28rpx;
						color: #7f7f7f;
						margin-top: 16rpx;
					}
				}

			}

			.pop-info-box {
				padding: 0 32rpx;

				.cell {
					padding: 10rpx 0;

					.label {
						flex: none;
						width: 168rpx;
						font-size: 28rpx;
						color: #333;
						text-align: right;
						line-height: 40rpx;
					}

					.value {
						word-break: break-all;
						font-size: 28rpx;
						color: #333;
					}
				}

			}

			.button-box {
				padding: 30rpx 32rpx 50rpx;

				.btn {
					background: #f59a23;
					color: #fff;
				}
			}

		}

	}
</style>
