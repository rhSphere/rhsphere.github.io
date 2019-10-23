/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/10/26/SSM-framework-Redis.html","675719b3a7ea3798bc58de0a71628686"],["/2019/02/24/improve-writing-skills-in-workplace.html","ce40bb0269c05d8deb0da986ea66c1fc"],["/2019/02/26/tone-content-structure.html","d47009dbefdfc788ed26f0dc86ca31ca"],["/2019/03/04/ArrayList.html","95fb2dfd5b546adeb86ac3552cb8d41c"],["/2019/03/05/LinkedList.html","aca8b4a43653a6aa482569c33f1eb571"],["/2019/03/06/stack-queue-priorityQueue.html","c16c84bbbbdd205e6e6e40cc634fdefb"],["/2019/03/07/828.html","f17c6e0a53ef34488c12468384afae2b"],["/2019/03/07/91.html","43ee4bb36d0699f1ca0d394c227552f9"],["/2019/03/08/344.html","e2566720d375a242b6e2e080c1245c1f"],["/2019/03/08/345.html","a08bc789f9e2d2f79e31a9247920a0ab"],["/2019/03/09/HashMap.html","434e099cb030a3ef8d27f2cddc5dae89"],["/2019/03/10/HashSet.html","2409d00974418c06d50facd1ba8742ca"],["/2019/03/11/355.html","44acfeaf24905d7fdf894259d8957aac"],["/2019/03/11/594.html","530e99f778d1d7f780a29d6e2f94e3d6"],["/2019/03/14/heap-sort.html","9891297b73a00299c9dac17952957141"],["/2019/03/16/binary-search-tree.html","6f48be8d4131537db05e55a28f029cb5"],["/2019/03/20/outpost-of-DP.html","1e38abfba37591b24158d20e0827d221"],["/2019/03/21/duplication-in-array.html","03f19cdbb07dda3212d6b2bad25e93d9"],["/2019/03/21/singleton.html","be9cda5aaef2c8a38470775a46ccf8a8"],["/2019/03/23/solid-principles.html","37c52d1564e14fcdbe00944bdd41d9c9"],["/2019/03/24/find-in-partially-sorted-matrix.html","0142e8bdc27f93c001414aab3bb61e1d"],["/2019/03/24/replace-spaces.html","57f15e24d9a776f4a5dc4baa5164e0a2"],["/2019/03/26/Spring框架快速入门.html","ba29c0123a776ee2a731ae3add0e61e0"],["/2019/03/26/print-list-from-head-to-tail.html","3b0d0728cfd628c9da0bf83473fe4080"],["/2019/03/27/React项目实践.html","102d986d87cd7e55ccf9a47e2af78ed7"],["/2019/03/27/construct-binary-tree.html","bb7f77a709806359cba65eb86fc99720"],["/2019/03/28/next-node-in-binary-tree.html","72a1ad0ef0c26e86dbbf782d5979da91"],["/2019/03/29/queue-with-two-stacks.html","d2e8f776bcdfe8b9cdf258eee4cf5c27"],["/2019/04/01/bubble-sort.html","bc591d5e9612103c865c861ef0810755"],["/2019/04/01/bucket-sort.html","b15619d1d10a81635bd1612bdf994d1b"],["/2019/04/01/cock-tail-sort.html","e28b690887522c373f43aa0f378dabaa"],["/2019/04/01/count-sort.html","1e2946ed889a86e734fd03590da0b031"],["/2019/04/01/external-sort.html","9c3de34e244cbf071a2a206174e509b6"],["/2019/04/01/heapsort-easy.html","0b966016f7fb951c1ea3a3b1493a321c"],["/2019/04/01/insertion-sort.html","c2dfb2aaa7177381b6f2be5290e7f1f7"],["/2019/04/01/merge-sort.html","06ea6a59b19a9b940be27e4f2ed707db"],["/2019/04/01/quick-sort.html","9f561a74ffb7cf51b8c6ec2520460c8c"],["/2019/04/01/selection-sort.html","0890162e8b3c8d818317a61d3321c902"],["/2019/04/01/shell-sort.html","9b94a66c020492b3756c04e357d418ad"],["/2019/04/10/sort-summary.html","18b570ab0a01703a6ee3cf32237abc66"],["/2019/04/15/binary-search.html","837aa02c9a0b1328056fe2655a6a0514"],["/2019/04/16/fibonacci.html","3eb14310ca1d2c3c294836789020d45a"],["/2019/04/16/min-number-in-rotate-array.html","dd352d22d5066cf5300a048afcf2129d"],["/2019/04/18/string-path-in-matrix.html","d8c7755319ac52a333007be90eb0be6a"],["/2019/04/19/robot-move.html","d826fc231027a1354b5c6ef67962ad8b"],["/2019/04/21/cut-rope.html","be890003a26d9e026465fe783458dfaa"],["/2019/04/21/number-of-1-in-binary.html","b91dccb37ea5e1a543e2df33067468ab"],["/2019/04/24/dynamic-proxy.html","7c2f30d6951ee428fa8648ec708227c5"],["/2019/05/25/1.html","0177e493413a3c858d1c4a1f6ed148d2"],["/2019/05/25/15.html","829984f36ca7ebd4bf59f0abb74346a0"],["/2019/05/25/169.html","0d7237f5dc7ec6ac5e70e211021c9845"],["/2019/05/25/41.html","cdfeb550a989d5a13868ba326ef26795"],["/2019/05/25/412.html","e85620a0972b852dc1837dcf9cacadaa"],["/2019/05/25/88.html","e7437ead752e9c3a6a657a5b1edf53dd"],["/2019/05/27/136.html","c796962730a8753d1d3686c7ff7d2508"],["/2019/05/27/141.html","cbd45c37669524d44c073ce5a168cf7a"],["/2019/05/27/142.html","7705855b1b4f90d20d8a276c14c6f42a"],["/2019/05/27/19.html","802693fe22b5b2acc6af76d5a5aca466"],["/2019/05/27/206.html","090857803c1c4f5306d8768e2d267d9b"],["/2019/05/27/21.html","0514724ca707df8b1eef8e473f55c15d"],["/2019/05/27/215.html","87e498b6fcdb9b8e6d47a327726b1ab3"],["/2019/05/27/25.html","84c3c59240bed0ef5a2bf2460031ae23"],["/2019/05/27/442.html","38394d34941f2f579d2e3135f5876b84"],["/2019/05/27/array-and-genericarray.html","0a2cf49d36f89475765fa351c1c656b7"],["/2019/05/27/arrays-in-leetcode.html","02dd369a6584018e3e7cfb87fe995c01"],["/2019/05/28/23.html","56df9daa1786fbaf8dccf64aa6404317"],["/2019/05/28/876.html","0c64e348b7a209367b4935030589f588"],["/2019/05/28/linked-and-array-stack.html","919c1e60c63f1dada579c13326a9cd2a"],["/2019/05/28/linkedlist-sum-up.html","487a70bbebba8c14d47b8e18ebde3f7a"],["/2019/05/29/20.html","ee1d2ab6739ad06b9a1b747eca1b4848"],["/2019/05/29/leetcode-asc.html","094f2cb15f793306c7ddb0b2afd1eee6"],["/2019/05/29/sample-browser.html","a93fc9c6923a32f4301e2ca8f18f002a"],["/2019/05/30/150.html","233cfeb2eed6b7a55b46716e5896ada4"],["/2019/05/30/32.html","6335997543f5d62e06b3bbc8b624b75e"],["/2019/05/30/stack-sum-up.html","14f9125ed86f0ca8b904313a4886c5ba"],["/2019/05/31/641.html","4cdffef7d0585d07491f8bf028c36535"],["/2019/05/31/array-linked-circular-queue.html","7794c02ea10b7fd0bc09f66306e45ab1"],["/2019/06/01/queue-sum-up.html","cba2829baeac64d9bd4f64e40c64374c"],["/2019/06/01/sort-sum-up.html","f62f7f7e121538d218384ffc5699ce17"],["/2019/06/14/perfect-power.html","8e747bcaa19bf57e2153f674d6319f0a"],["/2019/06/19/print-1-to-n-digits.html","1110a36236c751bffb5f636462f74037"],["/2019/06/22/delete-nodes-in-linkedlist.html","ca261b42a03ede54c7524113d649c988"],["/2019/06/23/regular-expression.html","4fa57be724fa15d1b86189d24b16115c"],["/2019/06/29/numberic-strings.html","35c5ee6785834fd8b75837250d141c32"],["/2019/06/30/entry-node-in-linkedlist.html","6f71eef42bf57ffdd1ff284fe4b8602f"],["/2019/06/30/kth-listnode-from-end.html","dca46ce9a61d4806da62a4b95b572785"],["/2019/06/30/merge-sorted-linkedlist.html","d328c457fa78592f2ed886523eb12b1b"],["/2019/06/30/reorder-array.html","18f0a796c835b1a184bbd665aed40d41"],["/2019/06/30/reverse-linkedlist.html","5967e4786f27f8e29660a265075ca532"],["/2019/07/02/substructure-in-tree.html","740cf8f8a53b77f870b31a975eeb2068"],["/2019/07/04/traversal-treenode.html","b1a49ba821c10095c8a07a07300caf28"],["/2019/07/08/heap.html","d038d6a6c79e645d3bfb5ec2392440ae"],["/2019/07/08/priority-queue.html","552a2ed091843953be0a349c7b421d4a"],["/2019/07/09/heap-heapsort-priorityqueue.html","b14411a7d0ea622ba28447698cacdf57"],["/2019/07/09/mirror-of-binary-tree.html","d56d8448713345d702c49aef07bb08d3"],["/2019/07/09/symmetrical-binary-tree.html","8fb715a4e76dea3e672c9eb23288899e"],["/2019/07/10/print-tree.html","eccdebd7841f80d39086326f24792bae"],["/2019/07/11/path-in-tree.html","2b310ea8b475b2c075d795ba8874a6cb"],["/2019/07/11/sequence-of-BST.html","c971f78492db4a5e5da47cd97f54645a"],["/2019/07/12/cpoy-complex-list.html","e1a6f4fcd0a69d2eae0d54d5656ad878"],["/2019/07/14/convert-binary-search-tree.html","4c6899041737161686b08368a0379097"],["/2019/07/25/serialize-binary-tree.html","3bb349313043a7bf3b3f48467ca1b901"],["/2019/07/26/string-permutation.html","0cabf4b4d2449f7448959304f17ee0b6"],["/2019/07/28/k-least-numbers.html","7f965fa02ffd8a2b42c0eed71e923f8b"],["/2019/07/28/more-than-hanlf-number.html","d2e5a8a8d20e6d69f352d30706b97389"],["/2019/07/29/greatest-sum-of-subarrays.html","6e8dc003bc9468ea2bc8b23d4bf01fd4"],["/2019/07/29/num-of-1-between-1-and-n.html","12af5949cf14e06c43fb2fc7d8f19c14"],["/2019/07/29/stream-median.html","dceaec9744fea71d34642fda6ac32de7"],["/2019/07/30/digits-in-sequence.html","bb2ed9baac00ff2d2f6e8207a3e274e0"],["/2019/07/30/longest-substring-without-duplicate.html","9d7348467e973218fddb30ae66b00626"],["/2019/07/30/max-value-of-gifts.html","2e04f57bfefa5036922283b65a031b1a"],["/2019/07/30/sort-array-for-min-number.html","152ee474afb41e1cbf354b10ee76a44e"],["/2019/07/30/translate-numbers-to-strings.html","8355ab8d75878fb1192ea05ea480c1b2"],["/2019/07/30/ugly-number.html","d7dc26dd548d9ef3e1a0d7032c3874a0"],["/2019/07/30/剑指Offer-50-第一个只出现一次的字符.html","d0eb78dbb8908edf6aed4c0f970257ae"],["/2019/08/01/first-common-node-in-lists.html","d86e814694442e37466f2fd298f87744"],["/2019/08/01/inverse-pairs.html","259907d6558c9727acb6f7dc9cf909a5"],["/2019/08/02/get-number-same-as-index.html","08083afe8920396e096ec907d89d8ede"],["/2019/08/02/kth-node-in-BST.html","c846ab16f5653024bd75ce596dce6916"],["/2019/08/02/missing-number.html","5d295b647fb746e0647abb024c4176b6"],["/2019/08/02/number-appear-once.html","389f8fb1cb64672c243d186291875a7a"],["/2019/08/02/number-of-k.html","5265cac29ca56fe00b007345c52e18f4"],["/2019/08/02/tree-depth.html","434eaa3677054b6a8fc3ab2b32ee6c5d"],["/2019/08/03/dices-probability.html","c3c867763a30b347b031b7f37aed8032"],["/2019/08/03/max-in-window.html","72a6883085cdbef8065a26cd8552a254"],["/2019/08/03/queue-with-max.html","3dd89dabf76699757290495c77b4143a"],["/2019/08/03/reverse-words.html","c9f515cc6e501c0d6a15140be336cc4f"],["/2019/08/03/stack-push-pop-order.html","f3f3d901971fce9979b2aed6c6e569f4"],["/2019/08/03/stack-with-min.html","b8e455a31f825f712016d72773070f3b"],["/2019/08/03/two-number-with-sum.html","24e7862a8cefaacfc8a0ca90c799ab98"],["/2019/08/13/dynamic-proxy-more.html","97a4a3882a5aa9b5e2f86da2b13ababb"],["/2019/08/13/scanner.html","d35e24ceeabc8a20cac30019e5cc6333"],["/2019/08/27/catalog-of-swording-offers.html","1e22cf44e0a5a992ded182b5f0003962"],["/2019/08/28/Symmetric-tree.html","b9d7129cfad50c169aa5b11894102b82"],["/2019/08/28/invert-binary-tree.html","2437cb3d50c948f841ef47557e41057a"],["/2019/08/28/same-tree.html","73ef7da798d293f3a04f1f950706e114"],["/2019/08/29/balanced-binary-tree.html","ab11ce46d7227ef1a9583d08f9919563"],["/2019/08/29/max-depth-of-binary-tree.html","51dd54c27c915f5b9941acb3900f5f57"],["/2019/10/10/conclusions-for-some-algos.html","18f5406a163a69aba3c30d4440b28f46"],["/2019/10/23/tranverse-hashmap.html","1ba233ef45cc45f366e1ce15007eb4a3"],["/about/index.html","dbd45eb0446607d7f2f8b1d19efce64a"],["/archives/index.html","555c94d514cacc567887fd2c71412414"],["/bundle.js","09f2af2c03a41273c6639ee5e3049a8b"],["/categories/DPModel/index.html","0f08200d4017fcab4ee2e009e10990d0"],["/categories/Dynamic-Programming/index.html","2792f7e1937cd9972e3771a83064acf0"],["/categories/Easy/index.html","a6cf7fc4fb9ec8e275ef6365fead07ba"],["/categories/Hard/index.html","0a6adedb1e0579dd93d53c8c9bad23d2"],["/categories/HashMap/index.html","31dd2a096afed94302d84181ae8fb2d8"],["/categories/HashSet/index.html","8666846538fc3bbecd69003ab2650328"],["/categories/Heap/index.html","2674e531581efb56fc830dc8e879392d"],["/categories/Java-EE/index.html","786bed3fca6d39fd0f4ccdafc3a0c373"],["/categories/Java/index.html","b8f80324d3c095c5eb9f66b3b64bf29f"],["/categories/List/index.html","97c8ddb800d449fb1be74474335c0c77"],["/categories/Medium/index.html","9bff01e40d693d2e093594933588baad"],["/categories/Queue/index.html","9dc38dd02923041ab98c5325e028d6c8"],["/categories/Search/index.html","58ac732d6df3d266727c457e350e4cb5"],["/categories/Sorting/index.html","cfd36c81b909baf8c70640f7ebf1ff93"],["/categories/Stack/index.html","7b55e94c0d9b5710994d273f315e83cc"],["/categories/Sum-up/index.html","c13a11fd7290a59fcd7d5b90c2a3b405"],["/categories/Tree/index.html","bf978cc61812170a1af92d46ee5cdc7d"],["/categories/index.html","bace103de375574f51f4f0890b9a4547"],["/categories/leetcode/index.html","acdd4f2ad370063ef6ba00b784797333"],["/categories/剑指Offer/index.html","a2785e3f0cf5bd7afc957a985a42d930"],["/categories/动态代理/index.html","f21c0ae4254537171c9375a2ec68dc5b"],["/categories/得到/index.html","0d6f3cc8a6d0b11c59d1e7bc1904b2b1"],["/css/main.css","05d4e36c0faee902f58574149fb67f37"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/iget/index.html","b151fdedf7561cea50127958b66a815a"],["/images/JavaEE/SSM-Redis-architecture.png","7d184758a0809d0ede59a558ce0e5da6"],["/images/JavaEE/SSM-Redis-framework.jpg","a197561f1bee7c232e61d65f845f036b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","1bab2792591352186e5e1432bb9e469d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"],["/images/background.jpg","15f9da94b572eb8a5386c6387bde95bd"],["/images/background/andrii-shafetov-03-npc-camp-empty.jpg","e3dc866f26f926091d6f0ea9cf520f3b"],["/images/background/andrii-shafetov.jpg","52a3219206b5031ee46e95c21847f41d"],["/images/background/igor-kulkov-in-attic.jpg","6e470b21065d51140412486c76b9cfb8"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","4674c84054e7c25eb0c38cf25bd747cb"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","bc269a85301a7da7aed977eb41c2d95e"],["/images/iget/improve-writing-skills-in-workplace.jpg","bf428d6c2861c6244ad87cbf79a6854a"],["/images/iget/kiss.jpg","41eeb692820f43caf9d5fb045286e09d"],["/images/jaime-jasso-ny-paintover-final-2.jpg","3f32bf2694371f57cba684d29e70367f"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/olga-orlova-191a.jpg","79c251c6ae83df6bbda8b8d3feae7d50"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin/erweima.svg","911b3354e9f337771a6412195dedfa26"],["/images/weixin/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","7c818a5fc610be7f4621dff2befa77b8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/messages/index.html","29f127acfbea0c503a1a676f59166475"],["/page/10/index.html","7dfd3fca94d37ee63929a872d3f5e745"],["/page/11/index.html","f361919e82a4e3ec1c532a9367ce6604"],["/page/12/index.html","5c14f14e708d11b22e0d4792a4afe765"],["/page/13/index.html","195740a0622d538557511aae72d92695"],["/page/14/index.html","f27f60e982871e9cec6e46ef157f414f"],["/page/2/index.html","efb1f057ca78daac0917834698893b39"],["/page/3/index.html","0ad3812e42297b2009ec9ad1415d11ef"],["/page/4/index.html","a8d2a8e9c18d593130785c0014a25568"],["/page/5/index.html","276b2537d20f36781327cb1a0f0998d5"],["/page/6/index.html","c80c1cd405ee8bce31aa799cae194de7"],["/page/7/index.html","7b8fb8a588aa5bbc072cdadf6997958b"],["/page/8/index.html","062603f02b8fa6cbea8f937452ad5b56"],["/page/9/index.html","c8445e592b95dda7e1417efc806d746f"],["/sw-register.js","1f68ea55cf46537d6937a0509d882e1e"],["/tags/Array/index.html","69cc1fe86a827b6db34a0927348233c1"],["/tags/ArrayList/index.html","9b84ae055e5660c0e73d52fc1ff1eac9"],["/tags/ArrayQueue/index.html","179021988ad1072312c805b7f10b1781"],["/tags/ArrayStack/index.html","1dad76c41fb490ba6ce6c9005c93b4cf"],["/tags/BST/index.html","022f7dc9bf465d022ff6601931c36cc9"],["/tags/Backtracking/index.html","ccfef91e1071b593f09377e0b4bbf077"],["/tags/BinarySearch/index.html","fb2e64567ca57d9f2eb8a4e26cda9aee"],["/tags/BinaryTree/index.html","f976b985247c5020af063eed09a3d2ee"],["/tags/Bit-Manipulation/index.html","14ab911c33d4f840d32bb2a8f4337e6c"],["/tags/BubbleSort/index.html","8451b6d9941db3b012ebac223060a025"],["/tags/BucketSort/index.html","1343884e5b1d457d9333a66286c29fa5"],["/tags/Circular-Queue/index.html","59f414ee5d9334c665fc7e12e32bb9f6"],["/tags/CircularQueue/index.html","952eee0b3aed9a99c4ca707017d45492"],["/tags/CockTailSort/index.html","5a98336404bff9816e83c1f869d89297"],["/tags/CountSort/index.html","bb1a6ab54f29b7dd7dee4bf7f2b460bf"],["/tags/DPModel/index.html","c54751338c763c3d2327020ee9103eb2"],["/tags/Deque/index.html","749e2463238566fd92bcf2f0e326b2ed"],["/tags/Design/index.html","7240f1780b8941fc52cee67bd0d780b8"],["/tags/Divide-and-Conquer/index.html","e4199acea1cf064dec87e6574424feed"],["/tags/Dynamic-Programming/index.html","c4f328904275e223d10e0a90c97f3f06"],["/tags/ExternalSort/index.html","55e152ca6558bbf16662f06adb782ff9"],["/tags/GenericArray/index.html","dd8cbed4c9dfdbc7c488a97bdc94056f"],["/tags/HQ-Code/index.html","2fa17aa496e1fe09eaf31e30d724fa05"],["/tags/Hash-Table/index.html","778c3ce08c4ed5ca458db8a92030b315"],["/tags/HashMap/index.html","8827a6797689127e356360f93f3bb474"],["/tags/HashSet/index.html","d58c53ec65382d6f773ad453797dafd7"],["/tags/Heap/index.html","9b076a8787dc3d64a02bfaa81453a9f3"],["/tags/HeapSort/index.html","a648edb24500000941606ae014e12ca2"],["/tags/InsertionSort/index.html","533f22bd0286570dc95012694a578f03"],["/tags/LikedList/index.html","a123771c311d621a6930a7c664d84460"],["/tags/Linked-List/index.html","412beba11c11623373963d8122c329a7"],["/tags/LinkedList/index.html","6dfb9ae3a530207222a53665ddb0d9e6"],["/tags/LinkedQueue/index.html","28acd55babd6157402dbf9a08982655b"],["/tags/LinkedStack/index.html","cdfe543a79be1aaf6ab9acab9c450fe9"],["/tags/List/index.html","7e799bafe898b937171b910dd7810a45"],["/tags/Math/index.html","c6dd391dd8f627fc37b31415c47dba0f"],["/tags/MergeSort/index.html","e5618c87a868ad15d45767c6d29d5619"],["/tags/Power/index.html","3a3248fe524c92143d81eebe7f2b147e"],["/tags/PriorityQueue/index.html","9254cab6398dde95f74dff049caf6e57"],["/tags/Queue/index.html","50e35c435ae83c30b2e6d5179ef33aac"],["/tags/Quick-Sort/index.html","52d25c569b67a49440592cdc8dd50a7e"],["/tags/QuickSort/index.html","82f32322f56053d5402aa553d3ce38e8"],["/tags/Recursive/index.html","f8e491052a494d504fffde7228cf924a"],["/tags/RegExp/index.html","e3d2404e205ee80a4eff2d68be3fadbf"],["/tags/SampleBrowser/index.html","27622c1d49af3ff3bf0b88bea1e82eab"],["/tags/SelectionSort/index.html","4984341a770bdf73a8148fbb8fee290e"],["/tags/ShellSort/index.html","796fe26d8f0361b82f2ae17aa94441b5"],["/tags/Singleton/index.html","fe6abe3e9c2892be7af937aaded75b5d"],["/tags/Sort/index.html","e3a107eff1a0cec8bb616f611638de53"],["/tags/Spring，-Spring-MVC，-MyBatis，-Redis/index.html","b0f01c41ff3289368a3c29294c8876be"],["/tags/Stack/index.html","03ca532bda8f26f80d4b7d7371af9a6c"],["/tags/String/index.html","3fc9f4495c5596d69c6fa587898dff5a"],["/tags/Sum-up/index.html","b1b412ff18e3331d9604b18cfa162d5c"],["/tags/Tree/index.html","a8f691a957b12201dd84538292baa36d"],["/tags/Two-Pointers/index.html","db0d6cc2c28fc6478d93ffc1947f83e5"],["/tags/bit/index.html","124d97c46f6973bde66865633d58ad86"],["/tags/catalog/index.html","d25fcedb2eece4421376c7516a727d9b"],["/tags/fibonacci/index.html","7ccedf1b58b0696a817b7737b9bfb6b3"],["/tags/greedy/index.html","225a9da9f7f6c82fd1065fa21ec022c4"],["/tags/index.html","fcd6d52dd25fd2a60458ab00eb437fd3"],["/tags/java/index.html","7cbe89542ad7e69b01eddb524880b07b"],["/tags/leetcode/index.html","18afe0dea685caa05ec59c0365570dae"],["/tags/matrix/index.html","4b43b885158058398621a34e15262653"],["/tags/search/index.html","7fe88065a5fd4320aedda32b09c8c723"],["/tags/volatile/index.html","0896ad70ccf558a86b83f74a6756bd70"],["/tags/动态代理/index.html","d9b15232da4d60453a0606b19ab964a0"],["/tags/得到，职场写作，软技能/index.html","8cc424bbebccaa7fe845451835844235"],["/uploads/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
