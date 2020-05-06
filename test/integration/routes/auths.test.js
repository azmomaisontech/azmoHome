const request = require("supertest");
const User = require("../../../model/User");
jest.setTimeout(30000);

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

  describe("Get a User", () => {
    let token;

    beforeEach(async () => {
      const response = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);

      token = response.body.token;
    });

    const getUser = "/api/v1/auth/me";

    it("Should return User Info", async () => {
      const res = await request(server)
        .get(getUser)
        .set("Authorization", "Bearer " + token);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty("name", "a");
    });
  });

  describe("LogOut a user", () => {
    let token;

    beforeEach(async () => {
      const response = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);

      token = response.body.token;
    });

    const logoutUser = "/api/v1/auth/logout";

    it("Should set cookie as none", async () => {
      const res = await request(server).get(logoutUser);

      expect(res.status).toBe(200);
    });
  });

  describe("Update username", () => {
    let token;

    beforeEach(async () => {
      const response = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);

      token = response.body.token;
    });

    const updateUsername = "/api/v1/auth/updatedetails";

    it("Should return 200 and new user name", async () => {
      const res = await request(server)
        .put(updateUsername)
        .set("Authorization", "Bearer " + token)
        .send({ name: "b" });

      expect(res.status).toBe(200);
      expect(res.body.data.name).toMatch(/b/);
    });
  });

  describe("Update a User Password", () => {
    let token;

    beforeEach(async () => {
      const response = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);

      token = response.body.token;
    });

    const updatePassword = "/api/v1/auth/updatepassword";

    it("Should return 401 if user enters wrong current password", async () => {
      const res = await request(server)
        .put(updatePassword)
        .set("Authorization", "Bearer " + token)
        .send({ currentPassword: "67890" });

      expect(res.status).toBe(401);
    });

    it("Should return 200 and a new token if user info is correct", async () => {
      const res = await request(server)
        .put(updatePassword)
        .set("Authorization", "Bearer " + token)
        .send({ currentPassword: "12345", newPassword: "67890" });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Delete User", () => {
    let token;

    beforeEach(async () => {
      const response = await request(server)
        .post("/api/v1/auth/register")
        .send(testUser);

      token = response.body.token;
    });

    const deleteUser = "/api/v1/auth/removeaccount";

    it("Should return 200, remove account from DB", async () => {
      const res = await request(server)
        .delete(deleteUser)
        .set("Authorization", "Bearer " + token);

      expect(res.status).toBe(200);
    });
  });
});
