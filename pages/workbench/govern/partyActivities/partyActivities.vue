<template>
	<view class="party-activities">
		<view class="list">
			<view class="item" v-for="(item, index) in list" :key="index" @click="pageToDetail">
				<image class="item-img" src="/static/image/tabs/logo.png"></image>
				<view class="title">
					党小组会议将于2021年9月15日召开
				</view>
				<view class="time-box uni-flex">
					<uni-icons type="person" color="#aaa"></uni-icons>
					<view class="time">
						2021-02-03
					</view>
				</view>
			</view>
		</view>
		<uni-fab @fabClick="addActivity" horizontal='right'></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1]
			};
		},
		methods: {
			addActivity() {
				uni.navigateTo({
					url: "/pages/workbench/govern/partyActivities/addActivities"
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
	.party-activities {
		.list {
			padding: 20rpx 32rpx 0;

			.item {
				padding: 0 0 32rpx 0;
				background: #FFFFFF;
				border-radius: 20rpx;
				overflow: hidden;

				&+.item {
					margin-top: 30rpx;
				}

				.item-img {
					width: 100%;
					height: 360rpx;
				}

				.title {
					padding: 0 32rpx;
					font-size: 36rpx;
					color: #333333;
					font-weight: bold;
					line-height: 88rpx;
				}

				.time-box {
					padding: 0 32rpx;
					align-items: center;

					.time {
						margin-left: 8rpx;
						font-size: 28rpx;
						color: #AAAAAA;
						line-height: 48rpx;
					}
				}

			}

		}

	}
</style>
