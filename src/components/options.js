
var hours = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
var days = [7, 8, 9, 10];
var data = [
    {
        "id": 1,
        "link": "https://movie.douban.com/subject/1292052/",
        "cname": "肖申克的救赎",
        "score": 9.7,
        "intro": "希望让人自由",
        "info": "导演: 弗兰克·德拉邦特 Frank Darabont   主演: 蒂姆·罗宾斯 Tim Robbins ...\n                            1994  美国  犯罪 剧情"
    },
    {
        "id": 2,
        "link": "https://movie.douban.com/subject/1291546/",
        "cname": "霸王别姬",
        "score": 9.6,
        "intro": "风华绝代",
        "info": "导演: 陈凯歌 Kaige Chen   主演: 张国荣 Leslie Cheung  张丰毅 Fengyi Zha...\n                            1993  中国大陆 中国香港  剧情 爱情 同性"
    },
    {
        "id": 3,
        "link": "https://movie.douban.com/subject/1292720/",
        "cname": "阿甘正传",
        "score": 9.5,
        "intro": "一部美国近现代史",
        "info": "导演: 罗伯特·泽米吉斯 Robert Zemeckis   主演: 汤姆·汉克斯 Tom Hanks  ...\n                            1994  美国  剧情 爱情"
    },
    {
        "id": 4,
        "link": "https://movie.douban.com/subject/1295644/",
        "cname": "这个杀手不太冷",
        "score": 9.4,
        "intro": "怪蜀黍和小萝莉不得不说的故事",
        "info": "导演: 吕克·贝松 Luc Besson   主演: 让·雷诺 Jean Reno  娜塔莉·波特曼 ...\n                            1994  法国  剧情 动作 犯罪"
    },
    {
        "id": 5,
        "link": "https://movie.douban.com/subject/1292063/",
        "cname": "美丽人生",
        "score": 9.5,
        "intro": "最美的谎言",
        "info": "导演: 罗伯托·贝尼尼 Roberto Benigni   主演: 罗伯托·贝尼尼 Roberto Beni...\n                            1997  意大利  剧情 喜剧 爱情 战争"
    },
    {
        "id": 6,
        "link": "https://movie.douban.com/subject/1292722/",
        "cname": "泰坦尼克号",
        "score": 9.4,
        "intro": "失去的才是永恒的 ",
        "info": "导演: 詹姆斯·卡梅隆 James Cameron   主演: 莱昂纳多·迪卡普里奥 Leonardo...\n                            1997  美国  剧情 爱情 灾难"
    },
    {
        "id": 7,
        "link": "https://movie.douban.com/subject/1291561/",
        "cname": "千与千寻",
        "score": 9.4,
        "intro": "最好的宫崎骏，最好的久石让 ",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 柊瑠美 Rumi Hîragi  入野自由 Miy...\n                            2001  日本  剧情 动画 奇幻"
    },
    {
        "id": 8,
        "link": "https://movie.douban.com/subject/1295124/",
        "cname": "辛德勒的名单",
        "score": 9.5,
        "intro": "拯救一个人，就是拯救整个世界",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 连姆·尼森 Liam Neeson...\n                            1993  美国  剧情 历史 战争"
    },
    {
        "id": 9,
        "link": "https://movie.douban.com/subject/3541415/",
        "cname": "盗梦空间",
        "score": 9.3,
        "intro": "诺兰给了我们一场无法盗取的梦",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 莱昂纳多·迪卡普里奥 Le...\n                            2010  美国 英国  剧情 科幻 悬疑 冒险"
    },
    {
        "id": 10,
        "link": "https://movie.douban.com/subject/3011091/",
        "cname": "忠犬八公的故事",
        "score": 9.4,
        "intro": "永远都不能忘记你所爱的人",
        "info": "导演: 莱塞·霍尔斯道姆 Lasse Hallström   主演: 理查·基尔 Richard Ger...\n                            2009  美国 英国  剧情"
    },
    {
        "id": 11,
        "link": "https://movie.douban.com/subject/1292001/",
        "cname": "海上钢琴师",
        "score": 9.3,
        "intro": "每个人都要走一条自己坚定了的路，就算是粉身碎骨 ",
        "info": "导演: 朱塞佩·托纳多雷 Giuseppe Tornatore   主演: 蒂姆·罗斯 Tim Roth  ...\n                            1998  意大利  剧情 音乐"
    },
    {
        "id": 12,
        "link": "https://movie.douban.com/subject/1292064/",
        "cname": "楚门的世界",
        "score": 9.3,
        "intro": "如果再也不能见到你，祝你早安，午安，晚安",
        "info": "导演: 彼得·威尔 Peter Weir   主演: 金·凯瑞 Jim Carrey  劳拉·琳妮 Lau...\n                            1998  美国  剧情 科幻"
    },
    {
        "id": 13,
        "link": "https://movie.douban.com/subject/3793023/",
        "cname": "三傻大闹宝莱坞",
        "score": 9.2,
        "intro": "英俊版憨豆，高情商版谢耳朵",
        "info": "导演: 拉库马·希拉尼 Rajkumar Hirani   主演: 阿米尔·汗 Aamir Khan  卡...\n                            2009  印度  剧情 喜剧 爱情 歌舞"
    },
    {
        "id": 14,
        "link": "https://movie.douban.com/subject/2131459/",
        "cname": "机器人总动员",
        "score": 9.3,
        "intro": "小瓦力，大人生",
        "info": "导演: 安德鲁·斯坦顿 Andrew Stanton   主演: 本·贝尔特 Ben Burtt  艾丽...\n                            2008  美国  科幻 动画 冒险"
    },
    {
        "id": 15,
        "link": "https://movie.douban.com/subject/1291549/",
        "cname": "放牛班的春天",
        "score": 9.3,
        "intro": "天籁一般的童声，是最接近上帝的存在 ",
        "info": "导演: 克里斯托夫·巴拉蒂 Christophe Barratier   主演: 热拉尔·朱尼奥 Gé...\n                            2004  法国 瑞士 德国  剧情 音乐"
    },
    {
        "id": 16,
        "link": "https://movie.douban.com/subject/1889243/",
        "cname": "星际穿越",
        "score": 9.3,
        "intro": "爱是一种力量，让我们超越时空感知它的存在",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 马修·麦康纳 Matthew Mc...\n                            2014  美国 英国 加拿大 冰岛  剧情 科幻 冒险"
    },
    {
        "id": 17,
        "link": "https://movie.douban.com/subject/1292213/",
        "cname": "大话西游之大圣娶亲",
        "score": 9.2,
        "intro": "一生所爱",
        "info": "导演: 刘镇伟 Jeffrey Lau   主演: 周星驰 Stephen Chow  吴孟达 Man Tat Ng...\n                            1995  中国香港 中国大陆  喜剧 爱情 奇幻 古装"
    },
    {
        "id": 18,
        "link": "https://movie.douban.com/subject/5912992/",
        "cname": "熔炉",
        "score": 9.3,
        "intro": "我们一路奋战不是为了改变世界，而是为了不让世界改变我们",
        "info": "导演: 黄东赫 Dong-hyuk Hwang   主演: 孔侑 Yoo Gong  郑有美 Yu-mi Jung ...\n                            2011  韩国  剧情"
    },
    {
        "id": 19,
        "link": "https://movie.douban.com/subject/25662329/",
        "cname": "疯狂动物城",
        "score": 9.2,
        "intro": "迪士尼给我们营造的乌托邦就是这样，永远善良勇敢，永远出乎意料",
        "info": "导演: 拜伦·霍华德 Byron Howard  瑞奇·摩尔 Rich Moore   主演: 金妮弗·...\n                            2016  美国  喜剧 动画 冒险"
    },
    {
        "id": 20,
        "link": "https://movie.douban.com/subject/1307914/",
        "cname": "无间道",
        "score": 9.2,
        "intro": "香港电影史上永不过时的杰作",
        "info": "导演: 刘伟强  麦兆辉   主演: 刘德华  梁朝伟  黄秋生\n                            2002  中国香港  剧情 犯罪 悬疑"
    },
    {
        "id": 21,
        "link": "https://movie.douban.com/subject/1291560/",
        "cname": "龙猫",
        "score": 9.2,
        "intro": "人人心中都有个龙猫，童年就永远不会消失",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 日高法子 Noriko Hidaka  坂本千夏 Ch...\n                            1988  日本  动画 奇幻 冒险"
    },
    {
        "id": 22,
        "link": "https://movie.douban.com/subject/1291841/",
        "cname": "教父",
        "score": 9.3,
        "intro": "千万不要记恨你的对手，这样会让你失去理智",
        "info": "导演: 弗朗西斯·福特·科波拉 Francis Ford Coppola   主演: 马龙·白兰度 M...\n                            1972  美国  剧情 犯罪"
    },
    {
        "id": 23,
        "link": "https://movie.douban.com/subject/1849031/",
        "cname": "当幸福来敲门",
        "score": 9.1,
        "intro": "平民励志片 ",
        "info": "导演: 加布里尔·穆奇诺 Gabriele Muccino   主演: 威尔·史密斯 Will Smith ...\n                            2006  美国  剧情 传记 家庭"
    },
    {
        "id": 24,
        "link": "https://movie.douban.com/subject/3319755/",
        "cname": "怦然心动",
        "score": 9.1,
        "intro": "真正的幸福是来自内心深处",
        "info": "导演: 罗伯·莱纳 Rob Reiner   主演: 玛德琳·卡罗尔 Madeline Carroll  卡...\n                            2010  美国  剧情 喜剧 爱情"
    },
    {
        "id": 25,
        "link": "https://movie.douban.com/subject/6786002/",
        "cname": "触不可及",
        "score": 9.2,
        "intro": "满满温情的高雅喜剧",
        "info": "导演: 奥利维·那卡什 Olivier Nakache  艾力克·托兰达 Eric Toledano   主...\n                            2011  法国  剧情 喜剧"
    },
    {
        "id": 26,
        "link": "https://movie.douban.com/subject/1851857/",
        "cname": "蝙蝠侠：黑暗骑士",
        "score": 9.2,
        "intro": "无尽的黑暗",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 克里斯蒂安·贝尔 Christ...\n                            2008  美国 英国  剧情 动作 科幻 犯罪 惊悚"
    },
    {
        "id": 27,
        "link": "https://movie.douban.com/subject/1296141/",
        "cname": "控方证人",
        "score": 9.6,
        "intro": "比利·怀德满分作品",
        "info": "导演: 比利·怀尔德 Billy Wilder   主演: 泰隆·鲍华 Tyrone Power  玛琳·...\n                            1957  美国  剧情 犯罪 悬疑"
    },
    {
        "id": 28,
        "link": "https://movie.douban.com/subject/1292365/",
        "cname": "活着",
        "score": 9.2,
        "intro": "张艺谋最好的电影",
        "info": "导演: 张艺谋 Yimou Zhang   主演: 葛优 You Ge  巩俐 Li Gong  姜武 Wu Jiang\n                            1994  中国大陆 中国香港  剧情 历史 家庭"
    },
    {
        "id": 29,
        "link": "https://movie.douban.com/subject/1300267/",
        "cname": "乱世佳人",
        "score": 9.3,
        "intro": "Tomorrow is another day.",
        "info": "导演: 维克多·弗莱明 Victor Fleming  乔治·库克 George Cukor   主演: 费...\n                            1939  美国  剧情 历史 爱情 战争"
    },
    {
        "id": 30,
        "link": "https://movie.douban.com/subject/20495023/",
        "cname": "寻梦环游记",
        "score": 9.1,
        "intro": "死亡不是真的逝去，遗忘才是永恒的消亡",
        "info": "导演: 李·昂克里奇 Lee Unkrich  阿德里安·莫利纳 Adrian Molina   主演: ...\n                            2017  美国  喜剧 动画 奇幻 音乐"
    },
    {
        "id": 31,
        "link": "https://movie.douban.com/subject/1293172/",
        "cname": "末代皇帝",
        "score": 9.2,
        "intro": "“不要跟我比惨，我比你更惨”再适合这部电影不过了",
        "info": "导演: 贝纳尔多·贝托鲁奇 Bernardo Bertolucci   主演: 尊龙 John Lone  陈...\n                            1987  英国 意大利 中国大陆 法国  剧情 传记 历史"
    },
    {
        "id": 32,
        "link": "https://movie.douban.com/subject/26387939/",
        "cname": "摔跤吧！爸爸",
        "score": 9,
        "intro": "你不是在为你一个人战斗，你要让千千万万的女性看到女生并不是只能相夫教子",
        "info": "导演: 涅提·蒂瓦里 Nitesh Tiwari   主演: 阿米尔·汗 Aamir Khan  法缇玛...\n                            2016  印度  剧情 传记 运动 家庭"
    },
    {
        "id": 33,
        "link": "https://movie.douban.com/subject/1291552/",
        "cname": "指环王3：王者无敌",
        "score": 9.2,
        "intro": "史诗的终章",
        "info": "导演: 彼得·杰克逊 Peter Jackson   主演: 伊利亚·伍德 Elijah Wood  西恩...\n                            2003  美国 新西兰  剧情 动作 奇幻 冒险"
    },
    {
        "id": 34,
        "link": "https://movie.douban.com/subject/30170448/",
        "cname": "何以为家",
        "score": 9.1,
        "intro": "凝视卑弱生命，用电影改变命运",
        "info": "导演: 娜丁·拉巴基 Nadine Labaki   主演: 扎因·拉费阿 Zain al-Rafeea  ...\n                            2018  黎巴嫩 法国 美国  剧情"
    },
    {
        "id": 35,
        "link": "https://movie.douban.com/subject/1929463/",
        "cname": "少年派的奇幻漂流",
        "score": 9.1,
        "intro": "瑰丽壮观、无人能及的冒险之旅",
        "info": "导演: 李安 Ang Lee   主演: 苏拉·沙玛 Suraj Sharma  伊尔凡·可汗 Irrfan...\n                            2012  美国 中国台湾 英国 加拿大  剧情 奇幻 冒险"
    },
    {
        "id": 36,
        "link": "https://movie.douban.com/subject/2129039/",
        "cname": "飞屋环游记",
        "score": 9,
        "intro": "最后那些最无聊的事情，才是最值得怀念的 ",
        "info": "导演: 彼特·道格特 Pete Docter  鲍勃·彼德森 Bob Peterson   主演: 爱德...\n                            2009  美国  剧情 喜剧 动画 冒险"
    },
    {
        "id": 37,
        "link": "https://movie.douban.com/subject/1293182/",
        "cname": "十二怒汉",
        "score": 9.4,
        "intro": "1957年的理想主义 ",
        "info": "导演: Sidney Lumet   主演: 亨利·方达 Henry Fonda  马丁·鲍尔萨姆 Marti...\n                            1957  美国  剧情"
    },
    {
        "id": 38,
        "link": "https://movie.douban.com/subject/1291858/",
        "cname": "鬼子来了",
        "score": 9.2,
        "intro": "对敌人的仁慈，就是对自己残忍",
        "info": "导演: 姜文 Wen Jiang   主演: 姜文 Wen Jiang  香川照之 Teruyuki Kagawa ...\n                            2000  中国大陆  剧情 历史 战争"
    },
    {
        "id": 39,
        "link": "https://movie.douban.com/subject/1291583/",
        "cname": "天空之城",
        "score": 9.1,
        "intro": "对天空的追逐，永不停止 ",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 田中真弓 Mayumi Tanaka  横泽启子 Ke...\n                            1986  日本  动画 奇幻 冒险"
    },
    {
        "id": 40,
        "link": "https://movie.douban.com/subject/1308807/",
        "cname": "哈尔的移动城堡",
        "score": 9.1,
        "intro": "带着心爱的人在天空飞翔",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 倍赏千惠子 Chieko Baishô  木村拓...\n                            2004  日本  动画 奇幻 冒险"
    },
    {
        "id": 41,
        "link": "https://movie.douban.com/subject/1299398/",
        "cname": "大话西游之月光宝盒",
        "score": 9,
        "intro": "旷古烁今",
        "info": "导演: 刘镇伟 Jeffrey Lau   主演: 周星驰 Stephen Chow  吴孟达 Man Tat Ng...\n                            1995  中国香港 中国大陆  喜剧 爱情 奇幻 古装"
    },
    {
        "id": 42,
        "link": "https://movie.douban.com/subject/21937452/",
        "cname": "素媛",
        "score": 9.2,
        "intro": "受过伤害的人总是笑得最开心，因为他们不愿意让身边的人承受一样的痛苦",
        "info": "导演: 李濬益 Jun-ik Lee   主演: 薛景求 Kyung-gu Sol  严志媛 Ji-won Uhm ...\n                            2013  韩国  剧情"
    },
    {
        "id": 43,
        "link": "https://movie.douban.com/subject/1291828/",
        "cname": "天堂电影院",
        "score": 9.2,
        "intro": "那些吻戏，那些青春，都在影院的黑暗里被泪水冲刷得无比清晰",
        "info": "导演: 朱塞佩·托纳多雷 Giuseppe Tornatore   主演: 安东内拉·阿蒂利 Anton...\n                            1988  意大利 法国  剧情 爱情"
    },
    {
        "id": 44,
        "link": "https://movie.douban.com/subject/1293839/",
        "cname": "罗马假日",
        "score": 9,
        "intro": "爱情哪怕只有一天",
        "info": "导演: 威廉·惠勒 William Wyler   主演: 奥黛丽·赫本 Audrey Hepburn  格...\n                            1953  美国  喜剧 剧情 爱情"
    },
    {
        "id": 45,
        "link": "https://movie.douban.com/subject/1298624/",
        "cname": "闻香识女人",
        "score": 9.1,
        "intro": "史上最美的探戈",
        "info": "导演: 马丁·布莱斯 Martin Brest   主演: 阿尔·帕西诺 Al Pacino  克里斯...\n                            1992  美国  剧情"
    },
    {
        "id": 46,
        "link": "https://movie.douban.com/subject/21937445/",
        "cname": "辩护人",
        "score": 9.2,
        "intro": "电影的现实意义大过电影本身",
        "info": "导演: 杨宇硕 Woo-seok Yang   主演: 宋康昊 Kang-ho Song  金英爱 Yeong-ae...\n                            2013  韩国  剧情"
    },
    {
        "id": 47,
        "link": "https://movie.douban.com/subject/1295038/",
        "cname": "哈利·波特与魔法石",
        "score": 9,
        "intro": "童话世界的开端",
        "info": "导演: Chris Columbus   主演: Daniel Radcliffe  Emma Watson  Rupert Grint\n                            2001  美国 英国  奇幻 冒险"
    },
    {
        "id": 48,
        "link": "https://movie.douban.com/subject/1292000/",
        "cname": "搏击俱乐部",
        "score": 9,
        "intro": "邪恶与平庸蛰伏于同一个母体，在特定的时间互相对峙",
        "info": "导演: 大卫·芬奇 David Fincher   主演: 爱德华·诺顿 Edward Norton  布拉...\n                            1999  美国 德国  剧情 动作 悬疑 惊悚"
    },
    {
        "id": 49,
        "link": "https://movie.douban.com/subject/26752088/",
        "cname": "我不是药神",
        "score": 9,
        "intro": "对我们国家而言，这样的电影多一部是一部",
        "info": "导演: 文牧野 Muye Wen   主演: 徐峥 Zheng Xu  王传君 Chuanjun Wang  周...\n                            2018  中国大陆  剧情 喜剧"
    },
    {
        "id": 50,
        "link": "https://movie.douban.com/subject/1291548/",
        "cname": "死亡诗社",
        "score": 9.1,
        "intro": "当一个死水般的体制内出现一个活跃的变数时，所有的腐臭都站在了光明的对面",
        "info": "导演: 彼得·威尔 Peter Weir   主演: 罗宾·威廉姆斯 Robin Williams  罗伯...\n                            1989  美国  剧情"
    },
    {
        "id": 51,
        "link": "https://movie.douban.com/subject/1299131/",
        "cname": "教父2",
        "score": 9.2,
        "intro": "优雅的孤独",
        "info": "导演: 弗朗西斯·福特·科波拉 Francis Ford Coppola   主演: 阿尔·帕西诺 A...\n                            1974  美国  剧情 犯罪"
    },
    {
        "id": 52,
        "link": "https://movie.douban.com/subject/1291572/",
        "cname": "指环王2：双塔奇兵",
        "score": 9.1,
        "intro": "承前启后的史诗篇章",
        "info": "导演: 彼得·杰克逊 Peter Jackson   主演: 伊利亚·伍德 Elijah Wood  西恩...\n                            2002  美国 新西兰  剧情 动作 奇幻 冒险"
    },
    {
        "id": 53,
        "link": "https://movie.douban.com/subject/1301753/",
        "cname": "狮子王",
        "score": 9,
        "intro": "动物版《哈姆雷特》",
        "info": "导演: Roger Allers  罗伯·明可夫 Rob Minkoff   主演: 乔纳森·泰勒·托马...\n                            1994  美国  动画 冒险 歌舞"
    },
    {
        "id": 54,
        "link": "https://movie.douban.com/subject/1900841/",
        "cname": "窃听风暴",
        "score": 9.1,
        "intro": "别样人生",
        "info": "导演: 弗洛里安·亨克尔·冯·多纳斯马尔克 Florian Henckel von Donnersmarck  &amp;n...\n                            2006  德国  剧情 悬疑"
    },
    {
        "id": 55,
        "link": "https://movie.douban.com/subject/1418019/",
        "cname": "大闹天宫",
        "score": 9.3,
        "intro": "经典之作，历久弥新",
        "info": "导演: 万籁鸣 Laiming Wan  唐澄 Cheng  Tang   主演: 邱岳峰 Yuefeng Qiu ...\n                            1961(中国大陆)  1964(中国大陆)  1978(中国大陆)  2004(中国大陆)  中国大陆  动画 奇幻"
    },
    {
        "id": 56,
        "link": "https://movie.douban.com/subject/1291571/",
        "cname": "指环王1：魔戒再现",
        "score": 9,
        "intro": "传说的开始",
        "info": "导演: 彼得·杰克逊 Peter Jackson   主演: 伊利亚·伍德 Elijah Wood  西恩...\n                            2001  新西兰 美国  剧情 动作 奇幻 冒险"
    },
    {
        "id": 57,
        "link": "https://movie.douban.com/subject/1293350/",
        "cname": "两杆大烟枪",
        "score": 9.1,
        "intro": "4个臭皮匠顶个诸葛亮，盖·里奇果然不是盖的",
        "info": "导演: Guy Ritchie   主演: Jason Flemyng  Dexter Fletcher  Nick Moran\n                            1998  英国  剧情 喜剧 犯罪"
    },
    {
        "id": 58,
        "link": "https://movie.douban.com/subject/1306029/",
        "cname": "美丽心灵",
        "score": 9,
        "intro": "爱是一切逻辑和原由",
        "info": "导演: 朗·霍华德 Ron Howard   主演: 罗素·克劳 Russell Crowe  艾德·哈...\n                            2001  美国  传记 剧情"
    },
    {
        "id": 59,
        "link": "https://movie.douban.com/subject/1305487/",
        "cname": "猫鼠游戏",
        "score": 9,
        "intro": "骗子大师和执著警探的你追我跑故事 ",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 莱昂纳多·迪卡普里奥 L...\n                            2002  美国 加拿大  传记 犯罪 剧情"
    },
    {
        "id": 60,
        "link": "https://movie.douban.com/subject/1291818/",
        "cname": "饮食男女",
        "score": 9.1,
        "intro": "人生不能像做菜，把所有的料都准备好了才下锅",
        "info": "导演: 李安 Ang Lee   主演: 郎雄 Sihung Lung  杨贵媚 Kuei-Mei Yang  吴...\n                            1994  中国台湾 美国  剧情 家庭"
    },
    {
        "id": 61,
        "link": "https://movie.douban.com/subject/1292224/",
        "cname": "飞越疯人院",
        "score": 9.1,
        "intro": "自由万岁",
        "info": "导演: 米洛斯·福尔曼 Miloš Forman   主演: 杰克·尼科尔森 Jack Nichols...\n                            1975  美国  剧情"
    },
    {
        "id": 62,
        "link": "https://movie.douban.com/subject/1291843/",
        "cname": "黑客帝国",
        "score": 9,
        "intro": "视觉革命",
        "info": "导演: 安迪·沃卓斯基 Andy Wachowski  拉娜·沃卓斯基 Lana Wachowski   主...\n                            1999  美国 澳大利亚  动作 科幻"
    },
    {
        "id": 63,
        "link": "https://movie.douban.com/subject/1296736/",
        "cname": "钢琴家",
        "score": 9.2,
        "intro": "音乐能化解仇恨",
        "info": "导演: 罗曼·波兰斯基 Roman Polanski   主演: 艾德里安·布洛迪 Adrien Brod...\n                            2002  法国 德国 英国 波兰  剧情 传记 历史 战争 音乐"
    },
    {
        "id": 64,
        "link": "https://movie.douban.com/subject/1309046/",
        "cname": "V字仇杀队",
        "score": 8.9,
        "intro": "一张面具背后的理想与革命",
        "info": "导演: 詹姆斯·麦克特格 James McTeigue   主演: 娜塔莉·波特曼 Natalie Por...\n                            2005  美国 英国 德国  剧情 动作 科幻 惊悚"
    },
    {
        "id": 65,
        "link": "https://movie.douban.com/subject/1485260/",
        "cname": "本杰明·巴顿奇事",
        "score": 8.9,
        "intro": "在时间之河里感受溺水之苦",
        "info": "导演: 大卫·芬奇 David Fincher   主演: 凯特·布兰切特 Cate Blanchett  ...\n                            2008  美国  剧情 爱情 奇幻"
    },
    {
        "id": 66,
        "link": "https://movie.douban.com/subject/26580232/",
        "cname": "看不见的客人",
        "score": 8.8,
        "intro": "你以为你以为的就是你以为的",
        "info": "导演: 奥里奥尔·保罗 Oriol Paulo   主演: 马里奥·卡萨斯 Mario Casas  阿...\n                            2016  西班牙  剧情 犯罪 悬疑 惊悚"
    },
    {
        "id": 67,
        "link": "https://movie.douban.com/subject/3742360/",
        "cname": "让子弹飞",
        "score": 8.8,
        "intro": "你给我翻译翻译，神马叫做TMD的惊喜",
        "info": "导演: 姜文 Wen Jiang   主演: 姜文 Wen Jiang  葛优 You Ge  周润发 Yun-F...\n                            2010  中国大陆 中国香港  剧情 喜剧 动作 西部"
    },
    {
        "id": 68,
        "link": "https://movie.douban.com/subject/1292402/",
        "cname": "西西里的美丽传说",
        "score": 8.9,
        "intro": "美丽无罪",
        "info": "导演: 朱塞佩·托纳多雷 Giuseppe Tornatore   主演: 莫妮卡·贝鲁奇 Monica ...\n                            2000  意大利 美国  剧情 战争 情色"
    },
    {
        "id": 69,
        "link": "https://movie.douban.com/subject/1303021/",
        "cname": "小鞋子",
        "score": 9.2,
        "intro": "奔跑的孩子是天使",
        "info": "导演: 马基德·马基迪 Majid Majidi   主演: 法拉赫阿米尔·哈什米安 Amir Fa...\n                            1997  伊朗  剧情 儿童 家庭"
    },
    {
        "id": 70,
        "link": "https://movie.douban.com/subject/1292849/",
        "cname": "拯救大兵瑞恩",
        "score": 9,
        "intro": "美利坚精神输出大片No1.",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 汤姆·汉克斯 Tom Hanks...\n                            1998  美国  剧情 历史 战争"
    },
    {
        "id": 71,
        "link": "https://movie.douban.com/subject/3442220/",
        "cname": "海豚湾",
        "score": 9.3,
        "intro": "海豚的微笑，是世界上最高明的伪装",
        "info": "导演: 路易·西霍尤斯 Louie Psihoyos   主演: Richard O'Barry  路易·西霍...\n                            2009  美国  纪录片"
    },
    {
        "id": 72,
        "link": "https://movie.douban.com/subject/1292220/",
        "cname": "情书",
        "score": 8.9,
        "intro": "暗恋的极致",
        "info": "导演: 岩井俊二 Shunji Iwai   主演: 中山美穗 Miho Nakayama  丰川悦司 Ets...\n                            1995  日本  剧情 爱情"
    },
    {
        "id": 73,
        "link": "https://movie.douban.com/subject/3008247/",
        "cname": "穿条纹睡衣的男孩",
        "score": 9.1,
        "intro": "尽管有些不切实际的幻想，这部电影依旧是一部感人肺腑的佳作",
        "info": "导演: 马克·赫尔曼 Mark Herman   主演: 阿萨·巴特菲尔德 Asa Butterfield ...\n                            2008  英国 美国  剧情 战争"
    },
    {
        "id": 74,
        "link": "https://movie.douban.com/subject/1294408/",
        "cname": "音乐之声",
        "score": 9,
        "intro": "用音乐化解仇恨，让歌声串起美好",
        "info": "导演: 罗伯特·怀斯 Robert Wise   主演: 朱莉·安德鲁斯 Julie Andrews  克...\n                            1965  美国  剧情 传记 爱情 歌舞"
    },
    {
        "id": 75,
        "link": "https://movie.douban.com/subject/27060077/",
        "cname": "绿皮书",
        "score": 8.9,
        "intro": "去除成见，需要勇气",
        "info": "导演: 彼得·法雷里 Peter Farrelly   主演: 维果·莫腾森 Viggo Mortensen ...\n                            2018  美国  剧情 喜剧 传记"
    },
    {
        "id": 76,
        "link": "https://movie.douban.com/subject/1292262/",
        "cname": "美国往事",
        "score": 9.2,
        "intro": "往事如烟，无处祭奠",
        "info": "导演: 赛尔乔·莱翁内 Sergio Leone   主演: 罗伯特·德尼罗 Robert De Niro ...\n                            1984  美国 意大利  犯罪 剧情"
    },
    {
        "id": 77,
        "link": "https://movie.douban.com/subject/25958717/",
        "cname": "海蒂和爷爷",
        "score": 9.2,
        "intro": "如果生活中有什么使你感到快乐，那就去做吧！不要管别人说什么",
        "info": "导演: 阿兰·葛斯彭纳 Alain Gsponer   主演: 阿努克·斯特芬 Anuk Steffen ...\n                            2015  德国 瑞士 南非  剧情 冒险 家庭"
    },
    {
        "id": 78,
        "link": "https://movie.douban.com/subject/1780330/",
        "cname": "致命魔术",
        "score": 8.9,
        "intro": "孪生蝙蝠侠大战克隆金刚狼",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 休·杰克曼 Hugh Jackman...\n                            2006  美国 英国  剧情 悬疑 惊悚"
    },
    {
        "id": 79,
        "link": "https://movie.douban.com/subject/1291832/",
        "cname": "低俗小说",
        "score": 8.8,
        "intro": "故事的高级讲法",
        "info": "导演: 昆汀·塔伦蒂诺 Quentin Tarantino   主演: 约翰·特拉沃尔塔 John Tra...\n                            1994  美国  剧情 喜剧 犯罪"
    },
    {
        "id": 80,
        "link": "https://movie.douban.com/subject/1292223/",
        "cname": "七宗罪",
        "score": 8.8,
        "intro": "警察抓小偷，老鼠玩死猫",
        "info": "导演: 大卫·芬奇 David Fincher   主演: 摩根·弗里曼 Morgan Freeman  布...\n                            1995  美国  剧情 犯罪 悬疑 惊悚"
    },
    {
        "id": 81,
        "link": "https://movie.douban.com/subject/1293544/",
        "cname": "沉默的羔羊",
        "score": 8.8,
        "intro": "安东尼·霍普金斯的顶级表演",
        "info": "导演: 乔纳森·戴米 Jonathan Demme   主演: 朱迪·福斯特 Jodie Foster  安...\n                            1991  美国  剧情 犯罪 惊悚"
    },
    {
        "id": 82,
        "link": "https://movie.douban.com/subject/1292343/",
        "cname": "蝴蝶效应",
        "score": 8.8,
        "intro": "人的命运被自己瞬间的抉择改变",
        "info": "导演: 埃里克·布雷斯 Eric Bress  J·麦基·格鲁伯 J. Mackye Gruber   主...\n                            2004  美国 加拿大  剧情 悬疑 科幻 惊悚"
    },
    {
        "id": 83,
        "link": "https://movie.douban.com/subject/1292679/",
        "cname": "春光乍泄",
        "score": 8.9,
        "intro": "爱情纠缠，男女一致",
        "info": "导演: 王家卫 Kar Wai Wong   主演: 张国荣 Leslie Cheung  梁朝伟 Tony Leu...\n                            1997  中国香港 日本 韩国  剧情 爱情 同性"
    },
    {
        "id": 84,
        "link": "https://movie.douban.com/subject/2334904/",
        "cname": "禁闭岛",
        "score": 8.8,
        "intro": "昔日翩翩少年，今日大腹便便",
        "info": "导演: Martin Scorsese   主演: 莱昂纳多·迪卡普里奥 Leonardo DiCaprio  ...\n                            2010  美国  剧情 悬疑 惊悚"
    },
    {
        "id": 85,
        "link": "https://movie.douban.com/subject/1292656/",
        "cname": "心灵捕手",
        "score": 8.9,
        "intro": "人生中应该拥有这样的一段豁然开朗",
        "info": "导演: 格斯·范·桑特 Gus Van Sant   主演: 马特·达蒙 Matt Damon  罗宾·...\n                            1997  美国  剧情"
    },
    {
        "id": 86,
        "link": "https://movie.douban.com/subject/1787291/",
        "cname": "被嫌弃的松子的一生",
        "score": 8.9,
        "intro": "以戏谑来戏谑戏谑",
        "info": "导演: 中岛哲也 Tetsuya Nakashima   主演: 中谷美纪 Miki Nakatani  瑛太 E...\n                            2006  日本  剧情 歌舞"
    },
    {
        "id": 87,
        "link": "https://movie.douban.com/subject/11525673/",
        "cname": "布达佩斯大饭店",
        "score": 8.8,
        "intro": "小清新的故事里注入了大历史的情怀",
        "info": "导演: 韦斯·安德森 Wes Anderson   主演: 拉尔夫·费因斯 Ralph Fiennes  ...\n                            2014  美国 德国 英国  剧情 喜剧 冒险"
    },
    {
        "id": 88,
        "link": "https://movie.douban.com/subject/1652587/",
        "cname": "阿凡达",
        "score": 8.7,
        "intro": "绝对意义上的美轮美奂",
        "info": "导演: 詹姆斯·卡梅隆 James Cameron   主演: 萨姆·沃辛顿 Sam Worthington ...\n                            2009  美国 英国  动作 科幻 冒险"
    },
    {
        "id": 89,
        "link": "https://movie.douban.com/subject/1292370/",
        "cname": "剪刀手爱德华",
        "score": 8.7,
        "intro": "浪漫忧郁的成人童话",
        "info": "导演: 蒂姆·波顿 Tim Burton   主演: 约翰尼·德普 Johnny Depp  薇诺娜·...\n                            1990  美国  剧情 奇幻 爱情"
    },
    {
        "id": 90,
        "link": "https://movie.douban.com/subject/1294371/",
        "cname": "摩登时代",
        "score": 9.3,
        "intro": "大时代中的人生，小人物的悲喜",
        "info": "导演: 查理·卓别林 Charles Chaplin   主演: 查理·卓别林 Charles Chaplin ...\n                            1936  美国  剧情 喜剧 爱情"
    },
    {
        "id": 91,
        "link": "https://movie.douban.com/subject/1294639/",
        "cname": "勇敢的心",
        "score": 8.9,
        "intro": "史诗大片的典范",
        "info": "导演: 梅尔·吉布森 Mel Gibson   主演: 梅尔·吉布森 Mel Gibson  苏菲·玛...\n                            1995  美国  动作 传记 剧情 历史 战争"
    },
    {
        "id": 92,
        "link": "https://movie.douban.com/subject/1292215/",
        "cname": "天使爱美丽",
        "score": 8.7,
        "intro": "法式小清新 ",
        "info": "导演: 让-皮埃尔·热内 Jean-Pierre Jeunet   主演: 奥黛丽·塔图 Audrey Tau...\n                            2001  法国 德国  喜剧 爱情"
    },
    {
        "id": 93,
        "link": "https://movie.douban.com/subject/1302425/",
        "cname": "喜剧之王",
        "score": 8.7,
        "intro": "我是一个演员",
        "info": "导演: 周星驰 Stephen Chow  李力持 Lik-Chi Lee   主演: 周星驰 Stephen Ch...\n                            1999  中国香港  喜剧 剧情 爱情"
    },
    {
        "id": 94,
        "link": "https://movie.douban.com/subject/1297192/",
        "cname": "致命ID",
        "score": 8.8,
        "intro": "最不可能的那个人永远是最可能的",
        "info": "导演: 詹姆斯·曼高德 James Mangold   主演: 约翰·库萨克 John Cusack  雷...\n                            2003  美国  剧情 悬疑 惊悚"
    },
    {
        "id": 95,
        "link": "https://movie.douban.com/subject/1298070/",
        "cname": "加勒比海盗",
        "score": 8.7,
        "intro": "约翰尼·德普的独角戏",
        "info": "导演: 戈尔·维宾斯基 Gore Verbinski   主演: 约翰尼·德普 Johnny Depp  ...\n                            2003  美国  动作 冒险 奇幻"
    },
    {
        "id": 96,
        "link": "https://movie.douban.com/subject/1418834/",
        "cname": "断背山",
        "score": 8.8,
        "intro": "每个人心中都有一座断背山",
        "info": "导演: 李安 Ang Lee   主演: 希斯·莱杰 Heath Ledger  杰克·吉伦哈尔 Jake...\n                            2005  美国 加拿大  剧情 爱情 同性 家庭"
    },
    {
        "id": 97,
        "link": "https://movie.douban.com/subject/1300299/",
        "cname": "杀人回忆",
        "score": 8.8,
        "intro": "关于连环杀人悬案的集体回忆",
        "info": "导演: 奉俊昊 Joon-ho Bong   主演: 宋康昊 Kang-ho Song  金相庆 Sang-kyun...\n                            2003  韩国  剧情 动作 犯罪 悬疑 惊悚"
    },
    {
        "id": 98,
        "link": "https://movie.douban.com/subject/6985810/",
        "cname": "狩猎",
        "score": 9.1,
        "intro": "人言可畏",
        "info": "导演: 托马斯·温特伯格 Thomas Vinterberg   主演: 麦斯·米科尔森 Mads Mik...\n                            2012  丹麦 瑞典  剧情"
    },
    {
        "id": 99,
        "link": "https://movie.douban.com/subject/3011235/",
        "cname": "哈利·波特与死亡圣器(下)",
        "score": 8.8,
        "intro": "10年的完美句点",
        "info": "导演: 大卫·叶茨 David Yates   主演: 丹尼尔·雷德克里夫 Daniel Radcliffe...\n                            2011  美国 英国  奇幻 冒险"
    },
    {
        "id": 100,
        "link": "https://movie.douban.com/subject/1297359/",
        "cname": "幽灵公主",
        "score": 8.9,
        "intro": "人与自然的战争史诗",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 松田洋治 Yôji Matsuda  石田百合...\n                            1997  日本  动画 奇幻 冒险"
    },
    {
        "id": 101,
        "link": "https://movie.douban.com/subject/26799731/",
        "cname": "请以你的名字呼唤我",
        "score": 8.9,
        "intro": "沉醉在电影的情感和视听氛围中无法自拔",
        "info": "导演: 卢卡·瓜达尼诺 Luca Guadagnino   主演: 艾米·汉莫 Armie Hammer  ...\n                            2017  意大利 法国 巴西 美国 荷兰 德国  剧情 爱情 同性"
    },
    {
        "id": 102,
        "link": "https://movie.douban.com/subject/1291875/",
        "cname": "阳光灿烂的日子",
        "score": 8.8,
        "intro": "一场华丽的意淫",
        "info": "导演: 姜文 Wen Jiang   主演: 夏雨 Yu Xia  宁静 Jing Ning  陶虹 Hong Tao\n                            1994  中国大陆 中国香港  剧情 爱情"
    },
    {
        "id": 103,
        "link": "https://movie.douban.com/subject/2149806/",
        "cname": "入殓师",
        "score": 8.8,
        "intro": "死可能是一道门，逝去并不是终结，而是超越，走向下一程",
        "info": "导演: 泷田洋二郎 Yôjirô Takita   主演: 本木雅弘 Masahiro Motoki  ...\n                            2008  日本  剧情"
    },
    {
        "id": 104,
        "link": "https://movie.douban.com/subject/1291999/",
        "cname": "重庆森林",
        "score": 8.7,
        "intro": "寂寞没有期限",
        "info": "导演: 王家卫 Kar Wai Wong   主演: 林青霞 Brigitte Lin  金城武 Takeshi K...\n                            1994  中国香港  剧情 爱情"
    },
    {
        "id": 105,
        "link": "https://movie.douban.com/subject/25814705/",
        "cname": "小森林 夏秋篇",
        "score": 9,
        "intro": "那些静得只能听见呼吸的日子里，你明白孤独即生活",
        "info": "导演: 森淳一 Junichi Mori   主演: 桥本爱 Ai Hashimoto  三浦贵大 Takahir...\n                            2014  日本  剧情"
    },
    {
        "id": 106,
        "link": "https://movie.douban.com/subject/1297630/",
        "cname": "第六感",
        "score": 8.9,
        "intro": "深入内心的恐怖，出人意料的结局",
        "info": "导演: M·奈特·沙马兰 M. Night Shyamalan   主演: 布鲁斯·威利斯 Bruce Wi...\n                            1999  美国  剧情 悬疑 惊悚"
    },
    {
        "id": 107,
        "link": "https://movie.douban.com/subject/10777687/",
        "cname": "7号房的礼物",
        "score": 8.9,
        "intro": "《我是山姆》的《美丽人生》",
        "info": "导演: 李焕庆 Hwan-kyeong Lee   主演: 柳承龙 Seung-yong Ryoo  朴信惠 Shi...\n                            2013  韩国  剧情 喜剧 家庭"
    },
    {
        "id": 108,
        "link": "https://movie.douban.com/subject/21318488/",
        "cname": "消失的爱人",
        "score": 8.7,
        "intro": "年度最佳date movie",
        "info": "导演: 大卫·芬奇 David Fincher   主演: 本·阿弗莱克 Ben Affleck  罗莎蒙...\n                            2014  美国  剧情 犯罪 悬疑 惊悚"
    },
    {
        "id": 109,
        "link": "https://movie.douban.com/subject/1865703/",
        "cname": "红辣椒",
        "score": 9,
        "intro": "梦的勾结",
        "info": "导演: 今敏 Satoshi Kon   主演: 林原惠美 Megumi Hayashibara  江守彻 Toru...\n                            2006  日本  动画 悬疑 科幻 惊悚"
    },
    {
        "id": 110,
        "link": "https://movie.douban.com/subject/25814707/",
        "cname": "小森林 冬春篇",
        "score": 9,
        "intro": "尊敬他人，尊敬你生活的这片土地，明白孤独是人生的常态",
        "info": "导演: 森淳一 Junichi Mori   主演: 桥本爱 Ai Hashimoto  三浦贵大 Takahir...\n                            2015  日本  剧情"
    },
    {
        "id": 111,
        "link": "https://movie.douban.com/subject/1296339/",
        "cname": "爱在黎明破晓前",
        "score": 8.8,
        "intro": "缘分是个连绵词，最美不过一瞬",
        "info": "导演: 理查德·林克莱特 Richard Linklater   主演: 伊桑·霍克 Ethan Hawke ...\n                            1995  美国 奥地利 瑞士  剧情 爱情"
    },
    {
        "id": 112,
        "link": "https://movie.douban.com/subject/1297052/",
        "cname": "侧耳倾听",
        "score": 8.9,
        "intro": "少女情怀总是诗",
        "info": "导演: 近藤喜文 Yoshifumi Kondo   主演: 本名阳子 Youko Honna  小林桂树 K...\n                            1995  日本  剧情 爱情 动画"
    },
    {
        "id": 113,
        "link": "https://movie.douban.com/subject/3072124/",
        "cname": "玛丽和马克思",
        "score": 8.9,
        "intro": "你是我最好的朋友，你是我唯一的朋友 ",
        "info": "导演: 亚当·艾略特 Adam Elliot   主演: 托妮·科莱特 Toni Collette  菲利...\n                            2009  澳大利亚  剧情 喜剧 动画"
    },
    {
        "id": 114,
        "link": "https://movie.douban.com/subject/1292434/",
        "cname": "一一",
        "score": 9,
        "intro": "我们都曾经是一一",
        "info": "导演: 杨德昌 Edward Yang   主演: 吴念真  李凯莉 Kelly Lee  金燕玲 Elai...\n                            2000  中国台湾 日本  剧情 爱情 家庭"
    },
    {
        "id": 115,
        "link": "https://movie.douban.com/subject/1306249/",
        "cname": "唐伯虎点秋香",
        "score": 8.6,
        "intro": "华太师是黄霑，吴镇宇四大才子之一",
        "info": "导演: 李力持 Lik-Chi Lee   主演: 周星驰 Stephen Chow  巩俐 Li Gong  陈...\n                            1993  中国香港  喜剧 爱情 古装"
    },
    {
        "id": 116,
        "link": "https://movie.douban.com/subject/4268598/",
        "cname": "告白",
        "score": 8.7,
        "intro": "没有一人完全善，也没有一人完全恶",
        "info": "导演: 中岛哲也 Tetsuya Nakashima   主演: 松隆子 Takako Matsu  冈田将生 ...\n                            2010  日本  剧情 惊悚"
    },
    {
        "id": 117,
        "link": "https://movie.douban.com/subject/5322596/",
        "cname": "超脱",
        "score": 8.9,
        "intro": "穷尽一生，我们要学会的，不过是彼此拥抱",
        "info": "导演: 托尼·凯耶 Tony Kaye   主演: 艾德里安·布洛迪 Adrien Brody  马西...\n                            2011  美国  剧情"
    },
    {
        "id": 118,
        "link": "https://movie.douban.com/subject/3395373/",
        "cname": "蝙蝠侠：黑暗骑士崛起",
        "score": 8.8,
        "intro": "诺兰就是保证",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 克里斯蒂安·贝尔 Christ...\n                            2012  美国 英国  剧情 动作 科幻 犯罪 惊悚"
    },
    {
        "id": 119,
        "link": "https://movie.douban.com/subject/1297447/",
        "cname": "倩女幽魂",
        "score": 8.7,
        "intro": "两张绝世的脸 ",
        "info": "导演: 程小东 Siu-Tung Ching   主演: 张国荣 Leslie Cheung  王祖贤 Joey W...\n                            1987  中国香港  爱情 奇幻 武侠 古装"
    },
    {
        "id": 120,
        "link": "https://movie.douban.com/subject/1291545/",
        "cname": "大鱼",
        "score": 8.8,
        "intro": "抱着梦想而活着的人是幸福的，怀抱梦想而死去的人是不朽的",
        "info": "导演: 蒂姆·波顿 Tim Burton   主演: 伊万·麦克格雷格 Ewan McGregor  阿...\n                            2003  美国  剧情 家庭 奇幻 冒险"
    },
    {
        "id": 121,
        "link": "https://movie.douban.com/subject/4917726/",
        "cname": "阳光姐妹淘",
        "score": 8.8,
        "intro": "再多各自牛逼的时光，也比不上一起傻逼的岁月 ",
        "info": "导演: 姜炯哲 Hyeong-Cheol Kang   主演: 沈恩京 Eun-kyung Shim  闵孝琳 Hy...\n                            2011  韩国  剧情 喜剧"
    },
    {
        "id": 122,
        "link": "https://movie.douban.com/subject/1316510/",
        "cname": "射雕英雄传之东成西就",
        "score": 8.7,
        "intro": "百看不厌 ",
        "info": "导演: 刘镇伟 Jeffrey Lau   主演: 梁朝伟 Tony Leung Chiu Wai  林青霞 Bri...\n                            1993  中国香港  喜剧 奇幻 武侠 古装"
    },
    {
        "id": 123,
        "link": "https://movie.douban.com/subject/5989818/",
        "cname": "萤火之森",
        "score": 8.9,
        "intro": "触不到的恋人",
        "info": "导演: 大森贵弘 Takahiro Omori   主演: 佐仓绫音 Ayane Sakura  内山昂辉 K...\n                            2011  日本  剧情 爱情 动画 奇幻"
    },
    {
        "id": 124,
        "link": "https://movie.douban.com/subject/1305164/",
        "cname": "甜蜜蜜",
        "score": 8.8,
        "intro": "相逢只要一瞬间，等待却像是一辈子",
        "info": "导演: 陈可辛 Peter Chan   主演: 黎明 Leon Lai  张曼玉 Maggie Cheung  ...\n                            1996  中国香港  剧情 爱情"
    },
    {
        "id": 125,
        "link": "https://movie.douban.com/subject/2353023/",
        "cname": "驯龙高手",
        "score": 8.7,
        "intro": "和谐的生活离不开摸头与被摸头",
        "info": "导演: 迪恩·德布洛斯 Dean DeBlois  克里斯·桑德斯 Chris Sanders   主演:...\n                            2010  美国  动画 奇幻 冒险"
    },
    {
        "id": 126,
        "link": "https://movie.douban.com/subject/1292337/",
        "cname": "无人知晓",
        "score": 9.1,
        "intro": "我的平常生活就是他人的幸福",
        "info": "导演: 是枝裕和 Hirokazu Koreeda   主演: 柳乐优弥 Yûya Yagira  北浦爱...\n                            2004  日本  剧情"
    },
    {
        "id": 127,
        "link": "https://movie.douban.com/subject/11026735/",
        "cname": "超能陆战队",
        "score": 8.7,
        "intro": "Balalala~~~",
        "info": "导演: 唐·霍尔 Don Hall  克里斯·威廉姆斯 Chris Williams   主演: 斯科特...\n                            2014  美国  喜剧 动作 科幻 动画 冒险"
    },
    {
        "id": 128,
        "link": "https://movie.douban.com/subject/1292274/",
        "cname": "幸福终点站",
        "score": 8.8,
        "intro": "有时候幸福需要等一等 ",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 汤姆·汉克斯 Tom Hanks...\n                            2004  美国  喜剧 剧情 爱情"
    },
    {
        "id": 129,
        "link": "https://movie.douban.com/subject/4202302/",
        "cname": "借东西的小人阿莉埃蒂",
        "score": 8.8,
        "intro": "曾经的那段美好会沉淀为一辈子的记忆",
        "info": "导演: 米林宏昌 Hiromasa Yonebayashi   主演: 志田未来 Mirai Shida  神木...\n                            2010  日本  动画 奇幻 冒险"
    },
    {
        "id": 130,
        "link": "https://movie.douban.com/subject/1293359/",
        "cname": "菊次郎的夏天",
        "score": 8.8,
        "intro": "从没见过那么流氓的温柔，从没见过那么温柔的流氓",
        "info": "导演: 北野武 Takeshi Kitano   主演: 北野武 Takeshi Kitano  关口雄介 Yus...\n                            1999  日本  剧情 喜剧"
    },
    {
        "id": 131,
        "link": "https://movie.douban.com/subject/1291990/",
        "cname": "爱在日落黄昏时",
        "score": 8.8,
        "intro": "九年后的重逢是世俗和责任的交叠，没了悸动和青涩，沧桑而温暖",
        "info": "导演: 理查德·林克莱特 Richard Linklater   主演: 伊桑·霍克 Ethan Hawke ...\n                            2004  美国 法国  剧情 爱情"
    },
    {
        "id": 132,
        "link": "https://movie.douban.com/subject/21360417/",
        "cname": "恐怖直播",
        "score": 8.8,
        "intro": "恐怖分子的“秋菊打官司”",
        "info": "导演: 金秉祐 Byeong-woo Kim   主演: 河正宇 Jung-woo Ha  李璟荣 Kyeong-y...\n                            2013  韩国  剧情 犯罪 悬疑"
    },
    {
        "id": 133,
        "link": "https://movie.douban.com/subject/1300992/",
        "cname": "完美的世界",
        "score": 9.1,
        "intro": "坏人的好总是比好人的好来得更感人",
        "info": "导演: 克林特·伊斯特伍德 Clint Eastwood   主演: 凯文·科斯特纳 Kevin Cos...\n                            1993  美国  剧情 犯罪"
    },
    {
        "id": 134,
        "link": "https://movie.douban.com/subject/3287562/",
        "cname": "神偷奶爸",
        "score": 8.6,
        "intro": "Mr. I Don't Care其实也有Care的时候",
        "info": "导演: 皮艾尔·柯芬 Pierre Coffin  克里斯·雷纳德 Chris Renaud   主演: ...\n                            2010  美国 法国  喜剧 动画 冒险"
    },
    {
        "id": 135,
        "link": "https://movie.douban.com/subject/1291579/",
        "cname": "怪兽电力公司",
        "score": 8.7,
        "intro": "不要给它起名字，起了名字就有感情了",
        "info": "导演: 彼特·道格特 Pete Docter  大卫·斯沃曼 David Silverman   主演: 约...\n                            2001  美国  儿童 喜剧 动画 奇幻 冒险"
    },
    {
        "id": 136,
        "link": "https://movie.douban.com/subject/1858711/",
        "cname": "玩具总动员3",
        "score": 8.8,
        "intro": "跨度十五年的欢乐与泪水",
        "info": "导演: 李·昂克里奇 Lee Unkrich   主演: 汤姆·汉克斯 Tom Hanks  蒂姆·艾...\n                            2010  美国  喜剧 动画 奇幻 冒险"
    },
    {
        "id": 137,
        "link": "https://movie.douban.com/subject/26325320/",
        "cname": "血战钢锯岭",
        "score": 8.7,
        "intro": "优秀的战争片不会美化战场，不会粉饰死亡，不会矮化敌人，不会无视常识，最重要的，不会宣扬战争",
        "info": "导演: 梅尔·吉布森 Mel Gibson   主演: 安德鲁·加菲尔德 Andrew Garfield ...\n                            2016  美国 澳大利亚  剧情 传记 历史 战争"
    },
    {
        "id": 138,
        "link": "https://movie.douban.com/subject/1291543/",
        "cname": "功夫",
        "score": 8.6,
        "intro": "警恶惩奸，维护世界和平这个任务就交给你了，好吗？",
        "info": "导演: 周星驰 Stephen Chow   主演: 周星驰 Stephen Chow  元秋 Qiu Yuen  ...\n                            2004  中国大陆 中国香港  动作 喜剧 犯罪 奇幻"
    },
    {
        "id": 139,
        "link": "https://movie.douban.com/subject/1291585/",
        "cname": "风之谷",
        "score": 8.9,
        "intro": "动画片的圣经",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 岛本须美 Sumi Shimamoto  松田洋治 Y...\n                            1984  日本  动画 奇幻 冒险"
    },
    {
        "id": 140,
        "link": "https://movie.douban.com/subject/1418200/",
        "cname": "傲慢与偏见",
        "score": 8.6,
        "intro": "爱是摈弃傲慢与偏见之后的曙光",
        "info": "导演: 乔·怀特 Joe Wright   主演: 凯拉·奈特莉 Keira Knightley  马修·...\n                            2005  法国 英国 美国  剧情 爱情"
    },
    {
        "id": 141,
        "link": "https://movie.douban.com/subject/26874505/",
        "cname": "人生果实",
        "score": 9.5,
        "intro": "土壤没有落叶不会肥沃，没有了你就不算人生",
        "info": "导演: 伏原健之 Kenshi Fushihara   主演: 津端修一 Shûichi Tsubata  津...\n                            2017  日本  纪录片"
    },
    {
        "id": 142,
        "link": "https://movie.douban.com/subject/1292208/",
        "cname": "上帝之城",
        "score": 8.9,
        "intro": "被上帝抛弃了的上帝之城",
        "info": "导演: 费尔南多·梅里尔斯 Fernando Meirelles  卡迪亚·兰德 Kátia Lund  &amp;nbsp...\n                            2002  巴西 法国  犯罪 剧情"
    },
    {
        "id": 143,
        "link": "https://movie.douban.com/subject/10577869/",
        "cname": "时空恋旅人",
        "score": 8.7,
        "intro": "把每天当作最后一天般珍惜度过，积极拥抱生活，就是幸福",
        "info": "导演: 理查德·柯蒂斯 Richard Curtis   主演: 多姆纳尔·格里森 Domhnall Gl...\n                            2013  英国  喜剧 爱情 奇幻"
    },
    {
        "id": 144,
        "link": "https://movie.douban.com/subject/1294240/",
        "cname": "教父3",
        "score": 8.9,
        "intro": "任何信念的力量，都无法改变命运",
        "info": "导演: 弗朗西斯·福特·科波拉 Francis Ford Coppola   主演: 阿尔·帕西诺 A...\n                            1990  美国  剧情 犯罪"
    },
    {
        "id": 145,
        "link": "https://movie.douban.com/subject/1417598/",
        "cname": "电锯惊魂",
        "score": 8.7,
        "intro": "真相就在眼前",
        "info": "导演: 詹姆斯·温 James Wan   主演: 雷·沃纳尔 Leigh Whannell  加利·艾...\n                            2004  美国  悬疑 惊悚 恐怖"
    },
    {
        "id": 146,
        "link": "https://movie.douban.com/subject/1428581/",
        "cname": "天书奇谭",
        "score": 9.2,
        "intro": "传奇的年代，醉人的童话",
        "info": "导演: 王树忱 Shuchen Wang  钱运达 Yunda Qian   主演: 丁建华 Jianhua Din...\n                            1983(中国大陆)  中国大陆  动画 奇幻"
    },
    {
        "id": 147,
        "link": "https://movie.douban.com/subject/1303037/",
        "cname": "喜宴",
        "score": 8.9,
        "intro": "中国家庭的喜怒哀乐忍",
        "info": "导演: 李安 Ang Lee   主演: 赵文瑄 Winston Chao  郎雄 Sihung Lung  归亚...\n                            1993  中国台湾 美国  剧情 喜剧 爱情 同性 家庭"
    },
    {
        "id": 148,
        "link": "https://movie.douban.com/subject/1297574/",
        "cname": "英雄本色",
        "score": 8.7,
        "intro": "英雄泪短，兄弟情长 ",
        "info": "导演: 吴宇森 John Woo   主演: 周润发 Yun-Fat Chow  狄龙 Lung Ti  张国...\n                            1986  中国香港  剧情 动作 犯罪"
    },
    {
        "id": 149,
        "link": "https://movie.douban.com/subject/1578507/",
        "cname": "谍影重重3",
        "score": 8.8,
        "intro": "像吃了苏打饼一样干脆的电影",
        "info": "导演: 保罗·格林格拉斯 Paul Greengrass   主演: 马特·达蒙 Matt Damon  ...\n                            2007  美国 德国  动作 悬疑 惊悚"
    },
    {
        "id": 150,
        "link": "https://movie.douban.com/subject/6307447/",
        "cname": "被解救的姜戈",
        "score": 8.7,
        "intro": "热血沸腾，那个低俗、性感的无耻混蛋又来了",
        "info": "导演: 昆汀·塔伦蒂诺 Quentin Tarantino   主演: 杰米·福克斯 Jamie Foxx ...\n                            2012  美国  剧情 动作 西部 冒险"
    },
    {
        "id": 151,
        "link": "https://movie.douban.com/subject/3792799/",
        "cname": "岁月神偷",
        "score": 8.7,
        "intro": "岁月流逝，来日可追",
        "info": "导演: 罗启锐 Alex Law   主演: 吴君如 Sandra Ng  任达华 Simon Yam  钟绍...\n                            2010  中国香港 中国大陆  剧情 家庭"
    },
    {
        "id": 152,
        "link": "https://movie.douban.com/subject/1295399/",
        "cname": "七武士",
        "score": 9.2,
        "intro": "时代悲歌",
        "info": "导演: 黑泽明 Akira Kurosawa   主演: 三船敏郎 Toshirô Mifune  志村乔 ...\n                            1954  日本  动作 冒险 剧情"
    },
    {
        "id": 153,
        "link": "https://movie.douban.com/subject/1307315/",
        "cname": "哪吒闹海",
        "score": 9.1,
        "intro": "想你时你在闹海",
        "info": "导演: 严定宪 Dingxian Yan  王树忱 Shuchen Wang   主演: 梁正晖 Zhenghui ...\n                            1979  中国大陆  冒险 动画 奇幻"
    },
    {
        "id": 154,
        "link": "https://movie.douban.com/subject/1306861/",
        "cname": "我是山姆",
        "score": 8.9,
        "intro": "爱并不需要智商 ",
        "info": "导演: 杰茜·尼尔森 Jessie Nelson   主演: Sean Penn  Dakota Fanning  Mi...\n                            2001  美国  剧情 家庭"
    },
    {
        "id": 155,
        "link": "https://movie.douban.com/subject/1907966/",
        "cname": "疯狂原始人",
        "score": 8.7,
        "intro": "老少皆宜，这就是好莱坞动画的魅力",
        "info": "导演: 科克·德·米科 Kirk De Micco  克里斯·桑德斯 Chris Sanders   主演...\n                            2013  美国  喜剧 动画 冒险"
    },
    {
        "id": 156,
        "link": "https://movie.douban.com/subject/4920389/",
        "cname": "头号玩家",
        "score": 8.7,
        "intro": "写给影迷，动漫迷和游戏迷的一封情书",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 泰伊·谢里丹 Tye Sheri...\n                            2018  美国  动作 科幻 冒险"
    },
    {
        "id": 157,
        "link": "https://movie.douban.com/subject/1295409/",
        "cname": "纵横四海",
        "score": 8.8,
        "intro": "香港浪漫主义警匪动作片的巅峰之作",
        "info": "导演: 吴宇森 John Woo   主演: 周润发 Yun-Fat Chow  张国荣 Leslie Cheung...\n                            1991  中国香港  剧情 喜剧 动作 犯罪"
    },
    {
        "id": 158,
        "link": "https://movie.douban.com/subject/26611804/",
        "cname": "三块广告牌",
        "score": 8.7,
        "intro": "怼天怼地，你走后，她与世界为敌",
        "info": "导演: 马丁·麦克唐纳 Martin McDonagh   主演: 弗兰西斯·麦克多蒙德 France...\n                            2017  美国 英国  剧情 犯罪"
    },
    {
        "id": 159,
        "link": "https://movie.douban.com/subject/25986180/",
        "cname": "釜山行",
        "score": 8.5,
        "intro": "揭露人性的丧尸题材力作",
        "info": "导演: 延尚昊 Sang-ho Yeon   主演: 孔侑 Yoo Gong  郑有美 Yu-mi Jung  马...\n                            2016  韩国  动作 惊悚 灾难"
    },
    {
        "id": 160,
        "link": "https://movie.douban.com/subject/25917973/",
        "cname": "心迷宫",
        "score": 8.7,
        "intro": "荒诞讽刺，千奇百巧，抽丝剥茧，百转千回",
        "info": "导演: 忻钰坤 Yukun Xin   主演: 霍卫民 Weimin Huo  王笑天 Xiaotian Wang ...\n                            2014  中国大陆  剧情 犯罪 悬疑"
    },
    {
        "id": 161,
        "link": "https://movie.douban.com/subject/1793929/",
        "cname": "达拉斯买家俱乐部",
        "score": 8.8,
        "intro": "Jared Leto的腿比女人还美！",
        "info": "导演: 让-马克·瓦雷 Jean-Marc Vallée   主演: 马修·麦康纳 Matthew McCon...\n                            2013  美国  剧情 传记 同性"
    },
    {
        "id": 162,
        "link": "https://movie.douban.com/subject/1293318/",
        "cname": "萤火虫之墓",
        "score": 8.7,
        "intro": "幸福是生生不息，却难以触及的远 ",
        "info": "导演: 高畑勋 Isao Takahata   主演: 辰己努  白石绫乃  志乃原良子\n                            1988  日本  动画 剧情 战争"
    },
    {
        "id": 163,
        "link": "https://movie.douban.com/subject/1292401/",
        "cname": "真爱至上",
        "score": 8.6,
        "intro": "爱，是个动词",
        "info": "导演: 理查德·柯蒂斯 Richard Curtis   主演: 休·格兰特 Hugh Grant  柯林...\n                            2003  英国 美国 法国  喜剧 剧情 爱情"
    },
    {
        "id": 164,
        "link": "https://movie.douban.com/subject/24750126/",
        "cname": "荒蛮故事",
        "score": 8.8,
        "intro": "始于荒诞，止于更荒诞",
        "info": "导演: 达米安·斯兹弗隆 Damián Szifron   主演: 达里奥·葛兰帝内提 Darío...\n                            2014  阿根廷 西班牙  剧情 喜剧 犯罪"
    },
    {
        "id": 165,
        "link": "https://movie.douban.com/subject/2209573/",
        "cname": "贫民窟的百万富翁",
        "score": 8.6,
        "intro": "上帝之城+猜火车+阿甘正传+开心辞典=山寨富翁",
        "info": "导演: 丹尼·鲍尔 Danny Boyle  洛芙琳·坦丹 Loveleen Tandan   主演: 戴夫...\n                            2008  英国 美国  剧情 爱情"
    },
    {
        "id": 166,
        "link": "https://movie.douban.com/subject/1292328/",
        "cname": "东邪西毒",
        "score": 8.6,
        "intro": "电影诗",
        "info": "导演: 王家卫 Kar Wai Wong   主演: 张国荣 Leslie Cheung  林青霞 Brigitte...\n                            1994  中国香港 中国台湾  剧情 动作 爱情 武侠 古装"
    },
    {
        "id": 167,
        "link": "https://movie.douban.com/subject/1304447/",
        "cname": "记忆碎片",
        "score": 8.6,
        "intro": "一个针管引发的血案",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 盖·皮尔斯 Guy Pearce ...\n                            2000  美国  犯罪 剧情 悬疑 惊悚"
    },
    {
        "id": 168,
        "link": "https://movie.douban.com/subject/25773932/",
        "cname": "爆裂鼓手",
        "score": 8.7,
        "intro": "这个世界从不善待努力的人，努力了也不一定会成功，但是知道自己在努力，就是活下去的动力",
        "info": "导演: 达米恩·查泽雷 Damien Chazelle   主演: 迈尔斯·特勒 Miles Teller ...\n                            2014  美国  剧情 音乐"
    },
    {
        "id": 169,
        "link": "https://movie.douban.com/subject/26683290/",
        "cname": "你的名字。",
        "score": 8.4,
        "intro": "穿越错位的时空，仰望陨落的星辰，你没留下你的名字，我却无法忘记那句“我爱你”",
        "info": "导演: 新海诚 Makoto Shinkai   主演: 神木隆之介 Ryûnosuke Kamiki  上...\n                            2016  日本  剧情 爱情 动画"
    },
    {
        "id": 170,
        "link": "https://movie.douban.com/subject/1978709/",
        "cname": "黑天鹅",
        "score": 8.6,
        "intro": "黑暗之美",
        "info": "导演: 达伦·阿罗诺夫斯基 Darren Aronofsky   主演: 娜塔莉·波特曼 Natalie...\n                            2010  美国  剧情 惊悚"
    },
    {
        "id": 171,
        "link": "https://movie.douban.com/subject/1291557/",
        "cname": "花样年华",
        "score": 8.6,
        "intro": "偷情本没有这样美",
        "info": "导演: 王家卫 Kar Wai Wong   主演: 梁朝伟 Tony Leung Chiu Wai  张曼玉 Ma...\n                            2000  中国香港  剧情 爱情"
    },
    {
        "id": 172,
        "link": "https://movie.douban.com/subject/1291544/",
        "cname": "哈利·波特与阿兹卡班的囚徒",
        "score": 8.7,
        "intro": "不一样的导演，不一样的哈利·波特",
        "info": "导演: Alfonso Cuarón   主演: 丹尼尔·雷德克里夫 Daniel Radcliffe  Emma...\n                            2004  英国 美国  奇幻 冒险"
    },
    {
        "id": 173,
        "link": "https://movie.douban.com/subject/1291822/",
        "cname": "卢旺达饭店",
        "score": 8.9,
        "intro": "当这个世界闭上双眼，他却敞开了怀抱",
        "info": "导演: 特瑞·乔治 Terry George   主演: 唐·钱德尔 Don Cheadle  苏菲·奥...\n                            2004  英国 南非 意大利  剧情 历史 战争"
    },
    {
        "id": 174,
        "link": "https://movie.douban.com/subject/1959195/",
        "cname": "忠犬八公物语",
        "score": 9.2,
        "intro": "养狗三日，便会对你终其一生",
        "info": "导演: Seijirô Kôyama   主演: 山本圭 Kei Yamamoto  井川比佐志 Hisa...\n                            1987  日本  剧情"
    },
    {
        "id": 175,
        "link": "https://movie.douban.com/subject/1302467/",
        "cname": "黑客帝国3：矩阵革命",
        "score": 8.7,
        "intro": "不得不说，《黑客帝国》系列是商业片与科幻、哲学完美结合的典范",
        "info": "导演: Andy Wachowski  Larry Wachowski   主演: 基努·里维斯 Keanu Reeves...\n                            2003  美国 澳大利亚  动作 科幻"
    },
    {
        "id": 176,
        "link": "https://movie.douban.com/subject/10463953/",
        "cname": "模仿游戏",
        "score": 8.7,
        "intro": "他给机器起名“克里斯托弗”，因为这是他初恋的名字",
        "info": "导演: 莫滕·泰杜姆 Morten Tyldum   主演: 本尼迪克特·康伯巴奇 Benedict C...\n                            2014  英国 美国  剧情 传记 战争 同性"
    },
    {
        "id": 177,
        "link": "https://movie.douban.com/subject/10533913/",
        "cname": "头脑特工队",
        "score": 8.7,
        "intro": "愿我们都不用长大，每一座城堡都能永远存在",
        "info": "导演: 彼特·道格特 Pete Docter  罗纳尔多·德尔·卡门 Ronaldo Del Carmen  &amp;nb...\n                            2015  美国  喜剧 动画 冒险"
    },
    {
        "id": 178,
        "link": "https://movie.douban.com/subject/26628357/",
        "cname": "一个叫欧维的男人决定去死",
        "score": 8.8,
        "intro": "惠及一生的美丽",
        "info": "导演: 汉内斯·赫尔姆 Hannes Holm   主演: 罗夫·拉斯加德 Rolf Lassgård...\n                            2015  瑞典  剧情"
    },
    {
        "id": 179,
        "link": "https://movie.douban.com/subject/1296996/",
        "cname": "哈利·波特与密室",
        "score": 8.6,
        "intro": "魔法的密室之门已打开...",
        "info": "导演: Chris Columbus   主演: 丹尼尔·雷德克里夫 Daniel Radcliffe  艾玛...\n                            2002  美国 英国 德国  奇幻 冒险"
    },
    {
        "id": 180,
        "link": "https://movie.douban.com/subject/1291870/",
        "cname": "雨人",
        "score": 8.7,
        "intro": "生活在自己的世界里，也可以让周围的人显得可笑和渺小",
        "info": "导演: 巴瑞·莱文森 Barry Levinson   主演: 达斯汀·霍夫曼 Dustin Hoffman ...\n                            1988  美国  剧情"
    },
    {
        "id": 181,
        "link": "https://movie.douban.com/subject/4848115/",
        "cname": "你看起来好像很好吃",
        "score": 8.9,
        "intro": "感情不分食草或者食肉",
        "info": "导演: 藤森雅也 Masaya Fujimori   主演: 山口胜平 Kappei Yamaguchi  爱河...\n                            2010  日本  剧情 动画 儿童"
    },
    {
        "id": 182,
        "link": "https://movie.douban.com/subject/1395091/",
        "cname": "未麻的部屋",
        "score": 8.9,
        "intro": "好的剧本是，就算你猜到了结局也猜不到全部",
        "info": "导演: 今敏 Satoshi Kon   主演: 岩男润子 Junko Iwao  松本梨香 Rica Matsu...\n                            1997  日本  动画 奇幻 惊悚"
    },
    {
        "id": 183,
        "link": "https://movie.douban.com/subject/6534248/",
        "cname": "无敌破坏王",
        "score": 8.7,
        "intro": "迪士尼和皮克斯拿错剧本的产物",
        "info": "导演: 瑞奇·莫尔 Rich Moore   主演: 约翰·C·赖利 John C. Reilly  萨拉...\n                            2012  美国  喜剧 动画 奇幻 冒险"
    },
    {
        "id": 184,
        "link": "https://movie.douban.com/subject/1309163/",
        "cname": "恋恋笔记本",
        "score": 8.5,
        "intro": "爱情没有那么多借口，如果不能圆满，只能说明爱的不够 ",
        "info": "导演: 尼克·卡索维茨 Nick Cassavetes   主演: 瑞恩·高斯林 Ryan Gosling ...\n                            2004  美国  剧情 爱情"
    },
    {
        "id": 185,
        "link": "https://movie.douban.com/subject/1291578/",
        "cname": "冰川时代",
        "score": 8.6,
        "intro": "松鼠才是角儿",
        "info": "导演: 卡洛斯·沙尔丹哈 Carlos Saldanha  克里斯·韦奇 Chris Wedge   主演...\n                            2002  美国  喜剧 动画 冒险"
    },
    {
        "id": 186,
        "link": "https://movie.douban.com/subject/10437779/",
        "cname": "新世界",
        "score": 8.8,
        "intro": "要做就做得狠一点，这样才能活下去",
        "info": "导演: 朴勋政 Hoon-jung Park   主演: 李政宰 Jung-Jae Lee  崔岷植 Min-sik...\n                            2013  韩国  剧情 犯罪"
    },
    {
        "id": 187,
        "link": "https://movie.douban.com/subject/25895901/",
        "cname": "海街日记",
        "score": 8.8,
        "intro": "是枝裕和的家庭习作",
        "info": "导演: 是枝裕和 Hirokazu Koreeda   主演: 绫濑遥 Haruka Ayase  长泽雅美 M...\n                            2015  日本  剧情 家庭"
    },
    {
        "id": 188,
        "link": "https://movie.douban.com/subject/26430107/",
        "cname": "二十二",
        "score": 8.7,
        "intro": "有一些东西不应该被遗忘",
        "info": "导演: 郭柯 Ke Guo   主演: \n                            2015  中国大陆  纪录片"
    },
    {
        "id": 189,
        "link": "https://movie.douban.com/subject/25980443/",
        "cname": "海边的曼彻斯特",
        "score": 8.6,
        "intro": "我们都有权利不与自己的过去和解",
        "info": "导演: 肯尼斯·罗纳根 Kenneth Lonergan   主演: 卡西·阿弗莱克 Casey Affle...\n                            2016  美国  剧情 家庭"
    },
    {
        "id": 190,
        "link": "https://movie.douban.com/subject/1296909/",
        "cname": "虎口脱险",
        "score": 8.9,
        "intro": "永远看不腻的喜剧",
        "info": "导演: 杰拉尔·乌里 Gérard Oury   主演: 路易·德·菲耐斯 Louis de Funès...\n                            1966  法国 英国  喜剧 战争"
    },
    {
        "id": 191,
        "link": "https://movie.douban.com/subject/25724855/",
        "cname": "房间",
        "score": 8.8,
        "intro": "被偷走的岁月，被伤害的生命，被禁锢的灵魂，终将被希望和善意救赎",
        "info": "导演: 伦尼·阿伯拉罕森 Lenny Abrahamson   主演: 布丽·拉尔森 Brie Larson...\n                            2015  爱尔兰 加拿大 英国 美国  剧情 家庭"
    },
    {
        "id": 192,
        "link": "https://movie.douban.com/subject/1293181/",
        "cname": "惊魂记",
        "score": 9,
        "intro": "故事的反转与反转，分裂电影的始祖",
        "info": "导演: 阿尔弗雷德·希区柯克 Alfred Hitchcock   主演: 安东尼·博金斯 Antho...\n                            1960  美国  悬疑 惊悚 恐怖"
    },
    {
        "id": 193,
        "link": "https://movie.douban.com/subject/3011051/",
        "cname": "恐怖游轮",
        "score": 8.5,
        "intro": "不要企图在重复中寻找已经失去的爱",
        "info": "导演: 克里斯托弗·史密斯 Christopher Smith   主演: 梅利莎·乔治 Melissa ...\n                            2009  英国 澳大利亚  剧情 悬疑 惊悚"
    },
    {
        "id": 194,
        "link": "https://movie.douban.com/subject/1307811/",
        "cname": "魔女宅急便",
        "score": 8.6,
        "intro": "宫崎骏的电影总让人感觉世界是美好的，阳光明媚的",
        "info": "导演: 宫崎骏 Hayao Miyazaki   主演: 高山南 Minami Takayama  佐久间玲 Re...\n                            1989  日本  动画 奇幻 冒险"
    },
    {
        "id": 195,
        "link": "https://movie.douban.com/subject/26787574/",
        "cname": "奇迹男孩",
        "score": 8.6,
        "intro": "世界不完美，爱会有奇迹",
        "info": "导演: 斯蒂芬·卓博斯基 Stephen Chbosky   主演: 雅各布·特伦布莱 Jacob Tr...\n                            2017  美国 中国香港  剧情 儿童 家庭"
    },
    {
        "id": 196,
        "link": "https://movie.douban.com/subject/1302827/",
        "cname": "人工智能",
        "score": 8.6,
        "intro": "对爱的执着，可以超越一切",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 海利·乔·奥斯蒙 Haley...\n                            2001  美国  冒险 剧情 科幻"
    },
    {
        "id": 197,
        "link": "https://movie.douban.com/subject/1293460/",
        "cname": "雨中曲",
        "score": 9,
        "intro": "骨灰级歌舞片",
        "info": "导演: 斯坦利·多南 Stanley Donen  吉恩·凯利 Gene Kelly   主演: 吉恩·...\n                            1952  美国  喜剧 歌舞 爱情"
    },
    {
        "id": 198,
        "link": "https://movie.douban.com/subject/1862151/",
        "cname": "疯狂的石头",
        "score": 8.5,
        "intro": "中国版《两杆大烟枪》",
        "info": "导演: 宁浩 Hao Ning   主演: 郭涛 Tao Guo  刘桦 Hua Liu  连晋 Teddy Lin\n                            2006  中国大陆 中国香港  喜剧 犯罪"
    },
    {
        "id": 199,
        "link": "https://movie.douban.com/subject/1291879/",
        "cname": "罗生门",
        "score": 8.8,
        "intro": "人生的N种可能性",
        "info": "导演: 黑泽明 Akira Kurosawa   主演: 三船敏郎 Toshirô Mifune  京町子 ...\n                            1950  日本  剧情 犯罪 悬疑"
    },
    {
        "id": 200,
        "link": "https://movie.douban.com/subject/10808442/",
        "cname": "爱在午夜降临前",
        "score": 8.8,
        "intro": "所谓爱情，就是话唠一路，都不会心生腻烦，彼此嫌弃",
        "info": "导演: 理查德·林克莱特 Richard Linklater   主演: 伊桑·霍克 Ethan Hawke ...\n                            2013  美国 希腊  剧情 爱情"
    },
    {
        "id": 201,
        "link": "https://movie.douban.com/subject/27622447/",
        "cname": "小偷家族",
        "score": 8.7,
        "intro": "我们组成了家",
        "info": "导演: 是枝裕和 Hirokazu Koreeda   主演: 中川雅也 Lily Franky  安藤樱 Sa...\n                            2018  日本  剧情 犯罪 家庭"
    },
    {
        "id": 202,
        "link": "https://movie.douban.com/subject/3443389/",
        "cname": "海洋",
        "score": 9.1,
        "intro": "大海啊，不全是水",
        "info": "导演: 雅克·贝汉 Jacques Perrin  雅克·克鲁奥德 Jacques Cluzaud   主演:...\n                            2009  法国 瑞士 西班牙 美国 阿联酋  纪录片"
    },
    {
        "id": 203,
        "link": "https://movie.douban.com/subject/1291844/",
        "cname": "终结者2：审判日",
        "score": 8.7,
        "intro": "少见的超越首部的续集，动作片中的经典",
        "info": "导演: 詹姆斯·卡梅隆 James Cameron   主演: 阿诺·施瓦辛格 Arnold Schwarz...\n                            1991  美国 法国  动作 科幻"
    },
    {
        "id": 204,
        "link": "https://movie.douban.com/subject/4739952/",
        "cname": "初恋这件小事",
        "score": 8.4,
        "intro": "黑小鸭速效美白记",
        "info": "导演: 普特鹏·普罗萨卡·那·萨克那卡林 Puttipong Promsaka Na Sakolnakorn  华森·波克彭...\n                            2010  泰国  剧情 喜剧 爱情"
    },
    {
        "id": 205,
        "link": "https://movie.douban.com/subject/1293964/",
        "cname": "魂断蓝桥",
        "score": 8.8,
        "intro": "中国式内在的美国电影",
        "info": "导演: 茂文·勒鲁瓦 Mervyn LeRoy   主演: 费雯·丽 Vivien Leigh  罗伯特·...\n                            1940  美国  剧情 爱情 战争"
    },
    {
        "id": 206,
        "link": "https://movie.douban.com/subject/1295865/",
        "cname": "燃情岁月",
        "score": 8.8,
        "intro": "传奇，不是每个人都可以拥有",
        "info": "导演: 爱德华·兹威克 Edward Zwick   主演: 布拉德·皮特 Brad Pitt  安东...\n                            1994  美国  剧情 爱情 战争 西部"
    },
    {
        "id": 207,
        "link": "https://movie.douban.com/subject/1308857/",
        "cname": "可可西里",
        "score": 8.8,
        "intro": "坚硬的信仰",
        "info": "导演: 陆川 Chuan Lu   主演: 多布杰 Duobujie  张磊 Lei Zhang  亓亮 Qi L...\n                            2004  中国大陆 中国香港  剧情 犯罪"
    },
    {
        "id": 208,
        "link": "https://movie.douban.com/subject/1300374/",
        "cname": "绿里奇迹",
        "score": 8.8,
        "intro": "天使暂时离开",
        "info": "导演: Frank Darabont   主演: 汤姆·汉克斯 Tom Hanks  大卫·摩斯 David M...\n                            1999  美国  犯罪 剧情 奇幻 悬疑"
    },
    {
        "id": 209,
        "link": "https://movie.douban.com/subject/1937946/",
        "cname": "穿越时空的少女",
        "score": 8.6,
        "intro": "爱上未来的你 ",
        "info": "导演: 细田守 Mamoru Hosoda   主演: 仲里依纱 Riisa Naka  石田卓也 Takuya...\n                            2006  日本  剧情 爱情 科幻 动画"
    },
    {
        "id": 210,
        "link": "https://movie.douban.com/subject/1292226/",
        "cname": "2001太空漫游",
        "score": 8.8,
        "intro": "现代科幻电影的开山之作，最伟大导演的最伟大影片",
        "info": "导演: 斯坦利·库布里克 Stanley Kubrick   主演: 凯尔·杜拉 Keir Dullea  ...\n                            1968  英国 美国  科幻 惊悚 冒险"
    },
    {
        "id": 211,
        "link": "https://movie.douban.com/subject/1292329/",
        "cname": "牯岭街少年杀人事件",
        "score": 8.8,
        "intro": "弱者送给弱者的一刀",
        "info": "导演: 杨德昌 Edward Yang   主演: 张震 Chen Chang  杨静怡 Lisa Yang  张...\n                            1991  中国台湾  剧情 犯罪"
    },
    {
        "id": 212,
        "link": "https://movie.douban.com/subject/1293908/",
        "cname": "城市之光",
        "score": 9.3,
        "intro": "永远的小人物，伟大的卓别林",
        "info": "导演: Charles Chaplin   主演: 查理·卓别林 Charles Chaplin  弗吉尼亚·...\n                            1931  美国  喜剧 剧情 爱情"
    },
    {
        "id": 213,
        "link": "https://movie.douban.com/subject/26614893/",
        "cname": "完美陌生人",
        "score": 8.5,
        "intro": "来啊，互相伤害啊！",
        "info": "导演: 保罗·格诺维瑟 Paolo Genovese   主演: 马可·贾利尼 Marco Giallini ...\n                            2016  意大利  剧情 喜剧"
    },
    {
        "id": 214,
        "link": "https://movie.douban.com/subject/1438652/",
        "cname": "无耻混蛋",
        "score": 8.6,
        "intro": "昆汀同学越来越变态了，比北野武还杜琪峰",
        "info": "导演: Quentin Tarantino   主演: 布拉德·皮特 Brad Pitt  梅拉尼·罗兰 M...\n                            2009  德国 美国  剧情 犯罪"
    },
    {
        "id": 215,
        "link": "https://movie.douban.com/subject/1305690/",
        "cname": "阿飞正传",
        "score": 8.5,
        "intro": "王家卫是一种风格，张国荣是一个代表",
        "info": "导演: 王家卫 Kar Wai Wong   主演: 张国荣 Leslie Cheung  张曼玉 Maggie C...\n                            1990  中国香港  犯罪 剧情 爱情"
    },
    {
        "id": 216,
        "link": "https://movie.douban.com/subject/1292287/",
        "cname": "新龙门客栈",
        "score": 8.6,
        "intro": "嬉笑怒骂，调风动月",
        "info": "导演: 李惠民 Raymond Lee   主演: 张曼玉 Maggie Cheung  林青霞 Brigitte ...\n                            1992  中国香港 中国大陆  动作 爱情 武侠 古装"
    },
    {
        "id": 217,
        "link": "https://movie.douban.com/subject/3075287/",
        "cname": "源代码",
        "score": 8.4,
        "intro": "邓肯·琼斯继《月球》之后再度奉献出一部精彩绝伦的科幻佳作",
        "info": "导演: 邓肯·琼斯 Duncan Jones   主演: 杰克·吉伦哈尔 Jake Gyllenhaal  ...\n                            2011  美国 加拿大  科幻 悬疑 惊悚"
    },
    {
        "id": 218,
        "link": "https://movie.douban.com/subject/1760622/",
        "cname": "香水",
        "score": 8.5,
        "intro": "一个单凭体香达到高潮的男人",
        "info": "导演: 汤姆·提克威 Tom Tykwer   主演: 本·卫肖 Ben Whishaw  艾伦·瑞克...\n                            2006  德国 法国 西班牙 美国  剧情 犯罪 奇幻"
    },
    {
        "id": 219,
        "link": "https://movie.douban.com/subject/1308767/",
        "cname": "谍影重重2",
        "score": 8.7,
        "intro": "谁说王家卫镜头很晃？",
        "info": "导演: 保罗·格林格拉斯 Paul Greengrass   主演: 马特·达蒙 Matt Damon  ...\n                            2004  美国 德国  动作 悬疑 惊悚"
    },
    {
        "id": 220,
        "link": "https://movie.douban.com/subject/1303394/",
        "cname": "青蛇",
        "score": 8.5,
        "intro": "人生如此，浮生如斯谁人言，花彼岸，此生情长意短谁都是不懂爱的罢了",
        "info": "导演: 徐克 Hark Tsui   主演: 张曼玉 Maggie Cheung  王祖贤 Joey Wang  ...\n                            1993  中国香港  剧情 爱情 奇幻 古装"
    },
    {
        "id": 221,
        "link": "https://movie.douban.com/subject/2363506/",
        "cname": "地球上的星星",
        "score": 8.9,
        "intro": "天使保护事件始末",
        "info": "导演: 阿米尔·汗 Aamir Khan   主演: 达席尔·萨法瑞 Darsheel Safary  阿...\n                            2007  印度  剧情 儿童 家庭"
    },
    {
        "id": 222,
        "link": "https://movie.douban.com/subject/1304102/",
        "cname": "谍影重重",
        "score": 8.6,
        "intro": "哗啦啦啦啦，天在下雨，哗啦啦啦啦，云在哭泣……找自己",
        "info": "导演: 道格·里曼 Doug Liman   主演: 马特·达蒙 Matt Damon  弗兰卡·波坦...\n                            2002  美国 德国 捷克  动作 悬疑 惊悚"
    },
    {
        "id": 223,
        "link": "https://movie.douban.com/subject/1828115/",
        "cname": "色，戒",
        "score": 8.4,
        "intro": "假戏真情，爱欲深海",
        "info": "导演: 李安 Ang Lee   主演: 梁朝伟 Tony Leung Chiu Wai  汤唯 Wei Tang  ...\n                            2007  中国台湾 中国大陆 美国 中国香港  剧情 爱情 情色"
    },
    {
        "id": 224,
        "link": "https://movie.douban.com/subject/1419936/",
        "cname": "战争之王",
        "score": 8.6,
        "intro": "做一颗让别人需要你的棋子",
        "info": "导演: 安德鲁·尼科尔 Andrew Niccol   主演: 尼古拉斯·凯奇 Nicolas Cage ...\n                            2005  美国 法国  剧情 犯罪"
    },
    {
        "id": 225,
        "link": "https://movie.douban.com/subject/1428175/",
        "cname": "血钻",
        "score": 8.7,
        "intro": "每个美丽事物背后都是滴血的现实",
        "info": "导演: 爱德华·兹威克 Edward Zwick   主演: 莱昂纳多·迪卡普里奥 Leonardo ...\n                            2006  美国 德国  剧情 惊悚 冒险"
    },
    {
        "id": 226,
        "link": "https://movie.douban.com/subject/1867345/",
        "cname": "遗愿清单",
        "score": 8.6,
        "intro": "用剩余不多的时间，去燃烧整个生命",
        "info": "导演: 罗伯·莱纳 Rob Reiner   主演: 杰克·尼科尔森 Jack Nicholson  摩根...\n                            2007  美国  冒险 喜剧 剧情"
    },
    {
        "id": 227,
        "link": "https://movie.douban.com/subject/1292528/",
        "cname": "猜火车",
        "score": 8.5,
        "intro": "不可猜的青春迷笛 ",
        "info": "导演: 丹尼·博伊尔 Danny Boyle   主演: 伊万·麦克格雷格 Ewan McGregor  ...\n                            1996  英国  剧情 犯罪"
    },
    {
        "id": 228,
        "link": "https://movie.douban.com/subject/27059130/",
        "cname": "大佛普拉斯",
        "score": 8.7,
        "intro": "人们可以登上月球，却永远无法探索人们内心的宇宙",
        "info": "导演: 黄信尧 Hsin-yao Huang   主演: 庄益增 Yizeng Zhuang  陈竹昇 Chu-sh...\n                            2017  中国台湾  剧情 喜剧 犯罪"
    },
    {
        "id": 229,
        "link": "https://movie.douban.com/subject/3592854/",
        "cname": "疯狂的麦克斯4：狂暴之路",
        "score": 8.6,
        "intro": "“多么美好的一天！”轰轰轰砰咚，啪哒哒哒轰隆隆，磅~",
        "info": "导演: 乔治·米勒 George Miller   主演: 汤姆·哈迪 Tom Hardy  查理兹·塞...\n                            2015  澳大利亚 美国  动作 科幻 冒险"
    },
    {
        "id": 230,
        "link": "https://movie.douban.com/subject/2222996/",
        "cname": "步履不停",
        "score": 8.8,
        "intro": "日本的家庭电影已经是世界巅峰了，步履不停是巅峰中的佳作",
        "info": "导演: 是枝裕和 Hirokazu Koreeda   主演: 阿部宽 Hiroshi Abe  夏川结衣 Yu...\n                            2008  日本  剧情 家庭"
    },
    {
        "id": 231,
        "link": "https://movie.douban.com/subject/25807345/",
        "cname": "彗星来的那一夜",
        "score": 8.5,
        "intro": "小成本大魅力",
        "info": "导演: 詹姆斯·沃德·布柯特 James Ward Byrkit   主演: 艾米丽·芭尔多尼 Em...\n                            2013  美国 英国  科幻 悬疑 惊悚"
    },
    {
        "id": 232,
        "link": "https://movie.douban.com/subject/2213597/",
        "cname": "朗读者",
        "score": 8.6,
        "intro": "当爱情跨越年龄的界限，它似乎能变得更久远一点，成为一种责任，一种水到渠成的相濡以沫 ",
        "info": "导演: 史蒂芬·戴德利 Stephen Daldry   主演: 凯特·温丝莱特 Kate Winslet ...\n                            2008  美国 德国  剧情 爱情"
    },
    {
        "id": 233,
        "link": "https://movie.douban.com/subject/2297265/",
        "cname": "浪潮",
        "score": 8.7,
        "intro": "世界离独裁只有五天",
        "info": "导演: 丹尼斯·甘塞尔 Dennis Gansel   主演: 尤尔根·沃格尔 Jürgen Vogel ...\n                            2008  德国  剧情 惊悚"
    },
    {
        "id": 234,
        "link": "https://movie.douban.com/subject/26393561/",
        "cname": "小萝莉的猴神大叔",
        "score": 8.4,
        "intro": "宝莱坞的萝莉与大叔",
        "info": "导演: 卡比尔·汗 Kabir Khan   主演: 萨尔曼·汗 Salman Khan  哈莎莉·马...\n                            2015  印度  剧情 喜剧 动作"
    },
    {
        "id": 235,
        "link": "https://movie.douban.com/subject/6874403/",
        "cname": "再次出发之纽约遇见你",
        "score": 8.5,
        "intro": "爱我就给我看你的播放列表",
        "info": "导演: 约翰·卡尼 John Carney   主演: 凯拉·奈特莉 Keira Knightley  马克...\n                            2013  美国  喜剧 爱情 音乐"
    },
    {
        "id": 236,
        "link": "https://movie.douban.com/subject/25921812/",
        "cname": "驴得水",
        "score": 8.3,
        "intro": "过去的如果就让它过去了，未来只会越来越糟！",
        "info": "导演: 周申 Shen Zhou  刘露 Lu Liu   主演: 任素汐 Suxi Ren  大力 Da Li ...\n                            2016  中国大陆  剧情 喜剧"
    },
    {
        "id": 237,
        "link": "https://movie.douban.com/subject/25954475/",
        "cname": "聚焦",
        "score": 8.8,
        "intro": "新闻人的理性求真",
        "info": "导演: 托马斯·麦卡锡 Thomas McCarthy   主演: 马克·鲁弗洛 Mark Ruffalo ...\n                            2015  美国  剧情 传记"
    },
    {
        "id": 238,
        "link": "https://movie.douban.com/subject/1291568/",
        "cname": "东京物语",
        "score": 9.2,
        "intro": "东京那么大，如果有一天走失了，恐怕一辈子不能再相见",
        "info": "导演: 小津安二郎 Yasujirô Ozu   主演: 笠智众 Chishû Ryû  原节...\n                            1953  日本  剧情 家庭"
    },
    {
        "id": 239,
        "link": "https://movie.douban.com/subject/1397546/",
        "cname": "追随",
        "score": 8.9,
        "intro": "诺兰的牛逼来源于内心散发出的恐惧",
        "info": "导演: 克里斯托弗·诺兰 Christopher Nolan   主演: 杰里米·西奥伯德 Jeremy...\n                            1998  英国  犯罪 悬疑 惊悚"
    },
    {
        "id": 240,
        "link": "https://movie.douban.com/subject/1297518/",
        "cname": "九品芝麻官",
        "score": 8.5,
        "intro": " ",
        "info": "导演: 王晶 Jing Wong   主演: 周星驰 Stephen Chow  吴孟达 Man Tat Ng  ...\n                            1994  中国香港  喜剧 古装"
    },
    {
        "id": 241,
        "link": "https://movie.douban.com/subject/5964718/",
        "cname": "一次别离",
        "score": 8.7,
        "intro": "只有有信仰的人才能说出事实真相",
        "info": "导演: 阿斯哈·法哈蒂  Asghar Farhadi   主演: 佩曼·莫阿迪 Peyman Moadi ...\n                            2011  伊朗 法国  剧情 家庭"
    },
    {
        "id": 242,
        "link": "https://movie.douban.com/subject/1309055/",
        "cname": "哈利·波特与火焰杯",
        "score": 8.5,
        "intro": " ",
        "info": "导演: Mike Newell   主演: Daniel Radcliffe  Emma Watson  Rupert Grint\n                            2005  英国 美国  奇幻 冒险"
    },
    {
        "id": 243,
        "link": "https://movie.douban.com/subject/1300117/",
        "cname": "千钧一发",
        "score": 8.8,
        "intro": "一部能引人思考的科幻励志片",
        "info": "导演: 安德鲁·尼科尔 Andrew Niccol   主演: 伊桑·霍克 Ethan Hawke  乌玛...\n                            1997  美国  剧情 科幻 惊悚"
    },
    {
        "id": 244,
        "link": "https://movie.douban.com/subject/5908478/",
        "cname": "我爱你",
        "score": 9,
        "intro": "你要相信，这世上真的有爱存在，不管在什么年纪 ",
        "info": "导演: 秋昌民 Chang-min Choo   主演: 宋在河 Jae-ho Song  李顺载 Soon-jae...\n                            2011  韩国  剧情 爱情"
    },
    {
        "id": 245,
        "link": "https://movie.douban.com/subject/1291824/",
        "cname": "黑鹰坠落",
        "score": 8.7,
        "intro": "还原真实而残酷的战争",
        "info": "导演: 雷德利·斯科特 Ridley Scott   主演: 乔什·哈奈特 Josh Hartnett  ...\n                            2001  美国  动作 历史 战争"
    },
    {
        "id": 246,
        "link": "https://movie.douban.com/subject/27191492/",
        "cname": "四个春天",
        "score": 8.9,
        "intro": "来也匆匆去也匆匆，就这样风雨兼程",
        "info": "导演: 陆庆屹 Lu Qing Yi   主演: 陆运坤 Yunkun Lu  李桂贤 Guixian Li  ...\n                            2017  中国大陆  纪录片 家庭"
    },
    {
        "id": 247,
        "link": "https://movie.douban.com/subject/27615441/",
        "cname": "网络谜踪",
        "score": 8.6,
        "intro": " ",
        "info": "导演: 阿尼什·查甘蒂 Aneesh Chaganty   主演: 约翰·赵 John Cho  米切尔...\n                            2018  美国 俄罗斯  剧情 犯罪 悬疑 惊悚"
    },
    {
        "id": 248,
        "link": "https://movie.douban.com/subject/1292233/",
        "cname": "发条橙",
        "score": 8.5,
        "intro": "我完全康复了",
        "info": "导演: Stanley Kubrick   主演: Malcolm McDowell  Patrick Magee  Michael...\n                            1971  英国 美国  犯罪 剧情 科幻"
    },
    {
        "id": 249,
        "link": "https://movie.douban.com/subject/1294638/",
        "cname": "E.T. 外星人",
        "score": 8.6,
        "intro": "生病的E.T.皮肤的颜色就像柿子饼",
        "info": "导演: 史蒂文·斯皮尔伯格 Steven Spielberg   主演: 亨利·托马斯 Henry Tho...\n                            1982  美国  剧情 科幻"
    },
    {
        "id": 250,
        "link": "https://movie.douban.com/subject/5300054/",
        "cname": "波西米亚狂想曲",
        "score": 8.7,
        "intro": " ",
        "info": "导演: 布莱恩·辛格 Bryan Singer   主演: 拉米·马雷克 Rami Malek  本·哈...\n                            2018  英国 美国  剧情 传记 同性 音乐"
    }
];
const handleData = (data) => {
    const after = {}
    for(let i = 0 ;i<data.length;i++){
        let item = data[i].score;
        if(after[item]) after[item]++;
        else after[item] = 1;
    }
    const ans=[]
    for(let score in after){
        const tmp = {
            value:[(+(score+'').split('.')[1]),Math.floor(score)-7,after[score]]
        }
        ans.push(tmp)
    }
    return ans;
        
}
const option = {
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        name: "小数",
        type: 'category',
        data: hours
    },
    yAxis3D: {
        name: "整数",
        type: 'category',
        data: days
    },
    zAxis3D: {
        name: "数量",
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
            projection: 'perspective', // 先设置为这个perspective
            distance: 120,              //默认缩放比例
            alpha:40,
            beta:0,
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        shading: 'lambert',
        data: handleData(data),
        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
};
export{
    option,
    data,
}
