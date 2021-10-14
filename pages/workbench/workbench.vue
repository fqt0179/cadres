<template>
	<view class="warp">
		<view class="roll-ad uni-flex">
			<image src="../../static/logo.png" class="ad-icon"></image>
			<swiper class="ad-swiper" autoplay disable-touch vertical circular>
				<swiper-item @click="pageToDetail" class="ad-swiper-item uni-flex" v-for="(item, index) in adList"
					:key="index">
					<view class="text uni-ellipsis">{{ item.text }}</view>
					<view class="det-btn">详情</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="banner">
			<swiper class="banner-swiper" autoplay indicator-dots circular indicator-active-color="#FFFFFF">
				<swiper-item class="ad-swiper-item uni-flex" v-for="(item, index) in adList" :key="index">
					<image class="banner-iamge" src="../../static/logo.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="menus">
			<uni-section @click="pageToDetail" class="uni-section title" title="我的工作"></uni-section>
			<uni-row class="menus-items">
				<uni-col :span="6" v-for="(item, index) in myWork" :key="index">
					<view class="item uni-flex uni-column" @click="pageTo(item.page)">
						<image class="menu-icon" :src="item.icon"></image>
						<view class="item-name">{{ item.name }}</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="menus">
			<uni-section class="uni-section title" title="乡村治理"></uni-section>
			<uni-row class="menus-items">
				<uni-col :span="6" v-for="(item, index) in govern" :key="index">
					<view class="item uni-flex uni-column" @click="pageTo(item.page)">
						<image class="menu-icon" :src="item.icon"></image>
						<view class="item-name">{{ item.name }}</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="audit-info">
			<view class="tabs uni-flex">
				<view class="tab uni-flex">
					<view class="tab-item" :class="{active: tabCurrent === 0}" @click="tabClick(0)">审核信息</view>
					<view class="tab-item" :class="{active: tabCurrent === 1}" @click="tabClick(1)">我发起的</view>
				</view>
				<view class="more">
					<text class="more-txt">更多</text>
					<uni-icons type="arrowright" size="12" color="#aaa"></uni-icons>
				</view>
			</view>
			<view class="audit-list">
				<view class="list-item" v-for="(item,index) in auditList" :key="index" @click="pageToAudit">
					<view class="item-title">标题标题标题</view>
					<view class="time">2021年9月21日</view>
					<view class="item-bottom uni-flex">
						<view class="persona">{{tabCurrent === 0?"发布人":"审核人"}}：张三</view>
						<view v-if="tabCurrent === 0" class="btn">审核</view>
						<view v-if="tabCurrent === 1" class="audit-status">审核中</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adList: [{
						text: '阿斯顿福建卡号圣诞快乐发货款阿斯顿福建卡号圣诞快乐发货款阿斯顿福建卡号圣诞快乐发货款'
					},
					{
						text: '阿斯顿福建卡号圣诞快乐发货款'
					},
					{
						text: '阿斯顿福建卡号圣诞快乐发货款'
					},
					{
						text: '阿斯顿福建卡号圣诞快乐发货款'
					}
				],
				myWork: [{
						name: '工作纪实',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/workDocumentary/workDocumentary'
					},
					{
						name: '群众信息',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/crowdInfo/crowdInfo'
					},
					{
						name: '快处快报',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/letters/letters'
					},
					{
						name: '一户一码',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/scan/scan'
					},
					{
						name: '入户打卡',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/clockIn/clockIn'
					},
					{
						name: '资源管理',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/resources/resources'
					},
					{
						name: '产业管理',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/industry/industry'
					},
					{
						name: '内部通知',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/notice/notice'
					}
				],
				govern: [{
						name: '党建地图',
						icon: '../../static/logo.png',
						page: '/pages/workbench/govern/partyMap/partyMap'
					},
					{
						name: '党建活动',
						icon: '../../static/logo.png',
						page: '/pages/workbench/govern/partyActivities/partyActivities'
					},
					{
						name: '网格化管理',
						icon: '../../static/logo.png',
						page: '/pages/workbench/govern/mesher/mesher'
					},
					{
						name: '通知公告',
						icon: '../../static/logo.png',
						page: '/pages/workbench/work/notice/notice'
					},
					{
						name: '政务公开',
						icon: '../../static/logo.png',
						page: '/pages/workbench/govern/governmentAffairs/governmentAffairs'
					},
				],
				auditList: [1, 1, 1],
				tabCurrent: 0
			};
		},
		methods: {
			pageTo(url) {
				console.log(444)
				uni.navigateTo({
					url
				})
			},
			pageToDetail() {
				uni.navigateTo({
					url: "/pages/workbench/announcement/announcementDetail"
				})
			},
			pageToAudit() {
				uni.navigateTo({
					url: "/pages/workbench/announcement/audit"
				})
			},
			tabClick(index) {
				this.tabCurrent = index
			}
		}
	};
