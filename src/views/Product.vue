<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero-sm">
      <div class="container">
        <span class="overline">产品功能</span>
        <h1 class="heading-hero">全方位技术解决方案</h1>
        <p class="hero-desc">
          我们提供完整的产品矩阵，满足企业不同场景的需求
        </p>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-detail section-padding">
      <div class="container">
        <div class="feature-block" v-for="(feature, index) in features" :key="index">
          <div class="feature-content" :class="{ 'order-2': index % 2 === 1 }">
            <span class="feature-tag">{{ feature.tag }}</span>
            <h2 class="heading-section">{{ feature.title }}</h2>
            <p class="feature-description">{{ feature.description }}</p>
            <ul class="feature-list">
              <li v-for="(item, i) in feature.items" :key="i">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                {{ item }}
              </li>
            </ul>
            <router-link to="/contact" class="btn btn-primary">
              了解详情
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
          <div class="feature-visual" :class="{ 'order-1': index % 2 === 1 }">
            <div class="visual-card" :style="{ background: feature.gradient }">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path v-if="feature.icon === 'cloud'" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                <path v-if="feature.icon === 'database'" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 12h2m12 0h2M12 4v2m0 12v2"/>
                <path v-if="feature.icon === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path v-if="feature.icon === 'zap'" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="integration section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">无缝集成</span>
          <h2 class="heading-section">与您喜爱的工具协同工作</h2>
          <p class="section-desc">
            我们支持与主流工具和平台的无缝集成
          </p>
        </div>
        <div class="integration-grid">
          <div class="integration-item" v-for="i in 8" :key="i">
            <div class="integration-icon"></div>
            <span>Integration {{ i }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">常见问题</span>
          <h2 class="heading-section">您可能想了解</h2>
        </div>
        <div class="faq-list">
          <div 
            class="faq-item" 
            v-for="(faq, index) in faqs" 
            :key="index"
            :class="{ open: openFaq === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div class="faq-answer" v-show="openFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section-sm">
      <div class="container">
        <div class="cta-content-sm">
          <h2 class="heading-section">准备好开始使用了吗？</h2>
          <p class="cta-desc">立即开始免费试用，体验全新的数字化解决方案</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary btn-large">免费试用</router-link>
            <router-link to="/pricing" class="btn btn-secondary btn-large">查看定价</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openFaq = ref(null);

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const features = [
  {
    tag: '核心功能',
    title: '云端部署',
    description: '基于云原生架构，提供弹性扩展、高可用的云端部署方案。支持公有云、私有云和混合云部署模式，满足不同安全等级需求。',
    items: [
      '自动扩缩容，应对业务高峰',
      '多地域部署，降低访问延迟',
      '99.99% SLA 保障',
      '自动化运维监控'
    ],
    icon: 'cloud',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
  },
  {
    tag: '数据管理',
    title: '智能数据分析',
    description: '内置强大的数据分析引擎，实时处理海量数据，提供可视化报表和智能洞察，助力数据驱动决策。',
    items: [
      '实时数据流处理',
      '可视化报表构建',
      'AI 驱动的预测分析',
      '自定义指标监控'
    ],
    icon: 'database',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
  },
  {
    tag: '安全保障',
    title: '企业级安全',
    description: '多层次安全防护体系，从网络、应用到数据全方位保护。符合 SOC2、ISO27001 等国际安全标准。',
    items: [
      '端到端数据加密',
      '多因素身份认证',
      '细粒度权限控制',
      '完整审计日志'
    ],
    icon: 'shield',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  {
    tag: '性能优化',
    title: '高性能计算',
    description: '优化的计算架构，提供毫秒级响应。智能缓存、CDN 加速、连接池优化等技术确保极致性能体验。',
    items: [
      '毫秒级 API 响应',
      '智能缓存策略',
      '全球 CDN 加速',
      '数据库连接池优化'
    ],
    icon: 'zap',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
  }
];

const faqs = [
  {
    question: '如何开始使用 TechCorp 的产品？',
    answer: '您可以通过官网注册账号，即可开始 14 天免费试用。试用期间可以体验所有核心功能，无需绑定信用卡。我们的技术团队也会提供全程支持。'
  },
  {
    question: '是否支持私有化部署？',
    answer: '是的，我们支持公有云、私有云和混合云多种部署模式。对于有特殊安全要求的企业，我们提供完整的私有化部署方案，数据完全由您掌控。'
  },
  {
    question: '如何保证数据安全？',
    answer: '我们采用多层次安全防护：传输层使用 TLS 1.3 加密，存储层使用 AES-256 加密，支持多因素认证和细粒度权限控制。同时我们已通过 SOC2 Type II 和 ISO27001 认证。'
  },
  {
    question: '技术支持如何收费？',
    answer: '所有套餐都包含基础的邮件技术支持。专业版及以上包含 7x24 小时在线支持，企业版还提供专属客户成功经理和现场支持服务。'
  },
  {
    question: '是否可以定制开发？',
    answer: '企业版客户可以享受定制开发服务。我们的技术团队可以根据您的业务需求进行功能定制、系统集成和专属优化。'
  }
];
</script>

<style scoped>
/* Hero Small */
.hero-sm {
  padding: 140px 0 80px;
  text-align: center;
  background: linear-gradient(135deg, var(--brand-50) 0%, var(--bg-primary) 100%);
}

[data-theme="dark"] .hero-sm {
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, var(--bg-primary) 100%);
}

.hero-desc {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: var(--space-4) auto 0;
}

/* Features Detail */
.features-detail {
  padding: 80px 0;
}

.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  padding: var(--space-16) 0;
  border-bottom: 1px solid var(--border-color);
}

.feature-block:last-child {
  border-bottom: none;
}

@media (max-width: 1024px) {
  .feature-block {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  
  .order-1 { order: 1; }
  .order-2 { order: 2; }
}

.feature-tag {
  display: inline-block;
  background: var(--brand-50);
  color: var(--brand-primary);
  font-size: 13px;
  font-weight: 600;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

[data-theme="dark"] .feature-tag {
  background: rgba(59, 130, 246, 0.1);
}

.feature-content h2 {
  margin-bottom: var(--space-4);
}

.feature-description {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

.feature-list {
  list-style: none;
  margin-bottom: var(--space-8);
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-secondary);
  padding: var(--space-2) 0;
}

.feature-list svg {
  color: var(--success);
  flex-shrink: 0;
}

.feature-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  width: 320px;
  height: 320px;
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
}

@media (max-width: 640px) {
  .visual-card {
    width: 240px;
    height: 240px;
  }
}

/* Integration */
.integration-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .integration-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.integration-item {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--duration-normal);
}

.integration-item:hover {
  border-color: var(--brand-300);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.integration-icon {
  width: 64px;
  height: 64px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  margin: 0 auto var(--space-4);
}

.integration-item span {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
}

/* FAQ */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--border-color);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) 0;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
}

.faq-question svg {
  transition: transform var(--duration-normal);
  flex-shrink: 0;
}

.faq-item.open .faq-question svg {
  transform: rotate(180deg);
}

.faq-answer {
  padding-bottom: var(--space-6);
}

.faq-answer p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* CTA Section Small */
.cta-section-sm {
  padding: 0 0 120px;
}

.cta-content-sm {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content-sm h2 {
  margin-bottom: var(--space-4);
}

.cta-content-sm .cta-desc {
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: var(--space-8);
}

.cta-content-sm .cta-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

@media (max-width: 640px) {
  .cta-content-sm .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
