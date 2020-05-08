const request = require("supertest");
const User = require("../../../model/User");
const Agency = require("../../../model/Agency");
const mongoose = require("mongoose");
jest.setTimeout(30000);

describe("/api/v1/agency", () => {
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
      agency = { name: "a", description: "b" };
      await exec();
      const res = await exec();
      expect(res.status).toBe(400);
      expect(res.body.error).toMatch(/Maximum/);
    });

    it("Should return 201 and create an agency", async () => {
      agency = { name: "a", description: "b" };
      const res = await exec();
      expect(res.status).toBe(201);
      expect(res.body.data).toHaveProperty("name", "a");
    });
  });

  describe("Create an agency once to run this blocks of test", () => {
    let agency;
    beforeAll(async () => {
      agency = await request(server)
        .post("/api/v1/agency")
        .set("Authorization", "Bearer " + token)
        .send({ name: "a", description: "a" });
    });

    afterAll(async () => {
      await Agency.deleteMany({});
    });

    describe("get all agencies", () => {
      it("Should return 200 and all agencies in the DB", async () => {
        const res = await request(server).get("/api/v1/agency");

        expect(res.status).toBe(200);
        expect(res.body.data).toContainEqual(expect.objectContaining({ name: "a", description: expect.anything() }));
      });
    });

    describe("get an agency", () => {
      let id;
      const exec = async () => {
        return await request(server).get(`/api/v1/agency/${id}`);
      };

      it("Should return 404 error if user provide an invalid Id", async () => {
        id = 1;
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 404 error if no agency with the id exist", async () => {
        id = mongoose.Types.ObjectId();
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 200 and the agency", async () => {
        id = agency.body.data._id;
        const res = await exec();

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("name", "a");
      });
    });

    describe("Update an agency", () => {
      let id;
      const exec = async () => {
        return await request(server)
          .put(`/api/v1/agency/${id}`)
          .set("Authorization", "Bearer " + token)
          .send({ name: "b" });
      };

      it("Should return 404 error if user provide an invalid Id", async () => {
        id = 1;
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 404 error if no agency with the id exist", async () => {
        id = mongoose.Types.ObjectId();
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 200 and the new updated info", async () => {
        id = agency.body.data._id;
        const res = await exec();

        expect(res.status).toBe(200);
        expect(res.body.data).toHaveProperty("name", "b");
      });
    });

    describe("Update Agency Photo", () => {
      let id;
      let image;
      const exec = async () => {
        return await request(server)
          .put(`/api/v1/agency/${id}/photo`)
          .set("Authorization", "Bearer " + token)
          .attach("file", image);
      };

      it("Should return 404 error if user provide an invalid Id", async () => {
        id = 1;
        image = __dirname + "/testImage/correct.jpg";
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 404 error if no agency with the id exist", async () => {
        id = mongoose.Types.ObjectId();
        image = __dirname + "/testImage/correct.jpg";
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 400 error if no file was uploaded", async () => {
        id = agency.body.data._id;
        image = "";
        const res = await exec();
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/upload a file/i);
      });

      it("Should return 400 error if uploaded file is not of type image", async () => {
        id = agency.body.data._id;
        image = __dirname + "/testImage/pdf.pdf";
        const res = await exec();
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/upload/i);
      });

      it("Should return 400 error if uploaded file larger than 400KB", async () => {
        id = agency.body.data._id;
        image = __dirname + "/testImage/large.jpg";
        const res = await exec();
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/less/i);
      });

      it("Should just return 200 and the filename", async () => {
        id = agency.body.data._id;
        image = __dirname + "/testImage/correct.jpg";
        const res = await exec();

        expect(res.status).toBe(200);
        expect(res.body.data).toMatch(/photo/);
      });
    });

    describe("Delete an agency", () => {
      let id;
      const exec = async () => {
        return await request(server)
          .delete(`/api/v1/agency/${id}`)
          .set("Authorization", "Bearer " + token)
          .send({ name: "b" });
      };

      it("Should return 404 error if user provide an invalid Id", async () => {
        id = 1;
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 404 error if no agency with the id exist", async () => {
        id = mongoose.Types.ObjectId();
        const res = await exec();
        expect(res.status).toBe(404);
      });

      it("Should return 200", async () => {
        id = agency.body.data._id;
        const res = await exec();

        expect(res.status).toBe(200);
      });
    });
  });
});
