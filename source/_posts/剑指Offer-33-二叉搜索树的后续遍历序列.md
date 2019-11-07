---
title: 剑指Offer(33) 二叉搜索树的后续遍历序列
tags: [Tree]
date: 2019-07-11 16:26:29
permalink: sequence-of-BST
categories: 剑指Offer
description:
---
<p class="description"></p>


<!-- more -->

# 二叉搜索数的后续遍历序列

5,7,6,  9,11,10,  8  

显然左子树都比最后一个根节点8小，右子树都比根节点8大，然后是递归判断左子树和右子树。
先找到右子树的根节点即可。


## 题目

　输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true，否则返回false。假设输入的数组的任意两个数字都互不相同。

## 思路

二叉树后续遍历数组的最后一个数为根节点，剩余数字中，小于根节点的数字（即左子树部分）都排在前面，大于根节点的数字（即右子树部分）都排在后面。
根据遍历数组的这个特性，可以编写一个递归函数，用于实现题目所要求的判断功能。


## 测试用例
1. 功能测试（左斜、右斜、能对应的二叉树、不能对应的二叉树）
2. 特殊测试（null、一个节点）

# java代码

```java
/**
 * @description: 剑指offer28
 * @author: rhsphere
 * @since: 2019-07-11 15:24 by jdk 1.8
 */
public class SequeneceOfBST {
    public class TreeNode {
        int val = 0;
        TreeNode left, right;
        public TreeNode(int val) {
            this.val = val;
        }
    }

    public boolean verifySequenceOfBST(int[] sequence) {
    	if (sequence == null || sequence.length <= 0)
    		return false;
    	return verifyCore(sequence, 0, sequence.length - 1);
    }
    private boolean verifyCore(int[] sequence, int start, int end) {
    	if (start >= end)
    		return true;
    	int mid = start;
    	while (sequence[mid] < sequence[end])
    		mid++;
    	for (int i = mid; i < end; i++) {
    		if (sequence[i] < sequence[end])
    			return false;
    	}
    	return verifyCore(sequence, start, mid - 1) 
    		   && verifyCore(sequence, mid, end - 1);  //这里是end-1不是end
    }
}
```


# 总结
1. 寻找出序列规律，就能较快得到思路。此题如果改为BST的前序遍历也是相同的思路。

2. 对于要求处理二叉树序列的问题：找到根结点后，拆分出左右子树，对左右子树可以进行递归处理。

3. 右子树的后续遍历序列中，父节点的下标是end-1，不是end。

<hr />