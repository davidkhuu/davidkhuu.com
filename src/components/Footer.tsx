import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";

export function Footer() {
  return (
    <footer className="flex flex-col text-slate-50 pt-8">
      <div className="border-t border-slate-500 pb-2">
        <div className="pt-4">Connect with me!</div>
      </div>
      <SocialLink href="https://www.linkedin.com/in/davidkhuu" icon="linkedin">
        LinkedIn
      </SocialLink>
      <SocialLink href="https://www.github.com/davidkhuu" icon="square-github">
        GitHub
      </SocialLink>
      <SocialLink href="https://twitter.com/davidkhuu" icon="square-x-twitter">
        X / Twitter
      </SocialLink>
    </footer>
  );
}

function SocialLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="flex text-slate-50 items-center hover:underline"
    >
      <div className="pr-2">
        <FontAwesome6
          name={icon}
          size={24}
          color="rgb(248 250 252)"
          class="pr-2"
        />
      </div>
      {children}
    </Link>
  );
}
