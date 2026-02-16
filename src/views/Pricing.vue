<template>
  <div class="pricing-page">
    <!-- Hero -->
    <section class="hero-sm">
      <div class="container">
        <span class="overline">定价方案</span>
        <h1 class="heading-hero">简单透明的定价</h1>
        <p class="hero-desc">
          选择适合您的方案，随时可以升级或降级
        </p>

        <!-- Billing Toggle -->
        <div class="billing-toggle">
          <span :class="{ active: !isYearly }">月付</span>
          <button class="toggle-btn" @click="isYearly = !isYearly">
            <span class="toggle-thumb" :class="{ right: isYearly }"></span>
          </button>
          <span :class="{ active: isYearly }">
            年付
            <span class="save-badge">省20%</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-cards section-padding">
      <div class="container">
        <div class="pricing-grid">
          <div 
            class="pricing-card" 
            v-for="(plan, index) in pricingPlans" 
            :key="index"
            :class="{ popular: plan.popular }"
          >
            <div v-if="plan.popular" class="popular-badge">最受欢迎</div>
            <div class="plan-header">
              <h3 class="plan-name">{{ plan.name }}</h3>
              <p class="plan-desc">{{ plan.description }}</p>
              <div class="plan-price">
                <span class="price-symbol">¥</span>
                <span class="price-number">{{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}</span>
                <span class="price-unit">/{{ isYearly ? '年' : '月' }}</span>
              </div>
            </div>
            <div class="plan-features">
              <div class="feature-category">包含功能：</div>
              <ul>
                <li v-for="(feature, i) in plan.features" :key="i">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="plan-action">
              <button 
                class="btn btn-large"
                :class="plan.popular ? 'btn-primary' : 'btn-secondary'"
              >
                {{ plan.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compare Features -->
    <section class="compare-section section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">功能对比</span>
          <h2 class="heading-section">选择适合您的方案</h2>
        </div>
        <div class="compare-table-wrapper">
          <table class="compare-table">
            <thead>
              <tr>
                <th>功能</th>
                <th>基础版</th>
                <th>专业版</th>
                <th>企业版</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in compareFeatures" :key="index">
                <td class="feature-name">{{ row.name }}</td>
                <td>
                  <span v-if="row.starter === true" class="check">✓</span>
                  <span v-else-if="row.starter === false" class="cross">—</span>
                  <span v-else>{{ row.starter }}</span>
                </td>
                <td>
                  <span v-if="row.pro === true" class="check">✓</span>
                  <span v-else-if="row.pro === false" class="cross">—</span>
                  <span v-else>{{ row.pro }}</span>
                </td>
                <td>
                  <span v-if="row.enterprise === true" class="check">✓</span>
                  <span v-else-if="row.enterprise === false" class="cross">—</span>
                  <span v-else>{{ row.enterprise }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">常见问题</span>
          <h2 class="heading-section">关于定价的疑问</h2>
        </div>
        <div class="faq-grid">
          <div class="faq-card" v-for="(faq, index) in faqs" :key="index">
            <h3 class="faq-question-sm">{{ faq.question }}</h3>
            <p class="faq-answer-sm">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enterprise CTA -->
    <section class="enterprise-cta section-padding">
      <div class="container">
        <div class="enterprise-card">
          <div class="enterprise-content">
            <h2 class="heading-section">需要更多定制？</h2>
            <p class="enterprise-desc">
              我们的企业版提供专属定制方案，包括私有化部署、专属支持、定制开发等服务。
              联系我们的销售团队获取详细报价。
            </p>
            <div class="enterprise-buttons">
              <router-link to="/contact" class="btn btn-primary btn-large">
                联系销售
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
              <a href="tel:400-888-8888" class="btn btn-ghost btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                400-888-8888
              </a>
            </div>
          </div>
          <div class="enterprise-visual">
            <div class="enterprise-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isYearly = ref(false);

const pricingPlans = [
  {
    name: '基础版',
    description: '适合个人开发者和小型项目',
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      '5 个项目',
      '10GB 存储空间',
      '基础数据分析',
      '邮件技术支持',
      '社区支持',
      '基础 API 访问'
    ],
    cta: '开始试用',
    popular: false
  },
  {
    name: '专业版',
    description: '适合成长中的企业团队',
    monthlyPrice: 299,
    yearlyPrice: 2870,
    features: [
      '无限项目',
      '100GB 存储空间',
      '高级数据分析',
      '7x24 在线支持',
      '优先技术支持',
      '完整 API 访问',
      '自定义集成',
      '团队协作功能'
    ],
    cta: '立即升级',
    popular: true
  },
  {
    name: '企业版',
    description: '适合大型企业和组织',
    monthlyPrice: '定制',
    yearlyPrice: '定制',
    features: [
      '无限项目',
      '无限存储空间',
      '企业级数据分析',
      '专属客户成功经理',
      '私有化部署选项',
      '定制开发服务',
      'SLA 保障',
      '现场技术支持'
    ],
    cta: '联系销售',
    popular: false
  }
];

const compareFeatures = [
  { name: '项目数量', starter: '5 个', pro: '无限', enterprise: '无限' },
  { name: '存储空间', starter: '10GB', pro: '100GB', enterprise: '无限' },
  { name: 'API 调用次数', starter: '10K/月', pro: '100K/月', enterprise: '无限' },
  { name: '数据分析', starter: '基础', pro: '高级', enterprise: '企业级' },
  { name: '团队协作', starter: false, pro: true, enterprise: true },
  { name: '自定义域名', starter: false, pro: true, enterprise: true },
  { name: '私有化部署', starter: false, pro: false, enterprise: true },
  { name: '专属支持', starter: false, pro: false, enterprise: true },
  { name: 'SLA 保障', starter: false, pro: '99.9%', enterprise: '99.99%' },
  { name: '审计日志', starter: '7 天', pro: '90 天', enterprise: '永久' }
];

const faqs = [
  {
    question: '可以随时升级或降级吗？',
    answer: '是的，您可以随时升级或降级您的套餐。升级立即生效，降级将在当前计费周期结束后生效。'
  },
  {
    question: '是否提供免费试用？',
    answer: '是的，所有套餐都提供 14 天免费试用，无需绑定信用卡。试用期间可以体验所有功能。'
  },
  {
    question: '支持哪些支付方式？',
    answer: '我们支持支付宝、微信支付、银行转账等多种支付方式。企业版还支持对公转账。'
  },
  {
    question: '如何申请退款？',
    answer: '我们提供 30 天无理由退款保证。如果您对服务不满意，可以在购买后 30 天内申请全额退款。'
  }
];
</script>

<style scoped>
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
  background: var(--success);
  color: white;
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
  background: var(--bg-tertiary);
  border: none;
  position: relative;
  cursor: pointer;
  transition: background var(--duration-normal);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-normal);
}

.toggle-thumb.right {
  transform: translateX(28px);
}

/* Pricing Cards */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
}

