<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline animate-fadeIn" style="animation-delay: 0.1s;">
            🚀 全新版本 2.0 发布
          </span>
          <h1 class="heading-hero animate-fadeIn" style="animation-delay: 0.2s;">
            构建下一代<br/>
            <span class="gradient-text">智能解决方案</span>
          </h1>
          <p class="hero-subtitle animate-fadeIn" style="animation-delay: 0.3s;">
            我们提供领先的技术平台，帮助企业实现数字化转型，
            <br class="hide-mobile"/>
            提升效率，创造更大商业价值。
          </p>
          <div class="hero-cta animate-fadeIn" style="animation-delay: 0.4s;">
            <router-link to="/product" class="btn btn-primary">
              开始使用
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link to="/about" class="btn btn-secondary">
              了解更多
            </router-link>
          </div>
          <div class="hero-stats animate-fadeIn" style="animation-delay: 0.5s;">
            <div class="stat-item">
              <span class="stat-number">10K+</span>
              <span class="stat-label">企业用户</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">99.9%</span>
              <span class="stat-label">服务可用性</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">技术支持</span>
            </div>
          </div>
        </div>
        <div class="hero-visual animate-fadeIn" style="animation-delay: 0.6s;">
          <div class="dashboard-preview">
            <div class="dashboard-header">
              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="window-title">Dashboard</div>
            </div>
            <div class="dashboard-content">
              <div class="chart-placeholder">
                <div class="chart-line"></div>
                <div class="chart-line"></div>
                <div class="chart-line"></div>
              </div>
              <div class="stats-row">
                <div class="mini-stat" v-for="i in 3" :key="i">
                  <div class="mini-stat-bar"></div>
                  <div class="mini-stat-label"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">核心功能</span>
          <h2 class="heading-section">为什么选择我们</h2>
          <p class="section-desc">
            我们提供全方位的技术解决方案，助力企业高效发展
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon" :style="{ background: feature.gradient }">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path v-if="feature.icon === 'zap'" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                <path v-if="feature.icon === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path v-if="feature.icon === 'globe'" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                <path v-if="feature.icon === 'cpu'" d="M4 4h16v16H4zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
                <path v-if="feature.icon === 'barChart'" d="M12 20V10M18 20V4M6 20v-4"/>
                <path v-if="feature.icon === 'layers'" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="heading-card">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
            <a href="#" class="feature-link">
              了解更多
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">工作流程</span>
          <h2 class="heading-section">简单三步，快速上手</h2>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="heading-card">{{ step.title }}</h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
            <div class="step-arrow" v-if="index < steps.length - 1">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">客户评价</span>
          <h2 class="heading-section">受到众多企业信赖</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(item, index) in testimonials" :key="index">
            <div class="testimonial-rating">
              <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p class="testimonial-text">"{{ item.content }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ item.name.charAt(0) }}</div>
              <div class="author-info">
                <span class="author-name">{{ item.name }}</span>
                <span class="author-title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="heading-section">准备好开始了吗？</h2>
            <p class="cta-desc">
              立即开始免费试用，体验全新的数字化解决方案
            </p>
            <div class="cta-buttons">
              <router-link to="/contact" class="btn btn-primary btn-large">
                免费试用
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
              <router-link to="/pricing" class="btn btn-ghost btn-large">
                查看定价
              </router-link>
            </div>
          </div>
          <div class="cta-decoration">
            <div class="cta-orb"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: 'zap',
    title: '极速性能',
    description: '毫秒级响应速度，优化的架构确保流畅体验，让您的业务永远快人一步。',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
  },
  {
    icon: 'shield',
    title: '安全可靠',
    description: '企业级安全防护，数据加密传输，多重备份机制，保障您的数据安全。',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
  },
  {
    icon: 'globe',
    title: '全球部署',
    description: '多地域数据中心，CDN 加速，确保全球用户都能获得最佳访问体验。',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
  },
  {
    icon: 'cpu',
    title: '智能算法',
    description: '基于人工智能的优化算法，自动分析数据，提供智能化的业务洞察。',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
  },
  {
    icon: 'barChart',
    title: '数据分析',
    description: '强大的数据可视化工具，实时监控业务指标，助力数据驱动决策。',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)'
  },
  {
    icon: 'layers',
    title: '灵活扩展',
    description: '模块化架构设计，支持按需扩展，轻松应对业务增长的挑战。',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)'
  }
];

