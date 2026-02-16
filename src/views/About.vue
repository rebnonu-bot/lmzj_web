<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline">关于我们</span>
          <h1 class="heading-hero">让物业管理更简单<br/>让业主生活更便捷</h1>
          <p class="hero-subtitle">
            赣州邻檬智能科技有限公司，专注于智慧社区管理软件开发，
            为物业公司、业委会量身打造智慧社区运营管理体系
          </p>
        </div>
      </div>
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
      </div>
    </section>

    <!-- Company Intro -->
    <section class="company-intro section-padding">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content">
            <h2 class="heading-section">公司简介</h2>
            <p class="intro-text">
              赣州邻檬智能科技有限公司是一家专注于智慧社区管理系统开发的科技公司。我们致力于通过技术创新，帮助物业管理企业实现数字化转型，提升管理效率和服务质量。
            </p>
            <p class="intro-text">
              我们的产品覆盖小区日常管理的全部场景，包括收费管理、业主服务、智能出入、电子投票、业委会管理等多个模块，真正做到"让物业管理更简单，让业主生活更便捷"。
            </p>
            <p class="intro-text">
              作为微信生态智慧社区小程序开发的领跑者，我们是企业微信官方服务商，与专业律师团队合作，确保产品合规合法，为物业公司、业委会提供安全、可靠、高效的信息化解决方案。
            </p>
          </div>
          <div class="intro-stats">
            <div class="stat-card">
              <span class="stat-number">10,000+</span>
              <span class="stat-label">服务小区</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">500万+</span>
              <span class="stat-label">覆盖业主</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <span class="stat-label">城市覆盖</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">99.9%</span>
              <span class="stat-label">系统稳定性</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages -->
    <section class="advantages-section section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">核心优势</span>
          <h2 class="heading-section">为什么选择邻檬智能</h2>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="(item, index) in advantages" :key="index">
            <div class="advantage-icon" :style="{ background: item.gradient }">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path v-if="item.icon === 'team'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle v-if="item.icon === 'team'" cx="9" cy="7" r="4"/>
                <path v-if="item.icon === 'team'" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                <path v-if="item.icon === 'tech'" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                <path v-if="item.icon === 'service'" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline v-if="item.icon === 'service'" points="22 4 12 14.01 9 11.01"/>
                <rect v-if="item.icon === 'security'" x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path v-if="item.icon === 'security'" d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3 class="heading-card">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="timeline-section section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">发展历程</span>
          <h2 class="heading-section">我们的成长之路</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in milestones" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-year">{{ item.year }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners-section section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">合作伙伴</span>
          <h2 class="heading-section">受到众多企业信赖</h2>
        </div>
        <div class="partners-grid">
          <div class="partner-card" v-for="(partner, index) in partners" :key="index">
            <div class="partner-logo">{{ partner.name.charAt(0) }}</div>
            <span class="partner-name">{{ partner.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">企业文化</span>
          <h2 class="heading-section">我们的价值观</h2>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <span class="value-number">0{{ index + 1 }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="heading-section">准备好开启智慧社区管理了吗？</h2>
            <p class="cta-desc">立即免费试用，体验全新的物业管理方式</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="btn btn-primary btn-large">
                免费试用
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
              <router-link to="/contact" class="btn btn-ghost btn-large">
                联系我们
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const advantages = [
  {
    icon: 'team',
    title: '专业团队',
    description: '核心团队拥有10年以上智慧社区行业经验，与专业律师团队合作，确保产品合规合法',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
  },
  {
    icon: 'tech',
    title: '技术领先',
    description: '基于微信生态深度开发，企业微信官方服务商，AI人脸识别等前沿技术应用',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
  },
  {
    icon: 'service',
    title: '服务完善',
    description: '0门槛部署，即注册即用，一对一客户成功服务，平均每月上新2个功能',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
  },
  {
    icon: 'security',
    title: '安全可靠',
    description: '资金直达物业账户，数据加密存储，隐私保护符合国家标准，系统稳定性99.9%',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
  }
];

const milestones = [
  {
    year: '2018',
    title: '公司成立',
    description: '赣州邻檬智能科技有限公司正式成立，专注于智慧社区管理软件开发'
  },
  {
    year: '2019',
    title: '产品上线',
    description: '首款产品正式上线，获得首批种子客户认可，服务小区突破100个'
  },
  {
    year: '2020',
    title: '功能升级',
    description: '推出电子投票、业委会管理等功能，成为微信生态智慧社区小程序领跑者'
  },
  {
    year: '2021',
    title: '企业微信合作',
    description: '成为企业微信官方服务商，推出企业微信深度集成版本'
  },
  {
    year: '2022',
    title: '规模突破',
    description: '服务小区突破5000个，覆盖业主超过200万，业务覆盖全国30+城市'
  },
  {
    year: '2023',
    title: '技术革新',
    description: '引入AI人脸识别技术，推出智能硬件对接方案，服务小区突破10000个'
  },
  {
    year: '2024',
    title: '持续创新',
    description: '持续优化产品体验，服务业主超过500万，成为行业领先的智慧社区解决方案提供商'
  }
];

const partners = [
  { name: '万科物业' },
  { name: '碧桂园服务' },
  { name: '保利物业' },
  { name: '绿城服务' },
  { name: '龙湖智创生活' },
  { name: '中海物业' },
  { name: '金地智慧服务' },
  { name: '华润万象生活' }
];

const values = [
  {
    title: '客户第一',
    description: '始终以客户需求为中心，为客户创造价值是我们的首要目标'
  },
  {
    title: '技术创新',
    description: '持续投入研发，用技术创新推动物业管理行业数字化转型'
  },
  {
    title: '诚信正直',
    description: '坚守商业道德，言行一致，建立长期信任关系'
  },
  {
    title: '合作共赢',
    description: '与合作伙伴共同成长，构建智慧社区生态体系'
  }
];
</script>

<style scoped>
/* About Hero */
.about-hero {
  position: relative;
  padding: 140px 0 80px;
  background: var(--bg-secondary);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  margin-top: var(--space-6);
  line-height: 1.7;
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
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--brand-300) 0%, transparent 70%);
  top: -200px;
  left: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--green-300) 0%, transparent 70%);
  bottom: -100px;
  right: -100px;
}

