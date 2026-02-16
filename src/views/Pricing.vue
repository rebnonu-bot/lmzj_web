<template>
  <div class="pricing">
    <!-- Hero Section -->
    <section class="pricing-hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline">定价方案</span>
          <h1 class="heading-hero">简单透明的定价</h1>
          <p class="hero-subtitle">
            选择适合您的方案，随时可以升级或降级，无隐藏费用
          </p>
          
          <!-- Billing Toggle -->
          <div class="billing-toggle">
            <span :class="{ active: !isYearly }">月付</span>
            <button class="toggle-btn" :class="{ yearly: isYearly }" @click="isYearly = !isYearly">
              <span class="toggle-thumb"></span>
            </button>
            <span :class="{ active: isYearly }">
              年付
              <span class="save-badge">省17%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-cards section-padding">
      <div class="container">
        <div class="cards-grid">
          <!-- 基础版 -->
          <div class="pricing-card">
            <div class="card-header">
              <h3 class="card-name">基础版</h3>
              <p class="card-desc">适合小型物业项目</p>
              <div class="card-price">
                <span class="currency">¥</span>
                <span class="amount">{{ isYearly ? '999' : '99' }}</span>
                <span class="period">/{{ isYearly ? '年' : '月' }}</span>
              </div>
              <p class="card-note">500户以内</p>
            </div>
            <div class="card-features">
              <div class="feature-item" v-for="(feature, index) in basicFeatures" :key="index">
                <svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="card-action">
              <router-link to="/contact" class="btn btn-secondary btn-large btn-full">
                开始使用
              </router-link>
            </div>
          </div>

          <!-- 专业版 -->
          <div class="pricing-card popular">
            <div class="popular-badge">最受欢迎</div>
            <div class="card-header">
              <h3 class="card-name">专业版</h3>
              <p class="card-desc">适合中大型物业项目</p>
              <div class="card-price">
                <span class="currency">¥</span>
                <span class="amount">{{ isYearly ? '2999' : '299' }}</span>
                <span class="period">/{{ isYearly ? '年' : '月' }}</span>
              </div>
              <p class="card-note">不限户数</p>
            </div>
            <div class="card-features">
              <div class="feature-item" v-for="(feature, index) in proFeatures" :key="index">
                <svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="card-action">
              <router-link to="/contact" class="btn btn-primary btn-large btn-full">
                立即升级
              </router-link>
            </div>
          </div>

          <!-- 企业版 -->
          <div class="pricing-card">
            <div class="card-header">
              <h3 class="card-name">企业版</h3>
              <p class="card-desc">适合大型物业集团</p>
              <div class="card-price">
                <span class="amount">定制</span>
              </div>
              <p class="card-note">根据需求报价</p>
            </div>
            <div class="card-features">
              <div class="feature-item" v-for="(feature, index) in enterpriseFeatures" :key="index">
                <svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="card-action">
              <router-link to="/contact" class="btn btn-secondary btn-large btn-full">
                联系销售
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="addons-section">
      <div class="container">
        <h2 class="section-title">增值服务</h2>
        <div class="addons-grid">
          <div class="addon-card" v-for="(addon, index) in addons" :key="index">
            <div class="addon-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="addon.icon === 'sms'" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                <path v-if="addon.icon === 'hardware'" d="M3 3h18v18H3zM12 8v8M8 12h8"/>
                <path v-if="addon.icon === 'dev'" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                <path v-if="addon.icon === 'train'" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5h-2V7h2z"/>
              </svg>
            </div>
            <h3>{{ addon.title }}</h3>
            <p>{{ addon.desc }}</p>
            <span class="addon-price">{{ addon.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="comparison-section section-padding">
      <div class="container">
        <h2 class="section-title">功能对比</h2>
        <div class="comparison-table">
          <div class="table-header">
            <div class="header-cell feature-name">功能特性</div>
            <div class="header-cell plan-name">基础版</div>
            <div class="header-cell plan-name popular">专业版</div>
            <div class="header-cell plan-name">企业版</div>
          </div>
          <div class="table-body">
            <div class="table-row" v-for="(row, index) in comparisonRows" :key="index" :class="{ category: row.isCategory }">
              <div class="table-cell feature-name">
                <span v-if="row.isCategory" class="category-label">{{ row.name }}</span>
                <span v-else>{{ row.name }}</span>
              </div>
              <div class="table-cell plan-value">
                <svg v-if="row.basic === true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <svg v-else-if="row.basic === false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cross-icon">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span v-else>{{ row.basic }}</span>
              </div>
              <div class="table-cell plan-value popular">
                <svg v-if="row.pro === true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <svg v-else-if="row.pro === false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cross-icon">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span v-else>{{ row.pro }}</span>
              </div>
              <div class="table-cell plan-value">
                <svg v-if="row.enterprise === true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <svg v-else-if="row.enterprise === false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cross-icon">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span v-else>{{ row.enterprise }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">常见问题</h2>
        <div class="faq-grid">
          <div class="faq-item" v-for="(item, index) in faqs" :key="index">
            <h3>{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>还有疑问？</h2>
          <p>我们的专业团队随时为您解答，帮助您选择最适合的方案</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            联系我们
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isYearly = ref(false);

const basicFeatures = [
  '收费管理基础功能',
  '业主数据管理（500户）',
  '基础客服功能',
  '小区公告发布',
  '基础报表统计',
  '邮件技术支持',
  '手机助手基础版'
];

const proFeatures = [
  '全部基础版功能',
  '无限业主数量',
  '高级工单系统',
  '智能出入管理',
  '电子投票表决',
  '业委会管理模块',
  '企业微信深度集成',
  'API接口访问',
  '优先技术支持',
  '专属客户成功经理'
];

const enterpriseFeatures = [
  '全部专业版功能',
  '私有化部署',
  '定制化开发',
  '专属技术架构师',
  'SLA服务等级协议',
  '现场培训支持',
  '数据迁移服务',
  '独立服务器资源',
  '7×24小时专属客服'
];

const addons = [
  {
    icon: 'sms',
    title: '短信包',
    desc: '用于缴费通知、验证码等场景',
    price: '¥0.05/条'
  },
  {
    icon: 'hardware',
    title: '硬件设备',
    desc: '门禁机、道闸、摄像头等',
    price: '按设备报价'
  },
  {
    icon: 'dev',
    title: '定制开发',
    desc: '根据需求定制专属功能',
    price: '按需求报价'
  },
  {
    icon: 'train',
    title: '培训服务',
    desc: '上门培训，手把手教学',
    price: '¥2000/天'
  }
];

const comparisonRows = [
  { name: '基础功能', isCategory: true },
  { name: '收费管理', basic: true, pro: true, enterprise: true },
  { name: '业主数据管理', basic: '500户', pro: '无限', enterprise: '无限' },
  { name: '工单系统', basic: '基础版', pro: '高级版', enterprise: '高级版' },
  { name: '小区公告', basic: true, pro: true, enterprise: true },
  { name: '报表统计', basic: '基础报表', pro: '高级报表', enterprise: '自定义报表' },
  { name: '智能化功能', isCategory: true },
  { name: '智能门禁', basic: false, pro: true, enterprise: true },
  { name: '车牌识别', basic: false, pro: true, enterprise: true },
  { name: '人脸识别', basic: false, pro: true, enterprise: true },
  { name: '电子投票', basic: false, pro: true, enterprise: true },
  { name: '业委会管理', basic: false, pro: true, enterprise: true },
  { name: '集成与扩展', isCategory: true },
  { name: '企业微信集成', basic: '基础', pro: '深度集成', enterprise: '深度集成' },
  { name: 'API接口', basic: false, pro: true, enterprise: true },
  { name: '私有化部署', basic: false, pro: false, enterprise: true },
  { name: '定制开发', basic: false, pro: false, enterprise: true },
  { name: '服务支持', isCategory: true },
  { name: '技术支持', basic: '邮件', pro: '优先响应', enterprise: '7×24小时' },
  { name: '客户成功经理', basic: false, pro: true, enterprise: '专属' },
  { name: '培训服务', basic: '在线文档', pro: '视频培训', enterprise: '上门培训' }
];

const faqs = [
  {
    question: '可以免费试用吗？',
    answer: '可以！我们提供14天免费试用，无需绑定信用卡，试用期内可体验专业版全部功能。'
  },
  {
    question: '如何计算户数？',
    answer: '户数指系统中录入的房产数量，一套房为一户，商铺、车位不单独计算户数。'
  },
  {
    question: '可以随时升级或降级吗？',
    answer: '随时可以。升级后立即生效，按比例计算差价；降级在当前计费周期结束后生效。'
  },
  {
    question: '数据安全如何保障？',
    answer: '我们采用银行级数据加密，多重备份机制，数据存储在国内合规云服务器，确保数据安全。'
  },
  {
    question: '是否支持数据迁移？',
    answer: '支持。我们提供专业的数据迁移服务，帮助您从现有系统平滑迁移至邻檬智能平台。'
  },
  {
    question: '企业版如何定价？',
    answer: '企业版根据您的具体需求（户数、功能模块、部署方式等）定制报价，请联系我们的销售团队获取方案。'
  }
];
</script>

<style scoped>
/* Pricing Hero */
.pricing-hero {
  position: relative;
  padding: 140px 0 60px;
  background: var(--bg-secondary);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

/* Billing Toggle */
.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.billing-toggle span {
  font-size: 16px;
  color: var(--text-secondary);
  font-weight: 500;
}

.billing-toggle span.active {
  color: var(--text-primary);
}

.save-badge {
  display: inline-block;
  background: var(--green-100);
  color: var(--green-700);
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  margin-left: var(--space-2);
}

.toggle-btn {
  width: 56px;
  height: 28px;
  border-radius: var(--radius-full);
  background: var(--gray-300);
  border: none;
  padding: 2px;
  cursor: pointer;
  position: relative;
  transition: background var(--duration-normal);
}

.toggle-btn.yearly {
  background: var(--brand-primary);
}

.toggle-thumb {
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: transform var(--duration-normal);
}

.toggle-btn.yearly .toggle-thumb {
  transform: translateX(28px);
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
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--brand-300) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--green-300) 0%, transparent 70%);
  bottom: -50px;
  left: -50px;
}

[data-theme="dark"] .gradient-orb {
  opacity: 0.15;
}

/* Section Padding */
.section-padding {
  padding: 80px 0;
}

/* Pricing Cards */
.pricing-cards {
  background: var(--bg-secondary);
  padding-bottom: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  align-items: start;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

.pricing-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
  position: relative;
  transition: all var(--duration-normal);
}

.pricing-card:hover {
  box-shadow: var(--shadow-lg);
}

.pricing-card.popular {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 2px var(--brand-primary);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--brand-primary);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: var(--radius-full);
}

