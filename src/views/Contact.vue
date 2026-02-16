<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline">联系我们</span>
          <h1 class="heading-hero">让我们开始对话</h1>
          <p class="hero-subtitle">
            无论您有任何问题或需求，我们的团队都随时准备为您提供帮助
          </p>
        </div>
      </div>
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="contact-info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>电话咨询</h3>
            <p>400-XXX-XXXX</p>
            <span class="info-note">周一至周日 9:00-21:00</span>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>邮件联系</h3>
            <p>contact@gzlmzj.com</p>
            <span class="info-note">24小时内回复</span>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>公司地址</h3>
            <p>赣州市XX区XX路XX号</p>
            <span class="info-note">欢迎来访</span>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>在线客服</h3>
            <p>企业微信客服</p>
            <span class="info-note">实时响应</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="form-section section-padding">
      <div class="container">
        <div class="form-grid">
          <div class="form-content">
            <h2 class="heading-section">给我们留言</h2>
            <p class="form-desc">
              填写下方表单，我们会尽快与您联系。您也可以直接拨打我们的服务热线 400-XXX-XXXX
            </p>
            
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">您的姓名 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">联系电话 *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    placeholder="请输入您的手机号码"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">电子邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div class="form-group">
                  <label for="company">公司名称</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company" 
                    placeholder="请输入您的公司名称"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>咨询类型 *</label>
                <div class="radio-group">
                  <label class="radio-item" v-for="(type, index) in inquiryTypes" :key="index">
                    <input 
                      type="radio" 
                      :value="type.value" 
                      v-model="form.type"
                      required
                    />
                    <span class="radio-label">{{ type.label }}</span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="message">留言内容 *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  placeholder="请描述您的需求或问题"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-large">
                提交留言
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>

          <div class="form-sidebar">
            <div class="sidebar-card">
              <h3>快速通道</h3>
              <div class="quick-links">
                <a href="#" class="quick-link">
                  <span>产品演示预约</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#" class="quick-link">
                  <span>免费试用申请</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#" class="quick-link">
                  <span>技术问题反馈</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#" class="quick-link">
                  <span>商务合作咨询</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="sidebar-card">
              <h3>关注我们</h3>
              <p class="sidebar-desc">扫描二维码关注我们的微信公众号，获取最新产品资讯和行业动态</p>
              <div class="qr-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span>微信公众号</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">常见问题</span>
          <h2 class="heading-section">您可能想了解的</h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item" v-for="(item, index) in faqs" :key="index">
            <h3>{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <h3>赣州邻檬智能科技有限公司</h3>
          <p>赣州市XX区XX路XX号</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  type: 'trial',
  message: ''
});

const inquiryTypes = [
  { value: 'trial', label: '免费试用' },
  { value: 'demo', label: '产品演示' },
  { value: 'consult', label: '商务咨询' },
  { value: 'support', label: '技术支持' },
  { value: 'cooperation', label: '商务合作' }
];

const faqs = [
  {
    question: '可以免费试用吗？',
    answer: '可以！我们提供14天免费试用，无需绑定信用卡，试用期内可体验专业版全部功能。'
  },
  {
    question: '如何联系技术支持？',
    answer: '您可以通过电话 400-XXX-XXXX、邮件 contact@gzlmzj.com 或在线客服联系我们，我们会在24小时内响应。'
  },
  {
    question: '是否提供上门服务？',
    answer: '企业版客户可享受上门服务，包括系统部署、培训和现场技术支持。具体请与销售团队联系。'
  },
  {
    question: '如何预约产品演示？',
    answer: '您可以填写上方表单选择"产品演示"，或直接拨打我们的服务热线，我们会安排专人为您进行一对一演示。'
  },
  {
    question: '支持哪些支付方式？',
    answer: '我们支持银行转账、支付宝、微信支付等多种支付方式，企业客户可开具增值税专用发票。'
  },
  {
    question: '数据安全如何保障？',
    answer: '我们采用银行级数据加密，多重备份机制，数据存储在国内合规云服务器，确保数据安全。'
  }
];

const submitForm = () => {
  // 表单提交逻辑
  alert('感谢您的留言！我们会尽快与您联系。');
  // 重置表单
  form.value = {
    name: '',
    phone: '',
    email: '',
    company: '',
    type: 'trial',
    message: ''
  };
};
</script>

<style scoped>
/* Contact Hero */
.contact-hero {
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

/* Contact Info Section */
.contact-info-section {
  padding: 0 0 60px;
  background: var(--bg-secondary);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  transform: translateY(-40px);
}

@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.info-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  transition: all var(--duration-normal);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.info-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.info-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.info-card p {
  font-size: 16px;
  font-weight: 500;
  color: var(--brand-primary);
  margin-bottom: var(--space-2);
}

.info-note {
  font-size: 13px;
  color: var(--text-tertiary);
}

/* Form Section */
.form-section {
  padding: 60px 0 100px;
  background: var(--bg-primary);
}

.section-padding {
  padding: 100px 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 60px 0;
  }
}

.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-12);
}

.form-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

@media (max-width: 1024px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.form-content h2 {
  margin-bottom: var(--space-4);
}

.form-desc {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  line-height: 1.6;
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  padding: var(--space-4);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 15px;
  transition: all var(--duration-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px var(--brand-100);
}

[data-theme="dark"] .form-group input:focus,
[data-theme="dark"] .form-group textarea:focus {
  box-shadow: 0 0 0 3px var(--brand-900);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-tertiary);
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.radio-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.radio-item input {
  width: 18px;
  height: 18px;
  accent-color: var(--brand-primary);
}

.radio-label {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Form Sidebar */
.form-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.sidebar-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--border-color);
}

.sidebar-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.quick-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast);
}

.quick-link:hover {
  background: var(--bg-tertiary);
  color: var(--brand-primary);
}

.sidebar-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  line-height: 1.6;
}

.qr-placeholder {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  color: var(--text-tertiary);
  border: 2px dashed var(--border-color);
}

.qr-placeholder svg {
  margin: 0 auto var(--space-4);
  display: block;
}

.qr-placeholder span {
  font-size: 14px;
}

/* FAQ Section */
.faq-section {
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

/* Map Section */
.map-section {
  padding: 0;
}

.map-placeholder {
  height: 400px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
  color: var(--text-secondary);
}

.map-content svg {
  margin: 0 auto var(--space-4);
  display: block;
  color: var(--brand-primary);
}

.map-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.map-content p {
  font-size: 16px;
}
</style>
