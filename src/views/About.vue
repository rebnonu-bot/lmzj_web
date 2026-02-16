<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="hero-sm">
      <div class="container">
        <span class="overline">关于我们</span>
        <h1 class="heading-hero">用技术改变世界</h1>
        <p class="hero-desc">
          我们是一群热爱技术的创造者，致力于为企业提供最好的数字化解决方案
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="mission section-padding">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content">
            <h2 class="heading-section">我们的使命</h2>
            <p class="mission-text">
              在数字化转型的浪潮中，我们相信技术应该服务于人，而不是让人适应技术。
              我们的使命是让每一家企业都能轻松获得顶级的技术能力，无论规模大小。
            </p>
            <p class="mission-text">
              通过持续创新和极致的用户体验，我们帮助企业提升效率、降低成本、创造价值。
            </p>
            <div class="mission-values">
              <div class="value-item" v-for="(value, index) in values" :key="index">
                <div class="value-icon">{{ value.icon }}</div>
                <h4>{{ value.title }}</h4>
                <p>{{ value.desc }}</p>
              </div>
            </div>
          </div>
          <div class="mission-visual">
            <div class="mission-image">
              <div class="image-placeholder">
                <span>团队照片</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats section-padding gradient-bg">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-box" v-for="(stat, index) in stats" :key="index">
            <span class="stat-number-lg">{{ stat.number }}</span>
            <span class="stat-label-lg">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">核心团队</span>
          <h2 class="heading-section">认识我们的团队</h2>
          <p class="section-desc">
            来自全球顶尖科技公司的行业专家
          </p>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="(member, index) in team" :key="index">
            <div class="member-avatar">{{ member.name.charAt(0) }}</div>
            <h3 class="member-name">{{ member.name }}</h3>
            <span class="member-role">{{ member.role }}</span>
            <p class="member-bio">{{ member.bio }}</p>
            <div class="member-social">
              <a href="#" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" title="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
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
          <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners section-padding gradient-bg">
      <div class="container">
        <div class="section-header">
          <span class="overline">合作伙伴</span>
          <h2 class="heading-section">他们信任我们</h2>
        </div>
        <div class="partners-grid">
          <div class="partner-logo" v-for="i in 6" :key="i">
            <div class="logo-placeholder">Partner {{ i }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us CTA -->
    <section class="join-cta section-padding">
      <div class="container">
        <div class="join-card">
          <div class="join-content">
            <h2 class="heading-section">加入我们</h2>
            <p class="join-desc">
              我们正在寻找优秀的技术人才加入团队。
              如果你也热爱技术，渴望创造影响，欢迎加入我们！
            </p>
            <div class="join-buttons">
              <a href="#" class="btn btn-primary btn-large">
                查看职位
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <router-link to="/contact" class="btn btn-secondary btn-large">
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
const values = [
  { icon: '🚀', title: '创新驱动', desc: '持续创新，追求卓越' },
  { icon: '🤝', title: '客户至上', desc: '以客户需求为中心' },
  { icon: '💡', title: '开放透明', desc: '开放沟通，透明协作' },
  { icon: '🌱', title: '持续成长', desc: '终身学习，不断进步' }
];

const stats = [
  { number: '2018', label: '成立年份' },
  { number: '200+', label: '员工人数' },
  { number: '10K+', label: '服务客户' },
  { number: '50+', label: '技术专利' }
];

const team = [
  {
    name: '张伟',
    role: 'CEO & 联合创始人',
    bio: '前阿里巴巴技术 VP，拥有 15 年互联网技术研发和管理经验。'
  },
  {
    name: '李娜',
    role: 'CTO & 联合创始人',
    bio: '前腾讯架构师，专注云计算和分布式系统，开源社区活跃贡献者。'
  },
  {
    name: '王强',
    role: '产品 VP',
    bio: '前字节跳动产品总监，擅长从 0 到 1 的产品设计和用户增长。'
  },
  {
    name: '刘芳',
    role: '设计 VP',
    bio: '前 Apple 高级设计师，专注用户体验和视觉设计。'
  }
];

const timeline = [
  {
    year: '2018',
    title: '公司成立',
    description: '在北京中关村创立，获得天使轮融资。'
  },
  {
    year: '2019',
    title: '产品上线',
    description: '首个产品正式发布，获得首批 100 家企业客户。'
  },
  {
    year: '2020',
    title: 'A轮融资',
    description: '完成 5000 万元 A 轮融资，团队扩展至 50 人。'
  },
  {
    year: '2021',
    title: '快速扩张',
    description: '业务覆盖全国，服务客户突破 5000 家。'
  },
  {
    year: '2022',
    title: '技术突破',
    description: '发布 2.0 版本，AI 功能上线，获得 50 项技术专利。'
  },
  {
    year: '2023',
    title: '国际化',
    description: '开启海外市场，在新加坡设立亚太总部。'
  },
  {
    year: '2024',
    title: 'B轮融资',
    description: '完成 3 亿元 B 轮融资，估值达到 30 亿元。'
  }
];
</script>

<style scoped>
/* Mission Section */
.mission {
  padding: 80px 0;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

@media (max-width: 1024px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

.mission-content h2 {
  margin-bottom: var(--space-6);
}

.mission-text {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

.mission-values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.value-item {
  text-align: center;
}

.value-icon {
  font-size: 32px;
  margin-bottom: var(--space-3);
}

.value-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.value-item p {
  font-size: 14px;
  color: var(--text-tertiary);
}

.mission-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 4/3;
  background: var(--bg-tertiary);
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  font-size: 18px;
}

/* Stats Section */
.stats {
  padding: 80px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-box {
  text-align: center;
}

.stat-number-lg {
  display: block;
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--space-2);
}

.stat-label-lg {
  font-size: 16px;
  color: var(--text-secondary);
}

/* Team Section */
.team {
  background: var(--bg-secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}

.team-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--duration-normal);
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.member-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.member-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.member-role {
  display: block;
  font-size: 14px;
  color: var(--brand-primary);
  font-weight: 500;
  margin-bottom: var(--space-4);
}

.member-bio {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.member-social {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
}

.member-social a {
  color: var(--text-tertiary);
  transition: color var(--duration-fast);
}

.member-social a:hover {
  color: var(--brand-primary);
}

/* Timeline Section */
.timeline-section {
  padding: 80px 0;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

@media (max-width: 640px) {
  .timeline::before {
    left: 24px;
  }
}

.timeline-item {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-6) 0;
  position: relative;
}

@media (max-width: 640px) {
  .timeline-item {
    gap: var(--space-4);
  }
}

.timeline-year {
  width: 80px;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
  color: var(--brand-primary);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .timeline-year {
    width: 48px;
    font-size: 16px;
  }
}

.timeline-content {
  flex: 1;
  padding-left: var(--space-8);
  border-left: 2px solid var(--border-color);
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--brand-primary);
  border: 3px solid var(--bg-primary);
}

@media (max-width: 640px) {
  .timeline-content {
    padding-left: var(--space-6);
  }
}

.timeline-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.timeline-content p {
  font-size: 15px;
  color: var(--text-secondary);
}

/* Partners Section */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.partner-logo {
  aspect-ratio: 3/2;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.logo-placeholder {
  color: var(--text-tertiary);
  font-size: 14px;
  font-weight: 500;
}

/* Join CTA */
.join-cta {
  padding-top: 0;
}

.join-card {
  background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-16);
  text-align: center;
}

@media (max-width: 640px) {
  .join-card {
    padding: var(--space-10);
  }
}

.join-content h2 {
  color: white;
  margin-bottom: var(--space-4);
}

.join-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto var(--space-8);
  line-height: 1.7;
}

.join-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

@media (max-width: 640px) {
  .join-buttons {
    flex-direction: column;
    align-items: center;
  }
}

.join-card .btn-primary {
  background: white;
  color: var(--brand-primary);
}

.join-card .btn-primary:hover {
  background: var(--gray-100);
}

.join-card .btn-secondary {
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

.join-card .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
