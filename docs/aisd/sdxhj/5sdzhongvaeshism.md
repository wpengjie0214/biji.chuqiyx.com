---
article: false
title: stable diffusion中VAE是什么，该如何使用？新手必看
icon: exercise
order: 5
---

## stable diffusion中VAE是什么，该如何使用？新手必看

### VAE是什么？

VAE作用分为两点
第1个:是滤镜会让你的整个画面,看起来不是那么灰蒙蒙的,很有色彩的饱和度
第2个:就是对画面进行微调在一些细节的形状上会有些变化可以看下加和不加VAE之间的区别

![image-20240305174936914](https://img.17xueai.top/typora/imager/202403122130843.webp)

会发现不加载vae的时候画面看起来灰蒙蒙的，色彩不是那么鲜艳，但是加载了vae之后整个画面就像我们一般看到的图一样非常的不错

### 如何切换选择vae？

让我们打开stable diffusion的界面,找到这个地方,鼠标框选的位置模型的vae，单击会看到有个下拉列表，只要你把VAE存在相对应的目录里
你在这里就能看到你保存的VAE了。

![image-20240305170217375](https://img.17xueai.top/typora/imager/202403122130303.webp)

### VAE在哪里下载呢？

目前有两种方法

方法1

我们可以打开我们的启动器，找到模型管理，里面有个变分自编码器 (VAE)模型在这里面，就可以选择各种VAE进行下载

![image-20240305170801325](https://img.17xueai.top/typora/imager/202403122130744.webp)

可以点击这里的下载按钮进行下载，下载完之后会直接把VAE模型放在VAE的目录里。

方法2

大家点击进入圈子，我在这里给大家分享相关插件，每天会有定时的更新

### 下载VAE之后应该放在哪里呢？

首先到stable diffusion根目录，有启动器的根目录，让我们打开这个models往下拉找到底下有一个VAE进去在这个目录这就是VAE存放的目录

![image-20240305171527084](https://img.17xueai.top/typora/imager/202403122130107.webp)