</script>

<style lang="scss" scoped>
	.warp {
		box-sizing: border-box;
		padding-bottom: 80rpx;

		.roll-ad {
			background: #ffffff;
			align-items: center;
			padding: 0 32rpx;

			.ad-icon {
				width: 24rpx;
				height: 28rpx;
				margin-right: 28rpx;
			}

			.ad-swiper {
				flex: 1;
				height: 100rpx;

				.ad-swiper-item {
					line-height: 100rpx;
					align-items: center;
					justify-content: space-between;

					.text {
						font-size: 24rpx;
						color: #999999;
						flex: 1;
					}

					.det-btn {
						width: 90rpx;
						height: 40rpx;
						border: 2rpx solid #409eff;
						border-radius: 8rpx;
						text-align: center;
						line-height: 36rpx;
						box-sizing: border-box;
						font-size: 24rpx;
						color: #409eff;
						margin: 0 32rpx 0 20rpx;
					}
				}
			}
		}

		.banner {
			margin: 5rpx 0 30rpx;

			.banner-swiper {
				height: 206rpx;

				.banner-iamge {
					width: 100%;
					height: 100%;
				}
			}
		}

		.menus {
			background: #ffffff;

			.title {
				background: #ffffff;
				font-size: 32rpx;
				color: #333333;
				font-weight: 700;
				padding: 0 32rpx;
				margin-top: 32rpx;
			}

			.menus-items {
				.item {
					margin-top: 20rpx;
					align-items: center;

					.menu-icon {
						width: 110rpx;
						height: 110rpx;
						border-radius: 50%;
					}

					.item-name {
						font-size: 24rpx;
						color: #333333;
						line-height: 80rpx;
					}
				}
			}
		}

		.audit-info {
			margin-top: 32rpx;
			background: #FFFFFF;

			.tabs {
				align-items: center;
				justify-content: space-between;

				.tab {
					align-items: center;

					.tab-item {
						font-size: 26rpx;
						color: #333;
						font-weight: bold;
						width: 190rpx;
						line-height: 96rpx;
						text-align: center;
						box-sizing: border-box;
						border-bottom: 4rpx solid transparent;

						&.active {
							color: #0079fe;
							border-bottom: 4rpx solid #0079fe;
						}

						// &.active::after {
						// 	content: '';
						// 	position: absolute;
						// 	bottom: 0;
						// 	left: 0;
						// 	width: 100%;
						// 	ba
						// }
					}
				}

				.more {
					color: #AAAAAA;
					font-size: 22rpx;
					padding: 0 32rpx;
					margin-bottom: 1rpx;

					.more-txt {
						margin-right: 4rpx;
					}
				}
			}

			.audit-list {
				padding-right: 32rpx;

				.list-item {
					padding: 26rpx 0 26rpx 32rpx;

					&+.list-item {
						border-top: 1rpx solid #efefef;

					}

					.item-title {
						font-size: 32rpx;
						color: #333;
						font-weight: bold;
					}

					.time {
						font-size: 24rpx;
						color: #7f7f7f;
						margin: 20rpx 0 16rpx;
					}

					.item-bottom {
						justify-content: space-between;
						align-items: center;

						.persona {
							font-size: 24rpx;
							color: #7f7f7f
						}

						.btn {
							width: 128rpx;
							height: 44rpx;
							color: #fff;
							font-size: 24rpx;
							background: #f59a23;
							border-radius: 10rpx;
							line-height: 44rpx;
							text-align: center;
						}
						.audit-status{
							font-size: 24rpx;
							color: #F59A23;
							line-height: 44rpx;
						}
					}
				}

			}


		}
	}
</style>
