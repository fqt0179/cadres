<template>
	<view class="letter-detail">
		<view class="content-box">
			<view class="title-box uni-flex">
				<view class="title">处理情况</view>
				<view class="status">待处理</view>
			</view>
			<view class="detail-content">

				<view class="time-box uni-flex">
					<view class="time">
						<uni-icons type="minus"></uni-icons>
						<text>2021-05-04 12:20</text>
					</view>
					<view class="deal-people">处理人：张三</view>
				</view>

				<image class="main-image" src="/static/image/tabs/logo.png"></image>
				<view class="detail-txt">
					xxxxxxxxx处理情况
				</view>
			</view>
			<view class="detail-content">

				<view class="time-box uni-flex">
					<view class="time">
						<uni-icons type="minus"></uni-icons>
						<text>2021-05-04 12:20</text>
					</view>
					<view class="deal-people">处理人：张三</view>
				</view>
				<view class="detail-txt">
					xxxxxxxxx处理情况
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="title-box uni-flex">
				<view class="title">事件详情</view>
			</view>
			<view class="detail-desc">
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxasdfjhaskasdfasdfasd
			</view>
			<view class="details-content">
				<view class="time-box2 uni-flex">
					<uni-icons type="minus"></uni-icons>
					<view class="time">
						事发事件：2021-03-06 12：56
					</view>
				</view>
				<view class="base-info">
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							上报人：
						</view>
						<view class="label-value">
							xxx
						</view>
					</view>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							手机号：
						</view>
						<view class="label-value">
							xxx
						</view>
					</view>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							事件类型：
						</view>
						<view class="label-value">
							xxx
						</view>
					</view>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							详细地址：
						</view>
						<view class="label-value">
							xxx
						</view>
					</view>
					<map class="map" latitude="" longitude=""></map>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							图片：
						</view>
					</view>
					<view class="imgs uni-flex">
						<image class="img" v-for="(item,index) in [1,1,1,1]" :key="index"
							src="/static/image/tabs/logo.png"></image>
					</view>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							视频：
						</view>
					</view>
					<video class="video" src="" controls></video>
					<view class="cell uni-flex">
						<uni-icons type="person-filled"></uni-icons>
						<view class="label">
							音频：
						</view>
					</view>
					<button class="audio" type="primary" @click="playAudio">
						<uni-icons type="mic-filled" color="#fff"></uni-icons>
						<text>点击{{audioPlay?'停止':'播放'}}</text>
					</button>
				</view>
			</view>
		</view>
		<view class="btn-box">
			<button type="primary" @click="dealWith">处理事件</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				innerAudioContext: null,
				audioPlay: false
			};
		},
		onReady() {
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.src =
				'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			this.innerAudioContext.onPlay(res => {
				this.audioPlay = true
			})
		},
		methods: {
			playAudio() {
				console.log('play')
				if (this.audioPlay) {
					this.innerAudioContext.stop()
					this.audioPlay = false
				} else {

					this.innerAudioContext.play()
				}

			},
			dealWith() {
				uni.navigateTo({
					url: '/pages/workbench/work/letters/letterDealWith'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.letter-detail {
		padding-bottom: 160rpx;

		.content-box {
			background: #fff;
			margin-bottom: 20rpx;
			padding: 0 32rpx;

			.title-box {
				justify-content: space-between;
				height: 120rpx;
				align-items: center;

				.title {
					font-size: 36rpx;
					color: #333;
					font-weight: bold;
					border-left: 10rpx solid #0079fe;
					padding-left: 10rpx;

				}

				.status {
					font-size: 28rpx;
					color: #F59A23;
				}
			}

			.detail-content {
				padding-bottom: 30rpx;

				&+.detail-content {
					border-top: 2rpx solid #f5f5f5;
				}

				.time-box {
					line-height: 80rpx;
					justify-content: space-between;
					font-size: 28rpx;
					color: #999;
				}

				.main-image {
					width: 210rpx;
					height: 204rpx;
					margin: 10rpx 0;
				}

				.detail-txt {
					font-size: 28rpx;
					color: #7f7f7f;
					line-height: 40rpx;
				}
			}

			.detail-desc {
				font-size: 28rpx;
				color: #7f7f7f;
				line-height: 40rpx;
				word-break: break-all;
				padding: 20rpx 0;
				border-bottom: 2rpx solid #f5f5f5;
			}

			.details-content {
				.time-box2 {
					margin: 20rpx 0;
					line-height: 48rpx;
					align-items: center;
					font-size: 28rpx;
					color: #999;

					.time {
						margin-left: 8rpx;
					}
				}

				.base-info {
					overflow: hidden;
					.cell {
						font-size: 28rpx;
						color: #999;
						line-height: 68rpx;
						align-items: center;

						.label {
							margin-left: 8rpx;
						}

						.label-value {}
					}

					.map {
						width: 100%;
						height: 440rpx;
						margin-top: 10rpx;
					}

					.imgs {
						flex-wrap: wrap;
						margin-right: -28rpx;

						.img {
							width: 210rpx;
							height: 204rpx;
							margin-right: 28rpx;
							margin-bottom: 20rpx;
						}
					}

					.video {
						width: 100%;
						height: 408rpx;
						margin-top: 10rpx;
					}
					.audio{
						margin: 10rpx 0 60rpx;
					}
				}

			}

		}

		.btn-box {
			width: 100%;
			box-sizing: border-box;
			background: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 20rpx 32rpx;
		}
	}
</style>
