# LMZJ 官网项目

企业官网项目，基于 TDesign Vue3 + Vite 构建。

## 🚀 快速开始

### 环境要求
- Node.js >= 18.18.0
- npm >= 9.x

### 安装依赖
```bash
cd lmzj-official
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3002

---

## 📂 项目结构

```
lmzj-official/
├── src/
│   ├── assets/              # 静态资源
│   ├── layouts/
│   │   └── website.vue      # 官网布局（导航 + 页脚）
│   ├── pages/website/       # 页面目录
│   │   ├── home/            # 首页
│   │   ├── product/         # 产品中心
│   │   ├── solution/        # 解决方案
│   │   ├── about/           # 关于我们
│   │   └── contact/         # 联系我们
│   ├── router/
│   │   └── index.ts         # 路由配置
│   ├── style/
│   │   ├── theme.css        # 主题变量（腾讯云蓝 #0066FF）
│   │   └── index.less       # 全局样式
│   ├── App.vue              # 根组件
│   └── main.ts              # 入口文件
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|-----|------|------|
| Vue | 3.5+ | 前端框架 |
| TypeScript | 5.4+ | 类型系统 |
| TDesign | 1.18+ | UI 组件库 |
| Vite | 6.x | 构建工具 |
| Less | 4.x | CSS 预处理器 |

---

## 🌐 页面路由

| 路径 | 页面 | 说明 |
|-----|------|------|
| `/` | 首页 | 自动重定向到 /home |
| `/home` | 首页 | 官网首页 |
| `/product` | 产品中心 | 产品展示页面 |
| `/solution` | 解决方案 | 解决方案介绍 |
| `/about` | 关于我们 | 公司介绍 |
| `/contact` | 联系我们 | 联系表单 |

---

## 🎨 主题配置

编辑 `src/style/theme.css` 修改主题色。

默认品牌色：**腾讯云蓝** `#0066FF`

```css
:root {
  --td-brand-color: #0066FF;
  --td-brand-color-hover: #0052CC;
  --td-brand-color-light: #3385FF;
}
```

---

## 📦 构建部署

### 开发环境
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 预览构建结果
```bash
npm run build
npm run preview
```

---

## 💡 开发指南

### 1. 修改导航栏
编辑 `src/layouts/website.vue`

### 2. 添加新页面
1. 在 `src/pages/website/` 创建文件夹
2. 创建 `index.vue` 文件
3. 在 `src/router/index.ts` 添加路由

### 3. 调整主题色
编辑 `src/style/theme.css`

---

## 🔧 常见问题

### 安装依赖失败
```bash
npm cache clean --force
npm install
```

### 端口被占用
修改 `vite.config.ts` 中的 `server.port`

---

## 📝 提交规范

```bash
git add -A
git commit -m "feat: 描述"
git push origin develop
```

---

## 📄 相关文档

- [TDesign Vue3](https://tdesign.tencent.com/vue-next/)
- [Vite](https://vitejs.dev/)
- [Vue3](https://vuejs.org/)

---

## License

MIT
