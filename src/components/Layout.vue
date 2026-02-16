<template>
  <div class="layout">
    <!-- 导航栏 -->
    <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container navbar-container">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
              <path d="M10 16L14 20L22 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stop-color="#2563EB"/>
                  <stop offset="100%" stop-color="#3B82F6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">TechCorp</span>
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
            联系我们
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
          联系我们
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
              <div class="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)"/>
                  <path d="M10 16L14 20L22 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                      <stop offset="0%" stop-color="#2563EB"/>
                      <stop offset="100%" stop-color="#3B82F6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="logo-text">TechCorp</span>
            </div>
            <p class="footer-desc">
              致力于为企业提供领先的数字化解决方案，助力业务创新与增长。
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            <router-link to="/blog">博客</router-link>
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
          <p>&copy; {{ currentYear }} TechCorp. All rights reserved.</p>
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
  { name: '产品', path: '/product' },
  { name: '定价', path: '/pricing' },
  { name: '关于', path: '/about' },
  { name: '博客', path: '/blog' },
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

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 24px;
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
