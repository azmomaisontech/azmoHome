const request = require("supertest");
const User = require("../../../model/User");
jest.setTimeout(20000);

describe("/api/v1/auth", () => {
  testUser = {
    name: "a",
    email: "a@email.com",
    password: "12345"
  };
  let server;

  beforeEach(() => {
    server = require("../../../index");
  });

  afterEach(async () => {
    await server.close();
    await User.deleteMany({});
  });

  describe("Register a new user", () => {
    const registerURI = "/api/v1/auth/register";

    it("Should return an error for missing field", async () => {
      const res = await request(server)
        .post(registerURI)
        .send({});
      expect(res.status).toBe(400);
    });

    it("Should return error for already exisiting email ", async () => {
      const res = await request(server)
        .post(registerURI)
        .send([testUser, testUser]);

      expect(res.status).toBe(400);
    });

    it("Should return error for password shorter than 5 char", async () => {
      const res = await request(server)
        .post(registerURI)
        .send({ name: "b", email: "b@email.com", password: "1234" });
      expect(res.status).toBe(400);
    });

    it("Should register a new User", async () => {
      const res = await request(server)
        .post(registerURI)
        .send(testUser);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Login a User", () => {
    beforeEach(async () => {
      await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);
    });

    const loginURI = "/api/v1/auth/login";

    it("Should return 401 if fields are empty", async () => {
      const res = await request(server)
        .post(loginURI)
        .send({});
      expect(res.status).toBe(401);
    });

    it("Should return 401 error if user doesn't exist", async () => {
      const res = await request(server)
        .post(loginURI)
        .send({ email: "b@test.com", password: "12345" });
      expect(res.status).toBe(401);
    });

    it("Should return 401 error if user password doesn't match", async () => {
      const res = await request(server)
        .post(loginURI)
        .send({ email: "a@test.com", password: "67890" });
      expect(res.status).toBe(401);
    });

    it("Should login a user", async () => {
      const res = await request(server)
        .post(loginURI)
        .send({ email: "a@email.com", password: "12345" });
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });
});
