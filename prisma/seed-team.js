const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding team data...');

  const teamMembers = [
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Eddy Denison",
      designation: "CEO",
      imageUrl: "/Cards.svg",
      bio: "Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.",
      linkedin: "https://linkedin.com",
    }
  ];

  for (const member of teamMembers) {
    await prisma.teamMember.create({
      data: member,
    });
  }

  console.log('Team seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
