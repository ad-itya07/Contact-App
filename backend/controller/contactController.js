import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ContactController {
  async getContacts(req, res) {
    let { page, limit, countryCode, sortOrder, searchIn, searchValue } = req.query;
    
    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : 10;
    const skip = (page - 1) * limit;

    let orderBy = {};
    if (sortOrder) {
      let order = sortOrder.sortBy;
      orderBy[order] = sortOrder.order;      
    }

    let search = {};
    if (searchIn && searchValue) {
      search[searchIn.value] ={
        contains: searchValue,
        mode: 'insensitive',
      };
    }

    let filters = {};
    if (countryCode) {
      filters.countryCode = countryCode.value;
    }

    const contacts = await prisma.contact.findMany({
      where: {
        AND: [filters,search]
      },
      skip,
      take: parseInt(limit),
      orderBy,
    });

    const totalContacts = await prisma.contact.count({
      where: filters,
    });
    const totalPages = Math.ceil(totalContacts / limit);

    res.json({
      contacts,
      totalPages,
      currentPage: parseInt(page),
    });
  }
}

export default new ContactController();