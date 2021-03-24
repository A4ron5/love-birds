import { root } from "lib/effector-root";

const triggerBurger = root.createEvent<void>();

const $isBurgerOpen = root.createStore<boolean>(false);

export { triggerBurger, $isBurgerOpen };
