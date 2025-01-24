import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
import { TbFaceIdError } from "react-icons/tb";

export type statusToats = "success" | "error" | null;

export type IToastComponentProps = {
  msg: string;
  status: statusToats;
};

export const ToastComponent = ({ msg, status }: IToastComponentProps) => {
  if (!status) {
    return <></>;
  }

  return (
    <Toast className="w-full">
      {status === "error" ? (
        <TbFaceIdError className="h-5 w-5 text-red-600 dark:text-red-500" />
      ) : (
        <FaTelegramPlane className="h-5 w-5 text-blue-600 dark:text-blue-500" />
      )}
      <div className="pl-4 text-sm font-normal">{msg}</div>
      <Toast.Toggle />
    </Toast>
  );
};
