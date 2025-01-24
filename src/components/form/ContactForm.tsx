/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ISendMailProps, sendMailContact } from "@/service/mailSender";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef, useState } from "react";
import { Schema, ValidationError, object, string } from "yup";
import { ButtonComponent } from "../button/button-component";
import { VTextArea } from "./VTextArea";
import { VTextField } from "./VTextField";
import { ToastComponent, statusToats } from "../iteraction/toast";

export const ContactForm = () => {
  const initialData: ISendMailProps = {
    name: "",
    email: "",
    subject: "",
    msg: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSendMsg, setIsSendMsg] = useState<statusToats>(null);
  const [toastMsg, setToastMsg] = useState<string>("");

  const formRef = useRef<FormHandles>(null);
  const formVaildSchema: Schema<ISendMailProps> = object({
    name: string().required("Name is required."),
    email: string()
      .email(
        "The email address you provided is invalid. Please enter a valid email address."
      )
      .required("E-mail is required!"),
    subject: string().required("Subject is required."),
    msg: string()
      .required("Message is required")
      .min(50, "Please your message must contain at least 50 characters"),
  });

  const handleForm = useCallback((formData: ISendMailProps) => {
    setIsLoading(true);

    formVaildSchema
      .validate(formData, { abortEarly: false })
      .then((dataValid: ISendMailProps) => {
        sendMailContact(dataValid)
          .then((info) => {
            console.log(info);
            setToastMsg("Message sent successfully.");
            setIsSendMsg("success");
            handleReset();
          })
          .catch((err) => {
            console.error(err);
            setToastMsg("Message failed, a problem occurred.");
            setIsSendMsg("error");
          })
          .finally(() => {
            setIsLoading(false);
            setTimeout(() => {
              setIsSendMsg(null);
            }, 2500);
          });
      })
      .catch((err: ValidationError) => {
        console.error(err);
        const validationErrors: { [key: string]: string } = {};

        err.inner.forEach((error: any) => {
          if (!error.path || validationErrors[error.path]) return;

          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);

        setIsLoading(false);
      });
  }, []);

  const handleReset = useCallback(() => {
    formRef.current?.setData(initialData);
    formRef.current?.setErrors({});
  }, []);

  return (
    <Form
      ref={formRef}
      onSubmit={handleForm}
      onReset={handleReset}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <VTextField
              name="name"
              label="Name"
              variant="standard"
              type="text"
              disabled={isLoading}
            />
          </div>
          <div>
            <VTextField
              name="subject"
              label="Subject"
              variant="standard"
              type="text"
              disabled={isLoading}
            />
          </div>
          <div className="sm:col-span-2">
            <VTextField
              name="email"
              label="Enter your email"
              variant="standard"
              type="text"
              helperText="test"
              disabled={isLoading}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="block text-sm text-gray-500 dark:text-gray-400">
              Message
            </p>
            <div className="mt-2.5">
              <VTextArea
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="msg"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 justify-start items-end">
          <ButtonComponent type="submit" isLoading={isLoading}>
            Send Message
          </ButtonComponent>
          <ToastComponent status={isSendMsg} msg={toastMsg} />
        </div>
      </div>
    </Form>
  );
};
