<template>
	<view class="add-industry">
		<!-- TODO 待完善类型选择 -->
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">类型</text>
			</view>
			<view class="value">
				<picker @change="oneTypePickerChange" :value="oneTypeIndex" :range="oneTypeList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="oneTypeList[oneTypeIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">产业类型</text>
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
				<text class="label-txt">分类</text>
			</view>
			<view class="value">
				<picker @change="classifyPickerChange" :value="classifyIndex" :range="classifyList">
					<view class="uni-flex">
						<input class="cus-input" disabled type="text" :value="classifyList[classifyIndex]"
							placeholder="请选择" />
						<uni-icons type="arrowright" color="#666"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">产业名称</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item" v-if="oneTypeIndex === 0 && typeIndex === 1">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">面积</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">亩</text>
			</view>
		</view>
		<view class="item" v-if="oneTypeIndex === 0 && typeIndex === 0">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">种植面积</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">亩</text>
			</view>
		</view>
		<view class="item"
			v-if="oneTypeIndex === 0 && (typeIndex === 2 || typeIndex === 3) || oneTypeIndex === 3 && (typeIndex === 0)">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">单位</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item" v-if="oneTypeIndex === 0 && (typeIndex === 2 || typeIndex === 3)">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">数量</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item" v-if="oneTypeIndex === 0 && typeIndex === 0 || oneTypeIndex === 3 && typeIndex === 0">
			<view class="label uni-flex">
				<text class="label-txt">产量</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit" v-if="oneTypeIndex === 0 && typeIndex === 0">吨</text>
			</view>
		</view>

		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">合作户数</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">户</text>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">年产值</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">万元</text>
			</view>
		</view>


		<view class="item" v-if="oneTypeIndex === 0 && typeIndex === 0 || oneTypeIndex === 3">
			<view class="label uni-flex">
				<text class="label-txt">价格区间</text>
			</view>
			<view class="value uni-flex">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">元/市斤</text>
				<text>~</text>
				<input class="cus-input" type="text" value="" placeholder="请填写" />
				<text class="unit">元/市斤</text>
			</view>
		</view>

		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="label-txt">关联合作社</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">详细地址</text>
			</view>
			<view class="value">
				<input class="cus-input" type="text" value="" placeholder="请填写" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="cus-star-red">*</text>
				<text class="label-txt">所处位置</text>
			</view>
			<view class="value uni-flex" @click="openLocation">
				<input disabled class="cus-input" type="text" :value="location" placeholder="请选择" />
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="label-txt">产业概况</text>
			</view>
			<view class="value">
				<textarea value="" placeholder="请填写产业概况" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="label-txt">产业图片</text>
			</view>
			<view class="value">
				<uni-file-picker class="up-load" v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button type="primary" @click="save">发布</button>
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
				oneTypeList: ['第一产业', '第二产业', '第三产业', '新兴产业'],
				oneTypeIndex: '',
				typeList: [],
				typeIndex: '',
				classifyList: [],
				classifyIndex: '',
				location: '',
				imageValue: [],
			};
		},
		methods: {
			oneTypePickerChange(e) {
				let index = e.target.value
				this.oneTypeIndex = index
				this.typeIndex = ''
				this.classifyIndex = ''
				switch (index) {
					case 0:
						this.typeList = ['农业', '林业', '畜牧业', '渔业']
						break;
					case 1:
						this.typeList = ['采矿业', '制造业', '电力、热力、燃气及水生产和供应业', '建筑业']
						break;
					case 2:
						this.typeList = ['交通运输、仓储和邮政业', '信息传输、计算机服务和软件业', '批发和零售业', '住宿和餐饮业', '金融业', '房地产业', '租赁和商务服务业',
							'科学研究、技术服务和地质勘查业', '水利、环境和公共设施管理业', '居民服务和其他服务业', '教育', '卫生、社会保障和社会福利业', '文化、体育和娱乐业',
							'公共管理和社会组织', '国际组织'
						]
						break;
					case 3:
						this.typeList = ['新一代信息技术产业', '高端装备制造产业', '新材料产业', '生物产业', '新能源汽车产业', '新能源产业', '节能环保产业']
						break;
				}
			},
			typePickerChange(e) {
				let index = e.target.value
				this.typeIndex = index
				this.classifyIndex = ''
				switch (this.oneTypeIndex) {
					case 0:
						switch (index) {
							case 0:
								this.classifyList = ['谷物及其他作物的种植', '谷物的种植', '薯类的种植', '油料的种植', '豆类的种植', '棉花的种植', '麻类的种植',
									'糖料的种植', '烟草的种植', '其他作物的种植', '蔬菜、园艺作物的种植', '蔬菜的种植', '花卉的种植', '其他园艺作物的种植',
									'水果、坚果、饮料和香料作物的种植', '水果、坚果的种植', '茶及其他饮料作物的种植', '香料作物的种植', '中药材的种植'
								]
								break;
							case 1:
								this.classifyList = ['林木的培育和种植', '育种和育苗', '造林', '林木的抚育和管理', '木材和竹材的采运', '木材的采运', '竹材的采运',
									'林产品的采集'
								]
								break;
							case 2:
								this.classifyList = ['牲畜的饲养', '猪的饲养', '家禽的饲养', '狩猎和捕捉动物', '其他畜牧业']
								break;
							case 3:
								this.classifyList = ['海洋渔业', '海水养殖', '海洋捕捞', '内陆渔业', '内陆养殖', '内陆捕捞']
								break;
						}
						break;
					case 1:
						switch (index) {
							case 0:
								this.classifyList = ['煤炭开采和洗选业', '石油和天然气开采业', '黑色金属矿采选业', '有色金属矿采选业', '非金属矿采选业', '其他采矿业']
								break;
							case 1:
								this.classifyList = ['电力、热力的生产和供应业', '燃气生产和供应业', '水的生产和供应业']
								break;
							case 2:
								this.classifyList = ['电力、热力的生产和供应业', '燃气生产和供应业', '水的生产和供应业']
								break;
							case 3:
								this.classifyList = ['房屋和土木工程建筑业', '建筑安装业', '建筑装饰业', '其他建筑业']
								break;
						}
						break;
					case 2:
						this.classifyList = ['铁路运输业', '道路运输业', '城市公共交通业', '水上运输业', '航空运输业', '管道运输业', '装卸搬运和其他运输服务业',
							'仓储业', '邮政业'
						]
						// switch (index) {
						// 	case 0:
						// 		this.classifyList = ['铁路运输业', '道路运输业', '城市公共交通业', '水上运输业', '航空运输业', '管道运输业',
						// 			'装卸搬运和其他运输服务业', '仓储业', '邮政业'
						// 		]
						// 		break;
						// }
						break;
					case 3:
						switch (index) {
							case 0:
								this.classifyList = ['下一代信息网络产业', '电子核心产业', '新兴软件和新型信息技术服务', '互联网与云计算、大数据服务', '人工智能']
								break;
							case 1:
								this.classifyList = ['智能制造装备产业', '航空装备产业', '卫星及应用产业', '轨道交通装备产业', '海洋工程装备产业']
								break;
							case 2:
								this.classifyList = ['先进钢铁材料', '先进有色金属材料', '先进石化化工新材料', '先进无机非金属材料',
									'高性能纤维及制品和复合材料', '前沿新材料', '新材料相关服务'
								]
								break;
							case 3:
								this.classifyList = ['生物医药产业', '生物医学工程产业', '生物农业及相关产业', '生物质能产业', '其他生物业']
								break;
							case 4:
								this.classifyList = ['新能源汽车整车制造', '新能源汽车装置、配件制造', '新能源汽车相关设施制造', '新能源汽车相关服务']
								break;
							case 5:
								this.classifyList = ['核电产业', '风能产业', '太阳能产业', '生物质能及其他新能源产业', '智能电网产业']
								break;
							case 6:
								this.classifyList = ['高效节能产业', '先进环保产业', '资源循环利用产业']
								break;
						}
						break;
				}
			},
			classifyPickerChange(e) {
				this.classifyIndex = e.target.value
			},
			openLocation() {
				uni.chooseLocation({
					success: (res) => {
						this.location = res.address
					}
				})
			},
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
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-industry {
		padding-bottom: 192rpx;

		.item {
			position: relative;
			background: #fff;
			padding: 0 32rpx;

			&.segmentation {
				margin-bottom: 20rpx;
			}

			&.item-avatar-box {
				justify-content: space-between;
				align-items: center;
			}

			.label {
				font-size: 28rpx;
				color: #555;
				align-items: center;
				line-height: 72rpx;
				border-top: 1rpx solid #eee;
			}

			.up-load-avatar {
				position: absolute;
				width: 100%;
				height: 72rpx;
				left: 0;
				bottom: 0;
				opacity: 0;
			}

			.value {
				align-items: center;
				justify-content: space-between;
				font-size: 32rpx;
				color: #000;
				line-height: 88rpx;
				overflow: hidden;

				.up-load {
					margin: 20rpx 0 32rpx;
				}


				&.upload-avatar {
					position: relative;
					justify-content: flex-start;

				}

				&.no-upload {
					position: relative;
					font-size: 28rpx;


					.text {
						color: #F59A23;
						margin-left: 12rpx;
						display: inline-block;
					}
				}

				&.avatar-box {
					align-items: center;
				}

				.avatar {
					width: 76rpx;
					height: 76rpx;
					margin: 10rpx 10rpx 10rpx 0;
					border-radius: 50%;
				}

				.unit {
					font-size: 28rpx;
					color: #333;
				}
			}

		}

	}
</style>
