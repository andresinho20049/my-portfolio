import { LinkAppearanceButton } from "@/components/button/link-appearance-button";
import { ContactForm } from "@/components/form/ContactForm";
import {
  AdsenseArticleComponent,
  AdsenseHorizontalComponent,
  AdsenseSquareComponent,
} from "@/components/google/AdsenseComponent";
import { Metadata } from "next";
import Image from "next/image";
import { TbBrandUpwork } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Feel free to contact us (andresinho20049 team), we will get back to you as soon as possible.",
  keywords: ["Contact", "E-mail", "Andresinho20049", "gmail"],
};

export default function Contact() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl font-bold text-blue-700">Contact Us</h1>
            <p className="my-6 text-lg leading-8 text-gray-600">
              Feel free to contact us, we will get back to you as soon as
              possible.
            </p>
            <AdsenseArticleComponent />
            <hr className="my-6" />
            <div className="leading-7 text-gray-600 space-y-4">
              <p className="text-center">
                Find my freelance profile link below.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="flex-1">
                  <LinkAppearanceButton
                    href="https://www.upwork.com/freelancers/~01f1d9d0a1141e7c42"
                    isBlank
                  >
                    <TbBrandUpwork className="bg-green-700 rounded-full h-8 w-8" />
                    UpWork
                  </LinkAppearanceButton>
                </div>
                <div className="flex-1">
                  <LinkAppearanceButton
                    href="https://www.workana.com/freelancer/c718379dcd94c24d33a82a849af53bf1"
                    isBlank
                  >
                    <Image
                      alt="workana Logo"
                      src={"/svg/workana.svg"}
                      width={34}
                      height={34}
                    />{" "}
                    Workana
                  </LinkAppearanceButton>
                </div>
                <div className="flex-1">
                  <LinkAppearanceButton
                    href=" https://br.fiverr.com/andresinho20049"
                    isBlank
                  >
                    <Image
                      alt="fiverr Logo"
                      src={"/svg/fiverr.svg"}
                      width={58}
                      height={58}
                    />
                  </LinkAppearanceButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="col-span-2 place-self-center w-full">
          <AdsenseSquareComponent />
        </div>
      </div>
    </div>
  );
}
