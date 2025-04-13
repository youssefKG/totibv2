import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import AnimatedDiv from "../../lib/animateDiv";
import AnimatedHeader from "../../lib/animatedHeader";
import socialLinks from "../../assets/socialLinks";

type EmailFormType = {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
};

type MessageInfoType = {
  success: boolean;
  message: string;
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = useState<MessageInfoType | null>(null);
  const [emailForm, setEmailForm] = useState<EmailFormType>({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailForm({
      ...emailForm,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      console.log(import.meta.env.VITE_SERVICE_KEY);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        emailForm,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setMessageInfo({ success: true, message: "Email send successfylly" });
    } catch (error) {
      setMessageInfo({
        message: "send email to Youssef Taoussi Failed!",
        success: false,
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AnimatedDiv>
      <div className="flex gap-5 flex-col  bg-[#edede9] justify-center">
        <AnimatedHeader className="font-extrabold text-3xl border-x-[#606c38] w-fit px-4 border-x-[6px] text-[#780000] tracking-widest">
          Contact
        </AnimatedHeader>
        <p>
          I'm currently seeking new opportunities where I can contribute, grow,
          and make an impact. If you're hiring or know of any openings that
          match my skills, feel free to reach out — I’d love to connect and
          chat!
        </p>
        <form
          ref={formRef}
          className="flex flex-col max-w-2xl w-full self-center p-4 bg-[#161617] shadow gap-2 text-white rounded-md"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-1 flex-col gap-1">
              <label>First Name: </label>
              <input
                onChange={onChange}
                required
                name="firstName"
                className="border flex-1  border-[#606c38] p-2  w-full rounded-md"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label>Last Name: </label>
              <input
                required
                name="lastName"
                onChange={onChange}
                className="border flex-1 border-[#606c38] w-full p-2 rounded-md"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label>Email: </label>
            <input
              required
              name="email"
              onChange={onChange}
              className="border flex-1 border-[#606c38] w-full p-2 rounded-md"
              placeholder="Enter Email"
            />
          </div>
          <label>Description</label>
          <textarea
            required
            name="description"
            className="rounded-md border border-[#606c38] p-2"
            placeholder="Description"
          />
          {messageInfo && (
            <p
              className="text-center"
              style={{ color: messageInfo.success ? "green" : "red" }}
            >
              {messageInfo.message}
            </p>
          )}
          <button
            disabled={isLoading}
            onClick={sendEmail}
            type="submit"
            className="p-px flex items-center h-7 justify-center max-w-30 w-full px-4 bg-[#606c38]
             self-end rounded-md mt-4 "
          >
            {isLoading ? (
              <ClipLoader
                color="white"
                size={18}
                className="w-4 h-4 text-gray-200"
              />
            ) : (
              <p>Send</p>
            )}
          </button>
        </form>
        <div className="flex items-center gap-2">
          <p>Or contact me with</p>
          <a
            target="_blank"
            href={socialLinks.linkedin}
            className="flex gap-2 text-[#606c38] hover:rotate-6 duration-500 cursor-pointer
          transition-all px-3 border rounded-xl hover:bg-[#606c38]
          hover:text-white border-[#bb9457] items-center p-1"
          >
            <img
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              className="rounded-xl size-7 shadow-2xs"
            />
            <p className="font-semibold text-sm">Linkedin</p>
          </a>
          <a
            target="_blank"
            href={socialLinks.facebook}
            className="flex gap-2 text-[#606c38] hover:rotate-6 duration-500 cursor-pointer
          transition-all px-3 border rounded-xl hover:bg-[#606c38]
          hover:text-white border-[#bb9457] items-center p-1"
          >
            <img
              src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
              className="rounded-xl size-7 shadow-2xs"
            />
            <p className="font-semibold text-sm">Facebook</p>
          </a>
          <a
            target="_blank"
            href={socialLinks.instagram}
            className="flex gap-2 text-[#606c38] hover:rotate-6 duration-500 cursor-pointer
          transition-all px-3 border rounded-xl hover:bg-[#606c38]
          hover:text-white border-[#bb9457] items-center p-1"
          >
            <img
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              className="rounded-xl size-7 shadow-2xs"
            />
            <p className="font-semibold text-sm">Instagram</p>
          </a>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Contact;
