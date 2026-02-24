import { Mail, Linkedin, Github, Phone, GraduationCap, Briefcase, Cloud, Code, Terminal, Database, Container, GitBranch } from "lucide-react";

const skills = [
  { category: "Cloud & Infrastructure", items: ["AWS", "Terraform", "Linux"] },
  { category: "Containers & Orchestration", items: ["Docker", "Kubernetes"] },
  { category: "Development & Automation", items: ["Git", "GitHub Actions", "Bash"] },
  { category: "Backend", items: ["Python", "Golang", "JavaScript"] },
  { category: "Web Development", items: ["HTML/CSS", "JavaScript", "React/Next.js"] },
  { category: "Additional", items: [".NET", "SQL", "SASS"] },
];

const services = [
  { icon: "🌐", title: "Responsive Portfolio Website", desc: "Stunning, modern portfolio websites that look perfect on all devices with smooth animations and professional design." },
  { icon: "🛒", title: "E-Commerce Application", desc: "Fully functional e-commerce platforms with product management, shopping cart, payment integration, and admin dashboards." },
  { icon: "☁️", title: "Cloud Infrastructure Setup", desc: "Scalable cloud infrastructure on AWS with automated CI/CD pipelines, ensuring secure and reliable deployments." },
  { icon: "📱", title: "Web Application Development", desc: "Custom web applications tailored to business needs — dashboards, full-stack apps, RESTful APIs, and real-time features." },
  { icon: "🤖", title: "DevOps Automation", desc: "Streamlined development workflows with Infrastructure as Code, automated testing, container orchestration, and performance optimization." },
  { icon: "📊", title: "Data Analytics Solutions", desc: "Custom dashboards, interactive data visualizations, reporting tools, and business intelligence solutions." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="border-b border-border bg-surface-subtle">
      <div className="container px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face"
              alt="Asiwome Boateng"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Asiwome Boateng</h1>
          <p className="text-lg text-primary font-medium mb-4">Web Developer & DevOps Engineer</p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            "Turning caffeine into code, one deployment at a time."
          </p>
        </div>
      </div>
    </section>

    {/* About */}
    <section className="container px-4 sm:px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <Briefcase className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Experience</h3>
            <p className="text-sm text-muted-foreground">2+ Years — Web Developer & DevOps Engineer</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <GraduationCap className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Education</h3>
            <p className="text-sm text-muted-foreground">PhD Materials Engineering (In Progress)</p>
            <p className="text-sm text-muted-foreground">M.Phil. & B.Sc. Materials Engineering</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I am a <strong className="text-foreground">Web Developer, DevOps Engineer</strong> and <strong className="text-foreground">Data Analyst Associate</strong>, dedicated to integrating seamlessly into teams and delivering secure, efficient solutions for agencies, corporations, and startups worldwide.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With over 2 years of freelance experience, I've collaborated with diverse clients, gaining expertise in developing digital products for business and consumer needs. I am committed to confidentiality, continuous improvement, and leveraging my skills to drive successful outcomes in every project.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          My specialization spans cloud infrastructure, automation, CI/CD pipelines, and data-driven solutions that scale.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="border-t border-border bg-surface-subtle">
      <div className="container px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Services</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className="container px-4 sm:px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-primary mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-badge-bg px-3 py-1 text-xs font-medium text-badge-text">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="border-t border-border bg-surface-subtle">
      <div className="container px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <a href="mailto:iamasiwome@gmail.com" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground">iamasiwome@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/asiwomex/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-xs text-muted-foreground">Connect with me</p>
              </div>
            </a>
            <a href="https://github.com/Asiwomex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <Github className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs text-muted-foreground">View my projects</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
