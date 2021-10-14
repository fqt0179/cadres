<template>
	<view class="all-list">
		<view class="list-item uni-flex" v-for="(item, index) in list" :key="index" @click="pageToDetail">
			<image class="list-item-img" src="/static/image/tabs/logo.png"></image>
			<view class="list-item-info uni-flex uni-column">
				<view class="list-item-title">标题文字</view>
				<view class="list-item-desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1, 1, 1, 1, 1, 1]
			};
		},
		onLoad(option) {
			console.log(option)
			let type = option.type
			switch (+type) {
				case 0:
					uni.setNavigationBarTitle({
						title: '政策公开'
					})
					break;
				case 1:
					uni.setNavigationBarTitle({
						title: '政务公开'
					})
					break;
				case 2:
					uni.setNavigationBarTitle({
						title: '财务公开'
					})
					break;
			}
		},
		methods:{
			pageToDetail() {
				uni.navigateTo({
					url:'/pages/workbench/announcement/announcementDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		background-color: #fff !important;
	}

	.all-list {
		padding: 0 32rpx;

		.list-item {
			padding: 20rpx 0;

			border-bottom: 2rpx solid #F5F5F5;


			.list-item-img {
				width: 140rpx;
				height: 140rpx;
				margin-right: 20rpx;
				flex: none;
			}

			.list-item-info {
				justify-content: space-between;
				height: 140rpx;
				padding: 2rpx 0;
				box-sizing: border-box;

				.list-item-title {
					font-size: 26rpx;
					color: #333;
				}

				.list-item-desc {
					font-size: 24rpx;
					color: #999;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					line-height: 40rpx;
				}
			}

		}
	}
</style>
