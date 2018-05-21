/**
 * Created by entor on 2018/5/11.
 */
// Vue.component('long',{
//     template:`<div class="contribute-list-content long">
//     <a href="#" class="work-item" v-for="(novel,index) in novels">
//     <div class="truncateTxt">{{novel.title}}</div>
// <div class="content-truncate">{{novel.content}}</div>
// <div class="author">
//     <img :src="novel.authorImg">
//     <span class="name">{{novel.name}}</span>
// </div>
// </a>
// </div>`
// });

// Vue.component('middle',{
//     template:`<a href="#" class="work-item">
//                     <div class="truncateTxt">勇者千金不想工作！！！</div>
//                     <div class="content-truncate"> 因为连续加班七天而过劳死的金某人，因为被本地的土地神怜悯，而得到了一张异界转生的体验券……
//                         “因为看你可怜，我可以给你在异世界再来一次的机会，并答应你一个愿望！”
//                         “如果可以的话！我要在那个世界最强者的庇护下，一辈子都不用工作！！！“
//                         金某人成功成为了异世界最强勇者的女儿，只可惜那张转生券只是体验版…………
//                         可怜的主人公在异世界的欢乐人生就要开始了！！！
//                         新人，欢迎交流，(●&#39;◡&#39;●)因为插图也要自己画，更新可能会慢些……
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic03.jpg!min140jpg">
//                         <span class="name">S菌蘑人</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">前勇者的我现在在魔王的手下当走狗</div>
//                     <div class="content-truncate">勇者奉命带着三个公主前去讨伐只有女性才能将其封印魔王。然而三个公主却因为地下城的各种陷阱而被俘，最终导致只有勇者一个人面对魔王。
//                         勇者：“身为男性的我根本无法杀死或封印魔王啊！我投靠魔王也是逼不得已啊！何况魔王是个大美女我下不了手啊！不要叫我魔王的走狗啊！我好歹也是大陆最强剑圣啊！还有我在魔王手下的工作并不是吐槽啊！”
//                         这是一个魔王与其走狗的故事。
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic04.jpg!min140jpg">
//                         <span class="name">疯狂的板栗</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">妖物语</div>
//                     <div class="content-truncate">每当流星划过天空的时候，你会许下怎样的愿望呢？
//                         希望...........
//                         希望..........
//                         希望..............
//                         流星好像很懂这个偶尔划过的世界一样。
//                         满载着愿望........
//                         一闪而逝，再不回头
//                         于是..........
//                         许多人长大了。
//                         如果我们双手合十继续不停祈祷的话..........
//                         ‘愿望’的份量是否可以留住那颗流星呢？
//                         如果.........这一次...........那颗流星不愿再平静的逝去呢？
//                         当看到一颗流星迎面砸来的时候.......................
//                         人们是不是还会站在原地....................
//                         傻傻的........
//                         对它许下什么愿望呢？

//                         一个关于愿望的物语
//                         伴随着一颗下坠的流星
//                         缓缓展开！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic.jpg!min140jpg">
//                         <span class="name">叶声雪痕</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">修个妹的仙</div>
//                     <div class="content-truncate">——你相信吗？无论是谁，冥冥之中皆有天定命数，而你，便是那受上天眷顾，身缠仙缘之人。
//                         ——呸！仙缘就是让老子出卖尊严穿上女装！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic02.jpg!min140jpg">
//                         <span class="name">7zip</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">妖物语</div>
//                     <div class="content-truncate">每当流星划过天空的时候，你会许下怎样的愿望呢？
//                         希望...........
//                         希望..........
//                         希望..............
//                         流星好像很懂这个偶尔划过的世界一样。
//                         满载着愿望........
//                         一闪而逝，再不回头
//                         于是..........
//                         许多人长大了。
//                         如果我们双手合十继续不停祈祷的话..........
//                         ‘愿望’的份量是否可以留住那颗流星呢？
//                         如果.........这一次...........那颗流星不愿再平静的逝去呢？
//                         当看到一颗流星迎面砸来的时候.......................
//                         人们是不是还会站在原地....................
//                         傻傻的........
//                         对它许下什么愿望呢？

