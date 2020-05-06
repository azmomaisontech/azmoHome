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
  let token;

  beforeEach(async () => {
    server = require("../../../index");

    const response = await request(server)
      .post("/api/v1/auth/register")
      .send(testUser);

    token = response.body.token;
  });

  afterEach(async () => {
    await server.close();
    await User.deleteMany({});
  });

  describe("Register a new user", () => {
    let user;

    const exec = async () => {
      return await request(server)
        .post("/api/v1/auth/register")
        .send(user);
    };

    beforeEach(async () => {
      await User.deleteMany({});
    });

    it("Should return a 400 error for missing field", async () => {
      user = {};
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("Should return 400 error for already exisiting email ", async () => {
      user = [testUser, testUser];
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("Should return 400 error for password shorter than 5 char", async () => {
      user = { name: "b", email: "b@email.com", password: "1234" };
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("Should register a new User", async () => {
      user = testUser;
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Login a User", () => {
    let user;

    const exec = async () => {
      return await request(server)
        .post("/api/v1/auth/login")
        .send(user);
    };

    it("Should return 401 if fields are empty", async () => {
      user = {};
      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("Should return 401 error if user doesn't exist", async () => {
      user = { email: "b@test.com", password: "12345" };
      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("Should return 401 error if user password doesn't match", async () => {
      user = { email: "a@test.com", password: "67890" };
      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("Should login a user", async () => {
      user = { email: "a@email.com", password: "12345" };
      const res = await exec();

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Get a User", () => {
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
    const logoutUser = "/api/v1/auth/logout";

    it("Should set cookie as none", async () => {
      const res = await request(server).get(logoutUser);

      expect(res.status).toBe(200);
    });
  });

  describe("Update username", () => {
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
    let password;

    const exec = async () => {
      return request(server)
        .put("/api/v1/auth/updatepassword")
        .set("Authorization", "Bearer " + token)
        .send(password);
    };

    it("Should return 400 if user enters password < 5 char", async () => {
      password = { currentPassword: "12345", newPassword: "6789" };
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("Should return 401 if user enters wrong current password", async () => {
      password = { currentPassword: "67890" };
      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("Should return 200 and a new token if user info is correct", async () => {
      password = { currentPassword: "12345", newPassword: "67890" };
      const res = await exec();

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Delete User", () => {
    const deleteUser = "/api/v1/auth/removeaccount";

    it("Should return 200, remove account from DB", async () => {
      const res = await request(server)
        .delete(deleteUser)
        .set("Authorization", "Bearer " + token);

      expect(res.status).toBe(200);
    });
  });
});
