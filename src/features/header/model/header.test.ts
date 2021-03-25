import { allSettled, fork } from "effector";

import "./header.init";
import { root } from "lib/effector-root";
import { triggerBurger, $isBurgerOpen } from "./header.model";

const voidParam = (() => {})();

describe("header model test", () => {
  test("test event called once", async () => {
    const triggerBurgerFn = jest.fn();
    triggerBurger.watch(triggerBurgerFn);

    const scope = fork(root);

    await allSettled(triggerBurger, { scope, params: voidParam });

    expect(triggerBurgerFn).toHaveBeenCalledTimes(1);
  });

  test("$isBurgerOpen store get correct value", async () => {
    const scope = fork(root);

    expect(scope.getState($isBurgerOpen)).toEqual(false);

    await allSettled(triggerBurger, {
      scope,
      params: voidParam
    });

    expect(scope.getState($isBurgerOpen)).toEqual(true);
  });
});
