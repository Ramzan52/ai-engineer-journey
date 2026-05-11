export async function POST(req: Request) {
  const body = await req.json();

  const userMessage = body.message || "";
  const lowerMessage = userMessage.toLowerCase();

  let reply = "";

  if (
    lowerMessage.includes("project") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("work")
  ) {
    reply = `
## Ramzan's Projects

### Professional / Current Projects

- **Sunhub Platform**
  - Scalable modern web platform development
  - Frontend systems, backend integrations, and application workflows

- **Social27**
  - Event and engagement platform
  - Interactive UI systems and scalable frontend components

- **Aquila360**
  - Data-oriented business platform
  - Dashboards, workflows, backend communication, and scalable architecture

### Personal / Learning Projects

- **MERN Stack Applications**
  - MongoDB, Express.js, React, and Node.js
  - Authentication, CRUD systems, and API integrations

- **AI Portfolio Assistant**
  - Next.js App Router
  - Backend API routes
  - Mock AI assistant architecture
  - Markdown rendering
  - Typing animation
  - Chat-style UI experience

- **Workflow Automation System**
  - API integrations
  - Automation workflows
  - Repetitive task reduction
  - Business process improvement
`;
  } else if (
    lowerMessage.includes("skill") ||
    lowerMessage.includes("expert") ||
    lowerMessage.includes("technology") ||
    lowerMessage.includes("tech stack")
  ) {
    reply = `
## Ramzan's Technical Skills

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- Component architecture
- Responsive UI development

### Backend
- **Node.js**
- **Express.js**
- REST APIs
- Next.js API Routes
- Backend communication
- Server-side logic

### Databases
- **PostgreSQL**
- **MongoDB**
- **Redis**

### AI & Automation
- AI chat interfaces
- AI-style portfolio assistant
- Prompt engineering concepts
- API-based AI integrations
- Automation workflows
- SaaS-style AI application architecture

### Tools & Engineering
- Docker
- Git & GitHub
- Debugging
- Software maintenance
- Client support
- Full-stack application development
`;
  } else if (
    lowerMessage.includes("experience") ||
    lowerMessage.includes("job") ||
    lowerMessage.includes("previous") ||
    lowerMessage.includes("employment")
  ) {
    reply = `
## Professional Experience

### Computer & Information Systems Professional  
**HARERAM LTD**

Ramzan has professional experience in:

- Software maintenance
- Debugging application issues
- Supporting accounting-related software systems
- Client support
- Technical troubleshooting
- Business software workflows
- Improving reliability of operational systems

---

### Oxiliry

Ramzan has also contributed to development-focused and modern web application environments involving:

- Full-stack development
- Frontend engineering
- Backend integrations
- API communication
- Scalable application workflows
- UI systems
- Modern React/Next.js architecture

---

## Project Experience

Ramzan has worked on projects including:

- **Sunhub**
- **Social27**
- **Aquila360**
- **MERN Stack Applications**
- **AI Portfolio Assistant**

His experience combines practical software support, debugging, full-stack engineering, AI-focused frontend systems, and modern scalable application development.
`;
  } else if (
    lowerMessage.includes("budget") ||
    lowerMessage.includes("rate") ||
    lowerMessage.includes("pricing") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("hour")
  ) {
    reply = `
## Budget & Hourly Rate

Ramzan's estimated freelance/development rate is:

### **$20 – $30 USD per hour**

The final rate depends on:

- Project scope
- Feature complexity
- AI/backend requirements
- Timeline
- Long-term collaboration
- Maintenance/support needs
`;
  } else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("gmail") ||
    lowerMessage.includes("linkedin") ||
    lowerMessage.includes("github") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("mobile") ||
    lowerMessage.includes("number")
  ) {
    reply = `
## Contact Details

You can contact Ramzan through:

### Email
- **rarifkhalil123@gmail.com**

### Mobile
- **03314115573**

### LinkedIn
- https://www.linkedin.com/in/ramzan-arif/

### GitHub
- https://github.com/Ramzan52
`;
  } else if (
    lowerMessage.includes("location") ||
    lowerMessage.includes("country") ||
    lowerMessage.includes("city") ||
    lowerMessage.includes("pakistan") ||
    lowerMessage.includes("lahore") ||
    lowerMessage.includes("based")
  ) {
    reply = `
## Location

Ramzan is based in:

- **Lahore, Pakistan**

He is available for remote full-stack, AI, automation, and web development work.
`;
  } else if (lowerMessage.includes("code")) {
    reply = `
# Advanced Backend API Architecture Example

## JWT Authentication Middleware

\`\`\`ts
import jwt from "jsonwebtoken";

export async function authenticateUser(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      throw new Error("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    return decoded;
  } catch (error) {
    throw new Error("Invalid authentication token");
  }
}
\`\`\`

---

## PostgreSQL + Transaction Example

\`\`\`ts
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function transferBalance(
  senderId: number,
  receiverId: number,
  amount: number
) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const sender = await client.query(
      "SELECT balance FROM users WHERE id = $1",
      [senderId]
    );

    if (sender.rows[0].balance < amount) {
      throw new Error("Insufficient funds");
    }

    await client.query(
      "UPDATE users SET balance = balance - $1 WHERE id = $2",
      [amount, senderId]
    );

    await client.query(
      "UPDATE users SET balance = balance + $1 WHERE id = $2",
      [amount, receiverId]
    );

    await client.query("COMMIT");

    return {
      success: true,
    };
  } catch (error) {
    await client.query("ROLLBACK");

    throw error;
  } finally {
    client.release();
  }
}
\`\`\`

---

## Redis Cache Layer

\`\`\`ts
import Redis from "ioredis";

const redis = new Redis();

export async function getCachedUser(userId: string) {
  const cacheKey = \`user:\${userId}\`;

  const cachedUser = await redis.get(cacheKey);

  if (cachedUser) {
    return JSON.parse(cachedUser);
  }

  const user = await fetchUserFromDatabase(userId);

  await redis.set(
    cacheKey,
    JSON.stringify(user),
    "EX",
    3600
  );

  return user;
}
\`\`\`

---

## Technologies Demonstrated

- TypeScript
- PostgreSQL
- Transactions
- JWT Authentication
- Redis Caching
- Backend Architecture
- Error Handling
- Scalable API Design
`;
  } else {
    reply = `
## I am Ramzan's AI Portfolio Agent

I can answer questions about Ramzan's:

- Projects
- Skills
- Professional experience
- Budget / hourly rate
- Location
- Contact details
- Code examples

This question seems outside my portfolio knowledge area.

For anything further, please contact Ramzan directly:

### Contact Details

- **Email:** rarifkhalil123@gmail.com
- **Mobile:** 03314115573
- **LinkedIn:** https://www.linkedin.com/in/ramzan-arif/
- **GitHub:** https://github.com/Ramzan52
- **Location:** Lahore, Pakistan
`;
  }

  return Response.json({
    reply,
  });
}