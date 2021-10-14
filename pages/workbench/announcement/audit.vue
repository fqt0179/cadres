<template>
	<view class="detail" :class="{'has-btn': type === 0}">
		<view class="title">
			2020年保山市昌宁县公益性特岗招募公告
		</view>
		<view v-if="type === 1" class="status">
			<view v-if="status === 0" class="audit-status">审核中</view>
			<view v-if="status === 1" class="audit-status success">已发布</view>
			<view v-if="status === 2" class="audit-status fail">已退回</view>
		</view>
		<view class="base-info">
			<view class="cell">提交时间：2021-01-07 22：03</view>
			<view class="cell">公告类型：xxxx</view>
			<view class="cell">审核人员：2021-01-07 22：03</view>
			<view class="cell">接收人：xxx、xxx</view>
		</view>
		<rich-text :nodes="strings"></rich-text>
		<view v-if="type === 0" class="cus-fixed-footer-btn-box uni-flex">
			<button class="btn default" type="default" @click="auditBack">退回</button>
			<button class="btn" type="primary" @click="confirmClick">通过</button>
		</view>
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="提示" value="" placeholder="请输入内容"
				@confirm="dialogInputConfirm" @close="closeInputDialog">
				<view class="dialog-input">
					<view class="tips">
						退回需填写退回原因
					</view>
					<textarea class="back-area" value="" placeholder="请输入退回原因" />
				</view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 0,
				status: 0,
				strings: '<div>噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士多么那暗暗的爱美女士多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那暗暗的爱美女士的佛噶计划是多么那块是大家的部分金卡要围绕金卡和史蒂夫ask的腐败了 吧g src="https://bjetxgzv</div>'
			}
		},
		methods: {
			auditBack() {
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm() {
				uni.showToast({
					title: '退回成功',
					icon: 'none'
				})
			},
			closeInputDialog() {
				console.log(333)
			},
			confirmClick() {
				uni.showModal({
					title: '提示',
					content: '通过之后公告将直接发布\n请问是否确定通过审核？',
					success: (res) => {
						if (res.confirm) {
							this.doSubmit()
						}
					}
				})
			},
			doSubmit() {
				console.log('123')
				uni.showToast({
					title: '审核通过',
					icon: 'none'
				})
				let r = setTimeout(() => {
					uni.navigateBack()
					clearTimeout(r)
				}, 1500)

			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		overflow: hidden;
	}

	.detail {
		background: #fff;
		padding: 10rpx 32rpx 32rpx;

		&.has-btn {
			margin-bottom: 180rpx;

		}

		.title {
			border-left: 10rpx solid #0079fe;
			padding-left: 16rpx;
			margin-bottom: 32rpx;
		}

		.status {
			margin-bottom: 16rpx;

			.audit-status {
				font-size: 24rpx;
				color: #F59A23;
				line-height: 44rpx;

				&.success {
					color: #70B603;
				}

				&.fail {
					color: #D9001B;
				}
			}
		}

		.base-info {
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #F5F5F5;
			margin-bottom: 20rpx;

			.cell {
				font-size: 28rpx;
				color: #999;
				line-height: 52rpx;
			}
		}

		.btn {

			flex: 1;

			&+.btn {
				margin-left: 60rpx;
			}

			&.default {
				background: #f59a23;
				color: #fff;
				border-color: #f59a23;
			}
		}

		.dialog-input {
			width: 100%;
			box-sizing: border-box;

			.tips {
				text-align: center;
				font-size: 26rpx;
				color: #7f7f7f;
				margin-bottom: 20rpx;
			}

			.back-area {
				width: 100%;
				box-sizing: border-box;
				border: 2rpx solid #f2f2f2;
				padding: 20rpx;
				font-size: 26rpx;
			}

		}



	}
</style>
