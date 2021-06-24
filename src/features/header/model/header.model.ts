import { root } from "lib/effector-root";

const burgerClicked = root.createEvent<void>();
const logotypeClicked = root.createEvent<void>();

const $isBurgerOpen = root.createStore<boolean>(false);

export { burgerClicked, logotypeClicked, $isBurgerOpen };
