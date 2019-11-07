/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/10/26/SSM-framework-Redis.html","c869c94c4b75c471e6fae46321675871"],["/2019/02/24/improve-writing-skills-in-workplace.html","ea3a92579b6dea44c6fc801f0c9dc77a"],["/2019/02/26/tone-content-structure.html","1f1ebb85a28fbff5014516a42d968b4f"],["/2019/03/04/ArrayList.html","da563b29c05f6792abed2378985d8555"],["/2019/03/05/LinkedList.html","ea2b26a6d3250ecd7bd823918b2404ee"],["/2019/03/06/stack-queue-priorityQueue.html","6ec39ba5c1479d6ba934d4c40608cb5a"],["/2019/03/07/828.html","aed68e5eb7eb284c2cc7bb8a1aa4544c"],["/2019/03/07/91.html","9f2cb4eaff99b1df8a5d12c24f3eeec8"],["/2019/03/08/344.html","d05a9cd81f163079d09aecc140487701"],["/2019/03/08/345.html","e74953adf9b8c55cf7b3fca665cc0ce9"],["/2019/03/09/HashMap.html","c52a4b5b93d6ad502705dc0cb81d4db0"],["/2019/03/10/HashSet.html","ac22f24495d462b4030ca3beab6a9926"],["/2019/03/11/355.html","73def566a819d23b00dc1040f8b9c72d"],["/2019/03/11/594.html","e83dd9b32abb69b601d5832dc5d0805d"],["/2019/03/14/heap-sort.html","bd298bc18dbcae7991ee66c3f0d2b294"],["/2019/03/16/binary-search-tree.html","17da54f2950784ec182c4045f25c86c5"],["/2019/03/20/outpost-of-DP.html","0ef2063b6ef13decc1a8b4a2c1606501"],["/2019/03/21/duplication-in-array.html","18e0e7f9cee012756da1c27c3e92f042"],["/2019/03/21/singleton.html","9634bf27995b7b720d4d73c2523a1c94"],["/2019/03/23/solid-principles.html","411a45bff2a6905a3b73cfcd2eb5e11a"],["/2019/03/24/find-in-partially-sorted-matrix.html","187bfe65166d19a4ab5357f84e82e9df"],["/2019/03/24/replace-spaces.html","f8e7e0ed6d44f0af578f1b983c8be7b7"],["/2019/03/26/Spring框架快速入门.html","22566ebb0a1e503ff1bb44e05660dac8"],["/2019/03/26/print-list-from-head-to-tail.html","07dcf9e5e8d16eef0994e4154cdacc48"],["/2019/03/27/React项目实践.html","ebe0b39e4b55276985f87d1e3815cd9c"],["/2019/03/27/construct-binary-tree.html","7757cd05503703f2863cc5002c00f565"],["/2019/03/28/next-node-in-binary-tree.html","9b9ab7665b2f8f4396512951e60f388b"],["/2019/03/29/queue-with-two-stacks.html","ca2b4bdf058aee5bbe5904abeb980c6d"],["/2019/04/01/bubble-sort.html","515961910bec4bceaf996bde77a69f3c"],["/2019/04/01/bucket-sort.html","754c104b24a0e619f62af97834464ff5"],["/2019/04/01/cock-tail-sort.html","a6311ff87424eec26c0d90621fb98a5f"],["/2019/04/01/count-sort.html","1d6998c94929472193e21f56187f9404"],["/2019/04/01/external-sort.html","57baaae5fa4efb7aaf1b93fcc6dbf0bf"],["/2019/04/01/heapsort-easy.html","a7cecfa4e4b45029e49dc5a738811e1d"],["/2019/04/01/insertion-sort.html","7bad27854415e4ee68c7454b05ff062d"],["/2019/04/01/merge-sort.html","7ff287a1ad381a22fd6a57573413e996"],["/2019/04/01/quick-sort.html","03c780a774a9e6e5f1dd7e60193b01dc"],["/2019/04/01/selection-sort.html","2a2abf0def8f106d1284ac66ac86ae9c"],["/2019/04/01/shell-sort.html","9602ea75b72d0e5d8d58bb2d6bcc9c91"],["/2019/04/10/sort-summary.html","790cb04a51b63e0acf20091be1570539"],["/2019/04/15/binary-search.html","b363f7cc52d26181a88f68eca734873c"],["/2019/04/16/fibonacci.html","525a35aec388f60f9a6e2249f7776f00"],["/2019/04/16/min-number-in-rotate-array.html","fe08979cf336ea8315cf6e4256765972"],["/2019/04/18/string-path-in-matrix.html","c17f45c1a0a5ce5a4e4f0dc9338dc1c3"],["/2019/04/19/robot-move.html","67bca17d64cc69fc5637f6b1d4fc4707"],["/2019/04/21/cut-rope.html","e16e164958a905618fe9cb280476aafc"],["/2019/04/21/number-of-1-in-binary.html","08d47f989790d77991867bfef23499b2"],["/2019/04/24/dynamic-proxy.html","0de4a26c1c61c30d8370f1b35ef44f66"],["/2019/05/25/1.html","4cc607143b9edf1c807d0d8a774d78c7"],["/2019/05/25/15.html","f8cf9bf073ea25ce4b3a7175292a9630"],["/2019/05/25/169.html","ca5d5fb53600b9504c91bbc38f617e0b"],["/2019/05/25/41.html","07f01b683ee97931cf1a2a5eea67907b"],["/2019/05/25/412.html","9ec76db5f497371b6aa109246c8f02cf"],["/2019/05/25/88.html","40b1a56fe3d3258568df9fc0d0af0d12"],["/2019/05/27/136.html","da11ed32c2f0486536a3335be7721141"],["/2019/05/27/141.html","25fcd45e148d5eae85d99fcf1bf8b998"],["/2019/05/27/142.html","3ac7e26e7f847882ec5febf6216d9737"],["/2019/05/27/19.html","001102d20933d77cc7542b83db73b29d"],["/2019/05/27/206.html","7aa56cc97b21526a0e2b5a31393a3a8d"],["/2019/05/27/21.html","8dbc7665e8d4d7ce53db9b370872f37f"],["/2019/05/27/215.html","f40a8373e35e409e1f49a1f06454c026"],["/2019/05/27/25.html","ef0c2918587b5f3e234b894ca3e379f2"],["/2019/05/27/442.html","9e4ac9384d4178424b93a3b9195a22f2"],["/2019/05/27/array-and-genericarray.html","307fa196a1b39034368642033d784ea9"],["/2019/05/27/arrays-in-leetcode.html","f78710630b7135758e498369f33405d5"],["/2019/05/28/23.html","2b7f00719bc895b6b892cfb5baeb08dc"],["/2019/05/28/876.html","87b9dcc2d000f68d050e42515df6726a"],["/2019/05/28/linked-and-array-stack.html","84d25dbfdf644c2e23d2e0a43c2067ca"],["/2019/05/28/linkedlist-sum-up.html","deeecb8f9bfc04dcc48b41ae238b08f9"],["/2019/05/29/20.html","fbddda7ea9fb7e93612c67db32d066c1"],["/2019/05/29/leetcode-asc.html","54a24a3b78886e4c29f9978af3b30fa4"],["/2019/05/29/sample-browser.html","72e3c40262fa91e95d85d6566ec13761"],["/2019/05/30/150.html","200d75258f367caad6aaffbaa0839b64"],["/2019/05/30/32.html","720d930536ba146883272478bf064986"],["/2019/05/30/stack-sum-up.html","f7472502333e9e69365061f2a5d045f8"],["/2019/05/31/641.html","afd21c960f7e98dd447ae811e3c53b64"],["/2019/05/31/array-linked-circular-queue.html","0a1b2f602baa9275899f9dd8a9558d03"],["/2019/06/01/queue-sum-up.html","57bd2fea9ae86b64252ed33ef7f366d1"],["/2019/06/01/sort-sum-up.html","18db1c76191d817b9f3e8d2bc4e7847d"],["/2019/06/14/perfect-power.html","255fe3737c0b87821d1b867b521f7d06"],["/2019/06/19/print-1-to-n-digits.html","d4166a37652f8d91682ca8ae19b22da9"],["/2019/06/22/delete-nodes-in-linkedlist.html","f16c49413d42641be1ac0cbeb32d3575"],["/2019/06/23/regular-expression.html","f7979adb932888d0685864ecb80896a2"],["/2019/06/29/numberic-strings.html","59eb0e48f6c4a85e06d29909009682c6"],["/2019/06/30/entry-node-in-linkedlist.html","2bf0b10a3f44bd85f7e73635fe4d8ffe"],["/2019/06/30/kth-listnode-from-end.html","3af8a3565ffda740f1cddf8c7e0e4dd1"],["/2019/06/30/merge-sorted-linkedlist.html","1ff189b69975341c21e7b2ce2ca5ea7a"],["/2019/06/30/reorder-array.html","a35034453600beddf813b1909a12ded6"],["/2019/06/30/reverse-linkedlist.html","2014c9024ef630c5b50c089f2dd6e35a"],["/2019/07/02/substructure-in-tree.html","4773b15f6e26b94e4ea6ce800411dc85"],["/2019/07/04/traversal-treenode.html","72cd21cbe6314c6f951136cd857f5236"],["/2019/07/08/heap.html","b28ac1d27a6eba20bc3e654449d4b140"],["/2019/07/08/priority-queue.html","cd40e84b024424aba3394ef27ef202ca"],["/2019/07/09/heap-heapsort-priorityqueue.html","92b2c8a42d5c91ebe80da7a4584877c8"],["/2019/07/09/mirror-of-binary-tree.html","2d651854366a5ed1386123fb240595e9"],["/2019/07/09/symmetrical-binary-tree.html","d5203f1494a6211ade1f1bf327bc0b70"],["/2019/07/10/print-tree.html","21f74df79727c02f7816961665d3b59a"],["/2019/07/11/path-in-tree.html","e6fa5448393495575a13983bd49ed165"],["/2019/07/11/sequence-of-BST.html","27adee4877402438d4beee145b12709f"],["/2019/07/12/cpoy-complex-list.html","64b993f6391285b21da9d4912be69b36"],["/2019/07/14/convert-binary-search-tree.html","3916d39e8f4509e08c3dc03143ea2551"],["/2019/07/25/serialize-binary-tree.html","b8b92cc08e5af8a098fd5c2feb89453c"],["/2019/07/26/string-permutation.html","aba40a57a28196302f9fe1bfd337de2e"],["/2019/07/28/k-least-numbers.html","cbade2572d98d5b625c2373b69c27a28"],["/2019/07/28/more-than-hanlf-number.html","1708c7f658b087b09d03d734db071db0"],["/2019/07/29/greatest-sum-of-subarrays.html","dc0d3b230672584e76a91e8c92d5e646"],["/2019/07/29/num-of-1-between-1-and-n.html","4fc367ff888a4a062e5ec17b0c8ce8ab"],["/2019/07/29/stream-median.html","72279e72bcf6e01fa28eef5d7aba6241"],["/2019/07/30/digits-in-sequence.html","9e5d131746d4e75092100572c23bc136"],["/2019/07/30/longest-substring-without-duplicate.html","981ee286572f6fc75bd926d03ac51d5d"],["/2019/07/30/max-value-of-gifts.html","dc2fdd2068ae43e8f994db9580f981fd"],["/2019/07/30/sort-array-for-min-number.html","f9d2afcf472bee2d22bd48c60d650e26"],["/2019/07/30/translate-numbers-to-strings.html","6bda0f2674d98966ecc30564a93da6d3"],["/2019/07/30/ugly-number.html","2f043ac3d7b46a784f4911ac3800a08f"],["/2019/07/30/剑指Offer-50-第一个只出现一次的字符.html","efbcbbd0aacea148f42f075e2f46c8c6"],["/2019/08/01/first-common-node-in-lists.html","7d42569309d6843bafca35e548df42ba"],["/2019/08/01/inverse-pairs.html","11a296163ee2104e184c38b1f524931f"],["/2019/08/02/get-number-same-as-index.html","266de16435519007d09f90cf2207f898"],["/2019/08/02/kth-node-in-BST.html","a5fade732d4ba2b7b5ed14583bc63488"],["/2019/08/02/missing-number.html","f1f81a6070ee7301c2d8c730b1c4bbbd"],["/2019/08/02/number-appear-once.html","d3d23c464cff4225284fb72b72afe30e"],["/2019/08/02/number-of-k.html","d40959d407b7111522870ef6834d8a02"],["/2019/08/02/tree-depth.html","da0a2fee7d6dee9a04e72768db6ac610"],["/2019/08/03/dices-probability.html","0c5437e27305eaea9fdc23586181f814"],["/2019/08/03/max-in-window.html","a3e0cce8d2912a6439421ee6ea66b05d"],["/2019/08/03/queue-with-max.html","c411d5eb7782113fefdc3ad6b865cd5b"],["/2019/08/03/reverse-words.html","085d46268dc09d64dd48c9e4a40da1c2"],["/2019/08/03/stack-push-pop-order.html","d7f5b15a2377195fdf45516ba3bbdda1"],["/2019/08/03/stack-with-min.html","33bcbcd779995cad7cdca0cb84cb5d88"],["/2019/08/03/two-number-with-sum.html","e0b86c287e52f96f069f36505f4702ae"],["/2019/08/13/dynamic-proxy-more.html","b8634e8a92c0924464547a0fa18c9de8"],["/2019/08/13/scanner.html","04ab9e5563019436bc651296d6cce5e4"],["/2019/08/27/catalog-of-swording-offers.html","1ac5a868894f38f2fe8524f0762613aa"],["/2019/08/28/Symmetric-tree.html","9081331afaec812ae335d083531557c1"],["/2019/08/28/invert-binary-tree.html","e37c5624c64be722100f267b6decfb49"],["/2019/08/28/same-tree.html","2ee32294bd08711dac1f3739293873b4"],["/2019/08/29/balanced-binary-tree.html","4edf40e2d69c6d096167922b5935f94d"],["/2019/08/29/max-depth-of-binary-tree.html","f730a96a46e300a98e8e43414199ee97"],["/2019/10/10/conclusions-for-some-algos.html","ebe46a28ef061bf37fa9bd2cf63006d5"],["/2019/10/23/tranverse-hashmap.html","513763dc20d63c507ab897fa056a9a60"],["/2019/10/28/aho-corasick.html","fda7efbe49d183d4c8eff59cea38e708"],["/2019/10/28/boyer-moore.html","73940a61159832ee479a8607bffb55e2"],["/2019/10/28/brute-force.html","f568257a38e059f5ad1e6dd071020397"],["/2019/10/28/kmp.html","9908e0862296b958a9473dc7436463a5"],["/2019/10/28/rabin-karp.html","1c45b83ca3245228861b55c56b0e1a33"],["/2019/10/28/trie.html","e89a46c985ae7fc7ec6ee82b63fa537b"],["/2019/10/29/151.html","f0d015aaa412485c82a6ad8db5f8404f"],["/2019/10/29/longest-substring-without-repeating-characters.html","38508e9d8ac49e0f437f9e7151afece0"],["/2019/10/29/string-to-int-atoi.html","ffada97c9f502d9719d9b24ec737695c"],["/2019/10/29/string-to-integer.html","e4cecd85d6391e99a6ef59fcda375570"],["/2019/11/04/0-1-packages.html","c0df63a7df58b357bb63fe648d37a779"],["/2019/11/04/8-queens.html","b42a7632d703c952d5c51989e49c4eed"],["/2019/11/05/103-二叉树的锯齿层次遍历.html","8b6dde2c50afc50a6aff59825d9d2941"],["/2019/11/05/Convert-Sorted-Array-to-BST.html","38093ee86579e9da56f79d695d9b7852"],["/2019/11/05/Convert-Sorted-List-to-Binary-Search-Tree.html","295c8d67e03610c497b861da0492d077"],["/2019/11/05/flatten-tree-to-linkedlist.html","cd74d0b32ec3f7ff6b4675f4a8ad95d8"],["/2019/11/05/path-sum.html","b155e1c68b0489d95b221a524029d2de"],["/2019/11/05/valid-binary-search-tree.html","f4c433f372a4a08c01d73e9dee0d1985"],["/about/index.html","e9b385e3510a945bf30f8c956d6b7aca"],["/archives/index.html","a523a1d0e077cd201c3304e82f96ddcc"],["/bundle.js","58738ffae6bd5b0f2f2ecb6093c09803"],["/categories/008/index.html","b383f8e3b55fadc6fc9df3e731e2d7b7"],["/categories/Backtracking/index.html","1412630d5c229969c38cacd663662db5"],["/categories/DPModel/index.html","3040d6e92eb8c590d1849cf9af3c84e6"],["/categories/Dynamic-Programming/index.html","56357dcc6b4c9164cca932f1b99755e1"],["/categories/Easy/index.html","394063f5405eab561d8993de31046b80"],["/categories/Hard/index.html","441bf3974abcc8c52e96b42eae1028cd"],["/categories/HashMap/index.html","8ee3b88c007a7e33b92ef680ba360d7f"],["/categories/HashSet/index.html","a83622ec5e4207fbb8d6a857c966dffb"],["/categories/Heap/index.html","9c3db784f28ed8199796b04a99c4ed75"],["/categories/Java-EE/index.html","01ad3598696b1ca69f253c2a26eecea8"],["/categories/Java/index.html","6692f51cd5e82390d0a8204bfdeafcb4"],["/categories/List/index.html","0fbc750260251c97c9ab58fa08658831"],["/categories/Medium/index.html","e4f4c190dc99904b1aa80dc44e5e4882"],["/categories/Queue/index.html","1f0dc6f6aa3177964c5ee4f5e18d422e"],["/categories/Search/index.html","30cd15d04caa8fc891b2cbd19baf2ff3"],["/categories/Sorting/index.html","67f00adf1181cc49bf5cbce8ace04b54"],["/categories/Stack/index.html","50b1f429981a85f7a6d8156ae767cf12"],["/categories/String/index.html","0279966c62adeb6519864655da5fe836"],["/categories/Sum-up/index.html","86380156c596cc8ffd742ab3b143a3ba"],["/categories/Tree/index.html","e8c5cec2e958046d11aa440579e633ad"],["/categories/index.html","7b43b6a3c77324f0adb51650df22943f"],["/categories/leetcode/index.html","3b83911666edfa2816228f0818985ed2"],["/categories/剑指Offer/index.html","59ad9588170dcdc6e62dc216930d9a1d"],["/categories/动态代理/index.html","a2e6dd7e188ec88ef58667a91bba8e89"],["/categories/得到/index.html","084b73569e43db0efcef8099608b9f7e"],["/css/main.css","55bb4f76c4836657e64a9d551353ea72"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/iget/index.html","4eff1092e8fa80bc454702a75add6c2c"],["/images/JavaEE/SSM-Redis-architecture.png","7d184758a0809d0ede59a558ce0e5da6"],["/images/JavaEE/SSM-Redis-framework.jpg","a197561f1bee7c232e61d65f845f036b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","1bab2792591352186e5e1432bb9e469d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"],["/images/background.jpg","15f9da94b572eb8a5386c6387bde95bd"],["/images/background/andrii-shafetov-03-npc-camp-empty.jpg","e3dc866f26f926091d6f0ea9cf520f3b"],["/images/background/andrii-shafetov.jpg","52a3219206b5031ee46e95c21847f41d"],["/images/background/igor-kulkov-in-attic.jpg","6e470b21065d51140412486c76b9cfb8"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","4674c84054e7c25eb0c38cf25bd747cb"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","bc269a85301a7da7aed977eb41c2d95e"],["/images/iget/improve-writing-skills-in-workplace.jpg","bf428d6c2861c6244ad87cbf79a6854a"],["/images/iget/kiss.jpg","41eeb692820f43caf9d5fb045286e09d"],["/images/jaime-jasso-ny-paintover-final-2.jpg","3f32bf2694371f57cba684d29e70367f"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/olga-orlova-191a.jpg","79c251c6ae83df6bbda8b8d3feae7d50"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin/erweima.svg","911b3354e9f337771a6412195dedfa26"],["/images/weixin/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","3c0133839c73a7468e69ef492d207178"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/messages/index.html","a4c85f56ae27fc34006f9d8eacfd73f8"],["/page/10/index.html","7b22774fb7b732898c1564ff7a6d1886"],["/page/11/index.html","e0959d2dd83b741ccff23b9aa3c8e03f"],["/page/12/index.html","fa3b5c8c21b0716f0fd7cee98312eed0"],["/page/13/index.html","bfaf3cbfdbebf3a15a407fd2ca6c69bd"],["/page/14/index.html","365913f948bbfd7d4e04ddfa45a0a24d"],["/page/15/index.html","e042b20f1338e1b44490baed6c4c7a47"],["/page/16/index.html","b733458f36276de3999d011a2825f9c1"],["/page/2/index.html","d7766e329e04d5e84b8f2752ad240c75"],["/page/3/index.html","50a81041bed5e03d98f001b9c62cefd9"],["/page/4/index.html","e476fde4d089179965ff5f22c28fc73a"],["/page/5/index.html","95378073295082daccf234a0d72f414e"],["/page/6/index.html","0d1a756c185ed8e4f032f75c66ec6c9e"],["/page/7/index.html","71b378799ec452fd9a6933418306beda"],["/page/8/index.html","878df9ef25e52a6b78b8994a082af90e"],["/page/9/index.html","fa3f4cbb886a9cf5784b8ce454adf572"],["/sw-register.js","67db14c5d82a7f832fd505b071a4e14e"],["/tags/Array/index.html","0dd4e5f5a7fc0e527ea746370282276f"],["/tags/ArrayList/index.html","a19735aef35c963736501c3460a0bc01"],["/tags/ArrayQueue/index.html","09c7fa4edce109e06b4b95d1c450a1b0"],["/tags/ArrayStack/index.html","1149825ad8d2154cff696a84839420a4"],["/tags/BST/index.html","68f83bfff5ec931cbb4448a12b46785c"],["/tags/Backtracking/index.html","80a65d7a75e67981392df29ae4ea1ac7"],["/tags/BinarySearch/index.html","022427ef38ea07aec6f89f7964d8a3d7"],["/tags/BinaryTree/index.html","5db54470c6f4f99daa2a8d4105a947b3"],["/tags/Bit-Manipulation/index.html","da424277d54b41640aab8d0a0f3ec549"],["/tags/BubbleSort/index.html","71bbec3ca951c5777db891fcca5ea93b"],["/tags/BucketSort/index.html","b5f78a581b3745a7cfee0f58ef8becc6"],["/tags/Char-Match/index.html","ce70951ef3453db9f400def1c271687f"],["/tags/Circular-Queue/index.html","887326cf4dcbf882e123b6726aff3c7e"],["/tags/CircularQueue/index.html","0fca6f9bd4f0a9737959efa09d5813ef"],["/tags/CockTailSort/index.html","cb25d29aa9a1d019d9b2e6f5d050e6f9"],["/tags/CountSort/index.html","9e4a7cbf1eb96bb1cbdb0c1d82cc23fa"],["/tags/DPModel/index.html","d1e318add9d555f815c06f8744db2a9f"],["/tags/Deque/index.html","12b4e1f81a8cd9ac85a9c7ff7b22f977"],["/tags/Design/index.html","d06b132e0a14b38e1828e5cf3a77811c"],["/tags/Divide-and-Conquer/index.html","b8cbac0cc3419018d8beae410534f1f9"],["/tags/Dynamic-Programming/index.html","c9bc15a7ebad08e13233dd6696a17de9"],["/tags/ExternalSort/index.html","89316503b2fde682483e2a35f2e4c128"],["/tags/GenericArray/index.html","64fd8ef86a40bb7aef2b441d4e1c88a5"],["/tags/HQ-Code/index.html","b59d2ab4366a07ba6af8545bc9e0e310"],["/tags/Hash-Table/index.html","8310af14e2e2ab7dfec24f1e1a625bda"],["/tags/HashMap/index.html","0e720f000ffb4133fff1971d75c7854b"],["/tags/HashSet/index.html","a23e801834ca167aaa604e842a64342f"],["/tags/Heap/index.html","ec27d4e3ff1e0579573d1a3b7db3aeee"],["/tags/HeapSort/index.html","9acccff524d1831d2cff199f7f38f8e8"],["/tags/Inorder/index.html","37d9b0156676698a9803f96b831b0e9c"],["/tags/InsertionSort/index.html","8a5ffa1b548420d92f3cf9385f9366c2"],["/tags/LikedList/index.html","0698ed4b754407c029013a9bd3a20f36"],["/tags/Linked-List/index.html","95f477d274ff3c110fd5ec18febeed4b"],["/tags/LinkedList/index.html","6be941658545e44fe95b94ea11ce1535"],["/tags/LinkedQueue/index.html","33c7092898cbac45fdd60feeac261688"],["/tags/LinkedStack/index.html","5a80384916bea56d6f53c76856411721"],["/tags/List/index.html","811b58fe000313cedb5539f7d4847a0c"],["/tags/Math/index.html","a1f5902ed194798e5df4a058dded8670"],["/tags/MergeSort/index.html","6b34035e1a8a27bed0b79155052eaff9"],["/tags/Power/index.html","dc86938e14def0e41b7df63a433da981"],["/tags/PriorityQueue/index.html","1d4fedc445946ccec91664d51e2d38ac"],["/tags/Queue/index.html","8b53532cbf8e5e606b7b18c65e2cdefe"],["/tags/Quick-Sort/index.html","7cf356c13ba857959ecf060c9f492d1b"],["/tags/QuickSort/index.html","19c6ff151760f5a47c977d4c87024593"],["/tags/Recursive/index.html","b7caf50259e794a07f9cce74ebeac2e9"],["/tags/RegExp/index.html","31526efd057203be029fcb113b2c189c"],["/tags/SampleBrowser/index.html","4eb229940fc7fe765ce4504070118cc3"],["/tags/Search/index.html","ea8b0c9c70ad213822066c985363a260"],["/tags/SelectionSort/index.html","d36071b2cf5287186cc560fd22dfb6fe"],["/tags/ShellSort/index.html","072dd68e443a2e015cef08b72fd3ac54"],["/tags/Singleton/index.html","5ca08be64a8f51fc1e79446e8f5a72ed"],["/tags/Sort/index.html","01eebaf571385eb898c555c535139443"],["/tags/Spring，-Spring-MVC，-MyBatis，-Redis/index.html","a90f758b9e03a5f900f6f0bc93fd36eb"],["/tags/Stack/index.html","a7b27d370db08b3cc4f2d01e511bc909"],["/tags/String/index.html","240124f45a84eca917d1fc2eeb5e2324"],["/tags/Sum-up/index.html","a7fb5b2980c9964643d266a9c7523ce9"],["/tags/Tree/index.html","649165f259063dda5ec51043cc6d6802"],["/tags/Two-Pointers/index.html","c0b2f37cf2e02c2f31ee0aa0e33703a2"],["/tags/bit/index.html","2e3cec4dd6aab0a7a4e31237f14ab18b"],["/tags/catalog/index.html","ea37762266acbd7c66b3c4045f236ff8"],["/tags/fibonacci/index.html","affb32a2d0d6d3a6cd9370ef4cede8d7"],["/tags/greedy/index.html","632745ddf0b97b6d7d40c4108aa96a7d"],["/tags/index.html","ddbf1514778905ea5532ccf3ba7ede05"],["/tags/java/index.html","630955251dc1a9b43dab7b25e365317b"],["/tags/leetcode/index.html","91a44d1215ceb01c8588683a4edaf2cd"],["/tags/mark/index.html","37b09d21393a95bdc21dc81954180277"],["/tags/matrix/index.html","ea51aee7534107ef0aa05ac12c95b36a"],["/tags/volatile/index.html","667c777769b1f2b34e78e025e2f1b083"],["/tags/动态代理/index.html","f6582333346e4beb30d5099614d684b4"],["/tags/得到，职场写作，软技能/index.html","f734efc630610a0a7018e3de2e07326d"],["/uploads/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"]];
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
