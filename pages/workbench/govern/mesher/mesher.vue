<template>
	<view class="map">
		<map :style="{width: '750rpx', height: height + 'px'}" latitude="" longitude=""></map>
		<view class="top-box uni-flex">
			<view class="address-box uni-flex">
				<view class="address-name">金鸡村</view>
				<uni-icons type="arrowdown" color="#666"></uni-icons>
			</view>
			<view class="search-box uni-flex">
				<uni-icons type="search" size="18"></uni-icons>
				<input class="input" confirm-type="search" v-model="searchValue" type="text" :value="searchValue"
					placeholder="请输入网格名称" />
			</view>
			<view v-if="searchValue" class="cancel">
				取消
			</view>
		</view>
		<button style="position: fixed;top: 200rpx;left: 0;width: 100%;z-index: 999;" @click="open"
			type="primary">popup</button>
		<uni-popup ref="popup" @change="change">
			<view class="popup">
				<view class="top-icon uni-flex uni-column">
					<view class="line"></view>
					<view class="line"></view>
				</view>
				<view class="pop-title">
					xxxxx第一小组
				</view>
				<view class="pop-info-box">
					<view class="cell uni-flex">
						<view class="label">网格长：</view>
						<view class="value">李xx</view>
					</view>
					<view class="cell uni-flex">
						<view class="label">网格员：</view>
						<view class="value">王xx、陈xx</view>
					</view>
					<view class="cell uni-flex">
						<view class="label">群众数：</view>
						<view class="value">23人</view>
					</view>
				</view>
				<view class="desc">
					板桥镇位于保山市隆阳区北部，距城区5公里。保山改市后，原保山县成为隆阳区。板桥镇是隆阳区的政治、经济、文化重镇之一。历史上是古南方“丝绸之路”的重要驿站。2001年被列为“省级历史文化名镇”。素有“北津烟柳”、“梅花古渡”、“文献之邦”的美誉，为迤西一大集市。保山坝最大的河流东河，从北向南经板桥镇穿境而过。东河南端，在清光绪元年，北津桥翻修重建为长亭，两旁柳丝垂拂，烟雾缭绕，称“北津烟柳”，景色...
				</view>
				<view class="button-box uni-flex">
					<button class="btn" type="default" @click="pageTo('/pages/workbench/work/crowdInfo/crowdInfo')">群众管理</button>
					<button class="btn" type="default" @click="pageTo('/pages/workbench/govern/mesher/membersList')">网格员管理</button>
					<button class="btn" type="default" @click="pageTo('/pages/workbench/work/notice/notice')">网格互动</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				searchValue: ''
			};
		},
		onLoad() {
			this.height = uni.getSystemInfoSync().windowHeight
		},
		methods: {
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
			},
			pageToList() {
				uni.navigateTo({
					url: '/pages/workbench/govern/partyMap/partyList'
				})
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			pageTo(url) {
				uni.navigateTo({
					url
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.map {
		.top-box {
			width: 686rpx;
			box-sizing: border-box;
			z-index: 9;
			position: fixed;
			top: 88rpx;
			background: #fff;
			height: 90rpx;
			align-items: center;
			margin: 20rpx 32rpx;
			border-radius: 8rpx;
			box-shadow: 10rpx 10rpx 12rpx rgba(170, 170, 170, 0.3);

			.address-box {
				border-right: 2rpx solid #eee;
				padding: 0 16rpx;

				.address-name {

					margin-left: 8rpx;
					margin-right: 8rpx;
					font-size: 26rpx;
					color: #666;
				}
			}

			.search-box {
				flex: 1;
				margin-left: 16rpx;
				align-items: center;

				.input {
					margin-left: 8rpx;
				}
			}

			.cancel {
				padding: 0 32rpx;
				font-size: 28rpx;
				color: #666;
			}

		}

		.popup {
			border-radius: 20rpx 20rpx 0 0;
			background: #fff;

			.top-icon {
				height: 64rpx;
				margin: 0 auto;
				width: 100rpx;
				justify-content: center;
				align-items: center;

				.line {
					width: 52rpx;
					height: 6rpx;
					border-radius: 3rpx;
					background: #f5f5f5;
					margin: 6rpx 0;
				}
			}

			.pop-title {
				font-size: 32rpx;
				color: #333;
				font-weight: 400;
				padding: 0 32rpx;
			}

			.pop-info-box {
				padding: 20rpx 32rpx 0;

				.cell {
					padding: 8rpx 0;

					.label {
						flex: none;
						font-size: 28rpx;
						color: #aaa;
						text-align: right;
						line-height: 40rpx;
					}

					.value {
						word-break: break-all;
						font-size: 28rpx;
						color: #AAAAAA;
					}
				}

			}

			.desc {
				padding: 0 32rpx;
				line-height: 44rpx;
				font-size: 28rpx;
				color: #555555;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 9;
				overflow: hidden;
				margin-bottom: 20rpx;
			}

			.button-box {
				padding: 30rpx 32rpx 50rpx;
				margin-right: -20rpx;

				.btn {
					background: #f59a23;
					color: #fff;
					font-size: 26rpx;
					flex: 1;
					margin-right: 20rpx;
					& + .btn{
						background: #00bfbf;
						& + .btn{
							background: #3b8bec;
						}
					}
				}
			}

		}
	}
</style>
