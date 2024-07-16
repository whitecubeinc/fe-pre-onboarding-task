export type ConfirmInfo = {
  createdAt?: string;
  imageUrl?: string;
  status: ConfirmStatus;
};

export type ConfirmStatus = "SUCCESS" | "FAIL" | "BEFORE_CONFIRM";
