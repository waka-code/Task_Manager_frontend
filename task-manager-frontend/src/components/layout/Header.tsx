import { LogoIconSvg } from "../../assets/svg/LogoIconSvg";
import { NotificationIcon } from "../../assets/svg/NotificationIcon";
import { UserExamplerIcon } from "../../assets/svg/UserExamplerIcon";
import { Input } from "../common/input";

export function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-2">
      <LogoIconSvg />
      <Input
        onchange={() => undefined}
        inputValue={""}
      />
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          <NotificationIcon />
        </div>
        <div>
          <UserExamplerIcon />
        </div>
      </div>
    </div>
  );
}
