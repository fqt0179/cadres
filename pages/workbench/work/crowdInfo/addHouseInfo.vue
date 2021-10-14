<template>
	<view class="add-plant-info">
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">房主</text>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">归属情况</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" @change="typePickerChange" :value="typeIndex" :range="typeList">
					<view class="uni-input">{{typeList[typeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">选择县区</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" @change="areaPickerChange" :value="areaIndex" :range="areaList">
					<view class="uni-input">{{areaList[areaIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>

		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">详细地址</text>
			</view>
			<view class="value-box uni-flex" @click="chooseLocation">
				<view class="choose-value">
					{{location.address || '请选择'}}
				</view>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">房屋类型</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" @change="houseTypePickerChange" :value="houseTypeIndex" :range="houseTypeList">
					<view class="uni-input">{{houseTypeList[houseTypeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>

		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="txt">房屋面积</text>
			</view>
			<view class="value-box uni-flex">
				<input class="input" type="text" value="请填写" />
				<text class="unit">㎡</text>
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">建房时间</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" mode="date" :value="date" :start="startDate" :end="endDate"
					@change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>

		<view class="btn-box">
			<button type="primary">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				list: ['请选择类型', '类型3', '类型2', '类型1'],
				typeList: ['请选择类型', '类型3', '类型2', '类型1'],
				index: 0,
				areaList: ['请选择类型', '类型3', '类型2', '类型1'],
				houseTypeList: ['请选择类型', '类型3', '类型2', '类型1'],
				areaIndex: 0,
				houseTypeIndex: 0,
				typeIndex: 0,
				date: currentDate,
				areaArray: [],
				location: {}
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			typePickerChange: function(e) {
				this.typeIndex = e.target.value
			},
			areaPickerChange: function(e) {
				this.areaIndex = e.target.value
			},
			houseTypePickerChange: function(e) {
				this.houseTypeIndex = e.target.value
			},
			pickerChange: function(e) {
				this.index = e.target.value
			},
			chooseLocation() {
				uni.chooseLocation({
					success: (res) => {
						console.log(res)
						this.location = res
					}
				})
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}

	}
</script>

<style lang="scss" scoped>
	.add-plant-info {
		padding-bottom: 180rpx;

		.item {
			padding: 10rpx 32rpx 0;
			background: #fff;

			&.specail {
				margin-bottom: 20rpx;
			}

			.label {
				align-items: center;

				.important-mark {
					color: #f00;
				}

				.txt {
					font-size: 28rpx;
					color: #555;
					line-height: 56rpx;
				}
			}

			.value-box {
				border-bottom: 2rpx solid #efefef;
				justify-content: space-between;
				align-items: center;

				.input {
					height: 88rpx;
					flex: 1;
				}

				.choose-value {
					height: 88rpx;
					flex: 1;
					line-height: 88rpx;
				}

				.unit {
					font-size: 28rpx;
					color: #333;
				}

				.rung {
					color: #999;
				}

				.pick {
					flex: 1;
					justify-content: space-between;
					align-items: center;
				}
			}
		}

		.add-box {
			background: #f5f5f5;
			padding: 20rpx 44rpx;
		}

		.add-btn {
			border: 2rpx dashed #999;
			text-align: center;
			line-height: 80rpx;
		}

		.btn-box {
			box-sizing: border-box;
			background: #fff;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			padding: 20rpx 32rpx;
		}
	}
</style>
