import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';

const techCategories = [
  {
    title: 'Frontend Development',
    description: 'Building beautiful, responsive, and performant user interfaces',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Robust, scalable, and secure server-side solutions',
    technologies: [
      { name: '.NET Core', icon: '🔷' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'Go', icon: '🔵' },
      { name: 'GraphQL', icon: '◢' },
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    technologies: [
      { name: 'Flutter', icon: '💙' },
      { name: 'React Native', icon: '⚛️' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
      { name: 'iOS', icon: '📱' },
      { name: 'Android', icon: '🤖' },
    ],
  },
  {
    title: 'Database Solutions',
    description: 'Efficient data storage and management',
    technologies: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'SQL Server', icon: '🗄️' },
      { name: 'Oracle', icon: '🔴' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Elasticsearch', icon: '🔍' },
    ],
  },
  {
    title: 'Cloud Platforms',
    description: 'Scalable cloud infrastructure and services',
    technologies: [
      { name: 'Azure', icon: '☁️' },
      { name: 'AWS', icon: '🌐' },
      { name: 'Google Cloud', icon: '🌈' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Netlify', icon: '🔷' },
      { name: 'DigitalOcean', icon: '💧' },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Automation, deployment, and monitoring',
    technologies: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⚙️' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Git', icon: '📦' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Terraform', icon: '🏗️' },
    ],
  },
  {
    title: 'Trending Technologies',
    description: 'Cutting-edge solutions for modern challenges',
    technologies: [
      { name: 'AI/ML', icon: '🤖' },
      { name: 'Microservices', icon: '🔲' },
      { name: 'SaaS', icon: '☁️' },
      { name: 'Blockchain', icon: '🔗' },
      { name: 'IoT', icon: '📡' },
      { name: 'AR/VR', icon: '🥽' },
    ],
  },
];

const Technologies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium mb-4 block"
            >
              Our Tech Stack
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Powered by{' '}
              <span className="gradient-text">Modern Technologies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              We leverage the latest and most reliable technologies to build 
              scalable, performant, and future-proof solutions for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground text-center transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Technologies;
