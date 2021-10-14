<template>
	<view class="list">
		<view class="list-item" v-for="(item,index) in list" :key="index" @click="pageToAudit">
			<view class="item-title">标题标题标题</view>
			<view class="time">2021年9月21日</view>
			<view class="item-bottom uni-flex">
				<view class="persona">发布人：张三</view>
				<view class="btn">审核</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1, 1, 1, 1, 1]
			};
		},
		methods:{
			pageToAudit() {
				uni.navigateTo({
					url: "/pages/workbench/announcement/audit"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body{
		background: #fff !important;
	}
	.list {
		padding: 0 32rpx;
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
				}
			}
		}
	}
</style>
