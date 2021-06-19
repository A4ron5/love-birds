import { $notification, changeNotification } from "./notification.model";

$notification.on(changeNotification, (_, notification) => notification);
