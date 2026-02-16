<template>
  <div class="layout">
    <!-- 导航栏 -->
    <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container navbar-container">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="https://www.gzlmzj.com/static/cweb2x_logo.png" alt="邻檬智能" class="logo-img" />
          <span class="logo-text">邻檬智能</span>
        </router-link>

        <!-- 桌面导航 -->
        <nav class="nav-desktop hide-mobile">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- 右侧操作区 -->
        <div class="nav-actions">
          <!-- 主题切换 -->
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
            <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <!-- CTA 按钮 -->
          <router-link to="/contact" class="btn btn-primary hide-mobile">
            免费试用
          </router-link>

          <!-- 移动端菜单按钮 -->
          <button class="menu-toggle hide-desktop" @click="isMenuOpen = !isMenuOpen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path v-if="!isMenuOpen" d="M3 12h18M3 6h18M3 18h18"/>
              <path v-else d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div class="mobile-menu hide-desktop" :class="{ open: isMenuOpen }">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link mobile-link"
          :class="{ active: $route.path === item.path }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        <router-link to="/contact" class="btn btn-primary mobile-cta" @click="isMenuOpen = false">
          免费试用
        </router-link>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- 公司信息 -->
          <div class="footer-brand">
            <div class="logo">
              <img src="https://www.gzlmzj.com/static/cweb2x_logo.png" alt="邻檬智能" class="logo-img" />
              <span class="logo-text">邻檬智能</span>
            </div>
            <p class="footer-desc">
              赣州邻檬智能科技有限公司，专注于智慧社区管理软件开发，为物业公司、业委会量身打造智慧社区运营管理体系。
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="微信">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="微博">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- 链接列表 -->
          <div class="footer-links">
            <h4>产品</h4>
            <router-link to="/product">功能特性</router-link>
            <router-link to="/pricing">定价方案</router-link>
            <a href="#">更新日志</a>
            <a href="#">API 文档</a>
          </div>

          <div class="footer-links">
            <h4>公司</h4>
            <router-link to="/about">关于我们</router-link>
            <router-link to="/blog">新闻动态</router-link>
            <a href="#">加入我们</a>
            <router-link to="/contact">联系我们</router-link>
          </div>

          <div class="footer-links">
            <h4>支持</h4>
            <a href="#">帮助中心</a>
            <a href="#">服务状态</a>
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} 赣州邻檬智能科技有限公司 版权所有 | 赣ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const isDark = ref(false);
const currentYear = new Date().getFullYear();

const menuItems = [
  { name: '首页', path: '/' },
  { name: '产品功能', path: '/product' },
  { name: '定价方案', path: '/pricing' },
  { name: '客户案例', path: '/about' },
  { name: '关于我们', path: '/about' },
  { name: '联系我们', path: '/contact' },
];

// 滚动监听
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// 主题切换
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
};

// 初始化主题
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all var(--duration-normal);
}

[data-theme="dark"] .navbar {
  background: rgba(15, 23, 42, 0.8);
}

.navbar-scrolled {
  box-shadow: var(--shadow-md);
}

.navbar-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* 桌面导航 */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* 导航操作区 */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-normal);
}

.theme-toggle:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.menu-toggle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  border: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 移动端菜单 */
.mobile-menu {
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal);
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-link {
  padding: var(--space-3) var(--space-4);
  font-size: 18px;
}

.mobile-cta {
  margin-top: var(--space-4);
  text-align: center;
}

/* 主内容区 */
.main-content {
  flex: 1;
  padding-top: 72px;
}

/* 页脚 */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: var(--space-16) 0 var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.footer-brand .logo {
  margin-bottom: var(--space-4);
}

.footer-desc {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: var(--space-6);
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-normal);
}

.social-link:hover {
  background: var(--brand-primary);
  color: white;
  transform: translateY(-2px);
}

.footer-links h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
}

.footer-links a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-2) 0;
  transition: color var(--duration-fast);
}

.footer-links a:hover {
  color: var(--brand-primary);
}

.footer-bottom {
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-bottom p {
  color: var(--text-tertiary);
  font-size: 14px;
}
</style>
