<template>
	<view class="add-docmentary">
		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">工作主题</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">工作描述</view>
			</view>
			<view class="value-box">
				<textarea value="" placeholder="请填写事件详细内容" />
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


		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">工作类型</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<view class="item-title">责任人</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<view class="item-title">参与人</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>

		<view class="item">
			<view class="label uni-flex">
				<view class="item-title">发布人</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">上报人</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<view class="item-title">上报位置</view>
			</view>
			<view class="value-box">
				<map class="map" latitude="" longitude=""></map>
				<input class="input address-input" type="text" value="" placeholder="请填写详细地址" />
			</view>
		</view>
		<view class="btn-box">
			<button type="primary" @click="doSubmit">发布</button>
		</view>
	</view>
</template>

<script>
	import {
		customToast
	} from '../../../../common/common.js'
	export default {
		data() {
			return {
				imageValue: []
			};
		},
		methods: {
			doSubmit() {
				customToast({
					title: '发布成功',
					hide: () => {
						uni.navigateBack()
					}
				})
			},

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
			}
		},
	}
</script>

<style lang="scss" scoped>
	.add-docmentary {
		padding-bottom: 180rpx;

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
				&.upload-img {
					margin-bottom: 50rpx;
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

		.btn-box {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			box-sizing: border-box;
			padding: 20rpx 32rpx;
			background: #fff;
		}
	}
</style>
