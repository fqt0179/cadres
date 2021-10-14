<template>
	<view class="audit-poverty-info">
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">贫困编号</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">致贫原因</text>
			</view>
			<view class="value">
				<picker @change="causePickerChange" :value="causeIndex" :range="causeList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="causeList[causeIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">家庭人数</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">贫困户属性</text>
			</view>
			<view class="value">
				<picker @change="attrPickerChange" :value="attrIndex" :range="attrList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="attrList[attrIndex]" placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="title-box">
			<view class="title">生产生活条件</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">家庭年均收入</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">饮水是否困难</text>
			</view>
			<view class="value">
				<picker @change="waterPickerChange" :value="waterIndex" :range="waterList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="waterList[waterIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">饮水是否安全</text>
			</view>
			<view class="value">
				<picker @change="safePickerChange" :value="safeIndex" :range="safeList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="safeList[safeIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">是否通电</text>
			</view>
			<view class="value">
				<picker @change="electricityPickerChange" :value="electricityIndex" :range="electricityList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="electricityList[electricityIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">距离主干路距离</text>
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
				causeList: ['地震', '第二产业', '第三产业', '新兴产业'],
				causeIndex: '',
				attrList: ['地震', '第二产业', '第三产业', '新兴产业'],
				attrIndex: '',
				waterList: ['是', '否'],
				waterIndex: '',
				safeList: ['是', '否'],
				safeIndex: '',
				electricityList: ['是', '否'],
				electricityIndex: '',
			};
		},
		methods: {
			causePickerChange(e) {
				let index = e.target.value
				this.causeIndex = index
			},
			attrPickerChange(e) {
				let index = e.target.value
				this.attrIndex = index
			},
			waterPickerChange(e) {
				let index = e.target.value
				this.waterIndex = index
			},
			safePickerChange(e) {
				let index = e.target.value
				this.safeIndex = index
			},
			electricityPickerChange(e) {
				let index = e.target.value
				this.electricityIndex = index
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
	.audit-poverty-info {
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

		.title-box {
			padding: 28rpx 32rpx;

			.title {
				box-sizing: border-box;
				padding-left: 24rpx;
				font-size: 32rpx;
				color: #333;
				line-height: 44rpx;
				border-left: 10rpx solid #409eff;
				font-weight: bold;
			}
		}

	}
</style>
