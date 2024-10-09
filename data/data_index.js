/**
 * Created by Rebecca_Han on 16/10/26.
 */
module.exports = {};

var index = {
    "id": 1,
    "data": [
        {
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "发布了项目1",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "智能环保垃圾桶设计项目",
            "answer_ctnt": "我们致力于设计一款具有智能分类功能的环保垃圾桶，以提升校园环境质量。这款垃圾桶将采用先进的传感器技术和智能算法，能够自动识别垃圾种类，并将其准确地分类投放...",
            "need_num": "5",
            "now_num": "3"
        },
        {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "发布了项目2",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "校园绿色能源发电装置设计项目",
            "answer_ctnt": "我们计划设计一套适用于校园的绿色能源发电装置，利用太阳能和风能等可再生能源为校园提供部分电力。该装置将结合高效的太阳能电池板和小型风力发电机，通过智能控制系统实现能源的优化分配和存储...",
            "need_num": "6",
            "now_num": "6"
        },
        {
            "question_id": 3,
            "answer_id": 61,
            "feed_source_id": 25,
            "feed_source_name": "George",
            "feed_source_txt": "发布了项目3",
            "feed_source_img": "../../images/icon9.jpeg",
            "question": "校园智能灌溉系统开发项目",
            "answer_ctnt": "打造一个智能校园灌溉系统，通过传感器监测土壤湿度和天气情况，自动调节灌溉水量和时间，实现高效节水的目的。该系统将运用物联网技术，实现远程监控和管理...",
            "need_num": "8",
            "now_num": "2"
        },
        {
            "question_id": 4,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "发布了项目4",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "校园文化创意产品设计项目",
            "answer_ctnt": "挖掘校园文化特色，设计一系列具有创意和实用性的校园文化创意产品，如文具、饰品、纪念品等。通过这个项目，弘扬校园文化，提升学校的品牌形象...",
            "need_num": "5",
            "now_num": "5"
        },
        {
            "question_id": 5,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "发布了项目5",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "校园环保骑行活动组织项目",
            "answer_ctnt": "组织一场校园环保骑行活动，倡导绿色出行，减少碳排放。活动将包括骑行路线规划、安全保障、环保宣传等方面，吸引更多同学参与到环保行动中来...",
            "need_num": "15",
            "now_num": "8"
        },
        {
            "question_id": 6,
            "answer_id": 61,
            "feed_source_id": 25,
            "feed_source_name": "George",
            "feed_source_txt": "发布了项目6",
            "feed_source_img": "../../images/icon9.jpeg",
            "question": "校园智能图书管理系统开发项目",
            "answer_ctnt": "设计开发一个校园智能图书管理系统，实现图书的快速检索、借阅管理、库存统计等功能。利用条形码技术和数据库管理，提高图书管理的效率和准确性...",
            "need_num": "6",
            "now_num": "7"
        },
        {
            "question_id": 7,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "发布了项目7",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "校园美食文化节策划项目",
            "answer_ctnt": "策划一场丰富多彩的校园美食文化节，展示各地美食特色，促进学生之间的文化交流。活动包括美食摊位、烹饪比赛、美食讲座等环节，营造浓厚的校园美食氛围...",
            "need_num": "15",
            "now_num": "13"
        },
        {
            "question_id": 8,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "发布了项目8",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "校园废旧物品创意改造项目",
            "answer_ctnt": "将校园中的废旧物品进行创意改造，制作成实用的装饰品或生活用品。通过这个项目，提高学生的环保意识和动手能力，同时为校园增添独特的艺术氛围...",
            "need_num": "15",
            "now_num": "15"
        }
    ]
};

// 循环遍历 data 数组，为每个项目添加 status 属性
index.data.forEach(item => {
    item.status = parseInt(item.need_num) > parseInt(item.now_num)? "筹备中" : "已结束";
});

module.exports.index = index;