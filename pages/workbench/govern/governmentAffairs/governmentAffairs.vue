<template>
	<view class="government-affairs">
		<view class="content-box top-box uni-flex">
			<view class="data-item">
				<view class="data-value">10000</view>
				<view class="data-name">政策公开</view>
			</view>
			<view class="data-item">
				<view class="data-value">310</view>
				<view class="data-name">政务公开</view>
			</view>
			<view class="data-item">
				<view class="data-value">966</view>
				<view class="data-name">财务公开</view>
			</view>
		</view>
		<view class="content-box" v-for="(outItem, outIndex) in list" :key="outIndex">
			<view class="title-box uni-flex">
				<view class="title">{{outItem.title}}</view>
				<view class="more uni-flex" @click="pageToMore(outIndex)">
					<text>更多</text>
					<uni-icons type="arrowright" size="12" color="#aaa"></uni-icons>
				</view>
			</view>
			<view class="list">
				<view class="list-item uni-flex" v-for="(item, index) in outItem.list" :key="index" @click="pageToDetail">
					<image class="list-item-img" src="/static/image/tabs/logo.png"></image>
					<view class="list-item-info uni-flex uni-column">
						<view class="list-item-title">标题文字</view>
						<view class="list-item-desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					title: '政策公开',
					list: [1, 1, 1, 1, 1]
				}, {
					title: '政务公开',
					list: [1, 1, 1, 1, 1]
				}, {
					title: '财务公开',
					list: [1, 1, 1, 1, 1]
				}]
			};
		},
		methods:{
			pageToMore(index) {
				uni.navigateTo({
					url:`/pages/workbench/govern/governmentAffairs/allList?type=${index}`
				})
			},
			pageToDetail() {
				uni.navigateTo({
					url:'/pages/workbench/announcement/announcementDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.government-affairs {
		padding: 20rpx 32rpx 100rpx;
		.content-box {
			border-radius: 10rpx;
			overflow: hidden;
			background: #FFFFFF;
			padding: 0 32rpx;
			& + .content-box{
				margin-top: 20rpx;
			}
			&.top-box{
				justify-content: space-around;
				padding: 0;
			}
			.data-item {
				flex: 1;
				text-align: center;
				padding: 38rpx 0;
				.data-value {
					font-size: 48rpx;
					color: #666;
					font-weight: bold;
					line-height: 64rpx;
				}

				.data-name {
					font-size: 28rpx;
					color: #999;
					line-height: 56rpx;
				}
			}

			.title-box {
				justify-content: space-between;
				align-items: center;
				.title {
					line-height: 88rpx;
					font-size: 32rpx;
					color: #333;
					font-weight: bold;
				}

				.more {
					align-items: center;
					color: #aaa;
					font-size: 22rpx;
					line-height: 44rpx;
					padding-left: 30rpx;
					text{
						margin-right: 4rpx;
					}
				}
			}

			.list {
				.list-item {
					padding: 20rpx 0;
					& + .list-item{
						border-top: 2rpx solid #F5F5F5;
					}
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

		}

	}
</style>
