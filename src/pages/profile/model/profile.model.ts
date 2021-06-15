import { createGate } from "effector-react";

import { root } from "lib/effector-root";

export const logout = root.createEvent();

export const fxLogout = root.createEffect<void, void>();

export const ProfilePageGate = createGate();
