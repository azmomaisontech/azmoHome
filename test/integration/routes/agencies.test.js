const request = require("supertest");
const User = require("../../../model/User");
const Agency = require("../../../model/Agency");
jest.setTimeout(30000);

fdescribe("/api/v1/agency", () => {
  let server;
  let token;
  beforeAll(async () => {
    server = require("../../../index");
    let user = new User({
      name: "a",
      email: "a@test.com",
      password: "123456",
      role: "agent"
    });
    await user.save();
    token = await user.getSignedJwtToken();
  });

  afterAll(async () => {
    await User.deleteMany({});
    await server.close();
  });

  describe("Create an Agency", () => {
    let agency;
    const exec = async () => {
      return await request(server)
        .post("/api/v1/agency")
        .set("Authorization", "Bearer " + token)
        .send(agency);
    };

    afterEach(async () => {
      await Agency.deleteMany({});
    });

    it("Should return 400 error if user already created an agency before", async () => {
      agency = { name: "a", description: "a" };
      await exec();
      const res = await exec();
      expect(res.status).toBe(400);
      console.log(res);
    });
  });
});
