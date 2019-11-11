/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/10/26/SSM-framework-Redis.html","0323b2b0ed2b0804fa20aefb8e2ee418"],["/2019/02/24/improve-writing-skills-in-workplace.html","416850fc6075ee996892fcdd5e89aea1"],["/2019/02/26/tone-content-structure.html","cc17043e24e9b64b586362fe0a7de4da"],["/2019/03/04/ArrayList.html","0fd028253be11da4c01c24927314eabe"],["/2019/03/05/LinkedList.html","7284e84329f37ff8517734dcb1d0347e"],["/2019/03/06/stack-queue-priorityQueue.html","1bfdc1427f8f8938a935493bda547b3f"],["/2019/03/07/828.html","77f242e6ab3d3868766bda9132c94e39"],["/2019/03/07/91.html","061339d17d54f68f2c311f26013e5480"],["/2019/03/08/344.html","bafddc52e3ce2738460ea97a0929beb0"],["/2019/03/08/345.html","b5182a0923021014277d5722cfac8fdf"],["/2019/03/09/HashMap.html","4dfe26c439b674f641ad53ead3c1a6ff"],["/2019/03/10/HashSet.html","9ec4d8a21c5d82fe24098553b9da10c5"],["/2019/03/11/355.html","0f072f0c19aabc8fd9bc3ca7b158bb6b"],["/2019/03/11/594.html","0e03184bb32c52813ce4037d276b05d1"],["/2019/03/14/heap-sort.html","734e4f8c6d5eceb85fae03ce48d237ae"],["/2019/03/16/binary-search-tree.html","c8841d180eaf6c4883a7e20d07f95f78"],["/2019/03/20/outpost-of-DP.html","50c28f66daf77e71b351a4e8ea484dd2"],["/2019/03/21/duplication-in-array.html","47f4f6c86eb9d30e69a29afc3bd68730"],["/2019/03/21/singleton.html","650d4c8db84555625ea91aeb9ff8583d"],["/2019/03/23/solid-principles.html","ab7368c71e4a91afdaa1e8ecb159dcf0"],["/2019/03/24/find-in-partially-sorted-matrix.html","ce6b0a9c5045e84f50c565e993ad1971"],["/2019/03/24/replace-spaces.html","cc8114cd3479a57811df026fe066bdb4"],["/2019/03/26/Spring框架快速入门.html","c78af4e76579212b6747751da71b20ec"],["/2019/03/26/print-list-from-head-to-tail.html","d33b4eb88587e439fc4e0a403a836968"],["/2019/03/27/React项目实践.html","ce3f0b52e59f4bbe0223603383425509"],["/2019/03/27/construct-binary-tree.html","d936c4b66d4c4d0120edb1bc3f3c8090"],["/2019/03/28/next-node-in-binary-tree.html","c51c605983a2695a29f89970b949d31b"],["/2019/03/29/queue-with-two-stacks.html","612d05a3ea87e2f31cef099f322289e3"],["/2019/04/01/bubble-sort.html","f6f1b748803710e4d1a0aaa6eee66358"],["/2019/04/01/bucket-sort.html","4a24df7c23b75c79a126f3bb13e31afb"],["/2019/04/01/cock-tail-sort.html","ab4af4cfa0e9d037dbeddcfa07c7f092"],["/2019/04/01/count-sort.html","7f1959cb61c3559b391cffbbe9e4e477"],["/2019/04/01/external-sort.html","8cf0b415e590fe2ab1f8653fc5ccc865"],["/2019/04/01/heapsort-easy.html","fafec5571e4142b7ad33229d7e020523"],["/2019/04/01/insertion-sort.html","45d3fae9238ff1463072a914687fe152"],["/2019/04/01/merge-sort.html","e656471a05c1ec896ed79e505b3557b3"],["/2019/04/01/quick-sort.html","cfa3a936ef736243aba2d8a5cb19b428"],["/2019/04/01/selection-sort.html","6034559fdef404e4c4a847c5877bd670"],["/2019/04/01/shell-sort.html","c1362acbed85a53558468674b72b4a5e"],["/2019/04/10/sort-summary.html","37d0feb13ebe7d47010187431133502b"],["/2019/04/15/binary-search.html","8754f674324d47336c23653a3fa78285"],["/2019/04/16/fibonacci.html","d63401a9bf8d67ad85a3da0994e686a1"],["/2019/04/16/min-number-in-rotate-array.html","d58131b9a9a99648a38ec5e00719963f"],["/2019/04/18/string-path-in-matrix.html","b337865016c33b69c495e87d5d18bb1d"],["/2019/04/19/robot-move.html","be8c0e05356fa3122a30fbc50cc2f356"],["/2019/04/21/cut-rope.html","040708d26f9e37d91c6b7380813c2425"],["/2019/04/21/number-of-1-in-binary.html","2b3098fdfaf98fc8911f57e72812b796"],["/2019/04/24/dynamic-proxy.html","88e8abd9418063d18d5c3f129303da6d"],["/2019/05/25/1.html","404c11577a50aab60041352e8ee83c5d"],["/2019/05/25/15.html","062f67287193192310039a6a3924f20a"],["/2019/05/25/169.html","11974d48a754b57dd00cd0791d501715"],["/2019/05/25/41.html","95ceeb4132f7777eca31ff5875d892f1"],["/2019/05/25/412.html","748f18baf0c88ace1376116d3ec10d9b"],["/2019/05/25/88.html","aafaa4d5c50da0d27f0efdaea67ac061"],["/2019/05/27/136.html","e9dccb93e2c897d1b74903723cda35ac"],["/2019/05/27/141.html","89dfa28378dbf2abda119531cf5d61d8"],["/2019/05/27/142.html","0488d4cb0faadcf34a957c7057777ed1"],["/2019/05/27/19.html","6cdb65aa80295b5788200b6fd1314091"],["/2019/05/27/206.html","42d1a9e5425765852370215bcbe2dca3"],["/2019/05/27/21.html","487c1c0797cd3ed6b7c1e4da8d2f6625"],["/2019/05/27/215.html","5841731594fe4ddd9f9c54069674e9b6"],["/2019/05/27/25.html","0c26ffea1b8d26f227c229f08dfefd13"],["/2019/05/27/442.html","ee42c0c3139671eb9c37892af942a886"],["/2019/05/27/array-and-genericarray.html","cd0f8e08e5788aa29d3ba7fb45c4413b"],["/2019/05/27/arrays-in-leetcode.html","fa3418ae6ac2714b35a9ffb26068e6a3"],["/2019/05/28/23.html","896097d256f3f9c871a1f44b265ae8d8"],["/2019/05/28/876.html","63df5e52155721f947a7cdfa4231ec39"],["/2019/05/28/linked-and-array-stack.html","39504a42f37fd2a220ef1a5c00f88f1d"],["/2019/05/28/linkedlist-sum-up.html","13f0666c2c538fe55c50f4d9bb89c565"],["/2019/05/29/20.html","379c60153a6c1452d50b493799ad1774"],["/2019/05/29/leetcode-asc.html","15f7020069091431de5bcd272933e264"],["/2019/05/29/sample-browser.html","36dddab6f2fb155b202372ffc4d788e3"],["/2019/05/30/150.html","44a117f7655089736fccb7c4ccf60c92"],["/2019/05/30/32.html","b51fd50f1d9ed8527de0405d970cfcd0"],["/2019/05/30/stack-sum-up.html","c7959b60825e5c6d0a8b9c872184155d"],["/2019/05/31/641.html","305de83ab543ca1a432d3c51a74458fc"],["/2019/05/31/array-linked-circular-queue.html","a194374d01deb82173e55ea0bad7030f"],["/2019/06/01/queue-sum-up.html","58ee9729ccd09251937622cde2ac1286"],["/2019/06/01/sort-sum-up.html","0ed2f55b299efd7ddeb0ca429366d27e"],["/2019/06/14/perfect-power.html","11a4453048310f354659ceed43ff72f7"],["/2019/06/19/print-1-to-n-digits.html","b8530ae479d2fa476f9ddd886cc04fb6"],["/2019/06/22/delete-nodes-in-linkedlist.html","23e2fcb0c90d7a497d80be3ae1fb7622"],["/2019/06/23/regular-expression.html","fef1e93262ca9091235515ac9cf1e04a"],["/2019/06/29/numberic-strings.html","03ae86a9633fe3d8b43980a6cc7affd5"],["/2019/06/30/entry-node-in-linkedlist.html","e7971bb5a56d3e4a40bd1b56ea56250e"],["/2019/06/30/kth-listnode-from-end.html","667033cd06e038cf773db9603d45c690"],["/2019/06/30/merge-sorted-linkedlist.html","093061bee1dfad748a26d04b656ca1a5"],["/2019/06/30/reorder-array.html","3da154c6e8bb8bb0b3185490be79fe67"],["/2019/06/30/reverse-linkedlist.html","f20e8fdb8830511887385a18d7682023"],["/2019/07/02/substructure-in-tree.html","76945611f625181cf7d693e36c88bbaa"],["/2019/07/04/traversal-treenode.html","ab35499888518faaff5bf7bb2bebe2f2"],["/2019/07/08/heap.html","5e2feef63ab2372bfaf61c6ea3057e58"],["/2019/07/08/priority-queue.html","806ab46d5629faf93ad218fd66bd9d4d"],["/2019/07/09/heap-heapsort-priorityqueue.html","816d91617b6fc71145fd253a2986e140"],["/2019/07/09/mirror-of-binary-tree.html","8dbfc7220931588fe610242c2fefd245"],["/2019/07/09/symmetrical-binary-tree.html","c754a15e60aeddbfa530a91333cddbad"],["/2019/07/10/print-tree.html","f0a7c20867d0a17aa905e6a59b9bf873"],["/2019/07/11/path-in-tree.html","baec60023c499b1a7e57b7c186127a0d"],["/2019/07/11/sequence-of-BST.html","0e5c8f4506242c17b91e068cfeb4a5b0"],["/2019/07/12/cpoy-complex-list.html","0bd9cedf494e7028ae5483244b4452be"],["/2019/07/14/convert-binary-search-tree.html","0df115966f492c319416d9da8bc422aa"],["/2019/07/25/serialize-binary-tree.html","4ddd20eba2a7ba38b836c70bb4ef98a4"],["/2019/07/26/string-permutation.html","2a4895b2b0fe8b67ba04a51b8a280698"],["/2019/07/28/k-least-numbers.html","d94f822cb5f307be8a3b09899c181f3e"],["/2019/07/28/more-than-hanlf-number.html","9472ac9e1cf1b7522c554496a8a2f676"],["/2019/07/29/greatest-sum-of-subarrays.html","0257b545ae5efab06c0df1dab6d83784"],["/2019/07/29/num-of-1-between-1-and-n.html","cdff4e75d589346f1c1c0890301c233b"],["/2019/07/29/stream-median.html","012d3f6c2a8f6c3eaf6b8bf29c934c11"],["/2019/07/30/digits-in-sequence.html","4569fe2cd5af7261d2581e6695a9253a"],["/2019/07/30/longest-substring-without-duplicate.html","47686a8c20f39314ad591421037387ef"],["/2019/07/30/max-value-of-gifts.html","727650b48778952f081fbb5575bf4957"],["/2019/07/30/sort-array-for-min-number.html","2564c41df8771302e22b941819ae512c"],["/2019/07/30/translate-numbers-to-strings.html","51d3fba2f0627aeb78628009eaeb1986"],["/2019/07/30/ugly-number.html","4ac9173e2191881b620c446fee5246cd"],["/2019/07/30/剑指Offer-50-第一个只出现一次的字符.html","0ac55d2147f9e8da2bb6f025061adf63"],["/2019/08/01/first-common-node-in-lists.html","9699d084f3d56789776bf1820067fb8e"],["/2019/08/01/inverse-pairs.html","5b6e7f444d5297288461b367241b9309"],["/2019/08/02/get-number-same-as-index.html","9b01996f6f0b1c43a624dd5fd78a8a12"],["/2019/08/02/kth-node-in-BST.html","5b18ecf6b6738bb4234e71418e391d1f"],["/2019/08/02/missing-number.html","8942809c0dd481f2c90e2011771a01ff"],["/2019/08/02/number-appear-once.html","8d7eacfef25d6003ccd60b8ab01ca220"],["/2019/08/02/number-of-k.html","5ac13fa44fa4c1e07a32ed9d9174f3fd"],["/2019/08/02/tree-depth.html","c42add47804e140d319a3a012ee8ceab"],["/2019/08/03/dices-probability.html","468fcaeebda3b3bfe72bef756fc64eac"],["/2019/08/03/max-in-window.html","9ffc2ead25786ebdf8541e9eb8f4fbd7"],["/2019/08/03/queue-with-max.html","97e8dd8897c0e43911b60a04567d68e1"],["/2019/08/03/reverse-words.html","e53568c0eeca27e82a442a5bc3255d0f"],["/2019/08/03/stack-push-pop-order.html","8c1340d96142984a0abe9487d45146f2"],["/2019/08/03/stack-with-min.html","58a3ccb2c70ce6078a6d83c308341a95"],["/2019/08/03/two-number-with-sum.html","2bf708050908a0c300e31f84d822ed73"],["/2019/08/13/dynamic-proxy-more.html","22dc66c12d194f7260d50932d39b275b"],["/2019/08/13/scanner.html","e4d1dac8b6c744e1aec2132c75732be7"],["/2019/08/27/catalog-of-swording-offers.html","0d56d396238b0cf4ff212091e968a2a9"],["/2019/08/28/Symmetric-tree.html","c6eac6c8c6255d39d2571ff10faebc88"],["/2019/08/28/invert-binary-tree.html","d5e84a48ef876e7ab2ec42d911193613"],["/2019/08/28/same-tree.html","0a47c75915052af524bb73559e759b91"],["/2019/08/29/balanced-binary-tree.html","553b5ff3e3eb3e2492b2b8f55d5e374a"],["/2019/08/29/max-depth-of-binary-tree.html","ea0fc051678c55a14fbf5ed9d83d923d"],["/2019/10/10/conclusions-for-some-algos.html","72c2b89b9e23324aebd9ef985c3cce11"],["/2019/10/23/tranverse-hashmap.html","7eb035f5041313b3b51d1a3958cadaac"],["/2019/10/28/aho-corasick.html","b1ab007beee46b00cdf993a47ca279cc"],["/2019/10/28/boyer-moore.html","32ae9f48a7cd844a4578db6e28649ed5"],["/2019/10/28/brute-force.html","69c8bd3a060aefaae5d57907dba9303c"],["/2019/10/28/kmp.html","ae7851f65ec1ea7cea4bd2575fa07190"],["/2019/10/28/rabin-karp.html","785cf9feb5095ca05cc7d9bb09a83eb7"],["/2019/10/28/trie.html","23db3c87d5154e6652e3acc48c7c1585"],["/2019/10/29/151.html","b888b6ba2a8e53bcd189a45bbf6f54c6"],["/2019/10/29/longest-substring-without-repeating-characters.html","24aab5b172d3822601a5a49c56800765"],["/2019/10/29/string-to-int-atoi.html","47b476dba458574cf00a285cba6f4402"],["/2019/10/29/string-to-integer.html","369148127428c2108ceba21c365af546"],["/2019/11/04/0-1-packages.html","09ff1b9ca5ecbc37465e66e7ddf9789e"],["/2019/11/04/8-queens.html","c70a23b3d3ef030ca15580469878b91f"],["/2019/11/05/103-二叉树的锯齿层次遍历.html","4374633dcc82f4f362dbffc358667880"],["/2019/11/05/Convert-Sorted-Array-to-BST.html","bc6001b7bdbe0c43dab9a41d323f7941"],["/2019/11/05/Convert-Sorted-List-to-Binary-Search-Tree.html","c6d347db2b59707be8482fd4eadb3b99"],["/2019/11/05/flatten-tree-to-linkedlist.html","92d813eafaabe4bb0d40139280fb193c"],["/2019/11/05/path-sum.html","20ab9da1164cc55e152b31f038e29b0d"],["/2019/11/05/valid-binary-search-tree.html","a232fc56a7af5fcda6123bb7dc2bf309"],["/about/index.html","bc7dc872ba0cf2cd56802c35dcb4a8ba"],["/archives/index.html","377891fd15acd4750dcd15ecaf480c80"],["/bundle.js","09f2af2c03a41273c6639ee5e3049a8b"],["/categories/008/index.html","f9e470b0295cbef1eef9c7cecfb0ec11"],["/categories/Backtracking/index.html","0ceab2a30debf366231c9f29717e54f7"],["/categories/DPModel/index.html","605cc264784b0a61775ea6b5f30ca83c"],["/categories/Dynamic-Programming/index.html","f0639b2b38a0a138f8404b716cb474f5"],["/categories/Easy/index.html","48e1d796ff3199870b46d32cd6901b61"],["/categories/Hard/index.html","1a9798c7110fed41a881a13c17e0b20e"],["/categories/HashMap/index.html","04576a2d408fa492d83537f158c1f47d"],["/categories/HashSet/index.html","7f10b053aa343920ef05a66112c026b3"],["/categories/Heap/index.html","9e0115691242ffe7d378603b54904e79"],["/categories/Java-EE/index.html","f5fed52105a46ef1219d4babb9c367ee"],["/categories/Java/index.html","34b092a8384d9f268b6ad25b11e902b1"],["/categories/List/index.html","54c4364d350fb6e99a855ca9c47a0e4d"],["/categories/Medium/index.html","536e0f0e26805bd9d16ff456d189581b"],["/categories/Queue/index.html","a2bbee3c29b2751da1819b0135bfe35a"],["/categories/Search/index.html","62a415dda9b6490998ed6da4b51d7b1a"],["/categories/Sorting/index.html","755c1abc456a3327534108d4acee4cd2"],["/categories/Stack/index.html","9656fe89c84c65e92af443395b784acb"],["/categories/String/index.html","6b582ec8091ad9e35737e1f37d323e64"],["/categories/Sum-up/index.html","34f6369cc96380e7cf37045c83a11ef4"],["/categories/Tree/index.html","c4b9e2005dc4b1b539c129811e5a7968"],["/categories/index.html","729de6c116dd3f8e4b274e4b90883c6b"],["/categories/leetcode/index.html","bb90f5365939cf2793681c1879f599e9"],["/categories/剑指Offer/index.html","cdc7bf1ad0d005f9746126d24884d948"],["/categories/动态代理/index.html","86c92e1dd4eb96740fe41f2cb80a0ce7"],["/categories/得到/index.html","ed90f4f8fb30e036a07886b52ede7bfb"],["/css/main.css","c6548e814f2db3ad8ff2de0f617ca1e4"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/iget/index.html","9ea4c493e179d5e5f9eadad413ae8677"],["/images/JavaEE/SSM-Redis-architecture.png","7d184758a0809d0ede59a558ce0e5da6"],["/images/JavaEE/SSM-Redis-framework.jpg","a197561f1bee7c232e61d65f845f036b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","1bab2792591352186e5e1432bb9e469d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"],["/images/background.jpg","15f9da94b572eb8a5386c6387bde95bd"],["/images/background/andrii-shafetov-03-npc-camp-empty.jpg","e3dc866f26f926091d6f0ea9cf520f3b"],["/images/background/andrii-shafetov.jpg","52a3219206b5031ee46e95c21847f41d"],["/images/background/igor-kulkov-in-attic.jpg","6e470b21065d51140412486c76b9cfb8"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","4674c84054e7c25eb0c38cf25bd747cb"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","bc269a85301a7da7aed977eb41c2d95e"],["/images/iget/improve-writing-skills-in-workplace.jpg","bf428d6c2861c6244ad87cbf79a6854a"],["/images/iget/kiss.jpg","41eeb692820f43caf9d5fb045286e09d"],["/images/jaime-jasso-ny-paintover-final-2.jpg","3f32bf2694371f57cba684d29e70367f"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/olga-orlova-191a.jpg","79c251c6ae83df6bbda8b8d3feae7d50"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin/erweima.svg","911b3354e9f337771a6412195dedfa26"],["/images/weixin/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","a49ab2860702ead9907d1257a5406e26"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/messages/index.html","7f0f460aa78893ef47c897ec1a359314"],["/page/10/index.html","be1d6334ef00ebe6d1e19f3c89870960"],["/page/11/index.html","631c65f7aaeeb2389cd97b0fe09d5c5c"],["/page/12/index.html","c840d580f013ea58467d6cc350a815e0"],["/page/13/index.html","192a44c5f279292214bdbf6b95d7d2b8"],["/page/14/index.html","ccfab7097b468dc362d8988105634025"],["/page/15/index.html","18ab35007f912773867b101deaa3e71b"],["/page/16/index.html","29c9d3106a089f5641df6d3de6f9352c"],["/page/2/index.html","d91553d2e8fae7368fc9027d13c8714e"],["/page/3/index.html","d6e480d0d5505b2575b5bc04b2061cda"],["/page/4/index.html","8f321619777c2b95c7d77f1d83155296"],["/page/5/index.html","9ba8eb6a8f20855652175991bdd4e252"],["/page/6/index.html","14cc6d775ea098a2d1a1c3d159e1e0a6"],["/page/7/index.html","a2996f372526b53108de4ef21aeb6814"],["/page/8/index.html","20dae2490c39e5c0f714162ed8a6c816"],["/page/9/index.html","f7e2f062d74df70c6b731593857ad3f4"],["/sw-register.js","90268306ec294f41b8ba93ecf7144501"],["/tags/Array/index.html","7c22ee6bf4fe41287a03ee87a33e6de7"],["/tags/ArrayList/index.html","0a6fb74ed024f9904f3552bca4d50a41"],["/tags/ArrayQueue/index.html","9f313be4e22d4f9722144cbb74d7e7ff"],["/tags/ArrayStack/index.html","9c24c2942c219de666a9fc4f2bbd81f5"],["/tags/BST/index.html","d55bb1f739dc2997f438f9a85d0da484"],["/tags/Backtracking/index.html","6774f7c0cf347a3a938327eb8e28a25f"],["/tags/BinarySearch/index.html","56ca7a042ecbe20dd2c815b85a909a82"],["/tags/BinaryTree/index.html","26ba8cf38288f1fd61184264c936f207"],["/tags/Bit-Manipulation/index.html","6b441801238476ba9608a7cd8edbabc7"],["/tags/BubbleSort/index.html","9b302af5e4155df58c0acfa8f9bdb240"],["/tags/BucketSort/index.html","05f66ecd28b7ca9b0f3a3767297a334c"],["/tags/Char-Match/index.html","6c805cec0b9906402ca59ca0765d2f96"],["/tags/Circular-Queue/index.html","d7eab458bd934409137bc8cbc69b2c63"],["/tags/CircularQueue/index.html","927ee95ebc4ea5e229f58cdaa945bf7d"],["/tags/CockTailSort/index.html","4b4205c1fcca59e11c85dc5408ea5997"],["/tags/CountSort/index.html","5900b5b7a33669a765e2a706362adc38"],["/tags/DPModel/index.html","79105c406ffa80ec17010c9b6100095f"],["/tags/Deque/index.html","406e3164e75948535b735fbfafb9e1a5"],["/tags/Design/index.html","2a8faa7cd4aea590f6b483d7fd69bbdb"],["/tags/Divide-and-Conquer/index.html","78de05df8d3a6175e4b8ce94d3ddbe08"],["/tags/Dynamic-Programming/index.html","9595bbcda8c4ea6cc990cf1a335631cd"],["/tags/ExternalSort/index.html","c11f9a9a18bfac34378eb4c79644678d"],["/tags/GenericArray/index.html","6a101ea77a1eec95db21197be6a8214e"],["/tags/HQ-Code/index.html","2bd488e741b3ff31299e17cddaa9943a"],["/tags/Hash-Table/index.html","039184f6bdcfb1aad46ba71e5fa4c93b"],["/tags/HashMap/index.html","3ae1fe08fe60a9f47744afb7d9744bf6"],["/tags/HashSet/index.html","083a4e86ada7ffc6c3b53def27c1ef36"],["/tags/Heap/index.html","2a38da5c1d417b06ca2b06000fd6fff5"],["/tags/HeapSort/index.html","5b6edb6e24603f516837dee75c5ab22e"],["/tags/Inorder/index.html","f7d67f0258b60e53dcde0a8a3ff90f75"],["/tags/InsertionSort/index.html","aa9b7d7fbe690f1916504e7141f43ff0"],["/tags/LikedList/index.html","35d267eda111606059bf452d0fc36202"],["/tags/Linked-List/index.html","4802deb887b5615c77445449695ab05b"],["/tags/LinkedList/index.html","9be921366481de852d71acfb6c31f966"],["/tags/LinkedQueue/index.html","71f7f7b2feaf49eb5803f5c6f9d99d2b"],["/tags/LinkedStack/index.html","22c97c091c8b41cf158a89b9a88b5245"],["/tags/List/index.html","247ef6431e73a7f253faf09ce1c79ba6"],["/tags/Math/index.html","2c1f6c514c1a3aafcb0c893e5e8d0d32"],["/tags/MergeSort/index.html","01d8587abff6a86133f0fae0cd4fff6e"],["/tags/Power/index.html","3c830c98ef25ef9407e527ed8b07c7d8"],["/tags/PriorityQueue/index.html","18b8927e634b15e6e3976bd51017ccd7"],["/tags/Queue/index.html","0da2f3f5fdaf39e86f2d8cdb5d607d9a"],["/tags/Quick-Sort/index.html","027d3f725f2f03bd026bdcdec55d3a88"],["/tags/QuickSort/index.html","1b700a1ca6f1fcd4186c760cdf04556c"],["/tags/Recursive/index.html","e5b95698e0f4029a256c12c8c046f807"],["/tags/RegExp/index.html","af0b9a9ab8f34d3e15a49895ca07b25a"],["/tags/SampleBrowser/index.html","3cb35fbe9b19d8a4030b9fffd57bcbb4"],["/tags/Search/index.html","dc65982b60cda6258e84ac6701c69490"],["/tags/SelectionSort/index.html","9c32d222053616c44b81f7101f7941e0"],["/tags/ShellSort/index.html","a11df603e556910030b60d0e21a1b9c8"],["/tags/Singleton/index.html","be6295479e4eb06334c1b0d25ca5a807"],["/tags/Sort/index.html","33a8170445f2291c94a783ae78f42179"],["/tags/Spring，-Spring-MVC，-MyBatis，-Redis/index.html","79b2cbc5bd3efbe9b49efbb17f569bab"],["/tags/Stack/index.html","0c91f85615d2485a13aadf7d5c28a20b"],["/tags/String/index.html","718960d8d0f96254329ecfea07bc50be"],["/tags/Sum-up/index.html","94a736c814599f4292a5804155f77906"],["/tags/Tree/index.html","52174b24d5ca8bc819ade30c7c41e245"],["/tags/Two-Pointers/index.html","b399f17e574b2501b293e5761013e6c6"],["/tags/bit/index.html","4411fa513df5b7067aef1c509484ff12"],["/tags/catalog/index.html","1c4abfb2b456fc4755f5dad02453bd7d"],["/tags/fibonacci/index.html","fce8817b8f9fa49470eb9e60bb8ec1ec"],["/tags/greedy/index.html","f87460293ce13fedb2752d6343860ba8"],["/tags/index.html","fdaf3ebebfb90edef5d237aa74bb1950"],["/tags/java/index.html","3b5b81c2d6de409f955ae2fdd4238445"],["/tags/leetcode/index.html","ce8c2f2793b7155d6927bcbb6d206649"],["/tags/mark/index.html","6d46032d2ae9708532d0a8bf915d96db"],["/tags/matrix/index.html","d2fe57cec9f107656dbc44b77aa60900"],["/tags/volatile/index.html","defffb11c512462fab92398c3c32cc62"],["/tags/动态代理/index.html","2304c852c949781114305c7fc9c98847"],["/tags/得到，职场写作，软技能/index.html","bcee05d08a77b9b3d30e43e64ed41057"],["/uploads/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"]];
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
