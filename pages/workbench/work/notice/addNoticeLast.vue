<template>
	<view class="last-step">
		<view class="item">
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
				<text class="label-txt">发布人员</text>
			</view>
			<view class="value">
				<input class="cus-input" disabled type="text" :value="'张三'" placeholder="请选择" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">审核人员</text>
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
				<text class="label-txt">是否短信通知</text>
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
				<text class="label-txt">接收人员</text>
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
			};
		},
		methods: {
			typePickerChange(e) {
				this.typeIndex = e.target.value
			},
			save() {
				customToast({
					title: '发布成功',
					hide: () => {
						uni.navigateBack({
							delta: 2
						})
					}
				})
			}

		},
	}
</script>

<style lang="scss" scoped>
	.last-step {
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
