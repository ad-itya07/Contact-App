import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ContactController {
  async getContacts(req, res) {
    let { page, limit } = req.query;
    
    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : 10;

    const skip = (page - 1) * limit;
    const contacts = await prisma.contact.findMany({
      skip,
      take: parseInt(limit),
    });

    const totalContacts = await prisma.contact.count();
    const totalPages = Math.ceil(totalContacts / limit);

    res.json({
      contacts,
      totalPages,
      currentPage: parseInt(page),
    });
  }
}

export default new ContactController();