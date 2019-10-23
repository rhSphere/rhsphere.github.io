---
title: 剑指Offer(46) 把数字翻译成字符串
tags: [String, Dynamic Programming]
date: 2019-07-30 10:16:41
permalink: translate-numbers-to-strings
categories: 剑指Offer
description:
---
<p class="description"></p>


<!-- more -->

## 把数字翻译成字符串

### 题目 
给定一个数字，我们按照如下规则把它翻译为字符串：0翻译成"a"，1翻译成"b"，……，11翻译成"l"，……，25翻译成"z"。一个数字可能有多个翻译。例如12258有5种不同的翻译，它们分别"bccfi", "bwfi", "bczi", "mcfi" 和"mzi" 。请编程实现一个函数用来计算一个数字有多少种不同的翻译方法。

### 思路
看到题目，很容易想到使用递归：用f(i)来表示从第i位开始的不同翻译数目，可以得到有：f(i)=f(i+1)+g(i,i+1)*f(i+2)。i和i+1位数字拼起来在10~25范围内时g(i,i+1)的值为1，否则为0。

　　但是存在重复的子问题，所以递归并非最佳方法，我们从数字的末尾开始计算f(i)，自下而上解决问题，就可以消除重复的子问题了。先算f(len-1)，f(len-2)，再根据公式f(i)=f(i+1)+g(i,i+1)*f(i+2)往前逐步推导到f(0)，这就是最终要求的结果。

### 测试用例
1. 功能测试（1个数字；多个数字）

2. 特殊测试（负数，0，含25、26等）

## java代码

```java
/**
 * @description:
 * @author: rhsphere
 * @since: 2019-07-30 10:19 by jdk 1.8
 */
public class TranslateNumbersToStrings {
	public int getTranslationCount(int number) {
		if (number < 0)
			return 0;
		String sNum = String.valueOf(number);
		int len = sNum.length();

		int[] counts = new int[len];
		for (int i = len - 1; i >= 0; i--) {
			if (i == len - 1) {
				counts[i] = 1;
			} else {
				count[i] = count[i + 1];
				if (canBeTrans(sNum, i)) {
					if (i == len - 2) 
						counts[i] += 1;
					else
						counts[i] += counts[i + 2];
				}
			}
		}
		return counts[0];
	}

	private boolean canBeTrans(String sNum, int i) {
		int a = sNum.charAt(i) - '0';
		int b = sNum.charAt(i + 1) - '0';

		int convert = a * 10 + b;
		if (convert >= 10 && convert <= 25)
			return true;
		return false;
	}

	
	 public static void main(String[] args) {
        TranslateNumbersToStrings demo= new TranslateNumbersToStrings();
        System.out.println(demo.getTranslationCount(0)==1);
        System.out.println(demo.getTranslationCount(10)==2);
        System.out.println(demo.getTranslationCount(12258)==5);
        System.out.println(demo.getTranslationCount(-100)==0);
    }
}
```


## 总结

1. 递归方法，我们试着用公式描述会比较清晰

2. 递归是自上而下解决问题，如果遇到重复的子问题时，考虑自下而上求解，不用递归

3. g(i,i+1)不仅要判断<=25，还要判断>=10，别漏了

<hr />