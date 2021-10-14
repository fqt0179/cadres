<template>
	<view class="letter">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="pageToDetail">
				<view class="top-box uni-flex">
					<view class="up-people">上报人</view>
					<view class="status">待处理</view>
				</view>
				<view class="item-det">
					<view class="cell">
						<text class="label">事件类型：</text>
						<text class="value">xxxxxxxxxxxxxxxxxxx</text>
					</view>
					<view class="cell">
						<text class="label">事件详情：</text>
						<text class="value">xxxxxxxxxxxxxxxxxxx建行卡季后赛得分嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻ask决定恢复</text>
					</view>
				</view>
				<view class="bottom-box uni-flex">
					<view class="time">上报时间：202100306</view>
					<view class="btn">查看详情</view>
				</view>
			</view>
		</view>
		<uni-fab @fabClick="addLetter" horizontal='right'></uni-fab>
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
			addLetter() {
				uni.navigateTo({
					url:"/pages/workbench/work/letters/addLetter"
				})
			},
			pageToDetail() {
				uni.navigateTo({
					url:"/pages/workbench/work/letters/letterDetail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.letter {
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
					border-bottom: 2rpx solid #f5f5f5;

					.up-people {
						font-size: 24rpx;
						color: #999;
						line-height: 80rpx;
					}

					.status {
						font-size: 26rpx;
						color: #f90;
					}
				}

				.item-det {
					padding: 16rpx 0;
					border-bottom: 2rpx solid #f5f5f5;

					.cell {
						line-height: 40rpx;

						.label {
							font-size: 28rpx;
							color: #AAAAAA;
						}

						.value {
							font-size: 28rpx;
							color: #333;
						}
					}


				}

				.bottom-box {
					justify-content: space-between;
					align-items: center;

					.time {
						font-size: 24rpx;
						color: #333;
					}

					.btn {
						font-size: 24rpx;
						color: #333;
						width: 160rpx;
						height: 60rpx;
						border-radius: 30rpx;
						text-align: center;
						line-height: 58rpx;
						border: 1rpx solid #e4e4e4;
						margin: 14rpx 0;
					}
				}

			}

		}

	}
</style>
