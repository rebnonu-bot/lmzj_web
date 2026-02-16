<template>
  <div class="product">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="container">
        <div class="hero-content">
          <span class="overline">产品功能</span>
          <h1 class="heading-hero">全方位的智慧社区管理解决方案</h1>
          <p class="hero-subtitle">
            覆盖小区日常管理全部场景，降低物业服务成本，提高物业服务效率，
            为您打造专属的智慧社区运营管理体系
          </p>
        </div>
      </div>
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
      </div>
    </section>

    <!-- Modules Section -->
    <section class="modules section-padding">
      <div class="container">
        <div class="module-card" v-for="(module, index) in modules" :key="index" :id="module.id">
          <div class="module-grid" :class="{ 'reverse': index % 2 === 1 }">
            <div class="module-content">
              <div class="module-header">
                <div class="module-icon" :style="{ background: module.gradient }">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path v-if="module.icon === 'dollar'" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    <path v-if="module.icon === 'users'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle v-if="module.icon === 'users'" cx="9" cy="7" r="4"/>
                    <path v-if="module.icon === 'users'" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    <path v-if="module.icon === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path v-if="module.icon === 'vote'" d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    <path v-if="module.icon === 'building'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline v-if="module.icon === 'building'" points="9,22 9,12 15,12 15,22"/>
                    <rect v-if="module.icon === 'mobile'" x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line v-if="module.icon === 'mobile'" x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <div class="module-title">
                  <span class="overline">{{ module.subtitle }}</span>
                  <h2 class="heading-section">{{ module.title }}</h2>
                </div>
              </div>
              <p class="module-desc">{{ module.description }}</p>
              <div class="feature-list">
                <div class="feature-item" v-for="(feature, fIndex) in module.features" :key="fIndex">
                  <div class="feature-check">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>
            <div class="module-visual">
              <div class="visual-card" :style="{ background: module.gradient }">
                <div class="visual-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                    <path v-if="module.icon === 'dollar'" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    <path v-if="module.icon === 'users'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle v-if="module.icon === 'users'" cx="9" cy="7" r="4"/>
                    <path v-if="module.icon === 'users'" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    <path v-if="module.icon === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path v-if="module.icon === 'vote'" d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    <path v-if="module.icon === 'building'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline v-if="module.icon === 'building'" points="9,22 9,12 15,12 15,22"/>
                    <rect v-if="module.icon === 'mobile'" x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line v-if="module.icon === 'mobile'" x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <div class="visual-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Features -->
    <section class="quick-features section-padding">
      <div class="container">
        <div class="section-header">
          <span class="overline">功能亮点</span>
          <h2 class="heading-section">更多强大功能等你发现</h2>
        </div>
        <div class="quick-grid">
          <div class="quick-card" v-for="(item, index) in quickFeatures" :key="index">
            <div class="quick-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="item.icon === 'message'" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                <rect v-if="item.icon === 'file'" x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line v-if="item.icon === 'file'" x1="16" y1="2" x2="16" y2="6"/>
                <line v-if="item.icon === 'file'" x1="8" y1="2" x2="8" y2="6"/>
                <line v-if="item.icon === 'file'" x1="3" y1="10" x2="21" y2="10"/>
                <circle v-if="item.icon === 'bell'" cx="12" cy="12" r="10"/>
                <line v-if="item.icon === 'bell'" x1="12" y1="8" x2="12" y2="12"/>
                <line v-if="item.icon === 'bell'" x1="12" y1="16" x2="12.01" y2="16"/>
                <path v-if="item.icon === 'chart'" d="M3 3v18h18"/>
                <path v-if="item.icon === 'chart'" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                <path v-if="item.icon === 'lock'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <rect v-if="item.icon === 'map'" x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle v-if="item.icon === 'map'" cx="8.5" cy="8.5" r="1.5"/>
                <polyline v-if="item.icon === 'map'" points="21 15 16 10 5 21"/>
                <path v-if="item.icon === 'printer'" d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <path v-if="item.icon === 'printer'" d="M6 14h12v8H6z"/>
                <path v-if="item.icon === 'zap'" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                <path v-if="item.icon === 'cloud'" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                <circle v-if="item.icon === 'headset'" cx="12" cy="12" r="10"/>
                <path v-if="item.icon === 'headset'" d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="heading-section">准备好开始使用了吗？</h2>
            <p class="cta-desc">立即注册免费试用，体验邻檬智能带来的效率提升</p>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const modules = [
  {
    id: 'billing',
    subtitle: '智能收费管理',
    title: '缴费率提升80%的收费管理方案',
    description: '提供小区收费项目设置、水电表预设设置、预缴周期设置、缴费模板设置等功能，支持物业费、水电费、停车费等所有费用的自动计费与多渠道缴费。',
    icon: 'dollar',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    features: [
      '收银台 - 一键收费，支持多种支付方式',
      '账单列表 - 账单生成、管理、查询',
      '缴费通知 - 自动推送，多渠道触达',
      '抄表录入 - 智能抄表，自动生成账单',
      '分摊录入 - 费用分摊，自动计算',
      '预存款管理 - 余额管理，自动抵扣',
      '收费项目管理 - 灵活配置收费项目',
      '支付管理 - 流水查询，对账方便'
    ]
  },
  {
    id: 'service',
    subtitle: '业主服务中心',
    title: '让业主满意度提升50%',
    description: '提供业主数据、房屋/车位/车辆管理、在线报事报修、工单全程追踪、业主满意度实时评价等功能，打造全方位业主服务体系。',
    icon: 'users',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    features: [
      '数据管理 - 业主、房屋、车位、车辆统一管理',
      '客服中心 - 业主咨询、投诉、建议一体化处理',
      '小区公告 - 一键推送，已读未读统计',
      '在线报事 - 拍照上传，实时进度追踪',
      '服务预订 - 家政、维修等服务预约',
      '小区活动 - 线上线下活动组织',
      '工单管理 - 全流程跟踪，超时预警',
      '满意度调查 - 实时评价，数据分析'
    ]
  },
  {
    id: 'access',
    subtitle: '智能出入管理',
    title: '0.3秒极速通行，安全便捷',
    description: '提供智能门禁、人脸识别、访客预约、车牌识别等功能，打造无感出入体验，提升小区安全等级。',
    icon: 'shield',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    features: [
      '电子通行证 - 手机扫码，快速通行',
      '人脸识别门禁 - 0.3秒识别，准确率99.9%',
      '访客预约系统 - 访客预约，业主邀约',
      '智能停车 - 车牌识别，自动抬杆',
      '梯控系统 - 刷卡/人脸直达指定楼层',
      '巡更管理 - 电子巡更，轨迹可查',
      '陌生人预警 - 异常人员自动识别',
      '出入记录 - 全记录留存，随时查询'
    ]
  },
  {
    id: 'vote',
    subtitle: '电子投票表决',
    title: '业主大会召开不再困难',
    description: '提供人脸识别核身身份验证、线上线下投票结合、自动计票等功能，解决传统投票效率低、真伪难辨、统计繁琐等问题。',
    icon: 'vote',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    features: [
      '人脸识别验证 - 确保投票人身份真实',
      '投票发起 - 灵活设置投票议题',
      '线上投票 - 手机端随时随地投票',
      '线下投票 - 支持纸质票同步录入',
      '自动计票 - 实时统计，结果一目了然',
      '投票公示 - 结果公开透明，可追溯',
      '投票模板 - 常用议题快速发起',
      '电子签名 - 支持电子签章确认'
    ]
  },
  {
    id: 'committee',
    subtitle: '业委会管理',
    title: '业委会工作的好帮手',
    description: '提供账目收支管理、动态公告发布、协同办公等功能，让业委会工作更加透明高效。',
    icon: 'building',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    features: [
      '账目管理 - 收支记录，凭证上传',
      '账目公示 - 按年度自动生成统计报表',
      '动态公告 - 业委会动态实时发布',
      '会议纪要 - 会议记录存档管理',
      '协同办公 - 业委会成员协作平台',
      '文档管理 - 规章制度、合同档案管理',
      '意见征集 - 业主意见收集整理',
      '年度审计 - 支持导出审计报表'
    ]
  },
  {
    id: 'mobile',
    subtitle: '移动办公平台',
    title: '随时随地处理物业事务',
    description: '企业微信深度集成，手机端即可处理工单、审批、收费等日常工作，让物业管理无处不在。',
    icon: 'mobile',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
    features: [
      '手机助手 - 企业微信原生体验',
      '员工管理 - 权限分级，角色管理',
      '待办推送 - 重要事项实时提醒',
      '工单处理 - 现场拍照，移动处理',
      '收费查询 - 手机端查账对账',
      '审批流程 - 移动审批，高效协作',
      '消息通知 - 多渠道消息触达',
      '数据看板 - 经营数据随时随地查看'
    ]
  }
];

