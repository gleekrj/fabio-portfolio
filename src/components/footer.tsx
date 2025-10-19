import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoFabiomatos from "@/assets/logo_fabiomatos.png";
import logoFabiomatosDark from "@/assets/logo_fabiomatos_dark.png";
import { useTheme } from "@/hooks/useTheme";

export const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/gleekrj",
      icon: FaGithub,
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fabio-matos/",
      icon: FaLinkedin,
      color: "hover:text-blue-600 dark:hover:text-gray-300",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gleekrj/",
      icon: FaInstagram,
      color: "hover:text-pink-600 dark:hover:text-gray-300",
    },
    {
      name: "Email",
      url: "mailto:fabio.henrique.ss.matos@gmail.com",
      icon: MdEmail,
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5521987767688",
      icon: FaWhatsapp,
      color: "hover:text-green-600 dark:hover:text-gray-300",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img
              src={theme === "dark" ? logoFabiomatosDark : logoFabiomatos}
              alt="Fábio Matos Logo"
              className="h-24 w-auto"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 dark:text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Aberto a freelas e oportunidades fixas — sempre com foco em
                soluções simples e eficazes.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Desenvolvido por{" "}
                <a
                  href="mailto:fabio.henrique.ss.matos@gmail.com"
                  className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Fábio Matos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
