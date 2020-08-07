//	index.ts
//	获取应用实例
const app = getApp<IAppOption>()

function toIntColor(r: number, g: number, b: number) {
	return ((1 << 24) + (r << 16) + (g << 8) + b);
}

function toHex(r: number, g: number, b: number, a?: number) {
	a;
	let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	return hex;
}

Page({
	data: {
		motto: 'Hello	World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		r: 0x66,
		g: 0xcc,
		b: 0xff,
		a: 0,
		colorHex: "#66ccff",
		colorInt: toIntColor(0x66, 0xcc, 0xff)
	},
	onLoad() {
	},
	sliderChangingR(e: EventData) {
		this.setData({
			r: e.detail.value,
			colorHex: toHex(this.data.r, this.data.g, this.data.b),
			colorInt: toIntColor(this.data.r, this.data.g, this.data.b)
		});
	},
	sliderChangingG(e: EventData) {
		this.setData({
			g: e.detail.value,
			colorHex: toHex(this.data.r, this.data.g, this.data.b),
			colorInt: toIntColor(this.data.r, this.data.g, this.data.b)
		});
	},
	sliderChangingB(e: EventData) {
		this.setData({
			b: e.detail.value,
			colorHex: toHex(this.data.r, this.data.g, this.data.b),
			colorInt: toIntColor(this.data.r, this.data.g, this.data.b)
		});
	},
	sliderChangingA(e: EventData) {
		this.setData({
			a: e.detail.value,
			colorHex: toHex(this.data.r, this.data.g, this.data.b),
			colorInt: toIntColor(this.data.r, this.data.g, this.data.b)
		});
	}
})
