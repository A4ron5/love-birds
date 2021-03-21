import { allSettled, fork } from "effector";

import { Location } from "history";

import {
  routingDomain,
  updateLocation,
  searchPush,
  searchPop,
  $history,
  $search,
  $pathname
} from "./model";

jest.mock("lib/history", () => ({
  history: {
    location: {
      pathname: "",
      search: ""
    },
    push: () => {},
    listen: () => {}
  }
}));

describe("routing model test", () => {
  describe("history store and his mapped store get correct value", () => {
    const scope = fork(routingDomain);

    beforeEach(async () => {
      await allSettled(updateLocation, {
        scope,
        params: {
          search: "?id=101&tab=info",
          pathname: "people"
        } as Location
      });
    });

    test("set right params to $history store", () => {
      const history = { search: "?id=101&tab=info", pathname: "people" };

      expect(scope.getState($history)).toEqual(history);
    });

    test("mapped store $search get correct value from $history", () => {
      const id = scope.getState($search).get("id");
      const tab = scope.getState($search).get("tab");

      expect(id).toEqual("101");
      expect(tab).toEqual("info");
    });

    test("mapped store $pathname get correct value from $history", () => {
      const pathname = scope.getState($pathname);

      expect(pathname).toEqual("people");
    });
  });

  describe("search event works correctly", () => {
    const scope = fork(routingDomain);

    beforeEach(async () => {
      await allSettled(updateLocation, {
        scope,
        params: {
          search: "?employee=303404&status=active",
          pathname: "companies"
        } as Location
      });
    });

    test("searchPush event work correctly", async () => {
      await allSettled(searchPush, {
        scope,
        params: [
          ["id", "707"],
          ["name", "bizarre"]
        ]
      });

      const id = scope.getState($search).get("id");
      const name = scope.getState($search).get("name");
      const employee = scope.getState($search).get("employee");
      const status = scope.getState($search).get("status");

      expect(id).toEqual("707");
      expect(name).toEqual("bizarre");
      expect(employee).toEqual("303404");
      expect(status).toEqual("active");
    });

    test("searchPop event work correctly", async () => {
      await allSettled(searchPop, { scope, params: ["status"] });

      const employee = scope.getState($search).get("employee");
      const status = scope.getState($search).get("status");

      expect(employee).toEqual("303404");
      expect(status).toBeNull();
    });
  });
});
