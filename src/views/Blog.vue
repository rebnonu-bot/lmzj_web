<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="hero-sm">
      <div class="container">
        <span class="overline">博客</span>
        <h1 class="heading-hero">技术洞察与行业观点</h1>
        <p class="hero-desc">
          分享最新的技术趋势、产品更新和行业最佳实践
        </p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="featured-section section-padding">
      <div class="container">
        <div class="featured-card">
          <div class="featured-image">
            <div class="image-placeholder featured">
              <span>Featured Image</span>
            </div>
          </div>
          <div class="featured-content">
            <div class="post-meta">
              <span class="post-category">技术深度</span>
              <span class="post-date">2024年12月15日</span>
            </div>
            <h2 class="featured-title">
              2025年前端技术趋势：AI驱动的开发革命
            </h2>
            <p class="featured-excerpt">
              探讨人工智能如何改变前端开发工作流程，从代码生成到自动化测试，
              AI正在重塑开发者的工作方式。本文深入分析最新的AI工具和实践...
            </p>
            <a href="#" class="read-more">
              阅读全文
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-bar">
          <button 
            v-for="category in categories" 
            :key="category"
            class="filter-btn"
            :class="{ active: activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="blog-grid-section section-padding">
      <div class="container">
        <div class="blog-grid">
          <article class="blog-card" v-for="(post, index) in filteredPosts" :key="index">
            <div class="blog-image">
              <div class="image-placeholder">
                <span>Image {{ index + 1 }}</span>
              </div>
              <span class="blog-category">{{ post.category }}</span>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-read">{{ post.readTime }} 分钟阅读</span>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <div class="blog-author">
                <div class="author-avatar-sm">{{ post.author.charAt(0) }}</div>
                <span class="author-name">{{ post.author }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="page-btn" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            上一页
          </button>
          <div class="page-numbers">
            <button class="page-number active">1</button>
            <button class="page-number">2</button>
            <button class="page-number">3</button>
            <span>...</span>
            <button class="page-number">10</button>
          </div>
          <button class="page-btn">
            下一页
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section section-padding">
      <div class="container">
        <div class="newsletter-card">
          <div class="newsletter-content">
            <h2 class="heading-section">订阅我们的博客</h2>
            <p class="newsletter-desc">
              每周获取最新的技术文章和行业洞察，不错过任何重要更新。
            </p>
            <form class="newsletter-form" @submit.prevent="subscribe">
              <input 
                type="email" 
                v-model="email"
                class="input newsletter-input"
                placeholder="请输入您的邮箱地址"
                required
              />
              <button type="submit" class="btn btn-primary" :disabled="isSubscribing">
                <span v-if="isSubscribing">订阅中...</span>
                <span v-else>立即订阅</span>
              </button>
            </form>
            <p v-if="subscribeSuccess" class="subscribe-success">订阅成功！感谢您的关注。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('全部');
const email = ref('');
const isSubscribing = ref(false);
const subscribeSuccess = ref(false);

const categories = ['全部', '技术深度', '产品更新', '行业洞察', '最佳实践', '团队文化'];

const posts = [
  {
    category: '技术深度',
    date: '2024年12月10日',
    readTime: 8,
    title: '微服务架构的十个最佳实践',
    excerpt: '在构建大规模分布式系统时，微服务架构成为了首选。本文总结了十年微服务实践的经验教训...',
    author: '李明'
  },
  {
    category: '产品更新',
    date: '2024年12月8日',
    readTime: 5,
    title: 'TechCorp 2.0 正式发布：AI功能全面上线',
    excerpt: '我们很高兴地宣布 TechCorp 2.0 版本正式发布，带来了全新的 AI 助手功能和智能分析能力...',
    author: '产品团队'
  },
  {
    category: '行业洞察',
    date: '2024年12月5日',
    readTime: 6,
    title: '数字化转型：企业面临的五大挑战',
    excerpt: '数字化转型不是简单的技术升级，而是涉及组织、流程、文化的全面变革。本文分析了企业转型中的关键挑战...',
    author: '王芳'
  },
  {
    category: '最佳实践',
    date: '2024年12月1日',
    readTime: 10,
    title: '从零构建高可用系统的完整指南',
    excerpt: '高可用系统是保障业务连续性的基础。本文详细介绍了从架构设计到运维监控的完整实践方案...',
    author: '张伟'
  },
  {
    category: '团队文化',
    date: '2024年11月28日',
    readTime: 4,
    title: '远程工作三年：我们的经验与教训',
    excerpt: '自从实施远程工作政策以来，我们的团队效率和员工满意度都有显著提升。分享一下我们的实践经验...',
    author: 'HR团队'
  },
  {
    category: '技术深度',
    date: '2024年11月25日',
    readTime: 12,
    title: '深入理解 React Server Components',
    excerpt: 'React Server Components 是 React 生态的重大创新。本文深入解析其工作原理和最佳实践...',
    author: '刘强'
  }
];

const filteredPosts = computed(() => {
  if (activeCategory.value === '全部') {
    return posts;
  }
  return posts.filter(post => post.category === activeCategory.value);
});

const subscribe = async () => {
  isSubscribing.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000));
  isSubscribing.value = false;
  subscribeSuccess.value = true;
  email.value = '';
  setTimeout(() => {
    subscribeSuccess.value = false;
  }, 3000);
};
</script>

