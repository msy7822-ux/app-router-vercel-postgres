import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";

export function Header() {
  return (
    <header className="h-full w-full px-6 py-5 2lg:px-0">
      <div className="flex items-center justify-between">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </div>
    </header>
  );
}