.pricing-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  border: 2px solid var(--border-color);
  padding: var(--space-8);
  position: relative;
  transition: all var(--duration-normal);
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.pricing-card.popular {
  border-color: var(--brand-primary);
  transform: scale(1.02);
}

.pricing-card.popular:hover {
  transform: scale(1.02) translateY(-8px);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 13px;
  font-weight: 600;
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-full);
}

.plan-header {
  text-align: center;
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--space-6);
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.plan-desc {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-bottom: var(--space-6);
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.price-symbol {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.price-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.price-unit {
  font-size: 16px;
  color: var(--text-tertiary);
}

.feature-category {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
}

.plan-features ul {
  list-style: none;
  margin-bottom: var(--space-8);
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) 0;
  color: var(--text-secondary);
}

.plan-features svg {
  color: var(--success);
  flex-shrink: 0;
}

.plan-action .btn {
  width: 100%;
  justify-content: center;
}

/* Compare Table */
.compare-table-wrapper {
  overflow-x: auto;
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

.compare-table th,
.compare-table td {
  padding: var(--space-4) var(--space-6);
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.compare-table th {
  background: var(--bg-tertiary);
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
}

.compare-table th:first-child {
  text-align: left;
}

.compare-table td:first-child {
  text-align: left;
  font-weight: 500;
  color: var(--text-primary);
}

.compare-table tbody tr:last-child td {
  border-bottom: none;
}

.compare-table .check {
  color: var(--success);
  font-weight: 600;
}

.compare-table .cross {
  color: var(--text-tertiary);
}

/* FAQ Grid */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

.faq-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
}

.faq-question-sm {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.faq-answer-sm {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Enterprise CTA */
.enterprise-cta {
  padding-top: 0;
}

.enterprise-card {
  background: linear-gradient(135deg, var(--gray-800) 0%, var(--gray-900) 100%);
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
  .enterprise-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-10);
  }
  
  .enterprise-visual {
    display: none;
  }
}

.enterprise-content h2 {
  color: white;
  margin-bottom: var(--space-4);
}

.enterprise-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.enterprise-buttons {
  display: flex;
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .enterprise-buttons {
    flex-direction: column;
    align-items: center;
  }
}

.enterprise-card .btn-primary {
  background: white;
  color: var(--gray-800);
}

.enterprise-card .btn-primary:hover {
  background: var(--gray-100);
}

.enterprise-card .btn-ghost {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.enterprise-card .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.enterprise-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.enterprise-icon {
  width: 160px;
  height: 160px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
