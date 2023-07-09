import { baseScreenWidthStyle } from "@/app/layout";
import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";

export function Header() {
  return (
    <>
      <header className="border-b border-accent-1">
        <div className={baseScreenWidthStyle}>
          <div className="h-full w-full px-3 py-4 md:px-6 md:py-5 2lg:px-0">
            <div className="flex items-center justify-between">
              <HeaderLogo></HeaderLogo>
              <HeaderNav></HeaderNav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
