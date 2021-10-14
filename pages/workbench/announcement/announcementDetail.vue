<template>
	<view class="detail">
		<view class="title">
			2020年保山市昌宁县公益性特岗招募公告
		</view>
		<view class="time-box uni-flex">
			<view class="time">
				<uni-icons type="circle"></uni-icons>
				<text>2021-09-19</text>
			</view>
			<view class="look-num">
				<uni-icons type="eye"></uni-icons>
				<text>900</text>
			</view>
		</view>
		<rich-text :nodes="strings"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				strings: '<div>asdfajnsdnk暗暗的爱美女士的佛噶计划是多么那块是大家的部分金卡要围绕金卡和史蒂夫ask的腐败了 吧g src="https://bjetxgzv</div>'
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body{
		background: #fff !important;
	}
	.detail {
		padding: 10rpx 32rpx 32rpx;

		.title {
			border-left: 10rpx solid #0079fe;
			padding-left: 16rpx;
		}

		.time-box {
			font-size: 28rpx;
			color: #999;
			margin: 24rpx 0 30rpx;
			.look-num{
				margin-left: 26rpx;
			}
			text{
				margin-left: 10rpx;
			}
		}

	}
</style>