//                         一个关于愿望的物语
//                         伴随着一颗下坠的流星
//                         缓缓展开！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic.jpg!min140jpg">
//                         <span class="name">叶声雪痕</span>
//                     </div>
//                 </a>`
// });

// Vue.component('short',{
//     template:`<a href="#" class="work-item">
//                     <div class="truncateTxt">前勇者的我现在在魔王的手下当走狗</div>
//                     <div class="content-truncate">勇者奉命带着三个公主前去讨伐只有女性才能将其封印魔王。然而三个公主却因为地下城的各种陷阱而被俘，最终导致只有勇者一个人面对魔王。
//                         勇者：“身为男性的我根本无法杀死或封印魔王啊！我投靠魔王也是逼不得已啊！何况魔王是个大美女我下不了手啊！不要叫我魔王的走狗啊！我好歹也是大陆最强剑圣啊！还有我在魔王手下的工作并不是吐槽啊！”
//                         这是一个魔王与其走狗的故事。
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic04.jpg!min140jpg">
//                         <span class="name">疯狂的板栗</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">妖物语</div>
//                     <div class="content-truncate">每当流星划过天空的时候，你会许下怎样的愿望呢？
//                         希望...........
//                         希望..........
//                         希望..............
//                         流星好像很懂这个偶尔划过的世界一样。
//                         满载着愿望........
//                         一闪而逝，再不回头
//                         于是..........
//                         许多人长大了。
//                         如果我们双手合十继续不停祈祷的话..........
//                         ‘愿望’的份量是否可以留住那颗流星呢？
//                         如果.........这一次...........那颗流星不愿再平静的逝去呢？
//                         当看到一颗流星迎面砸来的时候.......................
//                         人们是不是还会站在原地....................
//                         傻傻的........
//                         对它许下什么愿望呢？

//                         一个关于愿望的物语
//                         伴随着一颗下坠的流星
//                         缓缓展开！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic.jpg!min140jpg">
//                         <span class="name">叶声雪痕</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">修个妹的仙</div>
//                     <div class="content-truncate">——你相信吗？无论是谁，冥冥之中皆有天定命数，而你，便是那受上天眷顾，身缠仙缘之人。
//                         ——呸！仙缘就是让老子出卖尊严穿上女装！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic02.jpg!min140jpg">
//                         <span class="name">7zip</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">勇者千金不想工作！！！</div>
//                     <div class="content-truncate"> 因为连续加班七天而过劳死的金某人，因为被本地的土地神怜悯，而得到了一张异界转生的体验券……
//                         “因为看你可怜，我可以给你在异世界再来一次的机会，并答应你一个愿望！”
//                         “如果可以的话！我要在那个世界最强者的庇护下，一辈子都不用工作！！！“
//                         金某人成功成为了异世界最强勇者的女儿，只可惜那张转生券只是体验版…………
//                         可怜的主人公在异世界的欢乐人生就要开始了！！！
//                         新人，欢迎交流，(●&#39;◡&#39;●)因为插图也要自己画，更新可能会慢些……
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic03.jpg!min140jpg">
//                         <span class="name">S菌蘑人</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">妖物语</div>
//                     <div class="content-truncate">每当流星划过天空的时候，你会许下怎样的愿望呢？
//                         希望...........
//                         希望..........
//                         希望..............
//                         流星好像很懂这个偶尔划过的世界一样。
//                         满载着愿望........
//                         一闪而逝，再不回头
//                         于是..........
//                         许多人长大了。
//                         如果我们双手合十继续不停祈祷的话..........
//                         ‘愿望’的份量是否可以留住那颗流星呢？
//                         如果.........这一次...........那颗流星不愿再平静的逝去呢？
//                         当看到一颗流星迎面砸来的时候.......................
//                         人们是不是还会站在原地....................
//                         傻傻的........
//                         对它许下什么愿望呢？

