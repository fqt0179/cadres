<template>
	<view class="scan">
		<view class="scan-box uni-flex uni-column">
			<view class="icon-box uni-flex" @click="scan">
				<uni-icons type="camera-filled" size="56" color="#999"></uni-icons>
			</view>
			<view class="scan-txt">
				扫一扫
			</view>
		</view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="swiper-item" v-for="(item, index) in bannerList" :key="index">
					<image class="item-img" src="/static/image/tabs/logo.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="crowd-list">
			<view class="list-title-box uni-flex">
				<view class="title">
					我管理得群众
				</view>
				<view class="more uni-flex" @click="pageToMore">
					<text>更多</text>
					<uni-icons type="arrowright" color="#aaa" size="12"></uni-icons>
				</view>
			</view>
			<view class="item" v-for="(item,index) in list" :key="index" @click="pageToDetail">
				<view class="base-info uni-flex">
					<view class="avatar-box">
						<image src="/static/image/tabs/logo.png" class="avatar" />
						<view class="icon-box uni-flex">
							<uni-icons type="qq" color="#fff"></uni-icons>
						</view>
					</view>
					<view class="info uni-flex uni-column">
						<view class="name-info uni-flex">
							<view class="name">
								张三
							</view>
							<view class="gender">
								男
							</view>
						</view>
						<view class="mark-box uni-flex">
							<view class="mark">
								常住人口
							</view>
							<view class="phone">
								18888888888
							</view>
						</view>

					</view>
				</view>
				<view class="live-address">
					居住地：了了了了了了了了村2组
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scanResult: null,
				bannerList: [1, 1, 1],
				list: [1, 1, 1, 1, 1]
			};
		},
		methods: {
			scan() {
				uni.scanCode({
					success: res => {
						// TODO H5不支持
						this.scanResult = res.result
					}
				})
			},
			pageToDetail() {
				uni.navigateTo({
					url: '/pages/workbench/work/crowdInfo/crowdDetails'
				})
			},
			pageToMore() {
				uni.navigateTo({
					url: '/pages/workbench/work/crowdInfo/crowdInfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scan {
		padding: 40rpx 32rpx 0;

		.scan-box {
			justify-content: center;
			align-items: center;
			background: #0079fe;
			height: 402rpx;
			border-radius: 16rpx;

			.icon-box {
				justify-content: center;
				align-items: center;
				width: 200rpx;
				height: 200rpx;
				background: #fff;
				border-radius: 50%;
			}

			.scan-txt {
				font-size: 42rpx;
				color: #fff;
				margin-top: 32rpx;
			}
		}

		.banner {
			border-radius: 16rpx;
			overflow: hidden;
			margin-top: 20rpx;

			.swiper-item {
				.item-img {
					width: 100%;
					height: 100%;
				}
			}
		}

		.crowd-list {
			margin-top: 20rpx;
			background: #fff;
			padding: 0 32rpx;
			border-radius: 16rpx 16rpx 0 0;

			.list-title-box {
				justify-content: space-between;
					align-items: center;
				.title {
					font-size: 36rpx;
					font-weight: bold;
					color: #333;
					line-height: 100rpx;
				}
				
				.more{
					font-size: 22rpx;
					color: #AAAAAA;
					align-items: center;
					margin-right: -8rpx;
					text{
						margin-right: 8rpx;
					}
				}
			}

			.item {
				padding: 32rpx 0 10rpx;
				position: relative;
				overflow: hidden;

				&+.item {
					border-top: 2rpx solid #F7F7F7;
				}

				.base-info {
					.avatar-box {
						width: 110rpx;
						height: 110rpx;
						position: relative;
						flex: none;
						margin-right: 32rpx;

						.avatar {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}

						.icon-box {
							position: absolute;
							bottom: 0;
							right: -6rpx;
							background: #a7d5ff;
							width: 34rpx;
							height: 34rpx;
							border-radius: 50%;
							align-items: center;
							justify-content: center;
						}
					}

					.info {
						flex: 1;
						height: 110rpx;
						justify-content: space-between;

						.name-info {
							justify-content: space-between;
							align-items: center;

							.name {
								font-size: 32rpx;
								color: #000;
								font-weight: bold;
								line-height: 52rpx;
							}

							.gender {
								font-size: 26rpx;
								color: #F59A23;
							}
						}

						.mark-box {
							justify-content: space-between;

							.mark {
								width: 148rpx;
								height: 46rpx;
								border-radius: 4rpx;
								background: rgba(59, 139, 236, 0.09);
								text-align: center;
								line-height: 46rpx;
								font-size: 22rpx;
								color: #3b8bec;
							}

							.phone {
								font-size: 24rpx;
								color: #7f7f7f;
							}
						}
					}

				}

				.live-address {
					font-size: 24rpx;
					color: #7f7f7f;
					margin: 20rpx 0;
				}
			}

		}
	}
</style>
