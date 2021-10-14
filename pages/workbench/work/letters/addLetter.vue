<template>
	<view class="add-docmentary">
		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">事件描述</view>
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
		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">视频</view>
			</view>
			<view class="value-box upload-img">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<view class="item-title">语音</view>
			</view>
			<view class="value-box">
				<button type="primary" class="audio-btn" @click="startRecord">
					<uni-icons type="mic-filled" color="#fff"></uni-icons>
					<text>长按录音</text>
				</button>
			</view>
		</view>


		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">上报人</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item specail">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">手机号</view>
			</view>
			<view class="value-box">
				<input class="input" type="text" value="" placeholder="请填写" />
			</view>
		</view>

		<view class="item">
			<view class="label uni-flex">
				<text class="important-tip">*</text>
				<view class="item-title">事件类型</view>
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
				<view class="item-title">上报位置</view>
			</view>
			<view class="value-box">
				<map class="map" latitude="" longitude=""></map>
				<input class="input address-input" type="text" value="" placeholder="请填写详细地址" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="save">发布</button>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	console.log(recorderManager)
	// const innerAudioContext = uni.createInnerAudioContext();

	// innerAudioContext.autoplay = true;
	import {
		customToast
	} from '@/common/common.js'
	export default {
		data() {
			return {
				imageValue: [],
				voicePath: '',
				typeIndex: 0,
				typeList: ['类型1', '类型2']
			};
		},
		onLoad() {
			recorderManager.onStop(res => {
				console.log(123)
				console.log('recorder stop' + JSON.stringify(res));
				this.voicePath = res.tempFilePath;
			});
		},
		methods: {
			typePickerChange: function(e) {
				this.typeIndex = e.target.value
			},

			startRecord() {
				console.log('开始录音');
				console.log(recorderManager);

				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			// playVoice() {
			// 	console.log('播放录音');

			// 	if (this.voicePath) {
			// 		innerAudioContext.src = this.voicePath;
			// 		innerAudioContext.play();
			// 	}
			// },

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
						uni.navigateBack({
							delta: 1
						})
					}
				})
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
				justify-content: space-between;
				align-items: center;

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

				.map {
					width: 100%;
					height: 652rpx;
				}

				.audio-btn {
					margin: 20rpx 0 60rpx;
				}

				.pick {
					flex: 1;
				}
			}


		}
	}
</style>