const quickFeatures = [
  { icon: 'message', title: '在线客服', desc: '微信端客服，即时沟通' },
  { icon: 'file', title: '合同管理', desc: '电子合同，在线签署' },
  { icon: 'bell', title: '消息推送', desc: '多渠道通知，确保触达' },
  { icon: 'chart', title: '数据报表', desc: '经营分析，决策支持' },
  { icon: 'lock', title: '权限管理', desc: '分级授权，安全可控' },
  { icon: 'map', title: '电子巡更', desc: '巡更轨迹，实时监管' },
  { icon: 'printer', title: '票据打印', desc: '电子发票，自动开具' },
  { icon: 'zap', title: '智能抄表', desc: '蓝牙抄表，一键录入' },
  { icon: 'cloud', title: '云端部署', desc: '数据安全，自动备份' },
  { icon: 'headset', title: '专属客服', desc: '7×24小时在线支持' }
];
</script>

<style scoped>
/* Product Hero */
.product-hero {
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
  background: linear-gradient(135deg, var(--brand-200) 0%, transparent 70%);
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

/* Module Card */
.module-card {
  margin-bottom: var(--space-16);
}

.module-card:last-child {
  margin-bottom: 0;
}

.module-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.module-grid.reverse {
  direction: rtl;
}

.module-grid.reverse .module-content {
  direction: ltr;
}

.module-grid.reverse .module-visual {
  direction: ltr;
}

@media (max-width: 1024px) {
  .module-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  
  .module-grid.reverse {
    direction: ltr;
  }
}

.module-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

.module-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.module-title .overline {
  margin-bottom: var(--space-2);
}

.module-desc {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 15px;
  color: var(--text-secondary);
}

.feature-check {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-md);
  background: var(--brand-50);
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

[data-theme="dark"] .feature-check {
  background: var(--brand-900);
}

/* Module Visual */
.module-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-card {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.visual-icon {
  opacity: 0.9;
}

.visual-decoration {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Quick Features */
.quick-features {
  background: var(--bg-secondary);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .quick-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .quick-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.quick-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--duration-normal);
}

.quick-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--brand-200);
}

.quick-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: var(--brand-50);
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

[data-theme="dark"] .quick-icon {
  background: var(--brand-900);
}

.quick-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.quick-card p {
  font-size: 13px;
  color: var(--text-tertiary);
}

/* CTA Section */
.cta-section {
  padding: 0 0 100px;
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
  justify-content: center;
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
