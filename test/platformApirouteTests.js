import chai from "chai";
import sinon from "sinon";
import platformApiRoutes from "../src/server/apis/platformApiRoutes";
import "../src/server/app";

describe("running platform API route test",  () => {

    describe("get authors api test",  () => {
       it("get 200 status", () => {
           const res = {
             status: (status) => {
                    expect(status).to.equal(200);
                    done();
                }
           };
           const req = {
               method: "GET",
               url: "/apis/authors"
           };

           platformApiRoutes.handle(req, res);

       }) ;
    });
});