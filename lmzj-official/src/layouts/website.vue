<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="container">
        <div class="logo" @click="$router.push('/home')">LOGO</div>
        <nav class="nav">
          <router-link
            v-for="item in menuList"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="[{ active: $route.path === item.path }]"
          >
            {{ item.title }}
          </router-link>
        </nav>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="main">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
const menuList = [
  { title: '首页', path: '/home' },
  { title: '产品', path: '/product' },
  { title: '解决方案', path: '/solution' },
  { title: '关于我们', path: '/about' },
  { title: '联系我们', path: '/contact' },
];
</script>
<style lang="less" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--td-brand-color, #06f);
  cursor: pointer;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 32px;
}

.nav-link {
  font-size: 14px;
  color: #595959;
  text-decoration: none;

  &:hover,
  &.active {
    color: var(--td-brand-color, #06f);
  }
}

.main {
  flex: 1;
  padding-top: 64px;
}

.footer {
  padding: 24px;
  background: #141414;
  color: rgb(255 255 255 / 65%);
  text-align: center;

  p {
    margin: 0;
    font-size: 14px;
  }
}
</style>
