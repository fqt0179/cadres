<template>
	<view class="one-step">
		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">标题</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">活动描述</view>
			</view>
			<view class="value-box">
				<textarea :maxlength="-1" class="text-area" value="" placeholder="请输入活动描述" />
			</view>
		</view>

		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">现场照片</view>
			</view>
			<view class="value-box upload-img">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">上传附件</view>
			</view>
			<view class="value-box upload-img">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="next">下一步(1/2)</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			next() {
				uni.navigateTo({
					url:'/pages/workbench/govern/partyActivities/addActivitiesConfirm'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.one-step {
		padding-bottom: 180rpx;
		width: 100%;
		min-height: 100%;

		.title {
			height: 100rpx;
			border-bottom: 2rpx solid #F5F5F5;
		}



		.item {
			background: #fff;
			border-bottom: 1rpx solid #F7F7F7;
			padding: 0 32rpx;

			&.specail {
				margin-bottom: 20rpx;
			}



			.label {
				align-items: center;

				.important-tip {
					color: #f00;
				}

				.item-title {
					font-size: 28rpx;
					color: #555;
					line-height: 88rpx;
					margin-left: 8rpx;
				}
			}

			.value-box {
				justify-content: space-between;
				align-items: center;

				&.upload-img {
					margin-bottom: 50rpx;
				}

				.text-area {
					width: 686rpx;
				}

				.input {
					height: 72rpx;
					font-size: 32rpx;

					&.address-input {
						margin: 10rpx 0;
					}
				}

			}
		}
	}
</style>
