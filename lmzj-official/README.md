# 官网脚手架

基于 TDesign Vue3 + Vite 的官网项目脚手架。

## 技术栈

- Vue 3 + TypeScript
- TDesign Vue Next
- Vite 6
- Less

## 项目结构

```
src/
├── assets/              # 静态资源
├── layouts/
│   └── website.vue      # 官网布局（导航 + 页脚）
├── pages/website/       # 页面目录
│   ├── home/            # 首页
│   ├── product/         # 产品中心
│   ├── solution/        # 解决方案
│   ├── about/           # 关于我们
│   └── contact/         # 联系我们
├── router/
│   └── index.ts         # 路由配置
├── style/
│   ├── theme.css        # 主题变量（腾讯云蓝）
│   └── index.less       # 全局样式
├── App.vue              # 根组件
└── main.ts              # 入口文件
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3002

## 页面路由

| 路径 | 页面 |
|-----|------|
| `/` | 首页 |
| `/home` | 首页 |
| `/product` | 产品中心 |
| `/solution` | 解决方案 |
| `/about` | 关于我们 |
| `/contact` | 联系我们 |

## 主题配置

编辑 `src/style/theme.css` 修改主题色。

默认品牌色: `#0066FF` (腾讯云蓝)

## 开发建议

1. **修改导航**: 编辑 `src/layouts/website.vue`
2. **添加页面**: 在 `src/pages/website/` 创建文件夹，并在 `src/router/index.ts` 添加路由
3. **调整样式**: 修改 `src/style/theme.css` 中的 CSS 变量

## 构建

```bash
# 开发构建
npm run build:test

# 生产构建
npm run build
```

## 浏览器兼容

- Edge >= 84
- Firefox >= 83
- Chrome >= 84
- Safari >= 14.1
