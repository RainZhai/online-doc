export default {
  'GET /product/spu/list': [
    {
      success: true,
      data: {
        pages: 2,
        total: 17,
        current: 1,
        records: [
          {
            spuId: 1,
            blackUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1873778166,3876004283&fm=26&gp=0.jpg',
            sectionNumber: '11',
            englishName: 'mac',
            seriesName: 'computer',
            backItemList: [],
            forClassList: [],
            delFlag: 0,
          },
          {
            spuId: 2,
            blackUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1873778166,3876004283&fm=26&gp=0.jpg',
            sectionNumber: '11',
            englishName: 'mac2',
            seriesName: 'computer',
            backItemList: [],
            forClassList: [],
            delFlag: 1,
          },
        ],
      },
    },
  ],
  'POST /product/spu/listDetail': {
    success: true,
    data: {
      spuId: 1,
      proSpuDTO: {
        spuEnglishAlias: "mac",
        spuChineseAlias: "mac笔记本",
        place: "mac仓库",
        saleTime: "2019-09-08",
        backItemId: "1",
        backItemName: "后台类目1",
        salePeople: "killy",
        coinUnit: "元",
        skuUnit: "台",
        saleAge: "12",
        spuSubEnglishName: "mac笔记本副名",
        spuChineseName: "mac笔记本",
        spuSubChineseName: "mac笔记本副名",
        isSubEnglishName: "mac笔记本副名",
        isChineseName: "mac笔记本",
        isSubChineseName: "mac笔记本副名",
        delFlag: 1,
        brandId: 1,
        brandEnglishName: "computer",
        seriesId: "mac",
      },
      spuShowDTOList: [],
      spuJointDTOList: [],
      spuAttachDTOList: [],
      totalSpuSpecList: [],
      totalSpuDescList: []
    },
  },
  'GET /api/products/platform-catalog': (req, res) => {
    setTimeout(() => {
      res.send([
        {
          key: 'S000000',
          index: 0,
          name: '衣服',
          level: '三级',
        },
        {
          key: 'S000001',
          index: 0,
          name: '鞋子',
          level: '三级',
        },
        {
          key: 'S000002',
          index: 0,
          name: '帽子',
          level: '三级',
        },
        {
          key: 'S000003',
          index: 0,
          name: '裤子',
          level: '三级',
        },
        {
          key: 'S000004',
          index: 0,
          name: '手套',
          level: '三级',
        },
        {
          key: 'S000005',
          index: 0,
          name: '内衣',
          level: '三级',
        },
      ]);
    }, 1000);
  },
};