[data-theme="dark"] .gradient-orb {
  opacity: 0.15;
}

/* Section Padding */
.section-padding {
  padding: 100px 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 60px 0;
  }
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-12);
}

/* Company Intro */
.company-intro {
  background: var(--bg-primary);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

.intro-content h2 {
  margin-bottom: var(--space-6);
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.stat-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--border-color);
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--brand-primary);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: 14px;
  color: var(--text-tertiary);
}

/* Advantages Section */
.advantages-section {
  background: var(--bg-secondary);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}

.advantage-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all var(--duration-normal);
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.advantage-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.advantage-card h3 {
  margin-bottom: var(--space-3);
}

.advantage-card p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Timeline Section */
.timeline-section {
  background: var(--bg-primary);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
}

.timeline-item {
  position: relative;
  padding: var(--space-6) 0;
  display: flex;
  justify-content: flex-end;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .timeline-item,
  .timeline-item:nth-child(even) {
    justify-content: flex-start;
    padding-left: 60px;
  }
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: var(--brand-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 3px var(--brand-200);
}

@media (max-width: 768px) {
  .timeline-dot {
    left: 20px;
  }
}

.timeline-content {
  width: 45%;
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .timeline-content {
    width: 100%;
  }
}

.timeline-year {
  display: inline-block;
  background: var(--brand-100);
  color: var(--brand-700);
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

[data-theme="dark"] .timeline-year {
  background: var(--brand-900);
  color: var(--brand-300);
}

.timeline-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.timeline-content p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Partners Section */
.partners-section {
  background: var(--bg-secondary);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}

.partner-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  transition: all var(--duration-normal);
}

.partner-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--brand-200);
}

.partner-logo {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-name {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
}

/* Values Section */
.values-section {
  background: var(--bg-primary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

.value-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.value-number {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: 64px;
  font-weight: 700;
  color: var(--brand-100);
  line-height: 1;
  z-index: 0;
}

[data-theme="dark"] .value-number {
  color: var(--brand-900);
  opacity: 0.5;
}

.value-card h3 {
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  margin-top: var(--space-4);
}

.value-card p {
  position: relative;
  z-index: 1;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.cta-card {
  background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-16);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-12);
  align-items: center;
}

[data-theme="dark"] .cta-card {
  background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
}

@media (max-width: 768px) {
  .cta-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-10);
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

.cta-card .btn-primary {
  background: white;
  color: var(--brand-primary);
}

.cta-card .btn-primary:hover {
  background: var(--gray-100);
}

.cta-card .btn-ghost {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-card .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
