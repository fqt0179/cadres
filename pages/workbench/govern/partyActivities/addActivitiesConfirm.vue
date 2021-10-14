<template>
	<view class="last-step">
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">所属地区</text>
			</view>
			<view class="value">
				<picker @change="areaPickerChange" :value="areaIndex" :range="areaList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="areaList[areaIndex]" placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>

		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">所属党组织</text>
			</view>
			<view class="value">
				<picker @change="organizationPickerChange" :value="organizationIndex" :range="organizationList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="organizationList[organizationIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">活动类型</text>
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
				<text class="label-txt">活动时间</text>
			</view>
			<view class="value">
				<uni-datetime-picker class="time-picker" type="date" v-model="datetimesingle" @change="changeLog"
					:border="false">
					<view class="date-box">
						123
					</view>
				</uni-datetime-picker>
				<!-- <picker @change="typePickerChange" :value="typeIndex" :range="typeList"> -->
				<view class="uni-flex">
					<input class="cus-input" disabled type="text" :value="datetimesingle" placeholder="请选择" />
					<uni-icons type="arrowright" color="#666"></uni-icons>
				</view>
				<!-- </picker> -->
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">活动地点</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">参加人数</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="save">记录活动</button>
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
				areaList: ['公共设施', '自然资源', '商业资源', '特色资源', '其他资源'],
				areaIndex: '',
				organizationList: ['公共设施', '自然资源', '商业资源', '特色资源', '其他资源'],
				organizationIndex: '',
				datetimesingle: ''
			};
		},
		methods: {
			typePickerChange(e) {
				this.typeIndex = e.target.value
			},
			areaPickerChange(e) {
				this.areaIndex = e.target.value
			},
			organizationPickerChange(e) {
				this.organizationIndex = e.target.value
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
		}
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
				position: relative;

				.time-picker {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					// background: red;
					z-index: 99;

					.date-box {
						opacity: 0;
					}
				}

			}

		}
	}
</style>
