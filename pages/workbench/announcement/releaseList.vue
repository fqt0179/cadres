<template>
	<view class="release-list">
		<view class="tabs uni-flex">
			<view class="tab-item" :class="{active: tabCurrent === 0}" @click="tabClick(0)">全部</view>
			<view class="tab-item" :class="{active: tabCurrent === 1}" @click="tabClick(1)">审核中</view>
			<view class="tab-item" :class="{active: tabCurrent === 2}" @click="tabClick(2)">已发布</view>
			<view class="tab-item" :class="{active: tabCurrent === 3}" @click="tabClick(3)">已退回</view>
		</view>
		<view class="audit-list">
			<view class="list-item" v-for="(item,index) in list" :key="index" @click="pageToAudit">
				<view class="item-title">标题标题标题</view>
				<view class="time">2021年9月21日</view>
				<view class="item-bottom uni-flex">
					<view class="persona">审核人：张三</view>
					<view v-if="item === 0" class="audit-status">审核中</view>
					<view v-if="item === 1" class="audit-status success">已发布</view>
					<view v-if="item === 2" class="audit-status fail">已退回</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 0, 1, 1, 2, 1, 1, 1],
				tabCurrent: 0
			};
		},
		methods:{
			tabClick(index) {
				this.tabCurrent = index
			},
		
			pageToAudit() {
				uni.navigateTo({
					url: "/pages/workbench/announcement/audit"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		background: #fff !important;
	}

	.release-list {
		.tabs {
			position: fixed;
			top: env(safe-area-inset-top);
			left: 0;
			background: #fff;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #eee;

			.tab-item {
				font-size: 26rpx;
				color: #ccc;
				font-weight: bold;
				width: 190rpx;
				line-height: 96rpx;
				text-align: center;
				box-sizing: border-box;
				border-bottom: 4rpx solid transparent;

				&.active {
					color: #0079fe;
					border-bottom: 4rpx solid #0079fe;
				}
			}
		}

		.audit-list {
			padding: 110rpx 32rpx 0;

			.list-item {
				padding: 26rpx 0 26rpx 10rpx;

				&+.list-item {
					border-top: 1rpx solid #efefef;

				}

				.item-title {
					font-size: 32rpx;
					color: #333;
					font-weight: bold;
				}

				.time {
					font-size: 24rpx;
					color: #7f7f7f;
					margin: 20rpx 0 16rpx;
				}

				.item-bottom {
					justify-content: space-between;
					align-items: center;

					.persona {
						font-size: 24rpx;
						color: #7f7f7f
					}

					.btn {
						width: 128rpx;
						height: 44rpx;
						color: #fff;
						font-size: 24rpx;
						background: #f59a23;
						border-radius: 10rpx;
						line-height: 44rpx;
						text-align: center;
					}

					.audit-status {
						font-size: 24rpx;
						color: #F59A23;
						line-height: 44rpx;

						&.success {
							color: #70B603;
						}

						&.fail {
							color: #D9001B;
						}
					}
				}
			}

		}
	}
</style>
