const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding resources data...');

  const blogs = [
    {
      title: "Top Cybersecurity Trends Every Business Should Know in 2026",
      description: "Discover the latest threats and protection strategies as the digital landscape continues to evolve in the coming year.",
      category: "Blog",
      image: "/images/pages/resources/Blog/card-1-image.svg",
      content: "Full content for trend report 2026...",
      createdAt: new Date("2026-01-15")
    },
    {
      title: "How organizations can safely adopt AI",
      description: "How organizations can safely adopt AI while maintaining a robust security posture and protecting sensitive data.",
      category: "Blog",
      image: "/images/pages/resources/Blog/card-2-image.svg",
      content: "Full content for AI adoption guide...",
      createdAt: new Date("2026-01-10")
    },
    {
      title: "The Future of Cloud Security: Best Practices",
      description: "Stay ahead of regulatory changes and ensure your organization remains compliant and secure.",
      category: "Blog",
      image: "/images/pages/resources/Blog/card-3-image.svg",
      content: "Full content for cloud security...",
      createdAt: new Date("2026-01-05")
    }
  ];

  const ebooks = [
    {
      title: "The Art of Invisibility",
      author: "Kevin Mitnick",
      description: "Real-world guide on staying anonymous in the digital age.",
      category: "E-book",
      image: "/images/pages/resources/Ebooks/card-1-image.svg",
      type: "PDF",
      fileUrl: "https://example.com/art-of-invisibility.pdf"
    },
    {
      title: "Cybersecurity and Cyberwar",
      author: "P.W. Singer & Allan Friedman",
      description: "Comprehensive overview of the challenges and opportunities in cyberspace.",
      category: "E-book",
      image: "/images/pages/resources/Ebooks/card-2-image.svg",
      type: "PDF",
      fileUrl: "https://example.com/cybersecurity-cyberwar.pdf"
    },
    {
      title: "Social Engineering",
      author: "Christopher Hadnagy",
      description: "The art of human hacking and psychological manipulation.",
      category: "E-book",
      image: "/images/pages/resources/Ebooks/card-3-image.svg",
      type: "PDF",
      fileUrl: "https://example.com/social-engineering.pdf"
    }
  ];

  const newsletters = [
    {
      title: "Cyberval Quarterly Insider - Q1 2026",
      description: "Our latest updates, case studies, and security alerts for the first quarter.",
      category: "Newsletter",
      image: "/images/pages/resources/Blog/card-1-image.svg",
      content: "Quarterly newsletter content goes here...",
      type: "Newsletter"
    }
  ];

  for (const item of [...blogs, ...ebooks, ...newsletters]) {
    await prisma.resource.create({
      data: item
    });
  }

  console.log('Resources seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
