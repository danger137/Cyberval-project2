const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding portfolio data...');

  const caseStudies = [
    {
      title: "Securing Financial Transactions for Global Bank",
      client: "Global Trust Bank",
      description: "Implemented a comprehensive Zero Trust architecture and multi-factor authentication system to secure cross-border transactions and protect over 10 million customer accounts.",
      category: "CyberShield Solutions",
      date: new Date("2023-11-15"),
      images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"],
      testimonial: "Cybervol's expertise was instrumental in modernizing our security posture. Their approach to Zero Trust has significantly reduced our risk profile.",
      results: "99.9% reduction in unauthorized access attempts; 40% faster compliance auditing process."
    },
    {
      title: "HIPAA Compliance Transformation",
      client: "MediHealth Systems",
      description: "Assisted a major healthcare provider in achieving full HIPAA compliance through detailed risk assessments, data encryption, and specialized security awareness training for 5,000+ staff members.",
      category: "Governance, Risk & Compliance",
      date: new Date("2024-01-20"),
      images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"],
      testimonial: "Achieving compliance seemed like an insurmountable mountain until Cybervol stepped in. Their guidance was clear, actionable, and thorough.",
      results: "100% compliance score in independent audit; Zero data breaches reported since implementation."
    },
    {
      title: "Proactive Threat Hunting for E-commerce Giant",
      client: "ShopSphere Global",
      description: "Conducted advanced offensive security simulations and continuous threat hunting to identify and mitigate complex vulnerabilities in an e-commerce platform handling $500M+ in annual revenue.",
      category: "Offensive Security",
      date: new Date("2024-03-05"),
      images: ["https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop"],
      testimonial: "Cybervol's red teaming exercise revealed critical gaps we hadn't even considered. Their technical depth is truly impressive.",
      results: "15 critical vulnerabilities patched before exploitation; 24/7 monitoring established with 15-minute incident response time."
    }
  ];

  for (const study of caseStudies) {
    await prisma.caseStudy.create({
      data: study
    });
  }

  console.log('Portfolio seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
