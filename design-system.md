# 科技企业官网设计系统

> 生成日期: 2026-02-16
> 风格: 科技现代 (Tech Modern)
> 色彩模式: 浅色 + 深色双模式

---

## 1. 设计原则

### 1.1 设计理念
- **简洁有力** - 大量留白，信息密度适中
- **科技感** - 渐变、微动效、现代字体
- **专业可信** - 蓝色主调，稳重但不呆板
- **响应式** - 完美适配桌面、平板、移动端

### 1.2 配色比例 (60-30-10 法则)
| 比例 | 用途 | 说明 |
|-----|------|------|
| 60% | 背景/中性色 | 白/灰/黑，营造清爽感 |
| 30% | 文字/图标 | 深灰/浅灰，确保可读性 |
| 10% | 品牌强调 | 蓝色渐变，突出重点 |

---

## 2. 色彩系统

### 2.1 品牌色 (Brand Colors)

#### 主品牌色
| Token | 浅色模式 | 深色模式 | 用途 |
|-------|---------|---------|------|
| `--brand-primary` | `#2563EB` | `#3B82F6` | 主按钮、链接、重点 |
| `--brand-secondary` | `#1D4ED8` | `#60A5FA` | Hover状态 |
| `--brand-tertiary` | `#1E40AF` | `#93C5FD` | Active状态 |
| `--brand-gradient` | `linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)` | `linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)` | Hero背景、卡片装饰 |

#### 品牌浅色阶
| Token | 浅色模式 | 深色模式 | 用途 |
|-------|---------|---------|------|
| `--brand-50` | `#EFF6FF` | `#1E3A5F` | 最浅背景 |
| `--brand-100` | `#DBEAFE` | `#1E4A7C` | 浅色背景 |
| `--brand-200` | `#BFDBFE` | `#265C99` | 边框/分隔 |
| `--brand-300` | `#93C5FD` | `#2D6DB5` | 禁用状态 |
| `--brand-400` | `#60A5FA` | `#3B82F6` | 次要元素 |
| `--brand-500` | `#3B82F6` | `#60A5FA` | 主品牌色 |
| `--brand-600` | `#2563EB` | `#93C5FD` | 按钮/链接 |
| `--brand-700` | `#1D4ED8` | `#BFDBFE` | Hover状态 |
| `--brand-800` | `#1E40AF` | `#DBEAFE` | Active状态 |
| `--brand-900` | `#1E3A8A` | `#EFF6FF` | 最深强调 |

### 2.2 功能色 (Functional Colors)

| 类型 | Token | 浅色模式 | 深色模式 | 用途 |
|------|-------|---------|---------|------|
| 成功 | `--success` | `#10B981` | `#34D399` | 成功提示、正向 |
| 成功背景 | `--success-bg` | `#ECFDF5` | `#064E3B` | 成功背景 |
| 警告 | `--warning` | `#F59E0B` | `#FBBF24` | 警告提示 |
| 警告背景 | `--warning-bg` | `#FEF3C7` | `#78350F` | 警告背景 |
| 错误 | `--error` | `#EF4444` | `#F87171` | 错误提示、删除 |
| 错误背景 | `--error-bg` | `#FEE2E2` | `#7F1D1D` | 错误背景 |
| 信息 | `--info` | `#2563EB` | `#60A5FA` | 信息提示 |
| 信息背景 | `--info-bg` | `#EFF6FF` | `#1E3A5F` | 信息背景 |

### 2.3 中性色 (Neutral Colors)

#### 浅色模式
| Token | 值 | 用途 |
|-------|---|------|
| `--gray-50` | `#F9FAFB` | 页面背景 |
| `--gray-100` | `#F3F4F6` | 卡片背景、Hover |
| `--gray-200` | `#E5E7EB` | 边框、分隔线 |
| `--gray-300` | `#D1D5DB` | 禁用边框 |
| `--gray-400` | `#9CA3AF` | 占位符文字 |
| `--gray-500` | `#6B7280` | 次要文字 |
| `--gray-600` | `#4B5563` | 正文文字 |
| `--gray-700` | `#374151` | 小标题 |
| `--gray-800` | `#1F2937` | 大标题 |
| `--gray-900` | `#111827` | 最深文字 |
| `--white` | `#FFFFFF` | 纯白背景 |

