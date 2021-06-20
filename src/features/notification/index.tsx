import * as React from "react";
import { useStore } from "effector-react";

import { Popup } from "./ui/atoms";

import { $notification, changeNotification } from "./model";

export const Notification = () => {
  const notification = useStore($notification);

  if (!notification) return null;

  const { message, status } = notification;

  return (
    <Popup
      closeHandler={changeNotification}
      message={message}
      status={status}
    />
  );
};
