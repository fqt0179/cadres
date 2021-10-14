<template>
	<view class="crowd-details">
		<view class="top-box">
			<view class="crowd-main-info uni-flex">
				<image src="../../../../static/image/tabs/logo.png" class="avatar"></image>
				<view class="top-left-box uni-flex uni-column">
					<view class="name-box uni-flex">
						<view class="name">
							张三
						</view>
						<view class="mark">
							常住人口
						</view>
					</view>
					<view class="base-info uni-flex">
						<view class="text">
							户主|男性|贫困户|孤寡老人
						</view>
						<uni-icons type="arrowright" color="#999"></uni-icons>
					</view>
				</view>
			</view>
			<view class="crow-det-info">
				<view class="info-cell uni-flex">
					<uni-icons type="compose" size="14"></uni-icons>
					<view class="cell-label">
						户口编码：
					</view>
					<view class="cell-value">
						23*************54
					</view>
				</view>
				<view class="info-cell uni-flex">
					<uni-icons type="compose" size="14"></uni-icons>
					<view class="cell-label">
						身份证号：
					</view>
					<view class="cell-value">
						23*************54
					</view>
				</view>
				<view class="info-cell uni-flex">
					<uni-icons type="phone" size="14"></uni-icons>
					<view class="cell-label">
						手机号码：
					</view>
					<view class="cell-value">
						18******54
					</view>
				</view>
				<view class="info-cell uni-flex">
					<uni-icons type="location-filled" size="14"></uni-icons>
					<view class="cell-label">
						居住地：
					</view>
					<view class="cell-value">
						XX镇XX县XX乡
					</view>
				</view>
			</view>
		</view>
		<view class="other-info">
			<view class="segmentation uni-flex">
				<view class="segmentation-item" v-for="(item,index) in items" :key="index" @click="onClickItem(index)"
					:class="{active: current === index}">
					{{item}}
				</view>
			</view>
			<view class="content">
				<scroll-view scroll-y :style="{height: height}" v-show="current === 0">
					<view class="scroll-view">
						<view class="info-content">
							<view class="content-top-box uni-flex">
								<view class="title">
									种植信息
								</view>
								<view class="add uni-flex"
									@click="pageTo('/pages/workbench/work/crowdInfo/addPlantInfo', {})">
									<uni-icons type="plusempty" color="#5c5c5c"></uni-icons>
								</view>
							</view>
							<view class="crops">
								<view class="crops-item" v-for="(item,index) in [1,1]" :key="index"
									@click="pageTo('/pages/workbench/work/crowdInfo/addPlantInfo', {id: 2, type: 3})">
									<view class="crops-name uni-flex">
										<text>2号水稻</text>
										<uni-icons type="arrowright" size="12"></uni-icons>
									</view>
									<view class="info-desc">
										粮食作物|3亩|2021年种植
									</view>
									<view class="output">
										年产值：20万元
									</view>
								</view>
							</view>
						</view>
						<view class="info-content">
							<view class="content-top-box uni-flex">
								<view class="title">
									养殖信息
								</view>
								<view class="add uni-flex"
									@click="pageTo('/pages/workbench/work/crowdInfo/addFarmInfo', {})">
									<uni-icons type="plusempty" color="#5c5c5c"></uni-icons>
								</view>
							</view>
							<view class="crops">
								<view class="crops-item" v-for="(item,index) in [1,1]" :key="index"
									@click="pageTo('/pages/workbench/work/crowdInfo/addFarmInfo', {id: 1})">
									<view class="crops-name uni-flex">
										<text>2号水稻</text>
										<uni-icons type="arrowright" size="12"></uni-icons>
									</view>
									<view class="info-desc">
										粮食作物|3亩|2021年种植
									</view>
									<view class="output">
										年产值：20万元
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-y :style="{height: height}" v-show="current === 1">
					<view class="scroll-view">
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">所属网络：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">出生日期：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">民族：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">文化程度：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">政治面貌：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">归属组/队：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">从事行业类型：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">从事职业类型：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">人才类型：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">户籍地址：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">是否外出务工：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">入职企业名称：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">入职企业所属行业：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item uni-flex">
							<view class="base-info-cell-label">技能特长：</view>
							<view class="base-info-cell-value">XXXXXXXXXXXX</view>
						</view>
						<view class="base-info-item">
							<view class="base-info-cell-label">技能证书：</view>
							<view class="base-info-cell-value uni-flex">
								<image class="certificate-img" v-for="(item,index) in [1,1]" :key="index"
									src="../../../../static/image/tabs/logo.png" mode=""></image>
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-y :style="{height: height}" v-show="current === 2">
					<view class="scroll-view home-info">

						<view class="info-content">
							<view class="content-top-box uni-flex">
								<view class="title">
									家庭成员
								</view>
								<view class="add uni-flex"
									@click="pageTo('/pages/workbench/work/crowdInfo/addCrowd', {})">
									<uni-icons type="plusempty" color="#5c5c5c"></uni-icons>
								</view>
							</view>
							<view class="crops">
								<view class="crops-item" v-for="(item,index) in [1,1]" :key="index"
									@click="pageTo('/pages/workbench/work/crowdInfo/addCrowd', {id: 1})">
									<view class="crops-name uni-flex">
										<text>张海</text>
										<uni-icons type="arrowright" size="12"></uni-icons>
									</view>
									<view class="info-desc">
										配偶|男|正常
									</view>
									<view class="output">
										联系电话：18888888888
									</view>
								</view>
							</view>
						</view>
						<view class="info-content"
							@click="pageTo('/pages/workbench/work/crowdInfo/auditPovertyInfo', {})">
							<view class="content-top-box uni-flex">
								<view class="title">
									贫困户信息
								</view>
								<uni-icons type="arrowright" size="12"></uni-icons>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">贫困户编号：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">致贫原因：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">贫困户属性：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">家庭年均收入：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">饮水是否困难：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">饮水是否安全：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">是否通电：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">距离主干路距离：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">燃料类型：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>

						</view>
						<view class="info-content"
							@click="pageTo('/pages/workbench/work/crowdInfo/auditSupportCadresInfo')">
							<view class="content-top-box uni-flex">
								<view class="title">
									帮扶干部信息
								</view>
								<uni-icons type="arrowright" size="12"></uni-icons>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">帮扶干部姓名：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">帮扶干部身份证：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">帮扶干部电话：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
							<view class="poverty-item uni-flex">
								<view class="poverty-cell-label">帮扶单位名称：</view>
								<view class="poverty-cell-value">XXXXXXXXXXXX</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-y :style="{height: height}" v-show="current === 3">
					<view class="scroll-view list" :style="{'min-height': height}">
						<view class="list-item" v-for="(item,index) in [1,1,1]" :key="index">
							<view class="item-top uni-flex">
								<view class="item-title">
									迁入
								</view>
								<view class="time">
									2021-03-25
								</view>
							</view>
							<view class="desc">
								XXXX年xxxxxxxxx入xx村
							</view>
							<view class="agent">
								经办人：xxx
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-y :style="{height: height}" v-show="current === 4">
					<view class="scroll-view list" :style="{'min-height': height}">
						<view class="list-item" v-for="(item,index) in [1,1,1]" :key="index" @click="pageTo('/pages/workbench/work/crowdInfo/houseMapInfo')">
							<view class="item-top uni-flex">
								<view class="item-title">
									李海（房主）
								</view>
								<view class="time">
									家庭共有
								</view>
							</view>
							<view class="desc">
								XXXX年xxxxxxxxx入xx村
							</view>
							<view class="agent uni-flex">
								<text>地址：xxx</text>
								<uni-icons type="location-filled" color="#fec03d"></uni-icons>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view v-show="current === 4" class="fab uni-flex"
			@click="pageTo('/pages/workbench/work/crowdInfo/addHouseInfo', {})">
			<uni-icons type="plusempty" color="#fff" size="48"></uni-icons>
		</view>
		<view class="btn-box">
			<button type="primary">拨打电话</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['生产资料', '基本信息', '家庭信息', '变更信息', '房屋信息'],
				current: 0,
				height: 0
			};
		},
		onReady() {
			console.log(uni.getSystemInfoSync())
			let sysHeight = uni.getSystemInfoSync().windowHeight
			let query = uni.createSelectorQuery()
			query.select('.content').boundingClientRect(data => {
				console.log("得到布局位置信息" + JSON.stringify(data));
				console.log("节点离页面顶部的距离为" + data.top);
				// height = sysHeight - data.top
				this.height = sysHeight - data.top - 70 + 'px'
				console.log(this.height)
			}).exec();
		},

		methods: {
			onClickItem(index) {
				this.current = index
			},
			pageTo(path, data) {
				let query = ''
				for (let key in data) {
					query += `&${key}=${data[key]}`
				}
				query = query.replace('&', '?')
				console.log(query)
				let url = path + query
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.crowd-details {
		.top-box {
			background: #fff;
			overflow: hidden;
			margin-bottom: 20rpx;

			.crowd-main-info {
				padding: 20rpx 32rpx;

				.avatar {
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
					background: #eee;
					flex: none;
				}

				.top-left-box {
					justify-content: space-between;
					height: 110rpx;
					flex: 1;
					margin-left: 32rpx;

					.name-box {
						justify-content: space-between;
						align-items: center;

						.name {
							line-height: 76rpx;
							font-size: 30rpx;
							color: #333;
						}

						.mark {
							font-size: 26rpx;
							color: #F59A23;
							font-weight: bold;
						}
					}

					.base-info {
						justify-content: space-between;
						align-items: center;

						.text {
							line-height: 44rpx;
							font-size: 24rpx;
							color: #aaa;
						}
					}
				}
			}

			.crow-det-info {
				margin-bottom: 16rpx;

				.info-cell {
					line-height: 44rpx;
					padding: 0 32rpx;

					.cell-label {
						font-size: 24rpx;
						color: #7f7f7f;
					}

					.cell-value {
						font-size: 24rpx;
						color: #aaa;
					}
				}
			}
		}

		.other-info {
			background: #fff;

			.segmentation {
				justify-content: space-around;

				.segmentation-item {
					line-height: 72rpx;
					color: #ccc;
					font-size: 28rpx;
					flex: 1;
					text-align: center;
					box-sizing: border-box;

					&.active {
						color: #3b8bec;
						border-bottom: 4rpx solid #3b8bec;
					}
				}
			}

			.content {

				.scroll-view {
					box-sizing: border-box;
					padding-bottom: 60rpx;

					&.home-info {
						background: #F5F5F5;
					}

					&.list {
						background: #F5F5F5;
						padding: 20rpx 32rpx;
					}

					.info-content {
						padding: 20rpx 32rpx 0;
						border-bottom: 2rpx solid #F5F5F5;
						padding-bottom: 20rpx;
						background: #fff;

						.content-top-box {
							align-items: center;
							justify-content: space-between;


							.title {
								color: #5c5c5c;
								font-weight: bold;
								font-size: 32rpx;
								line-height: 84rpx;
							}

							.add {
								width: 34rpx;
								height: 34rpx;
								border-radius: 4rpx;
								border: 1rpx solid #5c5c5c;
							}



						}

						.poverty-item {
							line-height: 48rpx;

							.poverty-cell-label {
								color: #333;
								font-size: 28rpx;
							}

							.poverty-cell-value {
								font-size: 28rpx;
								color: #7f7f7f;
							}
						}

						.crops {
							padding-bottom: 10rpx;

							.crops-item {
								&+.crops-item {
									margin-top: 20rpx;
								}

								.crops-name {
									font-size: 28rpx;
									color: #5c5c5c;
									line-height: 40rpx;
									justify-content: space-between;
								}

								.info-desc {
									font-size: 24rpx;
									color: #aaa;
									line-height: 44rpx;
								}

								.output {
									font-size: 24rpx;
									color: #aaa;
									line-height: 44rpx;
								}
							}
						}

					}

					.base-info-item {
						line-height: 48rpx;
						padding: 0 32rpx;

						&:first-child {
							margin-top: 32rpx;
						}

						.base-info-cell-label {
							font-size: 28rpx;
							color: #333;
						}

						.base-info-cell-value {
							font-size: 28rpx;
							color: #7f7f7f;

							&.uni-flex {
								margin-right: -20rpx;
								flex-wrap: wrap;
							}

							.certificate-img {
								width: 206rpx;
								height: 206rpx;
								margin-right: 20rpx;
								margin-top: 10rpx;
							}
						}
					}

					.list-item {
						border-left: 6rpx solid #fec03d;
						margin-bottom: 20rpx;
						box-shadow: 0 0 20rpx rbga(0, 0, 0, 0.05);
						background: #fff;
						border-radius: 0 22rpx 0 0;
						padding: 10rpx 32rpx;

						.item-top {
							justify-content: space-between;
							align-items: center;

							.item-title {
								font-size: 30rpx;
								color: #999;
								font-weight: bold;
								line-height: 60rpx;
							}

							.time {
								font-size: 28rpx;
								color: #02A7F0;
							}
						}


						.desc {
							font-size: 28rpx;
							color: #666;
							margin: 20rpx 0 30rpx;
						}

						.agent {
							font-size: 28rpx;
							color: #666;
							line-height: 44rpx;
							margin-bottom: 16rpx;
							justify-content: space-between;
						}
					}
				}
			}
		}

		.fab {
			position: fixed;
			bottom: 180rpx;
			right: 32rpx;
			background: #3c8bec;
			border-radius: 50%;
			width: 120rpx;
			height: 120rpx;
			justify-content: center;
			align-items: center;

		}

		.btn-box {
			box-sizing: border-box;
			background: #fff;
			position: fixed;
			width: 100%;
			padding: 24rpx 32rpx;
			left: 0;
			bottom: 0;
			border-top: 2rpx solid #F5F5F5;
		}

	}
</style>
