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
          <span class="overline">电子投票解决方案</span>
          <h2 class="heading-section">让业主大会召开不再困难</h2>
          <p class="section-desc">
            传统纸质投票过程需要核对业主身份、发放选票、回收选票、唱票计票，<br/>
            投票周期长、业主参与难、耗费大量人力物力。邻檬智能电子投票系统，<br/>
            专门针对小区投票场景打造，用技术手段解决投票流程不清晰、公告通知难、<br/>
            投票参与难、身份核验难、统计核算难等多个痛点。
          </p>
        </div>
        
        <div class="voting-content">
          <div class="voting-main-feature">
            <div class="voting-icon-large">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>人脸核身身份验证</h3>
            <p>投票人在手机上完成表决选择后，进入人脸核身比对校验流程。系统将其身份证信息和录制的视频上传到公安权威数据库对比，确保投票这个操作是由业主本人执行，投票结果具有法律效力。</p>
          </div>
          
          <div class="voting-grid">
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">01</span>
                <h4>流程清晰一看即懂</h4>
              </div>
              <p>与专业律师团队合作，将投票表决流程拆分为几个步骤，投票组织者可以轻松了解和掌握小区表决各个环节所需的工作事项。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">02</span>
                <h4>业主投票权轻松计算</h4>
              </div>
              <p>系统提供小区基础数据管理功能，在此数据基础上统计业主总人数、总投票权数、建筑物总面积等相关数据都非常轻松。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">03</span>
                <h4>多种规则满足复杂需求</h4>
              </div>
              <p>提供多种投票规则（效力规则、表决规则、计票规则），支持"双过半"、"三分之二"等不同条件组合设置。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">04</span>
                <h4>精准选择投票范围</h4>
              </div>
              <p>支持可投票范围选择，可选范围包括小区、楼宇、单元，投票项目创建后，只有所选范围内的业主才可参加表决。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">05</span>
                <h4>投票公示更轻松</h4>
              </div>
              <p>提供线上线下两种公示方法，线上针对不同环节的投票都可设置是否公示，同时提供公示相关文件下载，方便打印张贴。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">06</span>
                <h4>消息通知更便捷</h4>
              </div>
              <p>为每个投票项目都提供微信、短信两种通知方式，系统将在按触发条件时自动推送通知，也可随时手工发送。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">07</span>
                <h4>同时支持线上线下投票</h4>
              </div>
              <p>支持传统纸质投票方式，可将选票打印出来，投票人填写完成后在系统中进行录入和拍照上传，线下投票同样计入表决结果。</p>
            </div>
            
            <div class="voting-item">
              <div class="voting-item-header">
                <span class="voting-number">08</span>
                <h4>表决结果自动计算</h4>
              </div>
              <p>表决结果完全根据投票规则自动计算，此次投票是否有效，表决结果是否通过，都由系统自动生成，杜绝人工干预可能。</p>
            </div>
          </div>
          
          <div class="voting-highlights">
            <div class="highlight-card">
              <span class="highlight-number">90%+</span>
              <span class="highlight-label">投票成功率</span>
              <span class="highlight-desc">远高于传统投票方式</span>
            </div>
            <div class="highlight-card">
              <span class="highlight-number">一周</span>
              <span class="highlight-label">最快完成</span>
              <span class="highlight-desc">从发起到投票成功</span>
            </div>
            <div class="highlight-card">
              <span class="highlight-number">观察员</span>
              <span class="highlight-label">机制监督</span>
              <span class="highlight-desc">电脑端手机端都可查看</span>
            </div>
          </div>
          
          <div class="voting-cta">
            <router-link to="/contact" class="btn btn-primary btn-large">
              了解电子投票解决方案
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
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
  background: var(--bg-secondary);
}

.voting-content {
  max-width: 900px;
  margin: 0 auto;
}

.voting-main-feature {
  text-align: center;
  margin-bottom: var(--space-12);
  padding: var(--space-10);
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--border-color);
}

.voting-icon-large {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.voting-main-feature h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.voting-main-feature p {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

.voting-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

@media (max-width: 768px) {
  .voting-grid {
    grid-template-columns: 1fr;
  }
}

.voting-item {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--border-color);
  transition: all var(--duration-normal);
}

.voting-item:hover {
  border-color: var(--brand-200);
  box-shadow: var(--shadow-md);
}

.voting-item-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.voting-number {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: var(--brand-50);
  color: var(--brand-primary);
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

[data-theme="dark"] .voting-number {
  background: var(--brand-900);
}

.voting-item h4 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.voting-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.voting-highlights {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
  flex-wrap: wrap;
}

.highlight-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-10);
  text-align: center;
  border: 1px solid var(--border-color);
  min-width: 160px;
}

.highlight-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--brand-primary);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.highlight-label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.highlight-desc {
  font-size: 13px;
  color: var(--text-tertiary);
}

.voting-cta {
  text-align: center;
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
