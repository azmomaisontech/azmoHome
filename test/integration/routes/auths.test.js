const request = require("supertest");
const User = require("../../../model/User");
jest.setTimeout(20000);

describe("/api/v1/auth", () => {
  testUser = {
    name: "a",
    email: "a@email.com",
    password: "12345"
  };

  describe("Register a new user", () => {
    let server;

    beforeEach(() => {
      server = require("../../../index");
    });

    afterEach(async () => {
      await server.close();
    });

    afterAll(async () => {
      await User.deleteMany({});
    });

    it("Should return an error for missing field", async () => {
      const res = await request(server)
        .post("/api/v1/auth/register")
        .send({});
      expect(res.status).toBe(400);
    });

    it("Should return error for already exisiting email ", async () => {
      const res = await request(server)
        .post("/api/v1/auth/register")
        .send([testUser, testUser]);

      expect(res.status).toBe(400);
    });

    it("Should return error for password shorter than 5 char", async () => {
      const res = await request(server)
        .post("/api/v1/auth/register")
        .send({ name: "b", email: "b@email.com", password: "1234" });
      expect(res.status).toBe(400);
    });

    it("Should register a new User", async () => {
      const res = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);
      console.log(res);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("token");
    });
  });
});
