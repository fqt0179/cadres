<template>
	<view class="notice">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="pageToDetail">
				<view class="top-box uni-flex">
					<view class="title">xxxx标题</view>
					<view class="status" :class="{active: item}">{{item?'已读':'未读'}}</view>
				</view>
				<view class="item-det">
					客户关系长期持久，源于让客户感受到价值和重要，是非常有利可图的。满足并保留您的客户群，确保未来获得丰厚的收入和利润。
				</view>
				<view class="bottom-box uni-flex">
					<view class="time uni-flex">
						<uni-icons type="person"></uni-icons>
						<text>202100306</text>
					</view>
					<view class="btn"><text>阅读原文</text>
						<uni-icons type="arrowright" size="12" color="#999"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<uni-fab @fabClick="pageToAdd" horizontal='right'></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1]
			};
		},
		methods:{
			pageToAdd() {
				uni.navigateTo({
					url: '/pages/workbench/work/notice/addNoticeFirst'
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
	.notice {
		.list {
			padding: 10rpx 32rpx 0;

			.item {
				box-shadow: 0 0 20rpx rbga(0, 0, 0, 0.05);
				background: #fff;
				border-radius: 4rpx;
				padding: 0 32rpx;

				&+.item {
					margin-top: 20rpx;
				}

				.top-box {
					justify-content: space-between;
					align-items: center;
					// border-bottom: 2rpx solid #f5f5f5;
					height: 80rpx;

					.title {
						font-size: 26rpx;
						color: #333;
						font-weight: bold;
						border-left: 10rpx solid #0079fe;
						padding-left: 10rpx;
					}

					.status {
						font-size: 26rpx;
						color: #666;
						position: relative;

						&::before {
							content: '';
							position: absolute;
							top: calc(50% + 2rpx);
							left: -22rpx;
							transform: translateY(-50%);
							width: 14rpx;
							height: 14rpx;
							border-radius: 50%;
							background: #F95E5A;
						}

						&.active::before {
							background: #4BD863;
						}
					}
				}

				.item-det {
					padding: 20rpx 0;
					border-bottom: 2rpx solid #f5f5f5;
					font-size: 24rpx;
					color: #333;
				}

				.bottom-box {
					justify-content: space-between;
					align-items: center;

					.time {
						font-size: 24rpx;
						color: #333;
						align-items: center;

						text {
							margin-left: 8rpx;
						}
					}

					.btn {
						font-size: 24rpx;
						color: #999;
						line-height: 60rpx;
						margin: 14rpx 0;

						text {
							margin-right: 6rpx;
						}
					}
				}

			}

		}
	}
</style>
