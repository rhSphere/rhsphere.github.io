/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/10/26/SSM-framework-Redis.html","f98e2c0774d7dc1295526f9b509d07bc"],["/2019/02/24/improve-writing-skills-in-workplace.html","42c4a4b5b775dc041dbda3b324b30b84"],["/2019/02/26/tone-content-structure.html","c70ce03558b5f7d3e3881e9e641ea623"],["/2019/03/04/ArrayList.html","76dc23117c554f12119690bb9f52afd3"],["/2019/03/05/LinkedList.html","fcbb1ddccd8241652f20f9b0a7feeeef"],["/2019/03/06/stack-queue-priorityQueue.html","e171c52a2d6b6b496cec221b5eaa7326"],["/2019/03/07/828.html","71d16c52e2c6b85ebc186ed84e060d4b"],["/2019/03/07/91.html","38166899ee39794f2ac2350c581d93bf"],["/2019/03/08/344.html","00299d4f8797386a3cb9062d8f6e8b12"],["/2019/03/08/345.html","d88ad92918cdd3b5fd6efd7778e453cb"],["/2019/03/09/HashMap.html","c575db188f95d06d7015f173d241ea35"],["/2019/03/10/HashSet.html","993e87e49369c7c23f0b69db7955584b"],["/2019/03/11/355.html","32c09c3b7d2f455ad3b1bba8c79bb77e"],["/2019/03/11/594.html","7635b860b252b81e2567f084a77433ea"],["/2019/03/14/heap-sort.html","15afdf747f6e48d18d46015ee0a4499c"],["/2019/03/16/binary-search-tree.html","79ee2e8e7726e605565f260e45094a0c"],["/2019/03/20/outpost-of-DP.html","760d54a9a65d81c1eee85a2374d1d474"],["/2019/03/21/duplication-in-array.html","7e7d322f28a3a8c937140bc02006927f"],["/2019/03/21/singleton.html","350a3cf8bb6b1873046755c88e4a1966"],["/2019/03/23/solid-principles.html","cc1b5a0dc72ae4418265ca92fd72fb8f"],["/2019/03/24/find-in-partially-sorted-matrix.html","de58015fbe8f29d39ddc50190a785dca"],["/2019/03/24/replace-spaces.html","fa19c7583e2831d117e39f5c4531dfcc"],["/2019/03/26/Spring框架快速入门.html","b4acd5a0571c93706a03b576be3e3633"],["/2019/03/26/print-list-from-head-to-tail.html","391fa561bafb41edf36e2f10473636c8"],["/2019/03/27/React项目实践.html","f75bebdceb28817a45103a79f1e7e14c"],["/2019/03/27/construct-binary-tree.html","fd872214e9ce59aa4ea98122bc82a194"],["/2019/03/28/next-node-in-binary-tree.html","3345a12f67d6ed3a387b53e0a76bafa1"],["/2019/03/29/queue-with-two-stacks.html","66429f271bfb2384e218eb2d3212611e"],["/2019/04/01/bubble-sort.html","28afa385253a244283ea1da98f34acd1"],["/2019/04/01/bucket-sort.html","0121a01b203687ccc65cfed175b54ebc"],["/2019/04/01/cock-tail-sort.html","04f522d257feb658a0e66dbdcfebb49b"],["/2019/04/01/count-sort.html","6f68967bbb07f58ad18e6f381d6d749c"],["/2019/04/01/external-sort.html","9b9c65c9c427dd81af38b3fbe9573b6f"],["/2019/04/01/heapsort-easy.html","53b59dda49a267a0bc30332eb452b120"],["/2019/04/01/insertion-sort.html","5f2569bf7ad848ce227d3a458c564223"],["/2019/04/01/merge-sort.html","e269c4910bcb98a24a2d8a3bd98508e5"],["/2019/04/01/quick-sort.html","b0ce61cfa4a85e7e5765b28c035cade9"],["/2019/04/01/selection-sort.html","34f2d63fbd3e47d740c85223d0cbc53d"],["/2019/04/01/shell-sort.html","cd1364b7c39de443e0bfcba90bba413b"],["/2019/04/10/sort-summary.html","b4d63f36f2f750fa5352aee08a74fcb1"],["/2019/04/15/binary-search.html","98831c7b3f77ed107f9d82b157647f1f"],["/2019/04/16/fibonacci.html","eddecd27540083bb2e4bf0f56faf88d4"],["/2019/04/16/min-number-in-rotate-array.html","e6be4225204362620cf2e2f98d13c1a0"],["/2019/04/18/string-path-in-matrix.html","05c1747135513b9d8b2d450fd99714de"],["/2019/04/19/robot-move.html","a62516c94b5e219f5fe4f9996e22d004"],["/2019/04/21/cut-rope.html","59940b8b426315ec1cde9018f1513465"],["/2019/04/21/number-of-1-in-binary.html","b5012b0350891748ff5128889034ceab"],["/2019/04/24/dynamic-proxy.html","379c6895e4655dc065105c00025286b6"],["/2019/05/25/1.html","2c380705bff22f5f0191d0b15a65733e"],["/2019/05/25/15.html","c36a81dc2033fcff56b74cc928b5ba1a"],["/2019/05/25/169.html","9d7fe9bc9cef31d4e16fc3bb48f99536"],["/2019/05/25/41.html","d0ec6634144d93d02009b64d8ccdf37a"],["/2019/05/25/412.html","06c4826b6d6445a669f17ee6532cd305"],["/2019/05/25/88.html","a1e8e45d1719ce6ad96dd326f07ecc4d"],["/2019/05/27/136.html","1d941632bcedc56d13e7b73d27d8cacd"],["/2019/05/27/141.html","f1e4a350d9c1c980db7ed03d7b5a9095"],["/2019/05/27/142.html","6b5f7f361e9e9e85e3f9a0983e678afa"],["/2019/05/27/19.html","3751fb3dd380c5497006470dafa397ec"],["/2019/05/27/206.html","bce502235679218b16b8c782d4162404"],["/2019/05/27/21.html","f7a10924113336a57fc0211bec69103e"],["/2019/05/27/215.html","67c1c9f6e07118c8aa951e076754238b"],["/2019/05/27/25.html","3d38cda91b0de42711cc14fe98dc7ebe"],["/2019/05/27/442.html","92ec5e9ce23208e69ab51e5336b50b27"],["/2019/05/27/array-and-genericarray.html","fa3af1825170ed80f025d2f65d3bc043"],["/2019/05/27/arrays-in-leetcode.html","18b54aa7c9e09ecaabec870d2161995d"],["/2019/05/28/23.html","a82de0ab865f53e03d0b391d1448dc28"],["/2019/05/28/876.html","e908258bd597583d5fe079085f0ab0a0"],["/2019/05/28/linked-and-array-stack.html","d91893939e693e0f5980369eb9e0b570"],["/2019/05/28/linkedlist-sum-up.html","6f69f557960574b5b6a4ff19de65fff5"],["/2019/05/29/20.html","677cecf869420608eac7e288917195f0"],["/2019/05/29/leetcode-asc.html","296ff91b88ac1a59454fae3e2bc19f22"],["/2019/05/29/sample-browser.html","cba9e16e78c731709c363664d830b2c0"],["/2019/05/30/150.html","93da30c060935f987d0b45481098c8c7"],["/2019/05/30/32.html","5cb0226b3fdf0577d9fe064aa241b8f9"],["/2019/05/30/stack-sum-up.html","cbdb5f8b8cc753aedb1a672dacd19f8d"],["/2019/05/31/641.html","6d55f7c7077e0fdb8c84f53319513c6d"],["/2019/05/31/array-linked-circular-queue.html","4b86d2c698970cc91ab877b0e0bdc360"],["/2019/06/01/queue-sum-up.html","3c34f63d459e8c5c4e1de5d8ef40029d"],["/2019/06/01/sort-sum-up.html","0375e7d58aa71f1f60e8641447499aef"],["/2019/06/14/perfect-power.html","eef2a7eb688748f1db6934f33dfd2119"],["/2019/06/19/print-1-to-n-digits.html","bd34a143d9cf4b36f0d0f890af4538b9"],["/2019/06/22/delete-nodes-in-linkedlist.html","e88fbfc743801752ee15d9f6308e97f3"],["/2019/06/23/regular-expression.html","1ebdb080e0e2bfbad601d69dd885315a"],["/2019/06/29/numberic-strings.html","82dc0a7e1c6895231f60446d44f3ab6a"],["/2019/06/30/entry-node-in-linkedlist.html","66c3d8480c5aee5555ac9b5681db6ee6"],["/2019/06/30/kth-listnode-from-end.html","2f4ec33bb3645d481ac9b6c3169d9b3e"],["/2019/06/30/merge-sorted-linkedlist.html","9a3a8f68f905357ca6a7e31713879ecd"],["/2019/06/30/reorder-array.html","0bade890091dd549f7fcc0fb66a0d3c3"],["/2019/06/30/reverse-linkedlist.html","a36cf711f015d5af27a8c286465bb791"],["/2019/07/02/substructure-in-tree.html","f44e77ba49649f712ff3265a379da02d"],["/2019/07/04/traversal-treenode.html","bbfc56c5f932a0a61ebcc0be6060e2f8"],["/2019/07/08/heap.html","da0e2fc83a90462bbc618f4a76ee694c"],["/2019/07/08/priority-queue.html","6bfd3f127f208c3784b9ecb07ccf6247"],["/2019/07/09/heap-heapsort-priorityqueue.html","7dfc7e4305723c5636638d1ae93e524c"],["/2019/07/09/mirror-of-binary-tree.html","c1bc5d03e33c297384d2b4908d5c3e07"],["/2019/07/09/symmetrical-binary-tree.html","07fe3bb6377e60cd3376d0c5004796e0"],["/2019/07/10/print-tree.html","c2ab3b31fa9feed69e7075bd6bc3235c"],["/2019/07/11/path-in-tree.html","19ccf18872905cbd60c76ffbaea1b2ee"],["/2019/07/11/sequence-of-BST.html","3d59820857cdb2d7ff8786e51271df84"],["/2019/07/12/cpoy-complex-list.html","d50bfd51d2ba8bdcbc86512975edeb4a"],["/2019/07/14/convert-binary-search-tree.html","536d0f41321196e210edd8e94985d2f1"],["/2019/07/25/serialize-binary-tree.html","b0c8ddd9a512f2decd748fb0942e2f98"],["/2019/07/26/string-permutation.html","81f532ef10e2162e790a03cf1e727d08"],["/2019/07/28/k-least-numbers.html","a3a76163a7cb2e286a5effb8ff8dd976"],["/2019/07/28/more-than-hanlf-number.html","8d563d590c20ff0b50de4c4f0cf2678f"],["/2019/07/29/greatest-sum-of-subarrays.html","cd8d2b35afd6f6ae3030e89e7ea27c67"],["/2019/07/29/num-of-1-between-1-and-n.html","231522822b27965b90994876ab8ca93d"],["/2019/07/29/stream-median.html","34c92ec15ce0252c522d6855e820c622"],["/2019/07/30/digits-in-sequence.html","36c50891bfad1b88f57da137dddf3b45"],["/2019/07/30/longest-substring-without-duplicate.html","1946b4712b9b338b69729206da38d55e"],["/2019/07/30/max-value-of-gifts.html","6224b0a27d4d53a283dfd5e53e5d17cf"],["/2019/07/30/sort-array-for-min-number.html","fed13c2aaa7b9485854734bd3bcae666"],["/2019/07/30/translate-numbers-to-strings.html","e5b4bec84d7411b794e1c1c4d7cdd20e"],["/2019/07/30/ugly-number.html","0f37c0c7f7dfa70baf46da8ac52aaf2d"],["/2019/07/30/剑指Offer-50-第一个只出现一次的字符.html","a6e1e4a9a86bc590d357d88ad96be5e2"],["/2019/08/01/first-common-node-in-lists.html","e2ba913f3149ab05c2d25de749b65c65"],["/2019/08/01/inverse-pairs.html","87df5a6d47dc8c5e5b9d393dab548ae3"],["/2019/08/02/get-number-same-as-index.html","62202b5c23715417b024cbec6b2400c0"],["/2019/08/02/kth-node-in-BST.html","5769aa6ef6e26ceafa6de1d2498d5466"],["/2019/08/02/missing-number.html","d092c52786fdddbc259cec160bf8c178"],["/2019/08/02/number-appear-once.html","181b6ca6bd8d8154c9fba9451b58f1e2"],["/2019/08/02/number-of-k.html","82c85f331261ed01d5106adea2b38c6e"],["/2019/08/02/tree-depth.html","f29bdb4722236d05a0896053c5f9fccb"],["/2019/08/03/dices-probability.html","a5f6eb5215df96262ddbe07171052516"],["/2019/08/03/max-in-window.html","f4a6f2f456174e267d8a88417e6fbb66"],["/2019/08/03/queue-with-max.html","c8892299951b31cfa44e4f98ced97eef"],["/2019/08/03/reverse-words.html","3f2ea0ad5fd0d9a1e1e77d67efd21707"],["/2019/08/03/stack-push-pop-order.html","1a16e077c60c7dfd3b58b565c3c11535"],["/2019/08/03/stack-with-min.html","06a8ed4068ef0ddc9a296cbdfb518342"],["/2019/08/03/two-number-with-sum.html","4cb906df0c9e0925aaa5ad5e7876adbc"],["/2019/08/13/dynamic-proxy-more.html","f75e7c4b3ce2bac8cb6c97d6c0a741f9"],["/2019/08/13/scanner.html","ad301f3207535a136c419c60851f001e"],["/2019/08/27/catalog-of-swording-offers.html","db38273c5039d501c4ca99d6fcaa237f"],["/2019/08/28/Symmetric-tree.html","54c3fecee6d940e8652739fc2b7d7810"],["/2019/08/28/invert-binary-tree.html","fa31e36a45db4f046fde54ca96e7a579"],["/2019/08/28/same-tree.html","09452707fc37ff324789bd90546d6ae4"],["/2019/08/29/balanced-binary-tree.html","b051a826879fc6c08d50a01bb8d96010"],["/2019/08/29/max-depth-of-binary-tree.html","52cc56450659e01eb9af095877bda10e"],["/2019/10/10/conclusions-for-some-algos.html","634e73b67c2966dd774704b5f2bcff86"],["/2019/10/23/tranverse-hashmap.html","a51885562bb2d17cf39b1a8d025d0020"],["/2019/10/28/aho-corasick.html","8bf876007aa69535d815fd7c492076eb"],["/2019/10/28/boyer-moore.html","5a0eeb83ff36a0b6d665c3a2424d29fa"],["/2019/10/28/brute-force.html","2d5c2bc0479dc8a99d3f67576821d7a6"],["/2019/10/28/kmp.html","4cab659667b7d36c33ef5d35f0890ab5"],["/2019/10/28/rabin-karp.html","73b8f271c24535211c76948a2eb7f02f"],["/2019/10/28/trie.html","0d5b007f83d1cddb9ae3444bf64f0f82"],["/2019/10/29/151.html","fc90d6a075250901c2512db588d1c404"],["/2019/10/29/longest-substring-without-repeating-characters.html","92b89b090a2f223b87a5a849a9c90c4e"],["/2019/10/29/string-to-int-atoi.html","61da29ac82e7451754f0fbb20e2e6cd8"],["/2019/10/29/string-to-integer.html","e43d750c1cf964415cf8cfa3deb849e9"],["/2019/11/04/0-1-packages.html","a535fc064e137a2c0a05c69cf0390c66"],["/2019/11/04/8-queens.html","8f475a75567e4127b905f24ccc35727d"],["/2019/11/05/103-二叉树的锯齿层次遍历.html","549261ce4a4e43b3ce285a59291e3a1a"],["/2019/11/05/Convert-Sorted-Array-to-BST.html","3f99b242be37ad9d32f0cbc1fd91c36b"],["/2019/11/05/Convert-Sorted-List-to-Binary-Search-Tree.html","180834fa64f6f2982f5b044aa914e205"],["/2019/11/05/flatten-tree-to-linkedlist.html","96d649e5e2c33e3a1cbf2c71508ca94c"],["/2019/11/05/path-sum.html","a85fa555c414728cda1f67a304b3b910"],["/2019/11/05/valid-binary-search-tree.html","a0b2bdc4c2a210cbea1149e470895d57"],["/about/index.html","1de751d305a28b7f205438bb9404729c"],["/archives/index.html","8ab9b0c2a704a781525e32927a6a9dc2"],["/bundle.js","58738ffae6bd5b0f2f2ecb6093c09803"],["/categories/008/index.html","808ba358f6a6d11d82485d9a6c176813"],["/categories/Backtracking/index.html","ff275de39776b1f9fe68c6662d32eb6b"],["/categories/DPModel/index.html","de62a7695251ad3f166ee64fc569a7a4"],["/categories/Dynamic-Programming/index.html","079fa4dcc06f518891523c94b66cd7c7"],["/categories/Easy/index.html","87aebcd44c375f42b8ec4f2bbb49aaae"],["/categories/Hard/index.html","3f69c67dd7921a8bb1a26f2ee9f57602"],["/categories/HashMap/index.html","26c69a9276e1268a567a88a7a39b5286"],["/categories/HashSet/index.html","26ab1d259e67907d39e11ebe1375e1cd"],["/categories/Heap/index.html","d6ae971838be79c0015a1972c94b758c"],["/categories/Java-EE/index.html","372d0980fb960950bcc9b40576a68210"],["/categories/Java/index.html","b7e1d2487d0231427712ee44562b93ef"],["/categories/List/index.html","2354881f1a9d47db09a5e5715263aaed"],["/categories/Medium/index.html","d5c513d70f5ae518765063d08054d7f3"],["/categories/Queue/index.html","5b3b7880865354502d810e1d35965c0f"],["/categories/Search/index.html","7a4dacdf57b2c45231d6e28dc9a3b71d"],["/categories/Sorting/index.html","6d7c8e065a04a5355a57c8e7704430e1"],["/categories/Stack/index.html","ff98cd8fa57f847e42c154bea8989bc6"],["/categories/String/index.html","e81f37d1a5b10ecddfa7a06d3f6942d0"],["/categories/Sum-up/index.html","9e1de7e0f221be8435dcf06f559e2bf4"],["/categories/Tree/index.html","873f68950d20bf3c03830423b9465989"],["/categories/index.html","4f789c12bc9ad0993ac5591fe3d2378e"],["/categories/leetcode/index.html","1caa419260cf3e7edd5472e5f0ceb83c"],["/categories/剑指Offer/index.html","36a11e494c270fbc8d97790d3ef52c02"],["/categories/动态代理/index.html","277b4ae80aca2f0b978d47a48d535896"],["/categories/得到/index.html","8d07302763ce29630b9fd25a467873ba"],["/css/main.css","082e454b3a0b0896c70ae81dd22e4845"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/iget/index.html","81c2dd46e603caf842cc6da34adb6ace"],["/images/JavaEE/SSM-Redis-architecture.png","7d184758a0809d0ede59a558ce0e5da6"],["/images/JavaEE/SSM-Redis-framework.jpg","a197561f1bee7c232e61d65f845f036b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","1bab2792591352186e5e1432bb9e469d"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"],["/images/background.jpg","15f9da94b572eb8a5386c6387bde95bd"],["/images/background/andrii-shafetov-03-npc-camp-empty.jpg","e3dc866f26f926091d6f0ea9cf520f3b"],["/images/background/andrii-shafetov.jpg","52a3219206b5031ee46e95c21847f41d"],["/images/background/igor-kulkov-in-attic.jpg","6e470b21065d51140412486c76b9cfb8"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","4674c84054e7c25eb0c38cf25bd747cb"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","bc269a85301a7da7aed977eb41c2d95e"],["/images/iget/improve-writing-skills-in-workplace.jpg","bf428d6c2861c6244ad87cbf79a6854a"],["/images/iget/kiss.jpg","41eeb692820f43caf9d5fb045286e09d"],["/images/jaime-jasso-ny-paintover-final-2.jpg","3f32bf2694371f57cba684d29e70367f"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/olga-orlova-191a.jpg","79c251c6ae83df6bbda8b8d3feae7d50"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin/erweima.svg","911b3354e9f337771a6412195dedfa26"],["/images/weixin/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","3bd74b382958a5f7930006b9e1252dd6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/messages/index.html","ddaa03071f135688dcb4890957f5afaf"],["/page/10/index.html","ebd9050d65bb5620db9f0873a8375bd4"],["/page/11/index.html","56071b3a718b7ffd0b338f8526b428f7"],["/page/12/index.html","878dffcdebe76a55816cf9188f07d070"],["/page/13/index.html","f4509951ac389e33c1d9665f5950d0bb"],["/page/14/index.html","9663a260ecc4789dd016b6e85cbefe45"],["/page/15/index.html","7c08fe4f2244f19a5bb10e5445422282"],["/page/16/index.html","456ee22a42f1c0bc6a0d8abd21545798"],["/page/2/index.html","2ba06f4cf0e2620752bc9533e420e84e"],["/page/3/index.html","457256a07d3ccf5d2e2b320fd49cb4e7"],["/page/4/index.html","93c582c8e6a8e7dc4d31942e534f42b3"],["/page/5/index.html","7e90d2e7935bb8d1ba8d6776ac7a036d"],["/page/6/index.html","bbf7564cbb6d4bec01da1aa77acfc486"],["/page/7/index.html","cb22ae9e76cf578576a009aa86d6279a"],["/page/8/index.html","74432d2d3194f68d624b2fa8a500cf38"],["/page/9/index.html","13a7b4802eaf53a3efec82c8bc343cd5"],["/sw-register.js","de93b34a5fc96da368fb0c42693c2a90"],["/tags/Array/index.html","ed8dab3edb5753390e09c9b8914804c0"],["/tags/ArrayList/index.html","3f27458172f42b86339f148a0bd9ea7c"],["/tags/ArrayQueue/index.html","2d6b920fe1309d43960c4fa4b46708a6"],["/tags/ArrayStack/index.html","6f0b3de73ae7dbad0fe0196e770b38ca"],["/tags/BST/index.html","d483f819577df19e0d356b2d83a6a6cc"],["/tags/Backtracking/index.html","56fe952f4105768a163901157efc8a50"],["/tags/BinarySearch/index.html","0c016b48774ee210f2964190c8a53c1c"],["/tags/BinaryTree/index.html","c5ff6a7a9cc98f58885e2f09c46385be"],["/tags/Bit-Manipulation/index.html","4d30fdba882efbb4cdc06681dcb221f8"],["/tags/BubbleSort/index.html","dde230162aa2210b5ecd67708c1800f3"],["/tags/BucketSort/index.html","31f9ba65ddc228fbec10e8f6d1f9c698"],["/tags/Char-Match/index.html","3a0bc7d5754bed512f2e077f9cbb977e"],["/tags/Circular-Queue/index.html","1cfa68789925cab2e9ee24b8c74863bc"],["/tags/CircularQueue/index.html","3e212175963bfe0947a5e49c4faa3e28"],["/tags/CockTailSort/index.html","d7326758f6c30eed5b3fe55b12f8f8c1"],["/tags/CountSort/index.html","612418d2ce6101cc67389ce6793f452e"],["/tags/DPModel/index.html","342d8b2ae21999aed62b199e8ab0ce73"],["/tags/Deque/index.html","5742d50d9a4b7a248cca828cce09061f"],["/tags/Design/index.html","9c73b81c23e00c491c650fa09e3172f7"],["/tags/Divide-and-Conquer/index.html","b69a116beae9b25c674b4bb2f1825278"],["/tags/Dynamic-Programming/index.html","20cd90977aa530dc4e171f29aa2ecbbb"],["/tags/ExternalSort/index.html","c7b439c24c6bb224d896c43c89dc7c99"],["/tags/GenericArray/index.html","6af64d10bab80587aae33cf1cb3a3c91"],["/tags/HQ-Code/index.html","18d3f276d67dc2ae11201c8714165d11"],["/tags/Hash-Table/index.html","d97c4c7d50b31a1e112a8a67cc297dc6"],["/tags/HashMap/index.html","b447294fd7e513a09014651bd1797c8d"],["/tags/HashSet/index.html","befc97e6aae564f80a4d3cf6f7c690fb"],["/tags/Heap/index.html","b48067e8780b38ac8017ffc457d00a3e"],["/tags/HeapSort/index.html","6c4789c5ea18a46cc7b0ae6753007223"],["/tags/Inorder/index.html","a67d0ae20faba5bc697db958a67607b2"],["/tags/InsertionSort/index.html","5733a3202fee3f1acad6a1f1ad8110a8"],["/tags/LikedList/index.html","4046b1b7e42a43e956396f7117069d09"],["/tags/Linked-List/index.html","6882a1e48c4dc3f9e8286290da223282"],["/tags/LinkedList/index.html","e689dddbd0419a46151d4945706af4a8"],["/tags/LinkedQueue/index.html","01b8b448cba6b48d1ce492a4b9b6def5"],["/tags/LinkedStack/index.html","6f37d9251cb6e06270784a45096e5f53"],["/tags/List/index.html","c2c115f6b20994c711fb2b11f5f3d73a"],["/tags/Math/index.html","c3a541bf06696265510f63a8f192f411"],["/tags/MergeSort/index.html","8d76613cda07626693bc6bced077cc8f"],["/tags/Power/index.html","13fe26f446813508ac8a1ddabe409aff"],["/tags/PriorityQueue/index.html","370df8930f023d54f28e9dff6be4cf08"],["/tags/Queue/index.html","1c0b3226a3a29e36e07b3bba7ffac146"],["/tags/Quick-Sort/index.html","16ea94443349a9e090858b8c12dec25d"],["/tags/QuickSort/index.html","063b27077023521319993e88c330ca22"],["/tags/Recursive/index.html","50178b2cbaf1c5bd87b76e32e74a5251"],["/tags/RegExp/index.html","cce7a37613dc882541b5c24dc8080ff1"],["/tags/SampleBrowser/index.html","dbdcac29e73ba37aa67f3d5edf88a739"],["/tags/Search/index.html","69de208388a7b32bd2ab4350f989dc17"],["/tags/SelectionSort/index.html","bd3a0884282752023e8daf7158393ca5"],["/tags/ShellSort/index.html","7ec6fe2618ca47d431e5e551ffdf164e"],["/tags/Singleton/index.html","fa830ae1bb52be67177a1f5b5f63e151"],["/tags/Sort/index.html","1a7bd9147fd615bf4379f752dd75a99f"],["/tags/Spring，-Spring-MVC，-MyBatis，-Redis/index.html","eaa5a9000a6b4c2f444fb90afbc92119"],["/tags/Stack/index.html","30df2787bff97fe16503f73818d3aaed"],["/tags/String/index.html","2a80297d10d8d6e428426ff3bfbdb0e2"],["/tags/Sum-up/index.html","41b5ae3d79367e65f1fc9b5c685e8575"],["/tags/Tree/index.html","9ad4461ad427318e969b25aaf6acc922"],["/tags/Two-Pointers/index.html","3f575ad08954723d758431b9dc31144c"],["/tags/bit/index.html","74d1192cb3217ee2bce5055c9f085950"],["/tags/catalog/index.html","a55132a8bafbdf4f2b8cf94bc8c0bd8f"],["/tags/fibonacci/index.html","aba4a30980be32d0a9d37ce8f3f6df0c"],["/tags/greedy/index.html","ee1a692d9d12d0f372298a15fc5f2a14"],["/tags/index.html","15842aff31ab4318109703be2c251917"],["/tags/java/index.html","86412282521a400f653bd21477ea45c7"],["/tags/leetcode/index.html","e9037e8fb3034a6faeda1cae74998dc5"],["/tags/mark/index.html","207a3633a785cfccd0b57eacfcf1efcc"],["/tags/matrix/index.html","846a4c514d1b1192f1221c670a557ca4"],["/tags/volatile/index.html","74585bf76724369721a905e9dac804fa"],["/tags/动态代理/index.html","031725878519e8f803d7f6ec27b0849f"],["/tags/得到，职场写作，软技能/index.html","51c772ba92928a7fb3da0daf6bed8b00"],["/uploads/avatar.png","44dbd1ae176b9707edcfee37908b3ee5"]];
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
