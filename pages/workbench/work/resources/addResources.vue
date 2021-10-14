<template>
	<view class="add-resources">
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">资源类型</text>
			</view>
			<view class="value">
				<picker @change="typePickerChange" :value="typeIndex" :range="typeList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="typeList[typeIndex]" placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">资源名称</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">分类</text>
			</view>
			<view class="value">
				<picker @change="classifyPickerChange" :value="classifyIndex" :range="classifyList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="classifyList[classifyIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view v-if="typeIndex === 2" class="item">
			<view class="label uni-flex">
				<text class="label-txt">产值</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">万元</text>
			</view>
		</view>
		<view v-if="typeIndex === 2" class="item">
			<view class="label uni-flex">
				<text class="label-txt">带动就业人数</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">人</text>
			</view>
		</view>
		<view v-if="typeIndex === 2" class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">企业性质</text>
			</view>
			<view class="value">
				<picker @change="naturePickerChange" :value="natureIndex" :range="natureList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="natureList[natureIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">{{typeIndex === 2?'联系人':'监管人/联系人'}}</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">联系电话</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="label-txt">详细地址</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">所处位置</text>
			</view>
			<view class="value uni-flex" @click="openLocation">
				<input disabled class="cus-input" type="text" :value="location" placeholder="请选择" />
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="label-txt">资源简介</text>
			</view>
			<view class="value">
				<textarea value="" placeholder="请填写资源简介" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="label-txt">资源图片</text>
			</view>
			<view class="value">
				<uni-file-picker class="up-load" v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="save">发布</button>
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
				typeList: ['公共设施', '自然资源', '商业资源', '特色资源', '其他资源'],
				typeIndex: '',
				classifyList: ['公共设施', '自然资源', '商业资源', '特色资源', '其他资源'],
				classifyIndex: '',
				natureList: ['公共设施', '自然资源', '商业资源', '特色资源', '其他资源'],
				natureIndex: '',
				location: '',
				imageValue: [],
			};
		},
		methods: {
			typePickerChange(e) {
				this.typeIndex = e.target.value
			},
			classifyPickerChange(e) {
				this.classifyIndex = e.target.value
			},
			naturePickerChange(e) {
				this.natureIndex = e.target.value
			},
			openLocation() {
				uni.chooseLocation({
					success: (res) => {
						this.location = res.address
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
			},
			save() {
				customToast({
					title: '发布成功',
					hide: () => {
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-resources {
		padding-bottom: 192rpx;

		.item {
			position: relative;
			background: #fff;
			padding: 0 32rpx;

			&.segmentation {
				margin-bottom: 20rpx;
			}

			&.item-avatar-box {
				justify-content: space-between;
				align-items: center;
			}

			.label {
				font-size: 28rpx;
				color: #555;
				align-items: center;
				line-height: 72rpx;
				border-top: 1rpx solid #eee;
			}

			.up-load-avatar {
				position: absolute;
				width: 100%;
				height: 72rpx;
				left: 0;
				bottom: 0;
				opacity: 0;
			}

			.value {
				align-items: center;
				justify-content: space-between;
				font-size: 32rpx;
				color: #000;
				line-height: 88rpx;
				overflow: hidden;

				.up-load {
					margin: 20rpx 0 32rpx;
				}


				&.upload-avatar {
					position: relative;
					justify-content: flex-start;

				}

				&.no-upload {
					position: relative;
					font-size: 28rpx;


					.text {
						color: #F59A23;
						margin-left: 12rpx;
						display: inline-block;
					}
				}

				&.avatar-box {
					align-items: center;
				}

				.avatar {
					width: 76rpx;
					height: 76rpx;
					margin: 10rpx 10rpx 10rpx 0;
					border-radius: 50%;
				}

				.unit {
					font-size: 28rpx;
					color: #333;
				}
			}

		}
	}
</style>
