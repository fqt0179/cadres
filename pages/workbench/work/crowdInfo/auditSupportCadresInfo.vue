<template>
	<view class="support">
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">帮扶干部姓名</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">帮扶干部身份证</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">帮扶干部电话</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">帮扶单位名称</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="save">保存</button>
		</view>
	</view>
</template>

<script>
	import {
		customToast
	} from '@/common/common.js'
	export default {
		data() {
			return {

			};
		},
		methods: {
			save() {
				customToast({
					title: '保存成功',
					hide: () => {
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.support {
		padding-bottom: 192rpx;

		.item {
			position: relative;
			background: #fff;
			padding: 0 32rpx;

			&.segmentation {
				margin-bottom: 20rpx;
			}


			.label {
				font-size: 28rpx;
				color: #555;
				align-items: center;
				line-height: 72rpx;
				border-top: 1rpx solid #eee;
			}


			.value {
				align-items: center;
				justify-content: space-between;
				font-size: 32rpx;
				color: #000;
				line-height: 88rpx;
				overflow: hidden;
			}

		}
	}
</style>
