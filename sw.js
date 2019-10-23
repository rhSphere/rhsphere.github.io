/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/10/26/SSM-framework-Redis.html","53e9d497ffef20a86dc48b4a166be4b0"],["/2019/02/24/improve-writing-skills-in-workplace.html","79fa3c6f9de8a154f776b96260b3f343"],["/2019/02/26/tone-content-structure.html","c62de85f0126970ab5e464fb31676d3a"],["/2019/03/04/ArrayList.html","823373dd3a0b516bc4c7c8323dc1712e"],["/2019/03/05/LinkedList.html","554123982b08dac44298000ca74cd0e3"],["/2019/03/06/stack-queue-priorityQueue.html","4f990f82132e068573b7986a68fb5c07"],["/2019/03/07/828.html","5860460356a48cc530e1180e9df8ba4c"],["/2019/03/07/91.html","87a1fb2fbe8d06c546dd111870661268"],["/2019/03/08/344.html","1c90ffe08fa1e7d849b632ebf2ad6230"],["/2019/03/08/345.html","b772f99f4e283fd579110d85ce0e1f42"],["/2019/03/09/HashMap.html","a651b920b036b8a765e87744c1bde280"],["/2019/03/10/HashSet.html","ddf6fdb600b89524910900e36cee4ede"],["/2019/03/11/355.html","070f7a5bdeff408cb53f429169ee35fa"],["/2019/03/11/594.html","74bed5e011bbc0d6563abe001aa73474"],["/2019/03/14/heap-sort.html","4541c0384f8a0cb36b222c76524df2f5"],["/2019/03/16/binary-search-tree.html","36b778354ba76d266456faf2c420c819"],["/2019/03/20/outpost-of-DP.html","fd6c474879cfffb21e3586fa2c7f3990"],["/2019/03/21/duplication-in-array.html","c1b0b57eec1d55052b7e0f2a954fd5f5"],["/2019/03/21/singleton.html","0b7aa2c1ee12f0b5964fa8194c137b1c"],["/2019/03/23/solid-principles.html","00aff4a5c2f77390a31f631255e753c9"],["/2019/03/24/find-in-partially-sorted-matrix.html","a99b7766a09f5045f3d17f8073f03936"],["/2019/03/24/replace-spaces.html","8fbbd3cac1f0be2402653c5317155c28"],["/2019/03/26/Spring框架快速入门.html","5f1eeb1fb86ec8224ed4fbcaac2cf7f4"],["/2019/03/26/print-list-from-head-to-tail.html","e4bbd809dcb477604517db38affde8c1"],["/2019/03/27/React项目实践.html","3faac9e1f629dbfa7ae9a2aa150d76c4"],["/2019/03/27/construct-binary-tree.html","4ac9f2db92c16ab3e6d0153f89541d5a"],["/2019/03/28/next-node-in-binary-tree.html","0a456d5e090922fe87bb9dd185096f87"],["/2019/03/29/queue-with-two-stacks.html","c4e8089e5bd1b5d8cddf5818fad5be77"],["/2019/04/01/bubble-sort.html","d6e70e18f85a9bfe1810efa211cb666d"],["/2019/04/01/bucket-sort.html","b19d55032edbe3a14becda5c75c8973e"],["/2019/04/01/cock-tail-sort.html","d483b3fed213c41d9e708272c3130b88"],["/2019/04/01/count-sort.html","dfe64eb53bb0e05a67fd9a123ed0e470"],["/2019/04/01/external-sort.html","2b6f6f04c34f61120f29e0c433b6e40b"],["/2019/04/01/heapsort-easy.html","4355173fead8a82a54c4bca29d1ab348"],["/2019/04/01/insertion-sort.html","83514adb0732eda2c9940e4bf075491d"],["/2019/04/01/merge-sort.html","9ea3cbb96ff0be20f5694ca40f968a97"],["/2019/04/01/quick-sort.html","2c08810535aafe403e5652a21bb7348f"],["/2019/04/01/selection-sort.html","7d87e48601461b6db3f77563abe59b27"],["/2019/04/01/shell-sort.html","ddb9e834b682a9be0638ce7ebf4a53a4"],["/2019/04/10/sort-summary.html","33721ea3ca405877e30dee7fa687cbb0"],["/2019/04/15/binary-search.html","ecb9d139383279ebab37ac616b913e47"],["/2019/04/16/fibonacci.html","7d87e346fbebbee7fc1c95d9cdfd0ca3"],["/2019/04/16/min-number-in-rotate-array.html","09474ebb4b709f3242aa3d907cb27573"],["/2019/04/18/string-path-in-matrix.html","4e1c641c34e2e619454d03548a793c3f"],["/2019/04/19/robot-move.html","fab597db022d642cade1cafdbb3f1de7"],["/2019/04/21/cut-rope.html","6ffb6c3c02c38d1e16d2d81d272251c7"],["/2019/04/21/number-of-1-in-binary.html","5224cbb911380f79c77e1bd742ad89fb"],["/2019/04/24/dynamic-proxy.html","9f49270c28bac72e4f43c712a1bd1dc3"],["/2019/05/25/1.html","3a5f163e0403ef82520e414f1aacc0e2"],["/2019/05/25/15.html","70356e7459915efff62400a323cc5af1"],["/2019/05/25/169.html","9b6257efa4f65af32a56eb8d13a52f16"],["/2019/05/25/41.html","8407c21936674e79d54d5ca52c712dc6"],["/2019/05/25/412.html","ffb00074a3bad9b70cbc70807782874a"],["/2019/05/25/88.html","8fea7d604b073421345e53fc58294131"],["/2019/05/27/136.html","38af30139eb9098ac59db0126988ea83"],["/2019/05/27/141.html","1f00f9ee3a1d2371eea4be9a5d05dbc0"],["/2019/05/27/142.html","468eb717053532331ad5aff74d2d8ae5"],["/2019/05/27/19.html","473eb31e279305be4f1bebf5bfe295f0"],["/2019/05/27/206.html","6da63948037ea72d067dfe44636620ba"],["/2019/05/27/21.html","4c90673ce447ae53af4a81d424e914ce"],["/2019/05/27/215.html","56706057264110848e3d2f1acc4d6e69"],["/2019/05/27/25.html","58197aac569e2c8daa6ca0a55edce424"],["/2019/05/27/442.html","a617d0e592f904069ae09a8d74725d7b"],["/2019/05/27/array-and-genericarray.html","3da57e34d0eefbd8b8b083ec1feda7d0"],["/2019/05/27/arrays-in-leetcode.html","4c098ce8a61975b91bcc8055dc8d87a2"],["/2019/05/28/23.html","9f71e87c341fe3b90067a31c1fdf6596"],["/2019/05/28/876.html","2c9878f94f88ab8b37a1e1c02c323154"],["/2019/05/28/linked-and-array-stack.html","16cfff1204f65d0251eda0a8718042aa"],["/2019/05/28/linkedlist-sum-up.html","d98a39b0f603d8814f49a79a1809d39f"],["/2019/05/29/20.html","27aa5c0c7c7ec21680f3ac1fccc0d3c4"],["/2019/05/29/leetcode-asc.html","b9f2881ec279728e449a8269385353b7"],["/2019/05/29/sample-browser.html","f217c2631aca6a869143e2a117f0f4cb"],["/2019/05/30/150.html","ba19003f4b6607e704ea35fffc4eda42"],["/2019/05/30/32.html","101bbf2209b81fb11bfb8d74adf72969"],["/2019/05/30/stack-sum-up.html","84f0c469716824334ebcbb8bb54dd70b"],["/2019/05/31/641.html","268e9b722960867ee0923e08d76ce123"],["/2019/05/31/array-linked-circular-queue.html","c52e62942566ade1550406e01babc87c"],["/2019/06/01/queue-sum-up.html","d5d65a3a70952e899d454052b6deed55"],["/2019/06/01/sort-sum-up.html","ed6da546d8adfec3fa5b08d55aa7d7c0"],["/2019/06/14/perfect-power.html","7c05953bc01d9045e3e1e404c539678a"],["/2019/06/19/print-1-to-n-digits.html","74016a915e5afe3d932b00d204f7e957"],["/2019/06/22/delete-nodes-in-linkedlist.html","5e570db358c0d8f176bf6d6e8f7de7ec"],["/2019/06/23/regular-expression.html","d48202f3bcf0b09daa2afc9e3cc8d606"],["/2019/06/29/numberic-strings.html","c85df4412a27a509a52bf0e3e9563901"],["/2019/06/30/entry-node-in-linkedlist.html","4c2b4cc6c48eeb374311a61d46c6c6e8"],["/2019/06/30/kth-listnode-from-end.html","3ca19c5a0309fc7d486217fabd49213f"],["/2019/06/30/merge-sorted-linkedlist.html","b83281500f94838f1b53d9e32d70c1a3"],["/2019/06/30/reorder-array.html","3a78954d7badad19d1dec09421cdaa0f"],["/2019/06/30/reverse-linkedlist.html","05bddf36130876e60982ccb20112b3c5"],["/2019/07/02/substructure-in-tree.html","1f94655f889aa19007020c7db813c028"],["/2019/07/04/traversal-treenode.html","403d5049b93f6b1ab6765367cae3850e"],["/2019/07/08/heap.html","e3e68027ad031bd5ae34693d3ebd8057"],["/2019/07/08/priority-queue.html","24d3fd02b0928386a76be078f8394759"],["/2019/07/09/heap-heapsort-priorityqueue.html","443047a3d860459be1b50d3b4d15bf23"],["/2019/07/09/mirror-of-binary-tree.html","1ff627eca2019e10695dfef3b8507137"],["/2019/07/09/symmetrical-binary-tree.html","07343799dfc0afd627b119fdb1b79609"],["/2019/07/10/print-tree.html","8ba7f532cff12fe7e417299e3531c065"],["/2019/07/11/path-in-tree.html","720386cd013cf3324c91c11af760998b"],["/2019/07/11/sequence-of-BST.html","b57991af0406e53aa57f28fdfa66d946"],["/2019/07/12/cpoy-complex-list.html","1fc90ea2bb94780680d246fd5489852f"],["/2019/07/14/convert-binary-search-tree.html","39213845d532315f8d6e86854f9cb7cc"],["/2019/07/25/serialize-binary-tree.html","ddb5c52f809a133d31e44c3cd13532b7"],["/2019/07/26/string-permutation.html","428dcae97cf5d02037b7812d1fb9981d"],["/2019/07/28/k-least-numbers.html","f457b82d5383f35d4383904d0db4dad2"],["/2019/07/28/more-than-hanlf-number.html","c72551c5e22f63fd97adbd6453be9713"],["/2019/07/29/greatest-sum-of-subarrays.html","47b4f56de46f45797350023be9657381"],["/2019/07/29/num-of-1-between-1-and-n.html","c72f559b1bd46e0a8b788390dede3712"],["/2019/07/29/stream-median.html","86060141575d418125b241930a635489"],["/2019/07/30/digits-in-sequence.html","cd1084092258588069a69a587b3937c1"],["/2019/07/30/longest-substring-without-duplicate.html","b44a3ca896b3360323856e62ec0326e7"],["/2019/07/30/max-value-of-gifts.html","e93e4eef4517766e44c839a409dd773c"],["/2019/07/30/sort-array-for-min-number.html","a4b9aeb12126aa92dda1dd2988eaf86e"],["/2019/07/30/translate-numbers-to-strings.html","174d2f030f791dd1487510e1d474fcf3"],["/2019/07/30/ugly-number.html","b5a3cb39edc1a3b35696fe0aa9a5c8d7"],["/2019/07/30/剑指Offer-50-第一个只出现一次的字符.html","1397202356aa8139c427c3e8ddcc39b0"],["/2019/08/01/first-common-node-in-lists.html","7a6981889c07f2c189b2e7f4f2d0a604"],["/2019/08/01/inverse-pairs.html","18a41edf2756717d985f117fd85e58cb"],["/2019/08/02/get-number-same-as-index.html","35e5cca2cc5204065c7a0f1fe0df9a51"],["/2019/08/02/kth-node-in-BST.html","2966267c2ab53b5c480c7372adda3eba"],["/2019/08/02/missing-number.html","81c29a70503af7730f26ac2e4d620541"],["/2019/08/02/number-appear-once.html","9d8609d1931fcdf6c20b39eb635c74bf"],["/2019/08/02/number-of-k.html","e9695cfe50c228ec2b5a87617987430e"],["/2019/08/02/tree-depth.html","49c4844e7e27d9bf05d36b02237ee460"],["/2019/08/03/dices-probability.html","0199d7fbc03bd393b7ae5a6c0193759d"],["/2019/08/03/max-in-window.html","4b5d01f5e33bfab964af78ad9d2a7a33"],["/2019/08/03/queue-with-max.html","fd4d38af300a7ff4355460996e673c28"],["/2019/08/03/reverse-words.html","c4ded56bbbe77fbba341f1d842ff07cd"],["/2019/08/03/stack-push-pop-order.html","13158e4547a6ea3429b88ff408a341c2"],["/2019/08/03/stack-with-min.html","265f1c897c210500cda3a1aa1d2c0cb3"],["/2019/08/03/two-number-with-sum.html","82f296b31a00299def698f728af3d350"],["/2019/08/13/dynamic-proxy-more.html","5978e764323645e22e963db668f357d4"],["/2019/08/13/scanner.html","bc7988a4515feac88a8a8187987d831f"],["/2019/08/27/catalog-of-swording-offers.html","2395e0fb2dd0d9431365d1618b97653d"],["/2019/08/28/Symmetric-tree.html","d6cc37444f4102759b26d2d0b5a089b3"],["/2019/08/28/invert-binary-tree.html","e389a87218e3c20ddc141012774ea92f"],["/2019/08/28/same-tree.html","0206802e257a17a4c3e7e33820682f43"],["/2019/08/29/balanced-binary-tree.html","44f5b8ad012b38b2a2f5fddbe687de2e"],["/2019/08/29/max-depth-of-binary-tree.html","514f8fdb78206eae9a2fa77b734343a2"],["/2019/10/10/conclusions-for-some-algos.html","72afe9bfccf8e63b76d98fac6a144f42"],["/2019/10/23/tranverse-hashmap.html","dd5966783da25211e6cec74c0b33b624"],["/about/index.html","3f19f5dd20688470a7972ec4931ecad5"],["/archives/index.html","30aca4971c9eee1122825cf3911d6b31"],["/bundle.js","58738ffae6bd5b0f2f2ecb6093c09803"],["/categories/DPModel/index.html","3a2f1d4e090cec09295363cd3826b238"],["/categories/Dynamic-Programming/index.html","e9b5296a971e48868d981261f3deb178"],["/categories/Easy/index.html","91003cdbe89c61cc4a79a837bad901cd"],["/categories/Hard/index.html","86d67fc34c337aa0961088bbcd92a066"],["/categories/HashMap/index.html","49b657c3c83f60b6deb537513cfe800b"],["/categories/HashSet/index.html","8690829d9f8d6e975605a7ffa075e3c4"],["/categories/Heap/index.html","86d3096224194034597a65de6e9c01ce"],["/categories/Java-EE/index.html","6303fb9d1e29b842e38e9f9863fb7438"],["/categories/Java/index.html","94ddab403ddf710714825edc898f3bd5"],["/categories/List/index.html","15d456404714886c23675289790b2030"],["/categories/Medium/index.html","0bf5505c6451f84487628e071dacc859"],["/categories/Queue/index.html","53bfac558c7e6dde828bdf19f9626e9c"],["/categories/Search/index.html","d74572363ae27391161605bde6ee19c5"],["/categories/Sorting/index.html","ad2e78a6595127231ff72b72e280c54f"],["/categories/Stack/index.html","5d7cf25306ef30005afe3a7a2f8b59d5"],["/categories/Sum-up/index.html","1e03e82917be5d0cb254d5c7d7350a5b"],["/categories/Tree/index.html","93cbb907a6fc128f5e978a3bc61a27bf"],["/categories/index.html","4c830da1187b09f66e5a71341fff013f"],["/categories/leetcode/index.html","f704e1ce3c8f731dc04872b459f8f8b1"],["/categories/剑指Offer/index.html","ee69f263460db329ef5321766fb5ceea"],["/categories/动态代理/index.html","4025b3d7ce304301f33cd9a109f8afb4"],["/categories/得到/index.html","58231d5eaa233c94ff06d5df0d9d3aab"],["/css/main.css","f4deb18f37672d6fa10f301dda8a56e6"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/iget/index.html","d9259194da6e2e0b403083b1a6013cea"],["/images/JavaEE/SSM-Redis-architecture.png","7d184758a0809d0ede59a558ce0e5da6"],["/images/JavaEE/SSM-Redis-framework.jpg","a197561f1bee7c232e61d65f845f036b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","1bab2792591352186e5e1432bb9e469d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"],["/images/background.jpg","15f9da94b572eb8a5386c6387bde95bd"],["/images/background/andrii-shafetov-03-npc-camp-empty.jpg","e3dc866f26f926091d6f0ea9cf520f3b"],["/images/background/andrii-shafetov.jpg","52a3219206b5031ee46e95c21847f41d"],["/images/background/igor-kulkov-in-attic.jpg","6e470b21065d51140412486c76b9cfb8"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","4674c84054e7c25eb0c38cf25bd747cb"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","bc269a85301a7da7aed977eb41c2d95e"],["/images/iget/improve-writing-skills-in-workplace.jpg","bf428d6c2861c6244ad87cbf79a6854a"],["/images/iget/kiss.jpg","41eeb692820f43caf9d5fb045286e09d"],["/images/jaime-jasso-ny-paintover-final-2.jpg","3f32bf2694371f57cba684d29e70367f"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/olga-orlova-191a.jpg","79c251c6ae83df6bbda8b8d3feae7d50"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin/erweima.svg","911b3354e9f337771a6412195dedfa26"],["/images/weixin/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","808f92bda9e55e7d587a4c9d83c0d6da"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/messages/index.html","bc12a76505eb92835b94b42d85c49a68"],["/page/10/index.html","1a4a08cb31551d5e7e6737cda5333bcf"],["/page/11/index.html","f725473dc97a51766589e5ccd82a95d8"],["/page/12/index.html","7b12de862786f16ea529605004b9b984"],["/page/13/index.html","4ac846cc0db833ad2adbec1e5f1c037e"],["/page/14/index.html","927da53bbc1a20fd44ba25b904b9ad14"],["/page/2/index.html","4e96e028b25f08ff16332d0c15d01c5a"],["/page/3/index.html","d92f2572f01d88f31986716f28af3dc3"],["/page/4/index.html","21d474f2d206de8f20054213a4ff8386"],["/page/5/index.html","86da20f35dc71e7f8935a26b29ea2deb"],["/page/6/index.html","a951cd8f63b77d62936c564014d17097"],["/page/7/index.html","0ad5e92418519d409ef7dd00159de15e"],["/page/8/index.html","3ad57f1c6cedb2fd7cdfdc019d3591c1"],["/page/9/index.html","ddbb4dd601d3dd494319df13cbf69855"],["/sw-register.js","de149c7d7693dcc53210c0058a77ee10"],["/tags/Array/index.html","28e3a84c1618f5fbc83ff663112d6530"],["/tags/ArrayList/index.html","cc084d778a4e62d8711aa47d07e71d54"],["/tags/ArrayQueue/index.html","ea7cc096432549c520115a7326a3ca1f"],["/tags/ArrayStack/index.html","af2de02e0a09f1b4c6de980648037f9e"],["/tags/BST/index.html","f70fc011c05f6e33851c77c49c9abe80"],["/tags/Backtracking/index.html","acd54a4ce557a51d1c03a24bafa1677f"],["/tags/BinarySearch/index.html","535f7cf5dee4dd3d1dc257d9ee506a45"],["/tags/BinaryTree/index.html","39d108387ea73c51495e31e263564bd0"],["/tags/Bit-Manipulation/index.html","6c122bb711b65751290a169dc22c137d"],["/tags/BubbleSort/index.html","b0e3f1fb12d4f93af6729d360443739d"],["/tags/BucketSort/index.html","6b4b1683e0bbdacb517877242df428a4"],["/tags/Circular-Queue/index.html","6852bb1f70285e1f068140764f69f73f"],["/tags/CircularQueue/index.html","4812225d0960e0732b10987cfbfc0872"],["/tags/CockTailSort/index.html","ea7497eb602a997ba6dc6f9743ef227a"],["/tags/CountSort/index.html","0b7aad1c182e02c91f79e60ed86d4db1"],["/tags/DPModel/index.html","5b9d07237409ce743fce56050a4c15ba"],["/tags/Deque/index.html","a47e5211457ae50467d28a1d57246381"],["/tags/Design/index.html","b6c97064474b559ca7de3bda39f3cf65"],["/tags/Divide-and-Conquer/index.html","a0cbc349aa5a1b58ce3897b1326da81f"],["/tags/Dynamic-Programming/index.html","381f9376e85bf837c2b42006313a0de9"],["/tags/ExternalSort/index.html","d246aaa8a1337a95b01de7409055560e"],["/tags/GenericArray/index.html","158a473dc5916da4655e8b1e6d48f4a9"],["/tags/HQ-Code/index.html","79a2be0f9bbdcedca5915f11f818fbda"],["/tags/Hash-Table/index.html","f7214b6ef9acde4e9bf4abf8ebd1ef1d"],["/tags/HashMap/index.html","755566fac5e2614d6ec24c63627d6aa6"],["/tags/HashSet/index.html","3a321167ddbdc35711325a4ccf2eea30"],["/tags/Heap/index.html","d0c56096527514d00e30ef935e92a7a5"],["/tags/HeapSort/index.html","5c9d5b72f1a146c8800fbff521ddd973"],["/tags/InsertionSort/index.html","a9fde52c7136251005016e0f0ae8a98d"],["/tags/LikedList/index.html","cf9974d259336a5bf7e81b738a756658"],["/tags/Linked-List/index.html","7c07cd550b0161dec99968e429aab64b"],["/tags/LinkedList/index.html","705f4be03ad2a19e0b3687240fecc574"],["/tags/LinkedQueue/index.html","f9ecf772b6dbb931d22159babf6a822a"],["/tags/LinkedStack/index.html","c7068ad3f79dc0ff3781b74a0c769b9a"],["/tags/List/index.html","65430cc0d0ea3846ae64225bca7ba5e0"],["/tags/Math/index.html","1ef063845b3831931487f46bad96be1c"],["/tags/MergeSort/index.html","8bf87bcc9d1ce54599060591013d39d5"],["/tags/Power/index.html","bcf1f8ba1aa6a9b06e6cc7b5f66cf57e"],["/tags/PriorityQueue/index.html","a78b5c0f98986ac7095ecddd006bf131"],["/tags/Queue/index.html","243bc4c7279a349bc387955c91a279fc"],["/tags/Quick-Sort/index.html","dd0774667041cc293f60ade2b60263cf"],["/tags/QuickSort/index.html","3a65d06ff826060fdc4c9c188ea17e19"],["/tags/Recursive/index.html","2f61e6a605057d85cacff45135d9e39a"],["/tags/RegExp/index.html","d721d494edd4db8c8a29c49601752a1b"],["/tags/SampleBrowser/index.html","5bcc4afde761711eab43d3c5d8681c03"],["/tags/SelectionSort/index.html","806e3e907e0d42adfd908fec470d6b93"],["/tags/ShellSort/index.html","48a5250f581dabaf57b8f8c9d182f442"],["/tags/Singleton/index.html","edb9889348f2bd78c40cc848e02002e8"],["/tags/Sort/index.html","7b59237b93ea8403819fe0af63cf4a1d"],["/tags/Spring，-Spring-MVC，-MyBatis，-Redis/index.html","9766797a60f65b5049be56b4751a175d"],["/tags/Stack/index.html","080ba31fa36134b9ea6f4c451fa893e1"],["/tags/String/index.html","ec61b0dd17352902a33c7c1af2168dca"],["/tags/Sum-up/index.html","3bf4dd5b038e11d5ec9ce7dc1013111b"],["/tags/Tree/index.html","ef2cb82d2153e8d5679cebe6f0e76a27"],["/tags/Two-Pointers/index.html","a1829dd606871aafe68edde04ffec4af"],["/tags/bit/index.html","006501474eba25762a8a93238a1a2170"],["/tags/catalog/index.html","c4c71124fdb6c3b410e3604a609f2e5c"],["/tags/fibonacci/index.html","78429dc62739825223d6081f6c598e55"],["/tags/greedy/index.html","eaa1d413dc99b37e0c6d706e06450f76"],["/tags/index.html","83e1587adf9e3e1875a2d0bbe3b75a24"],["/tags/java/index.html","613c9e4e417896465789a16c0dcfb2a9"],["/tags/leetcode/index.html","672027762f2efe5fcac9c29725a9b2b5"],["/tags/matrix/index.html","5abb70a435f1aa73a982f5b65ace4610"],["/tags/search/index.html","a6b9bacabb2ef2c6ee86efa7cff7bfeb"],["/tags/volatile/index.html","21d5d8858a69dae3cb7aa219fc8e0c4c"],["/tags/动态代理/index.html","a4a74dd6525bdd0757f5d2cebd2cacc1"],["/tags/得到，职场写作，软技能/index.html","833696d3f7414c92c308074ab9b4c804"],["/uploads/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"]];
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
