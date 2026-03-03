# Eye Spa Pro 👁️

> **A Web-based visual fatigue relief tool for high-intensity screen users.**

## 📖 项目背景 (Background)

在数字化办公环境中，开发者与设计师常面临 **“视觉锁定” (Visual Lock-in)** 状态。长时间盯着固定焦距的屏幕会导致眼部调节系统出现疲劳：

- **瞬目减少**：专注工作时眨眼频率下降，破坏了眼表水分的自然循环。
- **调节僵直**：睫状肌长时间收缩无法放松，导致视力暂时的模糊感。
- **空间感知缺失**：视线长期局限在 50-70cm 的平面内，缺乏深远距离的焦距切换。

**Eye Spa Pro** 通过一套 3 分钟的 **视觉动力学 (Visual Dynamics)** 引导，打破这种生理惯性。

---

## ✨ 核心逻辑 (Core Mechanics)

本项目通过四个维度的交互设计来缓解疲劳：

### 1. 主动润滑引导 (Active Lubrication)

- **动作**：强制深度挤眼。
- **原理**：通过物理挤压睑板腺排出油脂，重构泪膜脂质层，减少水分蒸发。

### 2. 动态追踪路径 (Kinetic Tracking)

- **动作**：基于 Lissajous 曲线的绿球追踪。
- **原理**：引导眼球进行多轴向运动，拉伸长期处于静态张力下的眼外肌。

### 3. 变焦拉伸 (Focus Shifting)

- **动作**：2D 缩放模拟 3D 深度变化。
- **原理**：视点在“屏幕中心”与“无限远方”间切换，强迫睫状肌进行收缩与舒张的交替练习。

### 4. 暗适应交互 (Dark-Mode Interface)

- **设计**：极低亮度背景（#050505）配以微光绿球。
- **原理**：降低屏幕总光通量，避免练习过程中的二次眩光刺激。

---

## 🚀 快速开始 (Quick Start)

### 本地运行

1. 克隆仓库：

```bash
git clone https://github.com/wanxb/eye-spa-pro.git

```

2. 打开 `index.html` 即可运行。
3. **建议操作**：按下 `F11` 进入浏览器全屏模式以获得最佳沉浸体验。

### 在线体验

[点击在线运行 Eye Spa Pro](https://wanxb.github.io/eye-spa-pro/)

---

## 🛠️ 项目结构 (Structure)

```text
eye-spa-pro/
├── index.html          # 入口文件
├── css/
│   └── style.css       # 沉浸式 UI 样式
├── js/
│   └── script.js       # 视觉引导算法逻辑
├── image/
│   └── icon.png        # 项目图标
└── README.md           # 项目文档

```

---

## 📜 免责声明 (Disclaimer)

本项目仅用于缓解长时间使用电脑引起的**一过性视觉疲劳**。它不是医疗器械，不具备治疗眼部疾病的功能。如您有持续性的视力下降或眼部疼痛，请及时咨询专业的眼科医生。

---

## 📄 开源协议 (License)

本项目基于 [MIT License](LICENSE) 协议开源。

---
