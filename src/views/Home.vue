<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline animate-fadeIn" style="animation-delay: 0.1s;">
            智慧社区管理解决方案
          </span>
          <h1 class="heading-hero animate-fadeIn" style="animation-delay: 0.2s;">
            让物业管理更简单<br/>
            <span class="gradient-text">让业主生活更便捷</span>
          </h1>
          <p class="hero-subtitle animate-fadeIn" style="animation-delay: 0.3s;">
            赣州邻檬智能科技，专注于智慧社区管理软件开发<br/>
            为物业公司、业委会量身打造智慧社区运营管理体系
          </p>
          <div class="hero-cta animate-fadeIn" style="animation-delay: 0.4s;">
            <router-link to="/contact" class="btn btn-primary">
              免费试用
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link to="/product" class="btn btn-secondary">
              了解产品
            </router-link>
          </div>
          <div class="hero-stats animate-fadeIn" style="animation-delay: 0.5s;">
            <div class="stat-item">
              <span class="stat-number">10,000+</span>
              <span class="stat-label">服务小区</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">500万+</span>
              <span class="stat-label">覆盖业主</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">99.9%</span>
              <span class="stat-label">系统稳定性</span>
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
              <div class="window-title">智慧物业管理系统</div>
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
          <h2 class="heading-section">全方位的智慧社区解决方案</h2>
          <p class="section-desc">
            覆盖小区日常管理全部场景，降低物业服务成本，提高物业服务效率
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon" :style="{ background: feature.gradient }">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path v-if="feature.icon === 'dollar'" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                <path v-if="feature.icon === 'users'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle v-if="feature.icon === 'users'" cx="9" cy="7" r="4"/>
                <path v-if="feature.icon === 'users'" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                <path v-if="feature.icon === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path v-if="feature.icon === 'vote'" d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                <path v-if="feature.icon === 'building'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline v-if="feature.icon === 'building'" points="9,22 9,12 15,12 15,22"/>
                <rect v-if="feature.icon === 'mobile'" x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line v-if="feature.icon === 'mobile'" x1="12" y1="18" x2="12.01" y2="18"/>
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

    <!-- Advantages Section -->
    <section class="advantages section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">核心优势</span>
          <h2 class="heading-section">为什么选择邻檬智能</h2>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="(item, index) in advantages" :key="index">
            <div class="advantage-number">0{{ index + 1 }}</div>
            <h3 class="heading-card">{{ item.title }}</h3>
            <p class="advantage-desc">{{ item.description }}</p>
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

    <!-- Electronic Voting Solution Section -->
    <section class="voting-solution section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline highlight">核心解决方案</span>
          <h2 class="heading-section">电子投票表决系统</h2>
          <p class="section-desc">
            用技术手段解决业主投票流程不清晰、身份核验难、统计核算难等痛点<br/>
            让小区公共事务决策更高效、更公正、更透明
          </p>
        </div>
        
        <div class="voting-showcase">
          <div class="voting-main">
            <div class="voting-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              公安部权威数据库核验
            </div>
            <h3 class="voting-title">首创人脸识别 + 公安核验<br/>双重身份验证</h3>
            <p class="voting-desc">
              业主投票时进行动态人脸核身比对，将身份证信息和实时视频上传至公安权威数据库验证，
              确保投票人身份真实，投票结果具有法律效力
            </p>
            <div class="voting-stats">
              <div class="voting-stat-item">
                <span class="voting-stat-number">90%+</span>
                <span class="voting-stat-label">投票成功率</span>
              </div>
              <div class="voting-stat-item">
                <span class="voting-stat-number">7天</span>
                <span class="voting-stat-label">最快完成周期</span>
              </div>
              <div class="voting-stat-item">
                <span class="voting-stat-number">1000+</span>
                <span class="voting-stat-label">已服务小区</span>
              </div>
            </div>
            <div class="voting-cta">
              <router-link to="/contact" class="btn btn-primary btn-large">
                了解投票解决方案
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="voting-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="vote-app">
                  <div class="vote-header">
                    <div class="vote-back"></div>
                    <span>投票表决</span>
                    <div class="vote-menu"></div>
                  </div>
                  <div class="vote-content">
                    <div class="vote-card">
                      <div class="vote-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2">
                          <path d="M9 11l3 3L22 4"/>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                      </div>
                      <h4>小区公共收益使用方案</h4>
                      <p>投票截止：2024-12-31</p>
                      <div class="vote-progress">
                        <div class="vote-progress-bar"></div>
                        <span>参与率 68%</span>
                      </div>
                    </div>
                    <div class="face-id-demo">
                      <div class="face-ring">
                        <div class="face-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                      </div>
                      <span>人脸识别验证中...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="floating-card card-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>身份核验通过</span>
            </div>
            <div class="floating-card card-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>数据加密传输</span>
            </div>
          </div>
        </div>
        
        <div class="voting-features">
          <div class="voting-feature-item">
            <div class="voting-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h4>多种投票规则</h4>
            <p>支持双过半、三分之二等多种表决规则，自动计算投票结果</p>
          </div>
          <div class="voting-feature-item">
            <div class="voting-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h4>灵活投票范围</h4>
            <p>可按小区、楼宇、单元设置投票范围，满足不同决策需求</p>
          </div>
          <div class="voting-feature-item">
            <div class="voting-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5l-5 5v-5z"/>
              </svg>
            </div>
            <h4>线上线下结合</h4>
            <p>支持电子投票和纸质投票同步进行，系统自动汇总结果</p>
          </div>
          <div class="voting-feature-item">
            <div class="voting-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h4>自动公示归档</h4>
            <p>自动生成投票公告、结果公示，支持文件下载打印张贴</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="heading-section">准备好开启智慧社区管理了吗？</h2>
            <p class="cta-desc">
              立即免费试用，体验全新的物业管理方式
            </p>
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
    icon: 'dollar',
    title: '智能收费管理',
    description: '物业费、水电费自动计费，多渠道缴费，欠费自动提醒，催缴效率提升80%',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
  },
  {
    icon: 'users',
    title: '业主服务中心',
    description: '在线报事报修，工单全程追踪，小区公告一键推送，业主满意度实时评价',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
  },
  {
    icon: 'shield',
    title: '智能出入管理',
    description: '人脸识别门禁，访客预约/邀约系统，车牌识别道闸自动抬杆，安全便捷',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
  },
  {
    icon: 'vote',
    title: '电子投票表决',
    description: '人脸核身身份验证，线上线下投票结合，自动计票，结果公正透明',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
  },
  {
    icon: 'building',
    title: '业委会管理',
    description: '账目收支清晰记录，按年度自动生成统计报表，线上线下账目公开透明',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)'
  },
  {
    icon: 'mobile',
    title: '移动办公平台',
    description: '企业微信深度集成，待办事项实时推送，随时随地处理物业事务',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)'
  }
];

