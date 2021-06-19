type Status = "error" | "warning" | "success";

export type TNotification = {
  visibility?: boolean;
  status: Status;
  message: string;
} | null;
