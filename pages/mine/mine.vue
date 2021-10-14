<template>
	<view class="mine">
		<view class="mine-top uni-flex">
			<image src="../../static/image/tabs/logo.png" class="avatar"></image>
			<view class="user-base-info">
				<view class="name">
					张三
				</view>
				<view class="address">
					昆明市>官渡区>asd
				</view>
			</view>
			<view class="toogle-btn">
				切换角色
			</view>

		</view>
		<view class="det-info">
			<view class="info-cell">性别：男</view>
			<view class="info-cell">电话：18888888888</view>
			<view class="info-cell">岗位：村支书</view>
		</view>

		<button class="logout" type="primary" plain="true">退出登录</button>
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
	.mine {
		padding: 32rpx 32rpx 0;

		.mine-top {
			align-items: center;
			margin-bottom: 32rpx;

			.avatar {
				width: 96rpx;
				height: 96rpx;
				border-radius: 50%;
				background: #eee;
				margin-right: 20rpx;
				flex: none;
			}

			.user-base-info {
				flex: 1;

				.name {
					font-size: 28rpx;
					color: #666;
					font-weight: bold;
				}

				.address {
					font-size: 24rpx;
					color: #aaa;
					margin-top: 8rpx;
				}
			}



			.toogle-btn {
				width: 144rpx;
				height: 50rpx;
				border-radius: 25rpx;
				border: 1rpx solid #FF9900;
				line-height: 48rpx;
				text-align: center;
				font-size: 24rpx;
				color: #FF9900;
			}
		}

		.det-info {
			.info-cell {
				font-size: 24rpx;
				color: #7f7f7f;
				line-height: 44rpx;
			}
		}

		.logout {
			position: fixed;
			bottom: 200rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 686rpx;
		}
	}
</style>
