import { root } from "lib/effector-root";

import { TNotification } from "features/notification/types";

export const changeNotification = root.createEvent<TNotification>();

const test = {
  visibility: true,
  status: "success" as const,
  message: "test"
};

export const $notification = root.createStore<TNotification | null>(test);
