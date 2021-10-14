<template>
	<view class="crowd-info">
		<uni-nav-bar fixed left-icon="arrowleft" backgroundColor="#3b8bec" color="white" left-text="返回" title="群众管理"
			@clickLeft="back">
			<view slot="right" @click="showDrawer">
				<text class="nav-right-text">筛选</text>
				<uni-icons type="compose" color="white"></uni-icons>
			</view>
		</uni-nav-bar>
		<uni-drawer ref="showRight" mode="right" :width="302" :mask-click="false">
			<view class="drawer">
				<view class="drawer-title-box uni-flex">
					<view class="drawer-title">信息筛选</view>
					<view class="close" @click="closeDrawer">
						<uni-icons type="closeempty"></uni-icons>
					</view>
				</view>
				<view class="drawer-content" v-for="(outItem, outIndex) in showScreenList" :key="outIndex">
					<view class="content-title">
						{{outItem.title}}
					</view>
					<view class="content-list uni-flex">
						<view class="list-item" v-for="(item,index) in outItem.list" :key="index"
							:class="{active: item.active}" @click="itemClick(outIndex, index)">
							{{item.name}}
						</view>
						<view v-if="outItem.more" class="list-item no-border uni-flex" @click="showMore(outIndex)">
							<text>更多</text>
							<uni-icons type="arrowright" color="#999" size="12"></uni-icons>
						</view>
					</view>
				</view>
				<view class="btn-box uni-flex">
					<button class="drawer-footer-btn" type="primary" plain @click="reset">重置</button>
					<button class="drawer-footer-btn" type="primary" @click="drawerConfirm">确定</button>
				</view>

			</view>
		</uni-drawer>
		<uni-drawer ref="more" mode="right" :width="302" :mask-click="false">
			<view class="drawer all-list-drawer">
				<view class="drawer-title-box uni-flex">
					<view class="drawer-title">信息筛选2</view>
					<view class="close" @click="closeMore">
						<uni-icons type="closeempty"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y="true" class="scroll-view">
					<view class="all-list">
						<view class="uni-list-cell uni-list-cell-pd"
							v-for="(item,index) in screenList[moreCurrent].list" :key="index" @click="checkItem(index)">
							<view class="check-box uni-flex" :class="{active: item.active}">
								<uni-icons type="checkmarkempty" color="#fff"></uni-icons>
							</view>
							<view class="item-name">{{item.name}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="btn-box uni-flex">
					<button class="drawer-footer-btn" type="primary" plain @click="moreReset">重置</button>
					<button class="drawer-footer-btn" type="primary" @click="moreConfirm">确定</button>
				</view>

			</view>
		</uni-drawer>
		<view class="top-box uni-flex">
			<view class="address-box uni-flex">
				<uni-icons type="location-filled" color="#3b8bec"></uni-icons>
				<view class="address-name">金鸡村</view>
			</view>
			<uni-search-bar class="search" :radius="100" @confirm="search" @input="input" placeholder="请输入姓名/手机号" />
		</view>
		<view class="crowd-list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="pageToDetail">
				<view class="base-info uni-flex">
					<view class="avatar-box">
						<image src="../../../../static/image/tabs/logo.png" class="avatar" />
						<view class="icon-box uni-flex">
							<uni-icons type="qq" color="#fff"></uni-icons>
						</view>
					</view>
					<view class="info uni-flex uni-column">
						<view class="name-info uni-flex">
							<view class="name">
								张三
							</view>
							<view class="gender">
								男
							</view>
						</view>
						<view class="mark">
							常住人口
						</view>
					</view>
				</view>
				<view class="live-address">
					居住地：了了了了了了了了村2组
				</view>
				<view class="phone uni-flex">
					<uni-icons type="phone-filled" color="#fff"></uni-icons>
				</view>
			</view>
		</view>


		<uni-fab @fabClick="addCrowd" horizontal='right'></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenList: [{
					title: '人口类型',
					list: [{
						active: false,
						name: '户籍人口'
					}, {
						active: false,
						name: '常住人口'
					}, {
						active: false,
						name: '暂住人口'
					}, {
						active: false,
						name: '流动人口'
					}]
				}, {
					title: '所属网格',
					list: [{
						active: false,
						name: 'xxxxx1网格'
					}, {
						active: false,
						name: 'xxxxx2网格'
					}, {
						active: false,
						name: 'xxxxx3网格'
					}, {
						active: false,
						name: 'xxxxx4网格'
					}, {
						active: false,
						name: 'xxxxx5网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx10网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx9网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx6网格'
					}, {
						active: false,
						name: 'xxxxx16网格'
					}]
				}, {
					title: '人口属性',
					list: [{
						active: false,
						name: '居民'
					}, {
						active: false,
						name: '留守儿童'
					}, {
						active: false,
						name: '孤寡老人'
					}, {
						active: false,
						name: '贫困户'
					}, {
						active: false,
						name: '残疾人'
					}, {
						active: false,
						name: '学生'
					}]
				}],
				list: [1, 1, 1, 1, 1],
				moreCurrent: 0
			};
		},
		computed: {
			showScreenList() {
				let list = []
				for (let i in this.screenList) {
					let temp = {}
					for (let key in this.screenList[i]) {
						temp[key] = this.screenList[i][key]
					}
					temp.more = false
					if (this.screenList[i].list.length > 6) {
						temp.more = true
						temp.list = this.screenList[i].list.slice(0, 5)
					}
					list.push(temp)
				}
				return list
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			checkItem(index) {
				this.screenList[this.moreCurrent].list[index].active = !this.screenList[this.moreCurrent].list[index]
					.active
			},
			itemClick(outIndex, index) {
				this.screenList[outIndex].list[index].active = !this.screenList[outIndex].list[index].active
			},
			reset() {
				for (let i in this.screenList) {
					this.screenList[i].list.map(item => {
						item.active = false
						return item
					})
				}
				this.$refs.showRight.close();
			},
			moreReset() {
				this.screenList[this.moreCurrent].list.map(item => {
					item.active = false
					return item
				})
			},
			moreConfirm() {
				this.$refs.more.close();
			},

			showMore(index) {
				this.moreCurrent = index
				this.$refs.more.open();
			},
			closeMore() {
				this.$refs.more.close();
			},
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			},
			drawerConfirm() {
				this.$refs.showRight.close();
			},
			search() {},

			input() {},
			addCrowd() {
				uni.navigateTo({
					url: '/pages/workbench/work/crowdInfo/addCrowd'
				})
			},
			pageToDetail() {
				uni.navigateTo({
					url: '/pages/workbench/work/crowdInfo/crowdDetails'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.crowd-info {
		padding-top: 148rpx;

		.drawer {
			height: 100%;
			padding: 0 32rpx;

			&.all-list-drawer {
				padding: 0;

				.drawer-title-box {
					padding: 0 32rpx;
				}
			}

			.scroll-view {
				height: calc(100% - 100rpx);

				.all-list {
					padding-bottom: 170rpx;

					.uni-list-cell {
						justify-content: flex-start;

						.check-box {
							width: 32rpx;
							height: 32rpx;
							border: 2rpx solid #E4e4e4;
							box-sizing: border-box;
							border-radius: 4rpx;
							align-items: center;
							justify-content: center;

							&.active {
								background: #409eff;
								border-color: #409eff;
							}
						}

						.item-name {
							margin-left: 20rpx;
							font-size: 26rpx;
							color: #333;
						}
					}

				}

			}

			.drawer-title-box {
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				border-bottom: 2rpx solid #F5F5F5;

				.drawer-title {
					font-size: 26rpx;
					color: #333;
					font-weight: bold;
				}

				.close {
					padding: 10rpx 0 10rpx 32rpx;
				}
			}

			.drawer-content {
				margin-top: 10rpx;

				.content-title {
					font-size: 24rpx;
					color: #999;
					line-height: 88rpx;
				}

				.content-list {
					flex-wrap: wrap;
					margin-right: -30rpx;

					.list-item {
						margin-bottom: 20rpx;
						font-size: 24rpx;
						color: #999;
						width: 160rpx;
						height: 60rpx;
						border: 2rpx solid #e9e9e9;
						text-align: center;
						line-height: 56rpx;
						box-sizing: border-box;
						border-radius: 30rpx;
						margin-right: 30rpx;

						&.active {
							color: #409eff;
							border-color: #a0cfff;
						}

						&.no-border {
							border: none;
							line-height: 60rpx;
							justify-content: center;
							align-items: center;

							text {
								margin-right: 6rpx;
							}
						}
					}
				}
			}

			.btn-box {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				padding: 20rpx 32rpx;
				border-top: 2rpx solid #F7F7F7;
				box-sizing: border-box;
				background: #fff;
				z-index: 99;

				.drawer-footer-btn {
					flex: 1;

					&+.drawer-footer-btn {
						margin-left: 20rpx;
					}
				}
			}
		}

		.nav-right-text {
			margin-right: 6rpx;
			font-size: 24rpx;
		}

		.top-box {
			width: 100%;
			box-sizing: border-box;
			z-index: 9;
			position: fixed;
			top: 88rpx;
			background: #fff;
			padding: 0 32rpx;
			height: 128rpx;
			align-items: center;
			margin-bottom: 20rpx;

			.address-box {
				.address-name {
					margin-left: 8rpx;
					margin-right: 8rpx;
					font-size: 26rpx;
					color: #3B8BEC;
				}
			}

			.search {
				flex: 1;
			}

		}

		.crowd-list {
			background: #fff;
			padding: 0 32rpx;

			.item {
				padding: 32rpx 0 10rpx;
				position: relative;
				overflow: hidden;

				&+.item {
					border-top: 2rpx solid #F7F7F7;
				}

				.base-info {
					.avatar-box {
						width: 110rpx;
						height: 110rpx;
						position: relative;
						flex: none;
						margin-right: 32rpx;

						.avatar {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}

						.icon-box {
							position: absolute;
							bottom: 0;
							right: -6rpx;
							background: #a7d5ff;
							width: 34rpx;
							height: 34rpx;
							border-radius: 50%;
							align-items: center;
							justify-content: center;
						}
					}

					.info {
						flex: 1;
						height: 110rpx;
						justify-content: space-between;

						.name-info {
							justify-content: space-between;
							align-items: center;

							.name {
								font-size: 32rpx;
								color: #000;
								font-weight: bold;
								line-height: 52rpx;
							}

							.gender {
								font-size: 26rpx;
								color: #F59A23;
							}
						}

						.mark {
							width: 148rpx;
							height: 46rpx;
							border-radius: 4rpx;
							background: rgba(59, 139, 236, 0.09);
							text-align: center;
							line-height: 46rpx;
							font-size: 22rpx;
							color: #3b8bec;
						}
					}

				}

				.live-address {
					font-size: 24rpx;
					color: #7f7f7f;
					margin: 20rpx 0;
				}

				.phone {
					width: 68rpx;
					height: 68rpx;
					background: #70b603;
					align-items: center;
					justify-content: center;
					position: absolute;
					bottom: 32rpx;
					right: 0;
					border-radius: 50%;
					transform: rotateY(180deg);
				}
			}

		}


	}
</style>
