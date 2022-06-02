import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
export interface SocialMedia {
  title: string;
  action: string;
  Icon: IconType;
}

const socialMedias: SocialMedia[] = [
  { title: "Gmail", action: "mailto:adrianoyuji@gmail.com", Icon: MdEmail },
  {
    title: "WhatsApp",
    action: "https://api.whatsapp.com/send?phone=5567999406324&text=Hello!",
    Icon: BsWhatsapp,
  },
  {
    title: "LinkedIn",
    action:
      "https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/",
    Icon: BsLinkedin,
  },
  { title: "GitHub", action: "https://github.com/adrianoyuji", Icon: BsGithub },
];

export default socialMedias;
