<template>
	<view class="party-list">
		<view class="top-box">
			<uni-search-bar class="search" :radius="100" @confirm="search" @input="input" placeholder="请输入姓名/手机号" />
			<view class="current-mesher">
				<text>网格：xxxxx网格</text>
				<text>切换</text>
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="base-info uni-flex">
					<view class="avatar-box">
						<image src="/static/image/tabs/logo.png" class="avatar" />
						<view class="icon-box uni-flex">
							<uni-icons type="qq" color="#fff"></uni-icons>
						</view>
					</view>
					<view class="info uni-flex uni-column">
						<view class="name-info uni-flex">
							<view class="name">
								张三
							</view>
							<view class="gender">
								男
							</view>
						</view>
						<view class="mark-box uni-flex">
							<view class="mark">
								常住人口
							</view>
							<view class="btn-box uni-flex">
								<view class="btn" @click="pageTo(1)">
									修改
								</view>
								<view class="btn" @click="deleteVillager">
									删除
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<uni-fab @fabClick="pageTo" horizontal="right"></uni-fab>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list: [1, 1, 1, 1, 1, 1, 1, 1]
			};
		},
		methods: {
			pageTo(id) {
				uni.navigateTo({
					url: '/pages/workbench/govern/mesher/addVillager?id=' + id
				})
			},
			deleteVillager() {
				uni.showModal({
					title: '提示',
					content: '是否确认删除该村民?',
					success: (res) => {
						if(res.confirm) {
							uni.showToast({
								title: '删除成功',
								icon: 'none'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.party-list {
		padding-top: 168rpx;

		.top-box {
			width: 100%;
			box-sizing: border-box;
			z-index: 9;
			position: fixed;
			top: 88rpx;
			background: #fff;
			padding: 0 16rpx;
			align-items: center;
			justify-content: center;

			.current-mesher {
				padding: 0 8px;
				line-height: 72rpx;
				font-size: 28rpx;
				color: #7f7f7f;

				text {
					display: inline-block;

					&+text {
						margin-left: 10rpx;
						color: #3C8BEC;
					}
				}
			}

		}

		.list {
			margin-top: 20rpx;
			background: #fff;
			padding: 0 32rpx;
			border-radius: 16rpx 16rpx 0 0;

			.item {
				padding: 32rpx 0;
				position: relative;
				overflow: hidden;

				&+.item {
					border-top: 2rpx solid #F7F7F7;
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
								color: #F59A23;
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

							.btn-box {
								.btn {
									width: 104rpx;
									height: 44rpx;
									line-height: 44rpx;
									text-align: center;
									background: #f59a23;
									border-radius: 10rpx;
									font-size: 22rpx;
									color: #fff;
									& + .btn{
										background: #d9001b;
										margin-left: 16rpx;
									}
								}
							}

						}
					}

				}
			}

		}
	}
</style>
