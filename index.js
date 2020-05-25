// pages/index/index.js
Page({
  data: {
    titles: ['推荐案例', '可参观工地'],
    activeindex: 0,
    goodslist: [
      {
        goods_img: '/img/index_tab1.png',
        goods_img1: '/img/index_tab11.png',
        index_new: 'NEW',
        goods_title: '如何进行古典风的家居搭配装潢',
        goods_text:'3小时前'
      },
      {
        goods_img: '/img/index_tab1.png',
        goods_img1: '/img/index_tab11.png',
        index_new: 'NEW',
        goods_title: '如何进行古典风的家居搭配装潢',
        goods_text: '3小时前'
      },
    ],
    // 可参观工地
    goodslist1:[
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
      {
        goods_img: '/img/index_tab2.png',
        index_new: '幸福城',
        index_new1: '120m2',
        goods_title: '所属城市:浦东新区',
        goods_text: '施工金额:8万元'
      },
    ]
  },
  headelcilck(event) {
    console.log(event)
    const index = event.currentTarget.dataset.index;
    this.setData({
      activeindex: index
    })
  }
})