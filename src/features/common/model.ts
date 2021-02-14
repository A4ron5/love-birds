import { createEvent } from "effector";
import { createGate } from "effector-react";

const AppGate = createGate();
const appMounted = AppGate.open;
const appUnmounted = createEvent();

window.addEventListener("beforeunload", () => appUnmounted());

export { AppGate, appMounted, appUnmounted };
