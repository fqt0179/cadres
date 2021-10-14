<template>
	<view class="industry">
		<map :style="{width: '750rpx', height: height + 'px'}" :markers="markers" :latitude="latitude"
			:longitude="longitude"  @markertap="markertap"></map>
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
		<uni-fab @fabClick="add" horizontal="right"></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				searchValue: '',
				latitude: '',
				longitude: '',
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
			add() {
				uni.navigateTo({
					url: "/pages/workbench/work/industry/addIndustry"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.industry {
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
	}
</style>
