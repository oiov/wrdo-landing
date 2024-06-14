import FooterLinks from "@/components/footer/FooterLinks";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer className="bg-gray-900/60 backdrop-blur-xl">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="mx-auto w-full px-6 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src="/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                WR.DO
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Products
              </h2>
              <ul className="text-gray-500 space-y-3 dark:text-gray-400 font-medium">
                <li>
                  <a href="https://wr.do/ai" className="hover:underline">
                    OiChat
                  </a>
                </li>
                <li>
                  <a href="https://inke.app" className="hover:underline">
                    Inke
                  </a>
                </li>
                <li>
                  <a href="https://iconce.com" className="hover:underline">
                    Iconce
                  </a>
                </li>
                <li>
                  <a href="https://vmail.dev" className="hover:underline">
                    Vmail
                  </a>
                </li>
                <li>
                  <a href="https://wr.do/rmbg" className="hover:underline">
                    Remover
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 space-y-3 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/yesmoree"
                    className="hover:underline"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a href="mailto:hi@oiov.dev" className="hover:underline">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between mt-8">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://wr.do/blog" className="hover:underline">
              oiov
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