#### 深色模式
| Token | 值 | 用途 |
|-------|---|------|
| `--dark-50` | `#0F172A` | 页面背景 |
| `--dark-100` | `#1E293B` | 卡片背景 |
| `--dark-200` | `#334155` | 边框、分隔线 |
| `--dark-300` | `#475569` | 禁用边框 |
| `--dark-400` | `#64748B` | 占位符文字 |
| `--dark-500` | `#94A3B8` | 次要文字 |
| `--dark-600` | `#CBD5E1` | 正文文字 |
| `--dark-700` | `#E2E8F0` | 小标题 |
| `--dark-800` | `#F1F5F9` | 大标题 |
| `--dark-900` | `#F8FAFC` | 最深文字 |
| `--black` | `#000000` | 纯黑背景 |

---

## 3. 字体系统

### 3.1 字体栈
```css
/* 主字体 - 现代无衬线 */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;

/* 等宽字体 - 代码展示 */
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', monospace;

/* 展示字体 - Hero标题 */
--font-display: 'Inter', sans-serif;
```

### 3.2 字号规范

| 层级 | 尺寸 | 行高 | 字重 | 字间距 | 用途 |
|------|------|------|------|--------|------|
| **Hero** | 56px | 1.1 | 700 | -0.02em | 首页大标题 |
| **H1** | 48px | 1.2 | 700 | -0.02em | 页面主标题 |
| **H2** | 36px | 1.25 | 600 | -0.01em | 板块标题 |
| **H3** | 28px | 1.3 | 600 | -0.01em | 卡片标题 |
| **H4** | 24px | 1.35 | 600 | 0 | 小标题 |
| **H5** | 20px | 1.4 | 500 | 0 | 列表标题 |
| **H6** | 18px | 1.4 | 500 | 0 | 辅助标题 |
| **Body Large** | 18px | 1.75 | 400 | 0 | 引导文字 |
| **Body** | 16px | 1.75 | 400 | 0 | 正文内容 |
| **Body Small** | 14px | 1.6 | 400 | 0 | 辅助文字 |
| **Caption** | 12px | 1.5 | 500 | 0.01em | 标签、时间 |
| **Overline** | 12px | 1.5 | 600 | 0.05em | 分类标签 |

### 3.3 字体颜色 (浅色模式)
```css
--text-primary: var(--gray-900);      /* 主要文字 */
--text-secondary: var(--gray-600);    /* 次要文字 */
--text-tertiary: var(--gray-500);     /* 辅助文字 */
--text-disabled: var(--gray-400);     /* 禁用文字 */
--text-inverse: #FFFFFF;              /* 深色背景上 */
```

### 3.4 字体颜色 (深色模式)
```css
--text-primary: var(--dark-900);      /* 主要文字 */
--text-secondary: var(--dark-600);    /* 次要文字 */
--text-tertiary: var(--dark-500);     /* 辅助文字 */
--text-disabled: var(--dark-400);     /* 禁用文字 */
--text-inverse: #000000;              /* 浅色背景上 */
```

---

## 4. 间距系统

### 4.1 基础单位 (4px)
| Token | 值 | 用途 |
|-------|---|------|
| `--space-0` | 0px | 无间距 |
| `--space-1` | 4px | 图标内边距 |
| `--space-2` | 8px | 紧凑元素 |
| `--space-3` | 12px | 小间距 |
| `--space-4` | 16px | 默认间距 |
| `--space-5` | 20px | 组件间距 |
| `--space-6` | 24px | 卡片内边距 |
| `--space-8` | 32px | 组件外边距 |
| `--space-10` | 40px | 大间距 |
| `--space-12` | 48px | 板块内边距 |
| `--space-16` | 64px | 页面间距 |
| `--space-20` | 80px | Hero间距 |
| `--space-24` | 96px | 最大间距 |

### 4.2 容器宽度
```css
--container-max: 1280px;    /* 最大宽度 */
--container-narrow: 768px;  /* 窄版 (博客/文章) */
--container-wide: 1440px;   /* 宽版 (Hero) */
--container-padding: 24px;  /* 移动端内边距 */
```

