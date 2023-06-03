process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const DB = require("../../../config/mongoose.config");
const server = require("../../../server");

describe("Get api/user/:id", () => {
    before((done) => {
        DB.connect()
            .then(() => done())
            .catch((err) => done(err));
    });
    describe("With Login", () => {
        let COOKIE, ID;
        before((done) => {
            request(server)
                .post("/api/user/login")
                .send({
                    email: "test@test.com",
                    password: "test@test.com",
                })
                .then((res) => {
                    COOKIE = [...res.header["set-cookie"]];
                    ID = res.body.id;
                    done();
                })
                .catch((err) => {
                    throw err;
                });
        });
        it("200, Should get info", (done) => {
            request(server)
                .get(`/api/user/${ID}`)
                .set("Cookie", COOKIE)
                .then((res) => {
                    let { body, status } = res;
                    expect(status).to.equal(200);
                    expect(body).to.contain.property("_id");
                    expect(body._id).to.equal(ID);

                    done();
                })
                .catch((err) => {
                    throw new Error(err);
                });
        });

        it("401, Should be unauthorized", (done) => {
            request(server)
                .get(`/api/user/x1x32`)
                .set("Cookie", COOKIE)
                .then((res) => {
                    let { status } = res;
                    expect(status).to.equal(401);
                    done();
                })
                .catch((err) => {
                    throw new Error(err);
                });
        });
    });
    describe("Without Login", () => {
        it("401, Should be unauthorized", (done) => {
            request(server)
                .get(`/api/user/1233`)
                .then((res) => {
                    let { status } = res;
                    expect(status).to.equal(401);
                    done();
                })
                .catch((err) => {
                    throw new Error(err);
                });
        });
    });
});
