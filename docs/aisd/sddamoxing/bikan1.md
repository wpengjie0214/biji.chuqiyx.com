---
article: false
title: Stable Diffusion模型存放位置介绍
icon: exercise
order: 1
---

## Stable Diffusion模型存放位置介绍

下载模型后需要将之放置在指定的目录下，请注意，不同类型的模型应该拖放到不同的目录下。 模型的类型可以通过[Stable Diffusion 法术解析](https://spell.novelai.dev/)检查。

![image-20240306110043698](https://img.17xueai.top/typora/imager/202403122125294.webp)

启动器根目录【sd-webui-aki\sd-webui-aki-v4.6.1】

### 大模型（Ckpt）

> 基础模型，它是stable diffusion绘图的主模型，包含了大量的场景素材，所以它的体积很大，其它模型都是在它基础上做一些细节的定制，安装完stable diffusion软件后，必须搭配基础模型才能使用，每种基础模型都有各自侧重的画风和擅长领域。

```
常见文件大小: 2G-7G
常见文件格式: 尾缀ckpt、safetensors
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\models\Stable-diffusion
```

![image-20240306110349058](https://img.17xueai.top/typora/imager/202403122125219.webp)

### VAE 模型

>  VAE，中文叫变分自编码器，全名Variational autoenconder，VAE一般用于美化图片的色彩和细节微调，主要功能是滤镜和微调；滤镜就像是剪映、美图秀秀、PS等软件用到的滤镜一样，让图片的画面看上整体色彩饱和清晰度更高；微调就是对出图的部分细节进行细微调整。

```
常见文件大小:100MB-800MB之间
常见文件格式:尾缀ckpt、pt、safetensors（标题都会几乎都会带vae）
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\models\VAE
```

![image-20240306110559240](https://img.17xueai.top/typora/imager/202403122126642.webp)

### Lora模型

> Loar模型它是一个微调模型，主要是用于满足对应特定的风格，或指定的人物特征属性进行定制。在数据相似度非常高的情形下，lora模型更加轻巧，训练效率也更高，可以节省大量的训练时间和训练资源。

```
常见文件大小:100MB-300MB左右
常见文件格式:尾缀safetensors、pt、ckpt
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\models\Lora
```

![image-20240306111014424](https://img.17xueai.top/typora/imager/202403122126396.webp)

### Embedding模型（反向Tag）

> Embedding模型是一种嵌入式模型，属于微调模型，Embedding模型的主要作用是文本反转，调教文本理解能力、用于个性化图像生成。

```
常见文件大小:几十KB
常见文件格式:尾缀pt
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\extensions
```

![image-20240306111615061](https://img.17xueai.top/typora/imager/202403122126283.webp)

### Hypernetwork模型

> Hypernetwork模型，它是一个超网络模型。Hypernetwork模型的主要功能是定制生成图片的画风和风格。通过使用Hypernetwork模型，可以对生成的图片进行更加细致的风格调整和定制化处理。

```
常见文件大小: 几十KB
常见文件格式:尾缀pt
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\models\hypernetworks
```

![image-20240306111825977](https://img.17xueai.top/typora/imager/202403122126138.webp)

### Textual Inversion模型

> 一种使用文本提示来训练模型的方法，可以简单理解为一组打包的提示词，用于生成固定特征的人或事物。特点是对于特定风格特征的出图效果好，模型文件非常小

```
一般几十 K，但是训练速度较慢，需要搭配大模型使用。
文件位置：sd-webui-aki\sd-webui-aki-v4.6.1\embeddings
```

![image-20240306113029989](https://img.17xueai.top/typora/imager/202403122126554.webp)



