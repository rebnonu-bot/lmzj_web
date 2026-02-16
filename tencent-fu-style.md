# 腾讯云商付 (fu.tencent.com) 设计系统

> 基于 style-extractor 技能分析 | 腾讯云企业级产品设计风格

---

## 1. 概述

腾讯云商付是腾讯云面向企业的支付中台产品，设计风格遵循腾讯云官方设计体系 (TDesign)。

- **产品类型**: B2B SaaS / 企业支付中台
- **设计风格**: 企业级专业风格、清晰简洁、科技感
- **品牌基调**: 可信赖、专业、高效

---

## 2. 设计哲学

基于腾讯云设计体系 (TDesign) 的核心理念：

1. **清晰高效** - 信息层级分明，操作路径短
2. **专业可信赖** - 稳重的色彩，规范的排版
3. **一致统一** - 遵循腾讯云品牌设计规范
4. **响应式适配** - 支持多端设备访问

---

## 3. 语义化设计令牌 (Semantic Tokens)

### 3.1 主色调 (Brand Colors)

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-brand-primary` | `#0052D9` | 主品牌色、主按钮、链接 |
| `--color-brand-hover` | `#003BB3` | Hover状态 |
| `--color-brand-active` | `#002E8C` | Active/Pressed状态 |
| `--color-brand-light` | `#E8F0FF` | 浅品牌背景 |
| `--color-brand-gradient` | `linear-gradient(135deg, #0052D9 0%, #1890FF 100%)` | 渐变装饰 |

### 3.2 功能色 (Functional Colors)

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-success` | `#2BA471` | 成功状态、正向数据 |
| `--color-success-light` | `#E8F8F0` | 成功背景 |
| `--color-warning` | `#ED7B2F` | 警告提示 |
| `--color-warning-light` | `#FFF2E8` | 警告背景 |
| `--color-error` | `#D54941` | 错误提示、删除操作 |
| `--color-error-light` | `#FFF0ED` | 错误背景 |
| `--color-info` | `#0052D9` | 信息提示 |

### 3.3 中性色 (Neutral Colors)

#### 文字颜色
| Token | 色值 | 用途 |
|-------|------|------|
| `--color-text-primary` | `#1D2129` | 主要文字、标题 |
| `--color-text-secondary` | `#4E5969` | 次要文字、正文 |
| `--color-text-tertiary` | `#86909C` | 辅助文字、说明 |
| `--color-text-disabled` | `#C9CDD4` | 禁用状态文字 |
| `--color-text-inverse` | `#FFFFFF` | 深色背景上的文字 |

#### 背景与边框
| Token | 色值 | 用途 |
|-------|------|------|
| `--color-bg-page` | `#F2F3F5` | 页面背景 |
| `--color-bg-container` | `#FFFFFF` | 卡片、容器背景 |
| `--color-bg-hover` | `#F5F7FA` | Hover背景 |
| `--color-border-default` | `#E5E6EB` | 默认边框 |
| `--color-border-divider` | `#E5E6EB` | 分割线 |

---

## 4. 色彩调色板

### 主蓝色阶
```
#002E8C (最深，用于Active状态)
#003BB3 (深，用于Hover状态)
#0052D9 (主品牌色)
#1890FF (亮蓝，用于渐变)
#4BA1FF (高亮)
#E8F0FF (浅背景)
```

### 灰度色阶
```
#1D2129 (主要文字)
#4E5969 (次要文字)
#6B7280 (辅助文字)
#86909C (占位符)
#C9CDD4 (禁用)
#E5E6EB (边框)
#F2F3F5 (页面背景)
#FFFFFF (纯白)
```

---

## 5. 排版系统

### 5.1 字体栈
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### 5.2 字号规范

| 层级 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| H1 | 32px | 44px | 600 | 页面主标题 |
| H2 | 24px | 36px | 600 | 板块标题 |
| H3 | 20px | 30px | 500 | 卡片标题 |
| H4 | 16px | 24px | 500 | 小标题 |
| Body | 14px | 22px | 400 | 正文内容 |
| Small | 12px | 20px | 400 | 辅助文字 |

---

## 6. 间距系统

基于 4px 基准单位：

| Token | 值 | 用途 |
|-------|---|------|
| `--space-xs` | 4px | 图标间距、紧凑元素 |
| `--space-sm` | 8px | 小间距 |
| `--space-md` | 16px | 默认间距、卡片内边距 |
| `--space-lg` | 24px | 组件间距 |
| `--space-xl` | 32px | 板块间距 |
| `--space-xxl` | 48px | 大板块间距 |

---

## 7. 组件规范

### 7.1 按钮 (Button)

#### 主按钮 (Primary)
```css
background: #0052D9;
color: #FFFFFF;
padding: 8px 20px;
border-radius: 4px;
font-size: 14px;
font-weight: 500;
```

**状态矩阵：**
- **Default**: `bg: #0052D9`, `color: #FFFFFF`
- **Hover**: `bg: #003BB3`
- **Active**: `bg: #002E8C`
- **Disabled**: `bg: #C9CDD4`, `color: #FFFFFF`

#### 次要按钮 (Secondary)
```css
background: #FFFFFF;
color: #0052D9;
border: 1px solid #0052D9;
```

#### 文字按钮 (Text)
```css
background: transparent;
color: #0052D9;
```

### 7.2 卡片 (Card)

```css
background: #FFFFFF;
border-radius: 8px;
padding: 24px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
border: 1px solid #E5E6EB;
```

### 7.3 输入框 (Input)

```css
height: 36px;
padding: 0 12px;
border: 1px solid #E5E6EB;
border-radius: 4px;
font-size: 14px;
color: #1D2129;
background: #FFFFFF;
```

**状态矩阵：**
- **Default**: `border: #E5E6EB`
- **Hover**: `border: #86909C`
- **Focus**: `border: #0052D9`, `box-shadow: 0 0 0 2px rgba(0, 82, 217, 0.2)`
- **Error**: `border: #D54941`
- **Disabled**: `bg: #F5F7FA`, `color: #C9CDD4`

### 7.4 导航栏 (Navbar)

```css
height: 64px;
background: #FFFFFF;
border-bottom: 1px solid #E5E6EB;
padding: 0 24px;
```

---

## 8. 动效规范

### 8.1 过渡时间

| Token | 值 | 用途 |
|-------|---|------|
| `--motion-fast` | 150ms | 微交互（按钮状态变化） |
| `--motion-normal` | 250ms | 标准过渡 |
| `--motion-slow` | 350ms | 复杂动画 |

### 8.2 缓动函数

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### 8.3 常用动效

#### 按钮 Hover
```css
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(0, 82, 217, 0.3);
```

#### 卡片 Hover
```css
transition: all 300ms ease;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
transform: translateY(-2px);
```

---

## 9. 参考资源

- [TDesign 官网](https://tdesign.tencent.com/)
- [TDesign Vue3](https://tdesign.tencent.com/vue-next/)
- [腾讯云设计规范](https://cloud.tencent.com/design)

---

> 📌 **注意**: 本设计系统基于腾讯云 TDesign 规范推断，实际使用时请以 fu.tencent.com 网站为准。
> 
> 如需精确提取，请使用 Chrome MCP + style-extractor 技能进行实时分析。

---

*Generated by style-extractor skill | 腾讯云商付设计系统*
