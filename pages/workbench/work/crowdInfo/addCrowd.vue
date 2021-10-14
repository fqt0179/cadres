<template>
	<view class="add-crowd">
		<view class="item" :class="{'uni-flex item-avatar-box': avatar }">
			<view class="label">头像</view>

			<view class="value upload-avatar  uni-flex" :class="{'avatar-box': avatar, 'no-upload': !avatar}">
				<image v-if="avatar" class="avatar" :src="avatar"></image>
				<uni-icons v-if="avatar" type="arrowright" color="#666"></uni-icons>
				<icon v-if="!avatar" type="warn" size="14"></icon>
				<view v-if="!avatar" class="text">未上传</view>
			</view>
			<uni-file-picker class="up-load-avatar" :del-icon="false" limit="1" v-model="avatarValue"
				return-type="object" fileMediatype="image" mode="list" @select="avatarSelect" @progress="avatarProgress"
				@success="avatarSuccess" @fail="avatarFail" />
		</view>
		<view class="item">
			<view class="label uni-flex uni-row">
				<text class="important-mark">*</text>
				<text class="label-txt">姓名</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入姓名" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">户口编号</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入户口编号" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">联系电话</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入联系电话" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">身份证号</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入身份证" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">与户主关系</text>
			</view>
			<view class="value uni-flex">
				<picker @change="relationPickerChange" :value="relationIndex" :range="relationList">
					<view class="uni-input">{{relationList[relationIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">人口类型</text>
			</view>
			<view class="value uni-flex">
				<picker @change="peopleTypePickerChange" :value="peopleTypeIndex" :range="peopleTypeList">
					<view class="uni-input">{{peopleTypeList[peopleTypeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">所属网络</text>
			</view>
			<view class="value uni-flex">
				<picker @change="networkPickerChange" :value="networkIndex" :range="networkList">
					<view class="uni-input">{{networkList[networkIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">性别</text>
			</view>
			<view class="value uni-flex">
				<picker @change="genderPickerChange" :value="genderIndex" :range="genderList">
					<view class="uni-input">{{genderList[genderIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">出生日期</text>
			</view>
			<view class="value uni-flex">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">民族</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">文化程度</text>
			</view>
			<view class="value uni-flex">
				<picker @change="eduPickerChange" :value="eduIndex" :range="eduList">
					<view class="uni-input">{{eduList[eduIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">政治面貌</text>
			</view>
			<view class="value uni-flex">
				<picker @change="politicsPickerChange" :value="politicsIndex" :range="politicsList">
					<view class="uni-input">{{politicsList[politicsIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="label-txt">归属组/队</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">人口属性</text>
			</view>
			<view class="value uni-flex">
				<picker @change="peopleAttrPickerChange" :value="peopleAttrIndex" :range="peopleAttrList">
					<view class="uni-input">{{peopleAttrList[peopleAttrIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">从事行业类型</text>
			</view>
			<view class="value uni-flex">
				<picker @change="industryTypePickerChange" :value="industryTypeIndex" :range="industryTypeList">
					<view class="uni-input">{{industryTypeList[industryTypeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">从事职业类型</text>
			</view>
			<view class="value uni-flex">
				<picker @change="professionTypePickerChange" :value="professionTypeIndex" :range="professionTypeList">
					<view class="uni-input">{{professionTypeList[professionTypeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">人才类型</text>
			</view>
			<view class="value uni-flex">
				<picker @change="talentTypePickerChange" :value="talentTypeIndex" :range="talentTypeList">
					<view class="uni-input">{{talentTypeList[talentTypeIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">户籍地址</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">是否外出务工</text>
			</view>
			<view class="value uni-flex">
				<picker @change="goOutPickerChange" :value="goOutIndex" :range="goOutList">
					<view class="uni-input">{{goOutList[goOutIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">入职企业名称</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入" />
			</view>
		</view>
		<view class="item segmentation">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">入职企业所属行业</text>
			</view>
			<view class="value uni-flex">
				<picker @change="enterpriseAttrPickerChange" :value="enterpriseAttrIndex" :range="enterpriseAttrList">
					<view class="uni-input">{{enterpriseAttrList[enterpriseAttrIndex]}}</view>
				</picker>
				<uni-icons type="arrowright" color="#666"></uni-icons>
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">技术特长</text>
			</view>
			<view class="value">
				<input class="input" type="text" value="请输入技术特长" />
			</view>
		</view>
		<view class="item">
			<view class="label uni-flex">
				<text class="important-mark">*</text>
				<text class="label-txt">技能证书</text>
			</view>
			<view class="value">
				<uni-file-picker class="up-load" v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</view>
		</view>
		<view class="cus-fixed-footer-btn-box">
			<button class="btn" type="primary" @click="save">{{id?'修改资料':'保存'}}</button>
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
				avatar: '',
				relationIndex: 0,
				relationList: ['户主', '夫妻', '父女', '父子'],
				peopleTypeIndex: 0,
				peopleTypeList: ['户主', '夫妻', '父女', '父子'],
				networkIndex: 0,
				networkList: ['1网络', '2网络', '父女', '父子'],
				genderIndex: 0,
				genderList: ['男', '女', '其他'],
				date: currentDate,
				eduIndex: 0,
				eduList: ['户主', '夫妻', '父女', '父子'],
				politicsIndex: 0,
				politicsList: ['户主', '夫妻', '父女', '父子'],
				peopleAttrIndex: 0,
				peopleAttrList: ['户主', '夫妻', '父女', '父子'],
				industryTypeIndex: 0,
				industryTypeList: ['户主', '夫妻', '父女', '父子'],
				professionTypeIndex: 0,
				professionTypeList: ['户主', '夫妻', '父女', '父子'],
				talentTypeIndex: 0,
				talentTypeList: ['户主', '夫妻', '父女', '父子'],
				goOutIndex: 0,
				goOutList: ['否', '是'],
				enterpriseAttrIndex: 0,
				enterpriseAttrList: ['工业', '畜牧业'],
				imageValue: [],
				avatarValue: [],

			};
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id || ''
			if (this.id) uni.setNavigationBarTitle({
				title: '群众详情'
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
			relationPickerChange(e) {
				this.relationIndex = e.target.value
			},
			peopleTypePickerChange(e) {
				this.peopleTypeIndex = e.target.value
			},
			networkPickerChange(e) {
				this.networkIndex = e.target.value
			},
			genderPickerChange(e) {
				this.genderIndex = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
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
			eduPickerChange(e) {
				this.eduIndex = e.target.value
			},
			politicsPickerChange(e) {
				this.politicsIndex = e.target.value
			},
			peopleAttrPickerChange(e) {
				this.peopleAttrIndex = e.target.value
			},
			industryTypePickerChange(e) {
				this.industryTypeIndex = e.target.value
			},
			professionTypePickerChange(e) {
				this.professionTypeIndex = e.target.value
			},
			talentTypePickerChange(e) {
				this.talentTypeIndex = e.target.value
			},
			goOutPickerChange(e) {
				this.goOutIndex = e.target.value
			},
			enterpriseAttrPickerChange(e) {
				this.enterpriseAttrIndex = e.target.value
			},
			// 获取上传状态
			avatarSelect(e) {
				console.log('选择文件：', e)
				this.avatar = e.tempFilePaths[0]
				this.avatarValue = []
			},
			// 获取上传进度
			avatarProgress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			avatarSuccess(e) {
				console.log('上传成功')
			},

			// 上传失败
			avatarFail(e) {
				console.log('上传失败：', e)
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
					title: this.id?'修改成功':'保存成功',
					hide: () => {
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-crowd {
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

				.important-mark {
					color: #f00;
				}
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

				.input {
					height: 84rpx;
				}
			}

		}

		.btn-box {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background: #fff;
			padding: 26rpx 32rpx;
			box-sizing: border-box;
		}

	}
</style>
