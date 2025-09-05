"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Loader from "@/components/ui/Loader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { MailCheck } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+33) 7 59 52 11 69",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "assil.dkhil28@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Mulhouse, France",
  },
];

const Contact = () => {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const resetForm = () => {
    setConfirmation(false);
    setSubmitError("");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError("");

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send("service_3qc1psg", "template_9tykc09", templateParams, "uT9QiGnvB-axtb4oZ");
      setConfirmation(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      console.log('SUCCESS!');
    } catch (err) {
      setSubmitError(t("submissionFailed"));
      console.log('FAILED...', err);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmationAndErrorStyles = clsx("bg-primary", {
    "bg-red-500/10": submitError,
    "border-red-500/50": submitError,
    "text-red-700": submitError,
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              onChange={() => {
                if (submitError) setSubmitError("");
              }}
            >
              {!confirmation && !submitError && (
                <>
                  <h3 className="text-3xl text-accent">{t("title")}</h3>
                  <p className="text-white/60">{t("description")}</p>
                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="firstname"
                      placeholder={t("firstname")}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="lastname"
                      placeholder={t("lastname")}
                      onChange={handleChange}
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder={t("email")}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="phone"
                      placeholder={t("phone")}
                      onChange={handleChange}
                    />
                  </div>
                  {/* select */}
                  <Select
                    name="service"
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("selectService")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t("selectService")}</SelectLabel>
                        <SelectItem value="webDevelopment">
                          {t("services.webDevelopment")}
                        </SelectItem>
                        <SelectItem value="cdi">{t("services.cdi")}</SelectItem>
                        <SelectItem value="cdd">{t("services.cdd")}</SelectItem>
                        <SelectItem value="intern">
                          {t("services.intern")}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {/* textarea */}
                  <Textarea
                    className="h-[200px]"
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    onChange={handleChange}
                  />
                  {/* btn */}
                  <Button
                    size="md"
                    className={`max-w-48 ${isLoading ? "bg-accent-hover" : ""}`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {!isLoading ? t("sendMessage") : <Loader />}
                  </Button>
                </>
              )}

              {(confirmation || submitError) && (
                <div className="space-y-4">
                  <Alert
                    className={clsx(
                      confirmationAndErrorStyles,
                      submitError ? "bg-neutral-900" : "bg-green-900"
                    )}
                  >
                    {!submitError && <MailCheck className="h-4 w-4" />}
                    <AlertTitle>
                      {submitError ? t("submissionFailed") : t("messageSent")}
                    </AlertTitle>
                    <AlertDescription>
                      {submitError || t("thankYouMessage")}
                    </AlertDescription>
                  </Alert>
                  <Button
                    size="md"
                    className="max-w-48"
                    onClick={resetForm}
                  >
                    {t("sendAnotherMessage") || "Send Another Message"}
                  </Button>
                </div>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">
                      {t(`contactInfo.${item.title.toLowerCase()}`)}
                    </p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