<style scoped>
/* Featured Section */
.featured-section {
  padding: 80px 0 40px;
}

.featured-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-10);
  background: var(--bg-secondary);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

@media (max-width: 1024px) {
  .featured-card {
    grid-template-columns: 1fr;
  }
}

.featured-image {
  min-height: 400px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  font-size: 16px;
}

.image-placeholder.featured {
  min-height: 400px;
}

.featured-content {
  padding: var(--space-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-meta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.post-category {
  background: var(--brand-50);
  color: var(--brand-primary);
  font-size: 13px;
  font-weight: 600;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
}

[data-theme="dark"] .post-category {
  background: rgba(59, 130, 246, 0.1);
}

.post-date {
  font-size: 14px;
  color: var(--text-tertiary);
}

.featured-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

@media (max-width: 768px) {
  .featured-title {
    font-size: 24px;
  }
}

.featured-excerpt {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--brand-primary);
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--duration-fast);
}

.read-more:hover {
  gap: var(--space-3);
}

/* Filter Section */
.filter-section {
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--border-color);
}

.filter-bar {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.filter-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.filter-btn.active {
  background: var(--brand-primary);
  color: white;
}

/* Blog Grid */
.blog-grid-section {
  padding: var(--space-12) 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

.blog-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all var(--duration-normal);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.blog-image {
  position: relative;
  height: 200px;
}

.blog-image .image-placeholder {
  height: 100%;
}

.blog-category {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  background: rgba(255, 255, 255, 0.9);
  color: var(--brand-primary);
  font-size: 12px;
  font-weight: 600;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  backdrop-filter: blur(4px);
}

[data-theme="dark"] .blog-category {
  background: rgba(15, 23, 42, 0.9);
}

.blog-content {
  padding: var(--space-6);
}

.blog-meta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
}

.blog-date, .blog-read {
  font-size: 13px;
  color: var(--text-tertiary);
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-excerpt {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-author {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.author-avatar-sm {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light) 100%);
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-name {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}

.page-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.page-btn:hover:not(:disabled) {
  border-color: var(--brand-primary);
  color: var(--brand-primary);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.page-number {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.page-number:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.page-number.active {
  background: var(--brand-primary);
  color: white;
}

.page-numbers span {
  color: var(--text-tertiary);
  padding: 0 var(--space-2);
}

/* Newsletter */
.newsletter-section {
  padding-top: 0;
}

.newsletter-card {
  background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-16);
  text-align: center;
}

@media (max-width: 640px) {
  .newsletter-card {
    padding: var(--space-10);
  }
}

.newsletter-content h2 {
  color: white;
  margin-bottom: var(--space-4);
}

.newsletter-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  max-width: 500px;
  margin: 0 auto var(--space-8);
}

.newsletter-form {
  display: flex;
  gap: var(--space-4);
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
  }
}

.newsletter-input {
  flex: 1;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.newsletter-card .btn-primary {
  background: white;
  color: var(--brand-primary);
}

.newsletter-card .btn-primary:hover {
  background: var(--gray-100);
}

.subscribe-success {
  color: white;
  margin-top: var(--space-4);
}
</style>