---

## 5. 圆角系统

| Token | 值 | 用途 |
|-------|---|------|
| `--radius-none` | 0px | 无圆角 |
| `--radius-sm` | 4px | 小按钮、标签 |
| `--radius-md` | 8px | 按钮、输入框 |
| `--radius-lg` | 12px | 卡片、弹窗 |
| `--radius-xl` | 16px | 大卡片、图片 |
| `--radius-2xl` | 24px | Hero卡片 |
| `--radius-full` | 9999px | 胶囊按钮、头像 |

---

## 6. 阴影系统

### 6.1 浅色模式阴影
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 20px rgba(37, 99, 235, 0.3);  /* 品牌光晕 */
```

### 6.2 深色模式阴影
```css
--shadow-dark-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-dark-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4);
--shadow-dark-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5);
--shadow-dark-glow: 0 0 30px rgba(59, 130, 246, 0.4);  /* 品牌光晕 */
```

---

## 7. 组件规范

### 7.1 按钮 (Button)

#### 主按钮 (Primary)
```css
.btn-primary {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);
  color: white;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

#### 次按钮 (Secondary)
```css
.btn-secondary {
  background: transparent;
  color: var(--brand-primary);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  border: 2px solid var(--brand-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--brand-50);
  border-color: var(--brand-secondary);
}
```

#### 幽灵按钮 (Ghost)
```css
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--gray-100);
  color: var(--text-primary);
}
```

### 7.2 卡片 (Card)

