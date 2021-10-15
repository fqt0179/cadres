<template>
	<view class="scan">
		<view class="scan-box uni-flex uni-column">
			<view class="icon-box uni-flex" @click="scan"><uni-icons type="camera-filled" size="56" color="#999"></uni-icons></view>
			<view class="scan-txt">扫一扫</view>
		</view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="swiper-item" v-for="(item, index) in bannerList" :key="index"><image class="item-img" src="/static/image/tabs/logo.png"></image></swiper-item>
			</swiper>
		</view>
		<view class="crowd-list">
			<view class="list-title-box uni-flex">
				<view class="title">我管理得群众</view>
				<view class="more uni-flex" @click="pageToMore">
					<text>更多</text>
					<uni-icons type="arrowright" color="#aaa" size="12"></uni-icons>
				</view>
			</view>
			<view class="item" v-for="(item, index) in list" :key="index" @click="pageToDetail">
				<view class="base-info uni-flex">
					<view class="avatar-box">
						<image src="/static/image/tabs/logo.png" class="avatar" />
						<view class="icon-box uni-flex"><uni-icons type="qq" color="#fff"></uni-icons></view>
					</view>
					<view class="info uni-flex uni-column">
						<view class="name-info uni-flex">
							<view class="name">张三</view>
							<view class="gender">男</view>
						</view>
						<view class="mark-box uni-flex">
							<view class="mark">常住人口</view>
							<view class="phone">18888888888</view>
						</view>
					</view>
				</view>
				<view class="live-address">居住地：了了了了了了了了村2组</view>
			</view>
		</view>
	</view>
</template>

<script>
import * as jweixin from '@/wxjsdk/wxjsdk.js'
export default {
	data() {
		return {
			scanResult: null,
			bannerList: [1, 1, 1],
			list: [1, 1, 1, 1, 1]
		};
	},
	onLoad() {
		console.log(jweixin)
		// 后端获取权限验证参数
		// requet.then res => {
		// 	jweixin.config({
		// 		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		// 		appId: res.appId, // 必填，公众号的唯一标识
		// 		timestamp: res.timestamp, // 必填，生成签名的时间戳
		// 		nonceStr: res.nonceStr, // 必填，生成签名的随机串
		// 		signature: res.signature, // 必填，签名
		// 		jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
		// 	});
		// }
	},
	methods: {
		scan() {
			console.log(1)
			jweixin.scanQRCode({
								needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
								scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
								success: function (res) {
									let str = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
									console.log(str)
								},
								fail: (err) => {
									console.log(err)
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

			.more {
				font-size: 22rpx;
				color: #aaaaaa;
				align-items: center;
				margin-right: -8rpx;
				text {
					margin-right: 8rpx;
				}
			}
		}

		.item {
			padding: 32rpx 0 10rpx;
			position: relative;
			overflow: hidden;

			& + .item {
				border-top: 2rpx solid #f7f7f7;
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
							color: #f59a23;
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
