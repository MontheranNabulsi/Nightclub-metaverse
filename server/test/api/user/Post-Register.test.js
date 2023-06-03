process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const DB = require("../../../config/mongoose.config");
const server = require("../../../server");

describe("Post /api/user/register", () => {
    before((done) => {
        DB.connect()
            .then(() => done())
            .catch((err) => done(err));
    });
    /*   it("200, Should create new account", (done) => {
        request(server)
            .post("/api/user/register")
            .send({
                firstName: "test",
                lastName: "test",
                email: "test@test.com",
                password: "test@test.com",
            })
            .then((res) => {
                const { body, status } = res;
                expect(status).to.equal(200);
                expect(body).to.contain.property("msg");
                expect(body.msg).to.equal("success!");
                done();
            })
            .catch((err) => done(err));
    }); */

    it("409-1100, Should fail, duplicate", (done) => {
        request(server)
            .post("/api/user/register")
            .send({
                firstName: "test",
                lastName: "test",
                email: "test@test.com",
                password: "test@test.com",
            })
            .then((res) => {
                const { body, status } = res;
                expect(status).to.equal(409);
                expect(body).to.contain.property("error");
                expect(body.error.code).to.equal(11000);
                done();
            })
            .catch((err) => done(err));
    });
    it("400, missing some User input", (done) => {
        request(server)
            .post("/api/user/register")
            .send({
                firstName: "test",
                lastName: "test",
                password: "12354351@",
            })
            .then((res) => {
                const { body, status } = res;
                console.log(body.name);
                expect(status).to.equal(400);
                expect(body).to.contain.property("error");
                expect(body.error.name).to.equal("ValidationError");
                done();
            })
            .catch((err) => done(err));
    });
});