.card-header {
  text-align: center;
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--space-6);
}

.card-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.card-desc {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-bottom: var(--space-6);
}

.card-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.card-price .currency {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.card-price .amount {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.card-price .period {
  font-size: 16px;
  color: var(--text-tertiary);
}

.card-note {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-top: var(--space-2);
}

.card-features {
  margin-bottom: var(--space-8);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  font-size: 15px;
  color: var(--text-secondary);
}

.feature-item .check {
  color: var(--green-500);
  flex-shrink: 0;
}

.card-action .btn-full {
  width: 100%;
  text-align: center;
}

/* Add-ons */
.addons-section {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--space-10);
  color: var(--text-primary);
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .addons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .addons-grid {
    grid-template-columns: 1fr;
  }
}

.addon-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  border: 1px solid var(--border-color);
}

.addon-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--brand-50);
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

[data-theme="dark"] .addon-icon {
  background: var(--brand-900);
}

.addon-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.addon-card p {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-bottom: var(--space-4);
}

.addon-price {
  font-size: 16px;
  font-weight: 600;
  color: var(--brand-primary);
}

/* Comparison Table */
.comparison-section {
  background: var(--bg-primary);
}

.comparison-table {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.header-cell {
  padding: var(--space-4) var(--space-6);
  font-weight: 600;
  font-size: 14px;
  color: var(--text-primary);
}

.header-cell.feature-name {
  text-align: left;
}

.header-cell.plan-name {
  text-align: center;
}

.header-cell.plan-name.popular {
  background: var(--brand-50);
  color: var(--brand-primary);
}

[data-theme="dark"] .header-cell.plan-name.popular {
  background: var(--brand-900);
}

.table-body {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border-color);
}

.table-row:last-child {
  border-bottom: none;
}

.table-row.category {
  background: var(--bg-tertiary);
}

.table-cell {
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.table-cell.feature-name {
  justify-content: flex-start;
}

.category-label {
  font-weight: 600;
  color: var(--text-primary);
}

.table-cell.plan-value.popular {
  background: var(--brand-50);
}

[data-theme="dark"] .table-cell.plan-value.popular {
  background: var(--brand-900);
}

.check-icon {
  color: var(--green-500);
}

.cross-icon {
  color: var(--gray-400);
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

.faq-item {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--border-color);
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.faq-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 0 0 100px;
  background: var(--bg-secondary);
}

.cta-card {
  background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  text-align: center;
}

[data-theme="dark"] .cta-card {
  background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
}

.cta-card h2 {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: var(--space-4);
}

.cta-card p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-8);
}

.cta-card .btn-primary {
  background: white;
  color: var(--brand-primary);
}

.cta-card .btn-primary:hover {
  background: var(--gray-100);
}
</style>