const advantages = [
  {
    title: '专业团队',
    description: '核心团队拥有10年以上智慧社区行业经验，与专业律师团队合作，确保产品合规合法'
  },
  {
    title: '技术领先',
    description: '基于微信生态深度开发，企业微信官方服务商，AI人脸识别等前沿技术应用'
  },
  {
    title: '服务完善',
    description: '0门槛部署，即注册即用，一对一客户成功服务，平均每月上新2个功能'
  },
  {
    title: '安全可靠',
    description: '资金直达物业账户，数据加密存储，隐私保护符合国家标准，系统稳定性99.9%'
  }
];

const testimonials = [
  {
    content: '使用邻檬智能系统后，我们的收费率从75%提升到95%，客服工作量减少了60%，业主满意度大幅提升。',
    name: '张明',
    title: 'XX物业集团 运营总监'
  },
  {
    content: '电子投票功能太方便了，以前纸质投票要折腾半个月，现在3天就能完成，业主参与率也高了。',
    name: '李华',
    title: 'XX小区 业委会主任'
  },
  {
    content: '系统稳定，服务响应快，有问题随时能解决，是我们长期合作的好伙伴。',
    name: '王强',
    title: 'XX物业公司 总经理'
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
    flex-wrap: nowrap;
    gap: var(--space-4);
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .stat-label {
    font-size: 12px;
  }
}

.stat-item {
  text-align: center;
  white-space: nowrap;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.stat-label {
  white-space: nowrap;
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

/* Advantages Section */
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
  transition: all var(--duration-normal);
}

.advantage-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.advantage-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--brand-200);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.advantage-desc {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  margin-top: var(--space-3);
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

/* Voting Solution Section */
.voting-solution {
  background: linear-gradient(135deg, var(--brand-50) 0%, var(--bg-primary) 50%, rgba(139, 92, 246, 0.05) 100%);
}

[data-theme="dark"] .voting-solution {
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.3) 0%, var(--bg-primary) 50%, rgba(139, 92, 246, 0.1) 100%);
}

