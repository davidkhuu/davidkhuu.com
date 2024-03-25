import { Link } from "expo-router";

export function MenuBar() {
  return (
    <div className="flex flex-row justify-between">
      <Link href="/" className="text-4xl text-white font-dongle">
        David Khuu
      </Link>
      <div className="flex items-center">
        <MenuLink name="Blog" href="/blog/" />
        <MenuLink name="About" href="/about/" />
      </div>
    </div>
  );
}

function MenuLink({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="ml-2 text-white px-2 rounded-md hover:bg-sky-800 hover:transition duration-1000 font-dongle text-2xl"
    >
      {name}
    </Link>
  );
}
