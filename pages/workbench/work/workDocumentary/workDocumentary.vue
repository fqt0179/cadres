<template>
	<view class="work-docmentary">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="pageToDetail">
				<view class="title">
					2021年9月10日上报
				</view>
				<view class="desc">测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</view>
				<view class="item-bottom uni-flex">
					<view class="people">上报人：张三</view>
					<view class="btn">查看详情</view>
				</view>
			</view>
		</view>
		<uni-fab @fabClick="addDocmentary" horizontal='right'></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1, 1]
			};
		},
		methods:{
			pageToDetail() {
				uni.navigateTo({
					url: '/pages/workbench/work/workDocumentary/details'
				})
			},
			addDocmentary() {
				uni.navigateTo({
					url:'/pages/workbench/work/workDocumentary/addDocmentary'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.work-docmentary {
		.list {
			.item {
				padding: 32rpx;
				background: #fff;

				&+.item {
					margin-top: 20rpx;

				}

				.title {
					font-size: 32rpx;
					color: #333;
					font-weight: bold;
				}

				.desc {
					font-size: 26rpx;
					color: #999;
					line-height: 48rpx;
					margin: 20rpx 0;
				}

				.item-bottom {
					justify-content: space-between;
					align-items: center;

					.people {
						font-size: 24rpx;
						color: #999;
					}

					.btn {
						border: 1rpx solid #999;
						width: 160rpx;
						height: 50rpx;
						line-height: 48rpx;
						text-align: center;
						color: #999;
						font-size: 24rpx;
						border-radius: 25rpx;
					}
				}
			}


		}
	}
</style>
