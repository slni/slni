<template>
  <div class="container">
    <header class="header">
      <div class="avatar">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#e0e7ff"/>
          <text x="50" y="65" font-size="40" text-anchor="middle" fill="#4f46e5" font-weight="bold">S</text>
        </svg>
      </div>
      <h1 class="name">slni</h1>
      <p class="title">开发者 · 开源爱好者</p>
    </header>

    <main class="main">
      <section class="intro">
        <p>你好！我是一名热爱技术的开发者，对开源社区充满热情。</p>
        <p>我专注于构建优雅、高效的应用程序，并乐于分享知识和经验。</p>
      </section>

      <section class="links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :aria-label="link.name"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="link-icon">{{ link.icon }}</span>
          <span class="link-text">{{ link.name }}</span>
        </a>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; {{ currentYear }} slni. Made with Vue 3 & Vite</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/slni',
    icon: '📦'
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: '✉️'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/slni',
    icon: '🐦'
  }
])
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 0.6s ease-out;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
}

.avatar svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.avatar:hover svg {
  transform: scale(1.05);
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
}

.title {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}

.main {
  flex: 1;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.intro {
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.intro p {
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: all 0.2s ease;
}

.link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.link-icon {
  font-size: 1.5rem;
}

.link-text {
  font-size: 1rem;
}

.footer {
  text-align: center;
  padding-top: 3rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  animation: fadeIn 0.6s ease-out 0.6s both;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .name {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1rem;
  }

  .link {
    padding: 0.875rem 1.25rem;
  }
}
</style>
