<template>
	<view class="villager">
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">姓名</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">手机号</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">岗位</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item ">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">是否负责人</text>
			</view>
			<view class="value">
				<picker @change="pickerChange" :value="index" :range="list">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="list[index]" placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" class="btn" @click="save">保存</button>
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
				list: ['是', '否'],
				index: '',
				id: ''
			};
		},
		onLoad(option) {
			this.id = option.id || ''
			if (this.id) uni.setNavigationBarTitle({
				title: '修改村民信息'
			})
		},
		methods: {
			pickerChange(e) {
				this.index = e.target.value
			},
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
	.villager {
		padding-bottom: 192rpx;

		.item {
			position: relative;
			background: #fff;
			padding: 0 32rpx;


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
		.cus-fixed-footer-btn-box{
			.btn{
				font-size: 32rpx;
			}
		}
	}
</style>