const steps = [
  {
    title: '注册账号',
    description: '只需邮箱即可快速注册，无需绑定信用卡，即刻开始体验。'
  },
  {
    title: '配置服务',
    description: '根据您的业务需求，选择合适的服务套餐和功能模块。'
  },
  {
    title: '上线运营',
    description: '一键部署，快速上线，专业技术团队全程支持。'
  }
];

const testimonials = [
  {
    content: 'TechCorp 的解决方案帮助我们提升了 40% 的运营效率，强烈推荐给所有寻求数字化转型的企业。',
    name: '张明',
    title: '某科技公司 CTO'
  },
  {
    content: '技术支持团队响应迅速，产品质量稳定可靠，是我们长期合作的首选伙伴。',
    name: '李雪',
    title: '某电商平台 产品总监'
  },
  {
    content: '从 POC 到正式上线只用了两周时间，敏捷高效，完全符合我们的预期。',
    name: '王强',
    title: '某金融机构 技术负责人'
  }
];
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  padding: 120px 0 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero .container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-visual {
    display: none;
  }
}

.hero-content {
  max-width: 600px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  margin: var(--space-6) 0 var(--space-8);
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

@media (max-width: 640px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

@media (max-width: 640px) {
  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  color: var(--text-tertiary);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

@media (max-width: 640px) {
  .stat-divider {
    display: none;
  }
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-preview {
  width: 100%;
  max-width: 520px;
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.dashboard-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.window-dots {
  display: flex;
  gap: 6px;
}

.window-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gray-300);
}

.window-dots span:nth-child(1) { background: #EF4444; }
.window-dots span:nth-child(2) { background: #F59E0B; }
.window-dots span:nth-child(3) { background: #10B981; }

.window-title {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

.dashboard-content {
  padding: var(--space-6);
}

.chart-placeholder {
  height: 160px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.chart-line {
  height: 8px;
  background: linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  border-radius: var(--radius-full);
}

.chart-line:nth-child(1) { width: 70%; }
.chart-line:nth-child(2) { width: 90%; }
.chart-line:nth-child(3) { width: 55%; }

.stats-row {
  display: flex;
  gap: var(--space-4);
}

.mini-stat {
  flex: 1;
  text-align: center;
}

.mini-stat-bar {
  height: 60px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2);
}

.mini-stat-label {
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  width: 60%;
  margin: 0 auto;
}

/* Hero Background */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--brand-300) 0%, transparent 70%);
  top: -200px;
  right: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--brand-200) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--brand-100) 0%, transparent 70%);
  top: 50%;
  left: 30%;
}

[data-theme="dark"] .gradient-orb {
  opacity: 0.15;
}

/* Section Padding */
.section-padding {
  padding: 120px 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 80px 0;
  }
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-16);
}

.section-desc {
  font-size: 18px;
  color: var(--text-secondary);
  margin-top: var(--space-4);
}

/* Features Section */
.features {
  background: var(--bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
  transition: all var(--duration-slow) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--brand-200);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
}

.feature-desc {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  margin: var(--space-3) 0 var(--space-4);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--brand-primary);
  font-weight: 500;
  text-decoration: none;
  transition: gap var(--duration-fast);
}

.feature-link:hover {
  gap: var(--space-3);
}

/* How It Works */
.steps-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.step-card {
  flex: 1;
  min-width: 280px;
  max-width: 320px;
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: var(--space-2);
}

.step-desc {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
}

.step-arrow {
  color: var(--brand-300);
  position: absolute;
  right: -40px;
  top: 8px;
}

@media (max-width: 1024px) {
  .step-arrow {
    display: none;
  }
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}

.testimonial-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
}

.testimonial-rating {
  display: flex;
  gap: 4px;
  margin-bottom: var(--space-4);
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-name {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
}

.author-title {
  font-size: 14px;
  color: var(--text-tertiary);
}

/* CTA Section */
.cta-section {
  padding: 0 0 120px;
}

.cta-card {
  background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-16);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-12);
  align-items: center;
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .cta-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-10);
  }
  
  .cta-decoration {
    display: none;
  }
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--space-4);
}

.cta-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

.cta-card .btn-primary {
  background: white;
  color: var(--brand-primary);
}

.cta-card .btn-primary:hover {
  background: var(--gray-100);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-card .btn-ghost {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-card .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.cta-decoration {
  position: relative;
  width: 200px;
  height: 200px;
}

.cta-orb {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
}
</style>
