<template>
	<view class="add-plant-info">
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">养殖动物名称</text>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">养殖数量</text>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">养殖类型</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" @change="typePickerChange" :value="typeIndex" :range="typeList">
					<view class="uni-input">{{typeList[typeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">养殖年份</text>
			</view>
			<view class="value-box uni-flex">
				<picker class="pick" mode="date" :value="date" :start="startDate" :end="endDate"
					@change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">养殖单位</text>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">年产值</text>
			</view>
			<view class="value-box uni-flex">
				<input class="input" type="text" value="请填写" />
				<text class="unit">万元</text>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">价格区间</text>
			</view>
			<view class="value-box uni-flex">
				<input class="input" type="text" value="请输入" />
				<text class="unit">元/市斤</text>
				<text class="rung">—</text>
				<input class="input" type="text" value="请输入" />
				<text class="unit">元/市斤</text>
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">关联合作社</text>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">产品去向</text>
			</view>
			<view class="value-box uni-flex" v-for="(item, index) in whereList" :key="index">
				<view class="pick uni-flex">
					<picker @change="pickerChange" :id="index" :value="item.index" :range="list">
						<view class="uni-input">{{list[item.index]}}</view>
					</picker>
					<uni-icons type="arrowright" color="#999"></uni-icons>
				</view>
				<input class="input" type="text" value="请填写" />
				<text class="unit">吨</text>
			</view>
		</view>
		<view class="add-box">
			<view class="add-btn" @click="addWhere">
				+添加去向
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="txt">备注</text>
			</view>
			<view class="value-box uni-flex">
				<textarea value="" placeholder="请填写" />
			</view>
		</view>



		<view v-if="id" class="btn-box uni-flex">
			<view class="delete-info uni-flex uni-column" @click="deleteInfo">
				<uni-icons type="trash" color="#aaa"></uni-icons>
				<text>删除信息</text>
			</view>
			<view class="modify-info uni-flex" @click="save">
				<uni-icons type="trash" color="#fff"></uni-icons>
				<text>保存</text>
			</view>
		</view>
		<view v-else class="cus-fixed-footer-btn-box">
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				list: ['请选择类型', '类型3', '类型2', '类型1'],
				typeList: ['请选择类型', '类型3', '类型2', '类型1'],
				typeIndex: 0,
				date: currentDate,
				id: '',
				whereList: [{
					index: 0
				}]
			};
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id || ''
			if (this.id) uni.setNavigationBarTitle({
				title: '修改养殖信息'
			})

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
			addWhere() {
				this.whereList.push({
					index: 0
				})
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			typePickerChange: function(e) {
				this.typeIndex = e.target.value
			},
			pickerChange: function(e) {
				this.index = e.target.value
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
			},
			deleteInfo() {
				customToast({
					title: '删除成功',
					hide: () => {
						uni.navigateBack()
					}
				})
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
			border-top: 2rpx solid #f5f5f5;
			box-sizing: border-box;
			height: 126rpx;

			.delete-info {
				width: 220rpx;
				flex: none;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
				color: #AAAAAA;
			}

			.modify-info {
				flex: 1;
				align-items: center;
				justify-content: center;
				background: #3b8bec;
				color: #fff;

				text {
					margin-left: 8rpx;
				}
			}
		}
	}
</style>
