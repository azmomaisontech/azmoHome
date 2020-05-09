const request = require("supertest");
const User = require("../../../model/User");
const Agency = require("../../../model/Agency");
jest.setTimeout(30000);

describe("Protect & Authorize Middleware", () => {
  let server;
  let userToken;
  let agentToken;
  beforeAll(async () => {
    server = require("../../../index");

    const user = await request(server)
      .post("/api/v1/auth/register")
      .send({
        name: "a",
        email: "a@test.com",
        password: "123456"
      });

    const agent = await request(server)
      .post("/api/v1/auth/register")
      .send({
        name: "b",
        email: "b@test.com",
        password: "123456",
        role: "agent"
      });

    userToken = user.body.token;
    agentToken = agent.body.token;
  });

  afterAll(async () => {
    await server.close();
    await User.deleteMany({});
    await Agency.deleteMany({});
  });

  describe("Auth Route - Protect Middleware", () => {
    it("Should return 401 error if user is not logged in", async () => {
      const res = await request(server).get("/api/v1/auth/me");
      expect(res.status).toBe(401);
      expect(res.body.error).toMatch(/Unauthorized/i);
    });

    it("Should return 200 if user is logged in", async () => {
      const res = await request(server)
        .get("/api/v1/auth/me")
        .set("Authorization", "Bearer " + userToken);
      expect(res.status).toBe(200);
    });
  });

  describe("Agency Route - Authorize Middleware", () => {
    let token;
    const exec = async () => {
      return await request(server)
        .post("/api/v1/agency")
        .set("Authorization", "Bearer " + token)
        .send({ name: "c", description: "c" });
    };

    it("Should return 401 error if user is not an agent", async () => {
      token = userToken;
      const res = await exec();
      expect(res.status).toBe(403);
      expect(res.body.error).toMatch(/cannot perform this/i);
    });

    it("Should get return 200 if user is an agent", async () => {
      token = agentToken;
      const res = await exec();
      expect(res.status).toBe(201);
    });
  });
});
