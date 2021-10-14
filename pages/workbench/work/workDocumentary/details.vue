<template>
	<view class="detail">
		<view class="title">红红火火恍恍惚惚工作主题</view>
		<view class="work-title">工作详情</view>
		<view class="work-desc">工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情工作详情</view>
		<view class="time-box">
			<uni-icons type="circle" color="#7f7f7f"></uni-icons>
			<text>事发时间：2021-09-01 16:00</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>责任人：里斯</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>参与人：里斯</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>发布人：里斯</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>上报人：里斯</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>手机号：1888888888</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>工作类型：哞哞哞叫</text>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>现场照片：</text>
		</view>
		<view class="image-list uni-flex">
			<view v-for="(item,index) in 3" :key="index">
				<image src="../../../../static/image/tabs/logo.png" class="temp-img"></image>
			</view>
		</view>
		<view class="info-cell">
			<uni-icons type="person-filled" color="#7f7f7f"></uni-icons>
			<text>上报地址：啦啦啦啦啦啦啦啦啦</text>
		</view>
		<map class="map" latitude="" longitude=""></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		background: #fff;
		padding: 32rpx;

		.title {
			font-size: 32rpx;
			color: #333;
			font-weight: bold;
			line-height: 68rpx;
		}

		.work-title {
			font-size: 36rpx;
			color: #333;
			font-weight: bold;
			border-left: 10rpx solid #0079fe;
			padding-left: 16rpx;
			line-height: 48rpx;
			margin: 32rpx 0;
		}

		.work-desc {
			font-size: 28rpx;
			color: #7f7f7f;
			line-height: 40rpx;
			padding-bottom: 20rpx;
			margin-right: -32rpx;
			padding-right: 32rpx;
			border-bottom: 1rpx solid #efefef;
		}

		.time-box {
			font-size: 28rpx;
			color: #999999;
			line-height: 68rpx;
			margin: 10rpx 0;
		}

		.info-cell {
			font-size: 28rpx;
			color: #979599;
			line-height: 68rpx;
		}

		.image-list {
			justify-content: space-between;
			margin: 20rpx 0 16rpx;

			.temp-img {
				width: 210rpx;
				height: 210rpx;
			}
		}

		.map {
			width: 686rpx;
			height: 440rpx;
			margin-top: 20rpx;
		}

	}
</style>