```css
.card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--brand-300);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### 7.3 输入框 (Input)

```css
.input {
  height: 48px;
  padding: 0 var(--space-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: 16px;
  color: var(--text-primary);
  background: var(--white);
  transition: all 0.2s ease;
  width: 100%;
}

.input:hover {
  border-color: var(--gray-300);
}

.input:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

### 7.4 导航栏 (Navbar)

```css
.navbar {
  height: 72px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--gray-200);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.nav-link {
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 500;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--brand-primary);
  background: var(--brand-50);
}

.nav-link.active {
  color: var(--brand-primary);
}
```

---

## 8. 动效系统

### 8.1 过渡时间
```css
--duration-fast: 150ms;      /* 微交互 */
--duration-normal: 250ms;    /* 标准过渡 */
--duration-slow: 350ms;      /* 复杂动画 */
--duration-slower: 500ms;    /* 页面切换 */
```

### 8.2 缓动函数
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* 弹性效果 */
```

### 8.3 常用动效

#### 按钮 Hover
```css
transition: all var(--duration-normal) var(--ease-out);
transform: translateY(-2px);
box-shadow: var(--shadow-lg), var(--shadow-glow);
```

#### 卡片 Hover
```css
transition: all var(--duration-slow) var(--ease-out);
transform: translateY(-4px);
box-shadow: var(--shadow-xl);
```

#### 淡入动画
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn var(--duration-slower) var(--ease-out) forwards;
}
```

#### 渐变动画 (Hero背景)
```css
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}
```

---

## 9. 响应式断点

```css
/* 移动端优先 */
--breakpoint-sm: 640px;   /* 手机横屏 */
--breakpoint-md: 768px;   /* 平板 */
--breakpoint-lg: 1024px;  /* 小桌面 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大桌面 */
```

### 响应式字号
| 层级 | 桌面 | 平板 | 手机 |
|------|------|------|------|
| Hero | 56px | 48px | 36px |
| H1 | 48px | 40px | 32px |
| H2 | 36px | 30px | 26px |
| Body | 16px | 16px | 15px |

---

## 10. 页面模板

### 10.1 Hero 区域
```html
<section class="hero">
  <div class="container">
    <span class="overline">新产品发布</span>
    <h1>构建下一代<br/>智能解决方案</h1>
    <p class="subtitle">我们提供领先的技术平台，帮助企业实现数字化转型</p>
    <div class="cta-group">
      <button class="btn-primary">开始使用</button>
      <button class="btn-secondary">了解更多</button>
    </div>
  </div>
</section>

<style>
.hero {
  padding: 160px 0 120px;
  background: linear-gradient(135deg, var(--brand-50) 0%, var(--white) 50%, var(--brand-50) 100%);
  text-align: center;
}

.hero .overline {
  display: inline-block;
  color: var(--brand-primary);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.hero h1 {
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
}

.hero .subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--space-8);
  line-height: 1.6;
}

.hero .cta-group {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}
</style>
```

### 10.2 特性卡片网格
```html
<section class="features">
  <div class="container">
    <h2>核心功能</h2>
    <div class="grid">
      <div class="feature-card">
        <div class="icon">⚡</div>
        <h3>极速性能</h3>
        <p>毫秒级响应，流畅体验</p>
      </div>
      <!-- 更多卡片... -->
    </div>
  </div>
</section>

<style>
.features {
  padding: 120px 0;
  background: var(--gray-50);
}

.features h2 {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: var(--space-12);
  color: var(--text-primary);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.feature-card {
  background: var(--white);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  border: 1px solid var(--gray-200);
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--brand-200);
}

.feature-card .icon {
  width: 64px;
  height: 64px;
  background: var(--brand-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto var(--space-6);
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 16px;
}
</style>
```

---

## 11. 深色模式适配

### 11.1 CSS Variables 切换
```css
:root {
  /* 默认浅色模式 */
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-50);
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-600);
  --border-color: var(--gray-200);
}

[data-theme="dark"] {
  --bg-primary: var(--dark-50);
  --bg-secondary: var(--dark-100);
  --text-primary: var(--dark-900);
  --text-secondary: var(--dark-600);
  --border-color: var(--dark-200);
}
```

### 11.2 深色模式组件变化
```css
/* 卡片深色模式 */
[data-theme="dark"] .card {
  background: var(--dark-100);
  border-color: var(--dark-200);
}

/* 按钮深色模式 */
[data-theme="dark"] .btn-secondary {
  border-color: var(--brand-400);
  color: var(--brand-400);
}

/* 输入框深色模式 */
[data-theme="dark"] .input {
  background: var(--dark-100);
  border-color: var(--dark-200);
  color: var(--dark-900);
}
```

---

## 12. 设计检查清单

### 12.1 色彩检查
- [ ] 主品牌色在所有页面一致使用
- [ ] 功能色（成功/警告/错误）符合预期
- [ ] 文字对比度符合 WCAG AA 标准
- [ ] 深色模式所有颜色正确反转

### 12.2 排版检查
- [ ] 标题层级清晰（H1-H6 不跳级）
- [ ] 正文字号不小于 16px
- [ ] 行高适中（1.5-1.75）
- [ ] 字间距适当（中文加宽 0.05em）

### 12.3 组件检查
- [ ] 按钮三种状态（Default/Hover/Active）
- [ ] 输入框四种状态（Default/Hover/Focus/Error）
- [ ] 卡片 Hover 动效一致
- [ ] 所有交互元素有焦点样式

### 12.4 响应式检查
- [ ] 移动端 Hero 字号适当缩小
- [ ] 卡片网格自适应（3→2→1 列）
- [ ] 导航栏移动端变为汉堡菜单
- [ ] 触摸目标不小于 44x44px

---

## 13. 参考资源

### 灵感网站
- [Vercel](https://vercel.com) - 科技现代风格标杆
- [Linear](https://linear.app) - 简约专业设计
- [Notion](https://notion.so) - 清晰信息架构
- [Raycast](https://raycast.com) - 精致动效
- [Linear Design](https://linear.app/design) - 设计系统公开

### 工具推荐
- **设计**: Figma + Auto Layout
- **字体**: Inter (Google Fonts)
- **图标**: Lucide Icons
- **代码**: Tailwind CSS

---

> 📌 **使用说明**
> 1. 复制需要的 CSS 变量到项目
> 2. 根据实际品牌色调整 `--brand-*` 值
> 3. 使用提供的组件代码作为起点
> 4. 确保实现深色模式切换功能
> 5. 遵循响应式断点进行适配

---

*Generated by ui-ux-pro-max skill | 科技企业官网设计系统*
