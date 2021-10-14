<template>
	<view class="deal-with">
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<view class="item-title">事件描述</view>
			</view>
			<view class="value-box">
				<textarea value="" placeholder="请填写事件详细内容" />
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">相关照片</view>
			</view>
			<view class="value-box upload-img">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
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
				imageValue: [],
			};
		},
		methods: {
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			save() {
				customToast({
					title: '保存成功',
					hide: () => {
						uni.navigateBack({
							delta: 2
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.deal-with {
		padding-bottom: 180rpx;

		.item {
			background: #fff;
			border-bottom: 1rpx solid #F7F7F7;
			padding: 0 32rpx;

			.label {
				align-items: center;

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
			}


		}
	}
</style>
