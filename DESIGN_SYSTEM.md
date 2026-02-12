# 官网设计规范文档

> 基于腾讯云商付风格 | 版本: v1.0 | 更新日期: 2026-02-12

---

## 📋 目录

1. [设计原则](#一设计原则)
2. [色彩系统](#二色彩系统)
3. [字体规范](#三字体规范)
4. [间距与布局](#四间距与布局)
5. [组件规范](#五组件规范)
6. [响应式断点](#六响应式断点)
7. [代码实现](#七代码实现)

---

## 一、设计原则

### 1.1 设计理念
- **科技专业**：以蓝色为主色调，传达技术、信任、专业感
- **简洁干净**：大面积留白，信息层级清晰
- **现代商务**：扁平化设计，微渐变点缀

### 1.2 配色比例（60-30-10 法则）
| 比例 | 用途 | 说明 |
|-----|------|------|
| 60% | 背景色 | 白色/浅灰，营造清爽感 |
| 30% | 中性色 | 文字、图标、分割线 |
| 10% | 品牌色 | 腾讯云蓝，用于重点强调 |

---

## 二、色彩系统

### 2.1 品牌色（Brand Colors）

| 名称 | 色值 | RGB | 使用场景 |
|-----|------|-----|---------|
| **主蓝** | `#0066FF` | `0, 102, 255` | Logo、主按钮、核心交互 |
| **深蓝** | `#0052CC` | `0, 82, 204` | Hover状态、深色背景 |
| **亮蓝** | `#3385FF` | `51, 133, 255` | 渐变终点、高亮元素 |
| **浅蓝** | `#E6F2FF` | `230, 242, 255` | 背景点缀、选中背景 |

**渐变规范：**
```css
/* 主渐变 - 用于Banner、重点卡片 */
--gradient-primary: linear-gradient(135deg, #0066FF 0%, #3385FF 100%);

/* 浅渐变 - 用于hover效果 */
--gradient-light: linear-gradient(135deg, #E6F2FF 0%, #F0F7FF 100%);
```

### 2.2 功能色（Functional Colors）

| 功能 | 色值 | RGB | 使用场景 |
|-----|------|-----|---------|
| **成功** | `#52C41A` | `82, 196, 26` | 成功提示、正向数据 |
| **警告** | `#FAAD14` | `250, 173, 20` | 警告提示、需关注信息 |
| **错误** | `#F5222D` | `245, 34, 45` | 错误提示、删除操作 |
| **信息** | `#1890FF` | `24, 144, 255` | 信息提示、链接 |

### 2.3 中性色（Neutral Colors）

#### 文字色
| 层级 | 色值 | 不透明度 | 使用场景 |
|-----|------|---------|---------|
| 主标题 | `#262626` | 100% | 页面大标题、重要标题 |
| 正文 | `#595959` | 100% | 段落文字、描述内容 |
| 辅助文 | `#8C8C8C` | 100% | 次要说明、时间戳 |
| 禁用文 | `#BFBFBF` | 100% | 禁用状态、占位符 |

#### 背景与边框
| 名称 | 色值 | 使用场景 |
|-----|------|---------|
| 页面背景 | `#FFFFFF` | 主页面背景 |
| 卡片背景 | `#FFFFFF` | 卡片、弹窗 |
| 灰色背景 | `#F5F5F5` | 区块背景、条纹 |
| 浅灰背景 | `#FAFAFA` | 表单背景、hover |
| 分割线 | `#E8E8E8` | 水平/垂直分割线 |
| 边框色 | `#D9D9D9` | 输入框边框、卡片边框 |

---

## 三、字体规范

### 3.1 字体栈
```css
/* 中文优先 */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 英文/数字 */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### 3.2 字号规范

| 层级 | 字号 | 行高 | 字重 | 字间距 | 使用场景 |
|-----|------|------|------|--------|---------|
| **H1** | 48px | 64px | 600 | -0.02em | 首页大标题 |
| **H2** | 36px | 48px | 600 | -0.02em | 板块标题 |
| **H3** | 28px | 40px | 600 | -0.01em | 卡片标题 |
| **H4** | 24px | 32px | 500 | 0 | 小标题 |
| **H5** | 20px | 28px | 500 | 0 | 列表标题 |
| **Body** | 16px | 24px | 400 | 0 | 正文内容 |
| **Small** | 14px | 22px | 400 | 0 | 辅助文字、标签 |
| **Tiny** | 12px | 20px | 400 | 0 | 备注、时间戳 |

### 3.3 文字颜色使用规范
```css
/* 主标题 */
.text-heading { color: #262626; }

/* 正文 */
.text-body { color: #595959; }

/* 辅助文字 */
.text-muted { color: #8C8C8C; }

/* 链接 */
.text-link { color: #0066FF; }
.text-link:hover { color: #0052CC; }

/* 反白文字（深色背景） */
.text-white { color: #FFFFFF; }
.text-white-secondary { color: rgba(255, 255, 255, 0.85); }
```

---

## 四、间距与布局

### 4.1 间距系统（8px 基准）

| Token | 值 | 使用场景 |
|-------|---|---------|
| `space-xs` | 4px | 图标与文字间距、紧凑元素 |
| `space-sm` | 8px | 小间距、行内元素 |
| `space-md` | 16px | 默认间距、卡片内边距 |
| `space-lg` | 24px | 组件间距、表单分组 |
| `space-xl` | 32px | 板块内边距 |
| `space-2xl` | 48px | 大区块间距 |
| `space-3xl` | 64px | 页面级间距 |
| `space-4xl` | 96px | 首页板块间距 |

### 4.2 容器规范

```css
/* 页面最大宽度 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 宽屏适配 */
@media (min-width: 1440px) {
  .container {
    max-width: 1320px;
  }
}

/* 平板适配 */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
```

### 4.3 圆角规范

| Token | 值 | 使用场景 |
|-------|---|---------|
| `radius-sm` | 4px | 小按钮、标签 |
| `radius-md` | 8px | 按钮、输入框 |
| `radius-lg` | 12px | 卡片、弹窗 |
| `radius-xl` | 16px | 大卡片、图片 |
| `radius-full` | 9999px | 胶囊按钮、头像 |

### 4.4 阴影规范

```css
/* 阴影层级 */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);

/* 蓝色光晕（用于聚焦状态） */
--shadow-glow: 0 0 0 3px rgba(0, 102, 255, 0.2);
```

---

## 五、组件规范

### 5.1 按钮（Button）

#### 主按钮（Primary）
```css
.btn-primary {
  background: #0066FF;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #0052CC;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  background: #BFBFBF;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

#### 次要按钮（Secondary）
```css
.btn-secondary {
  background: #FFFFFF;
  color: #0066FF;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #0066FF;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #E6F2FF;
  border-color: #0052CC;
}
```

#### 文字按钮（Text）
```css
.btn-text {
  background: transparent;
  color: #0066FF;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-text:hover {
  color: #0052CC;
  background: rgba(0, 102, 255, 0.05);
}
```

#### 按钮尺寸
| 尺寸 | 高度 | 左右内边距 | 字号 | 使用场景 |
|-----|------|-----------|------|---------|
| Large | 48px | 32px | 16px | 首页CTA |
| Default | 40px | 24px | 16px | 常规操作 |
| Small | 32px | 16px | 14px | 表格操作 |
| Mini | 24px | 12px | 12px | 标签操作 |

### 5.2 卡片（Card）

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #E8E8E8;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* 带hover效果的交互卡片 */
.card-interactive {
  cursor: pointer;
  border: 1px solid transparent;
}

.card-interactive:hover {
  border-color: #0066FF;
}
```

### 5.3 输入框（Input）

```css
.input {
  height: 40px;
  padding: 0 16px;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  font-size: 14px;
  color: #262626;
  background: #FFFFFF;
  transition: all 0.2s ease;
}

.input:hover {
  border-color: #0066FF;
}

.input:focus {
  outline: none;
  border-color: #0066FF;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.2);
}

.input::placeholder {
  color: #BFBFBF;
}

.input:disabled {
  background: #F5F5F5;
  color: #BFBFBF;
  cursor: not-allowed;
}

/* 错误状态 */
.input-error {
  border-color: #F5222D;
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(245, 34, 45, 0.2);
}
```

### 5.4 导航栏（Navbar）

```css
.navbar {
  height: 64px;
  background: #FFFFFF;
  border-bottom: 1px solid #E8E8E8;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* 透明导航栏（首页顶部） */
.navbar-transparent {
  background: transparent;
  border-bottom: none;
}

/* 导航链接 */
.nav-link {
  color: #595959;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #0066FF;
}

.nav-link.active {
  color: #0066FF;
}
```

### 5.5 标签（Tag）

```css
.tag {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

/* 蓝色标签 */
.tag-blue {
  background: #E6F2FF;
  color: #0066FF;
}

/* 绿色标签 */
.tag-green {
  background: #F6FFED;
  color: #52C41A;
}

/* 橙色标签 */
.tag-orange {
  background: #FFF7E6;
  color: #FAAD14;
}

/* 红色标签 */
.tag-red {
  background: #FFF1F0;
  color: #F5222D;
}

/* 灰色标签 */
.tag-gray {
  background: #F5F5F5;
  color: #595959;
}
```

---

## 六、响应式断点

| 断点名称 | 宽度 | 设备类型 |
|---------|------|---------|
| `xs` | < 576px | 手机竖屏 |
| `sm` | ≥ 576px | 手机横屏 |
| `md` | ≥ 768px | 平板竖屏 |
| `lg` | ≥ 992px | 平板横屏/小笔记本 |
| `xl` | ≥ 1200px | 桌面显示器 |
| `xxl` | ≥ 1400px | 大屏显示器 |

### 响应式栅格
```css
/* 12列栅格系统 */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.col {
  padding: 0 12px;
  flex: 1;
}

/* 响应式列宽 */
.col-12 { width: 100%; }
.col-6 { width: 50%; }
.col-4 { width: 33.333%; }
.col-3 { width: 25%; }

@media (max-width: 768px) {
  .col-md-12 { width: 100%; }
  .col-md-6 { width: 50%; }
}

@media (max-width: 576px) {
  .col-sm-12 { width: 100%; }
}
```

---

## 七、代码实现

### 7.1 CSS 变量（完整版）

```css
:root {
  /* ========== 品牌色 ========== */
  --color-primary: #0066FF;
  --color-primary-hover: #0052CC;
  --color-primary-light: #3385FF;
  --color-primary-lighter: #E6F2FF;
  
  /* ========== 功能色 ========== */
  --color-success: #52C41A;
  --color-success-light: #F6FFED;
  --color-warning: #FAAD14;
  --color-warning-light: #FFF7E6;
  --color-error: #F5222D;
  --color-error-light: #FFF1F0;
  --color-info: #1890FF;
  --color-info-light: #E6F7FF;
  
  /* ========== 中性色 ========== */
  --color-text-primary: #262626;
  --color-text-secondary: #595959;
  --color-text-tertiary: #8C8C8C;
  --color-text-disabled: #BFBFBF;
  
  --color-bg-white: #FFFFFF;
  --color-bg-gray: #F5F5F5;
  --color-bg-gray-light: #FAFAFA;
  
  --color-border: #E8E8E8;
  --color-border-dark: #D9D9D9;
  
  /* ========== 渐变 ========== */
  --gradient-primary: linear-gradient(135deg, #0066FF 0%, #3385FF 100%);
  --gradient-hero: linear-gradient(135deg, #0066FF 0%, #00C6FF 100%);
  
  /* ========== 阴影 ========== */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);
  --shadow-glow: 0 0 0 3px rgba(0, 102, 255, 0.2);
  
  /* ========== 间距 ========== */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  
  /* ========== 圆角 ========== */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* ========== 字体 ========== */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  /* ========== 过渡 ========== */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

### 7.2 Tailwind CSS 配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          light: '#3385FF',
          lighter: '#E6F2FF',
        },
        success: {
          DEFAULT: '#52C41A',
          light: '#F6FFED',
        },
        warning: {
          DEFAULT: '#FAAD14',
          light: '#FFF7E6',
        },
        error: {
          DEFAULT: '#F5222D',
          light: '#FFF1F0',
        },
        text: {
          primary: '#262626',
          secondary: '#595959',
          tertiary: '#8C8C8C',
          disabled: '#BFBFBF',
        },
        border: {
          DEFAULT: '#E8E8E8',
          dark: '#D9D9D9',
        },
        bg: {
          gray: '#F5F5F5',
          'gray-light': '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 0 3px rgba(0, 102, 255, 0.2)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
}
```

### 7.3 SCSS Mixins

```scss
// _mixins.scss

// 渐变文字
@mixin gradient-text($gradient: var(--gradient-primary)) {
  background: $gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// 按钮基础样式
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

// 卡片hover效果
@mixin card-hover {
  transition: all var(--transition-slow);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
}

// 文字省略
@mixin text-ellipsis($lines: 1) {
  @if $lines == 1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

// 响应式
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (max-width: 576px) { @content; }
  } @else if $breakpoint == md {
    @media (max-width: 768px) { @content; }
  } @else if $breakpoint == lg {
    @media (max-width: 992px) { @content; }
  } @else if $breakpoint == xl {
    @media (max-width: 1200px) { @content; }
  }
}
```

### 7.4 常用工具类

```css
/* 布局工具类 */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 4px; }
.gap-8 { gap: 8px; }
.gap-16 { gap: 16px; }

/* 文字工具类 */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* 颜色工具类 */
.text-primary { color: var(--color-primary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }

/* 背景工具类 */
.bg-primary { background-color: var(--color-primary); }
.bg-gray { background-color: var(--color-bg-gray); }

/* 间距工具类 */
.p-16 { padding: 16px; }
.p-24 { padding: 24px; }
.m-16 { margin: 16px; }
.m-24 { margin: 24px; }

/* 显示/隐藏 */
.hidden { display: none; }
.block { display: block; }
.inline-block { display: inline-block; }

/* 响应式隐藏 */
@media (max-width: 768px) {
  .hidden-md { display: none; }
}

@media (max-width: 576px) {
  .hidden-sm { display: none; }
}
```

---

## 附录

### A. 设计资源
- **图标库**: 建议使用 [IconPark](https://iconpark.oceanengine.com/) 或 [Ant Design Icons](https://ant.design/components/icon/)
- **图片规范**: 
  - Banner图: 1920×600px (桌面) / 768×400px (移动)
  - 产品图: 800×600px
  - 图标: 24×24px (默认) / 16×16px (小) / 32×32px (大)

### B. 命名规范
- **文件命名**: `kebab-case` (例: `hero-banner.jpg`)
- **Class命名**: `kebab-case` (例: `.btn-primary`)
- **组件命名**: `PascalCase` (例: `PrimaryButton`)
- **变量命名**: `camelCase` (例: `primaryColor`)

### C. 浏览器兼容性
- Chrome (最新2个版本)
- Firefox (最新2个版本)
- Safari (最新2个版本)
- Edge (最新2个版本)
- IE11 (基本支持，部分效果降级)

---

## 更新日志

| 版本 | 日期 | 更新内容 |
|-----|------|---------|
| v1.0 | 2026-02-12 | 初始版本，包含完整的色彩、字体、组件规范 |

---

> 💡 **使用建议**: 本文档作为开发参考，实际开发时请根据具体需求灵活调整。如有疑问，优先遵循本文档规范。