.voting-solution .highlight {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.voting-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  margin-bottom: var(--space-16);
}

@media (max-width: 1024px) {
  .voting-showcase {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

.voting-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: rgba(139, 92, 246, 0.1);
  color: #8B5CF6;
  font-size: 14px;
  font-weight: 600;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

[data-theme="dark"] .voting-badge {
  background: rgba(139, 92, 246, 0.2);
  color: #A78BFA;
}

.voting-title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

@media (max-width: 768px) {
  .voting-title {
    font-size: 28px;
  }
}

.voting-desc {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.voting-stats {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

@media (max-width: 640px) {
  .voting-stats {
    gap: var(--space-4);
  }
}

.voting-stat-item {
  text-align: center;
}

.voting-stat-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: #8B5CF6;
  line-height: 1;
}

.voting-stat-label {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-top: var(--space-1);
}

.voting-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-mockup {
  width: 280px;
  height: 560px;
  background: var(--bg-primary);
  border-radius: 40px;
  padding: 12px;
  box-shadow: var(--shadow-2xl), 0 0 60px rgba(139, 92, 246, 0.2);
  border: 1px solid var(--border-color);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  border-radius: 32px;
  overflow: hidden;
}

.vote-app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.vote-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.vote-back, .vote-menu {
  width: 24px;
  height: 24px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
}

.vote-header span {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.vote-content {
  flex: 1;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.vote-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  border: 1px solid var(--border-color);
}

.vote-icon {
  width: 56px;
  height: 56px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
}

.vote-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.vote-card p {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: var(--space-3);
}

.vote-progress {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.vote-progress-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
}

.vote-progress-bar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 68%;
  background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);
  border-radius: var(--radius-full);
}

.vote-progress span {
  font-size: 12px;
  font-weight: 600;
  color: #8B5CF6;
}

.face-id-demo {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  color: white;
}

.face-ring {
  width: 80px;
  height: 80px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.face-icon {
  opacity: 0.9;
}

.face-id-demo span {
  font-size: 13px;
  font-weight: 500;
}

.floating-card {
  position: absolute;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-4);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-1 {
  top: 20%;
  right: 0;
  animation-delay: 0s;
}

.card-2 {
  bottom: 20%;
  left: 0;
  animation-delay: 1.5s;
}

@media (max-width: 1024px) {
  .floating-card {
    display: none;
  }
}

.voting-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .voting-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .voting-features {
    grid-template-columns: 1fr;
  }
}

.voting-feature-item {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all var(--duration-normal);
}

.voting-feature-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(139, 92, 246, 0.3);
}

.voting-feature-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.voting-feature-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.voting-feature-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
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

[data-theme="dark"] .cta-card {
  background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
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