//                         一个关于愿望的物语
//                         伴随着一颗下坠的流星
//                         缓缓展开！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic.jpg!min140jpg">
//                         <span class="name">叶声雪痕</span>
//                     </div>
//                 </a>
//                 <a href="#" class="work-item">
//                     <div class="truncateTxt">修个妹的仙</div>
//                     <div class="content-truncate">——你相信吗？无论是谁，冥冥之中皆有天定命数，而你，便是那受上天眷顾，身缠仙缘之人。
//                         ——呸！仙缘就是让老子出卖尊严穿上女装！
//                     </div>
//                     <div class="author">
//                         <img src="./images/head-pic02.jpg!min140jpg">
//                         <span class="name">7zip</span>
//                     </div>
//                 </a>`
// });

new Vue({
    el: '#app',
    data: {
        // 页面标题
        pageTitle: '轻小说新人赏',
        // logo
        newPrizeLogo: './images/6book.png',
        //返回首页链接
        index:'./index',
        // 导航栏
        navs: [
            {text: '首页', href: './newPrize_index'},
            {text: '最新资讯', href: './newPrize_news'},
            {text: '规则', href: './newPrize_rule'},
            {text: '常见问题', href: './newPrize_question'},
            {text: '参赛作品', href: './newPrize_works'},
            {text: '获奖结果', href: './newPrize_result'}
        ],
        // 脚部logo
        newPrizeFootLogo: './images/logo.png',
        // 头图
        headImg: {
            height: '300px',
            background: 'url("./images/mobile-index-bg.jpg") 50% no-repeat'
        },
        // 项目标题
        objectTitle: [
            {text: '最新动态'},
            {text: '投稿作品列表'},
            {text: '查看所有作品'},
            {text: '最新资讯'},
            {text: '活动时间'},
            {text: '募集内容'},
            {text: '注意事项'},
            {text: '赛区说明'},
            {text: '奖项设置'},
        ],
        // 文章列表
        // articles: [
        //     {title: '获赏领取说明', href: '#', date: '发布于4月前'},
        //     {title: '轻之文库第二回新人赏长篇入围作品公布', href: '#', date: '发布于4月前'},
        //     {title: '轻之文库第二回新人赏长篇入围作品公布', href: '#', date: '发布于5月前'},
        //     {title: '轻之文库第二回新人赏长篇入围作品公布', href: '#', date: '发布于6月前'},
        //     {title: '轻之文库第二回新人赏参赛作品情况公布', href: '#', date: '发布于6月前'},
        //     {title: '新人赏期间限定活动第2弹 —助力新人赏宣传 赚取百万轻币奖励', href: '#', date: '发布于8月前'},
        //     {title: '新人赏期间限定活动 —参与新人赏书评 赚取限定奖励', href: '#', date: '发布于9月前'},
        //     {title: '新世界创作者盛会再临！ 第二回轻之文库轻小说新人赏 启动！', href: '#', date: '发布于10月前'},
        //     {title: '轻之文库第二回新人赏壁纸赏析', href: '#', date: '发布于10月前'},
        //     {title: '第二回轻之文库新人赏讨论区', href: '#', date: '发布于10月前'},
        //     {title: '新世界创作者盛会再临！ 第二回轻之文库轻小说新人赏 启动！', href: '#', date: '发布于10月前'},
        // ],
        //轻小说列表
        novels: [
            {
                title: '妖物语',
                content: '每当流星划过天空的时候，你会许下怎样的愿望呢？希望...........希望..........希望..............流星好像很懂这个偶尔划过的世界一样。满载着愿望........一闪而逝，再不回头于是..........许多人长大了。如果我们双手合十继续不停祈祷的话..........‘愿望’的份量是否可以留住那颗流星呢？如果.........这一次...........那颗流星不愿再平静的逝去呢？当看到一颗流星迎面砸来的时候.......................人们是不是还会站在原地....................傻傻的........对它许下什么愿望呢？一个关于愿望的物语伴随着一颗下坠的流星缓缓展开！',
                authorImg: './images/head-pic.jpg!min140jpg',
                name: '叶声雪痕'
            },
            {
                title: '修个妹的仙',
                content: '——你相信吗？无论是谁，冥冥之中皆有天定命数，而你，便是那受上天眷顾，身缠仙缘之人。——呸！仙缘就是让老子出卖尊严穿上女装！',
                authorImg: './images/head-pic02.jpg!min140jpg',
                name: '7zip'
            },
            {
                title: '勇者千金不想工作！！！',
                content: '因为连续加班七天而过劳死的金某人，因为被本地的土地神怜悯，而得到了一张异界转生的体验券……“因为看你可怜，我可以给你在异世界再来一次的机会，并答应你一个愿望！”“如果可以的话！我要在那个世界最强者的庇护下，一辈子都不用工作！！！“金某人成功成为了异世界最强勇者的女儿，只可惜那张转生券只是体验版…………可怜的主人公在异世界的欢乐人生就要开始了！！！新人，欢迎交流，(●&#39;◡&#39;●)因为插图也要自己画，更新可能会慢些……',
                authorImg: './images/head-pic03.jpg!min140jpg',
                name: 'S菌蘑人'
            },
            {
                title: '前勇者的我现在在魔王的手下当走狗',
                content: '勇者奉命带着三个公主前去讨伐只有女性才能将其封印魔王。然而三个公主却因为地下城的各种陷阱而被俘，最终导致只有勇者一个人面对魔王。勇者：“身为男性的我根本无法杀死或封印魔王啊！我投靠魔王也是逼不得已啊！何况魔王是个大美女我下不了手啊！不要叫我魔王的走狗啊！我好歹也是大陆最强剑圣啊！还有我在魔王手下的工作并不是吐槽啊！”这是一个魔王与其走狗的故事。',
                authorImg: './images/head-pic04.jpg!min140jpg',
                name: '疯狂的板栗'
            },
        ],
        //图片
        imgs: [
            {src: './images/mobp1.576232e.jpg'},
            {src: './images/mobp2.866ca97.jpg'},
            {src: './images/mobp3.fe243eb.jpg'},
            {src: './images/mobp4.98158c0.jpg'},
            {src: './images/event-schedule.2b09d9a.png'}
        ],
        //募集内容文本
        active: {text: '面向95后年轻读者的小说文体原创作品，轻幻想、恋爱、都市、科幻、推理悬疑、架空历史、惊悚等题材为佳，符合轻小说特征的精彩故事!'},
        //规则注意事项
        attentions: [
            {text: '投稿作者必须完善作者联系方式方可视为有效报名。'},
            {text: '作品必须在投稿期结束前更新达到本赛区要求的最低字数。'},
            {text: '投稿作品不可为任何网站或平台签约的作品。'},
            {text: '新人赏活动开始后接受作品投稿，活动开始前已在轻之文库发布的作品不能参赛。'},
            {text: '中篇组与长篇组不接受短篇集投稿，需为一个完整故事。'},
            {text: '投稿作品仍然可能在参赛过程中被签约，签约不会影响新人赏正常参赛。'},
        ],

        //成功签约
        signContract: [
            {title: '执行官的筹码', href: '#'},
            {title: '我，只是一名轻小说家', href: '#'},
            {title: '月球上的公主', href: '#'},
            {title: '异能学院美术系的大少爷', href: '#'},
            {title: '雷鬼：不死者佣兵传说', href: '#'},
            {title: '勇者千金不想工作！！！', href: '#'},
            {title: '前勇者的我现在在魔王的手下当走狗', href: '#'},
            {title: 'Swords and guns on roses~蔷薇花上的剑与枪', href: '#'},
            {title: '空想时钟~梦境支配者~', href: '#'},
            {title: '幽灵之愿', href: '#'},
            {title: '执行官的筹码', href: '#'},
            {title: '我，只是一名轻小说家', href: '#'},
            {title: '月球上的公主', href: '#'},
            {title: '异能学院美术系的大少爷', href: '#'},
            {title: '雷鬼：不死者佣兵传说', href: '#'},
            {title: '勇者千金不想工作！！！', href: '#'},
            {title: '前勇者的我现在在魔王的手下当走狗', href: '#'},
            {title: '幽灵之愿', href: '#'},
        ],
        //copyright
        copyright: 'Copyright 2018 6Book<br>All Rights Reserved.'

        // 参赛作品tab显示

    },
    methods: {

        }
});
