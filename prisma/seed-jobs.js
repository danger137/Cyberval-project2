const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const jobsData = [
  {
    title: "Cybersecurity Specialists",
    location: "USA",
    type: "Full-time",
    department: "Security Engineering",
    description: "Due to increasing demand, we are seeking skilled and dedicated Cybersecurity Specialists to join our dynamic Security team. You will collaborate closely with IT, Compliance, and Risk Management to assess, develop, monitor, test, deploy, and maintain security measures for our systems and data.",
    requirements: [
      "Proven experience in cybersecurity and information security practices.",
      "Strong knowledge of network security, firewalls, and intrusion detection systems.",
      "Ability to conduct vulnerability assessments and penetration testing.",
      "Familiarity with security standards and compliance requirements (e.g., ISO 27001, GDPR).",
      "Skills in incident response and threat analysis.",
      "Experience with security tools and technologies such as SIEM, antivirus, and encryption.",
      "Excellent problem-solving and communication skills.",
      "Ability to work collaboratively with cross-functional teams to enhance security posture."
    ],
    qualifications: [
      "Proven experience in cybersecurity roles, preferably in a fast-paced environment.",
      "Strong knowledge of network security, threat analysis, and vulnerability assessment.",
      "Proficiency with security tools and technologies such as firewalls, IDS/IPS, and SIEM.",
      "Experience conducting risk assessments and developing mitigation strategies.",
      "Familiarity with compliance standards like GDPR, HIPAA, or ISO 27001.",
      "Ability to respond to and investigate security incidents effectively.",
      "Excellent problem-solving skills and attention to detail.",
      "Strong communication skills to collaborate with cross-functional teams.",
      "Relevant certifications such as CISSP, CEH, or CISM are a plus."
    ],
    workMode: "On-site",
    experience: "5 Years"
  },
  {
    title: "Cybersecurity Analyst (Threat Detection)",
    location: "USA",
    type: "Full-time",
    department: "Threat Analysis",
    description: "Due to increasing demand, we are seeking skilled and dedicated Cybersecurity Specialists to join our dynamic Security team. You will collaborate closely with IT, Compliance, and Risk Management to assess, develop, monitor, test, deploy, and maintain security measures for our systems and data.",
    requirements: [],
    qualifications: [],
    workMode: "On-site",
    experience: "3 Years"
  },
  {
    title: "Senior Security Architect",
    location: "Tallinn",
    workMode: "Hybrid",
    type: "Full-time",
    department: "Security Design",
    description: "Since 2019, we've secured over 30 major projects across 8 industries, protecting data for 500,000+ users and 1,000+ businesses in 70+ countries. Need comprehensive cybersecurity solutions or system improvements? Let's connect!",
    requirements: [],
    qualifications: [],
    experience: "8 Years"
  },
  {
    title: "Cybersecurity Product Manager",
    location: "Netherlands",
    workMode: "Remote",
    type: "Full-time",
    department: "Security Engineering",
    description: "If you're a Product Manager passionate about cybersecurity, join our fast-paced Security team. Collaborate with IT, Compliance, and Risk teams to analyze, develop, test, and support security features. We've protected 30+ projects across 8 industries, serving 500,000+ users and 1,000+ businesses worldwide.",
    requirements: [],
    qualifications: [],
    experience: "5 Years"
  },
  {
    title: "Product Owner - Cybersecurity",
    location: "USA",
    type: "Full-time",
    department: "Security Engineering",
    description: "We've secured over 30 major projects across 8 industries. Need full-cycle cybersecurity product development or system enhancements? Let's talk!",
    requirements: [],
    qualifications: [],
    workMode: "Full Time",
    experience: "4 Years"
  },
  {
    title: "Incident Response Lead",
    location: "USA",
    type: "Full-time",
    department: "Incident Response",
    description: "Lead our incident response team in identifying, containing, and remediating security threats. Ensure our clients' infrastructure remains resilient against sophisticated attacks.",
    requirements: [],
    qualifications: [],
    workMode: "Full Time",
    experience: "7 Years"
  }
];

async function main() {
  console.log('Start seeding jobs...');
  for (const job of jobsData) {
    const result = await prisma.job.create({
      data: job,
    });
    console.log(`Created job with id: ${result.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
