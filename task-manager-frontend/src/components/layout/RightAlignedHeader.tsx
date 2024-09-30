import { useState } from "react";
import { FileSvg } from "../../assets/svg/FileSvg";
import { HomeIcon } from "../../assets/svg/HomeIcon";
import { MessagesSvg } from "../../assets/svg/MessagesSvg";
import { SettingsSvg } from "../../assets/svg/SettingsSvg";
import { TaskSvg } from "../../assets/svg/TaskSvg";
import { TimeLineSvg } from "../../assets/svg/TimeLineSvg";

type IconProps = {
  color?: string;
};

type IconComponent = React.ComponentType<IconProps>;

type PropsIcons = {
  [key: string]: IconComponent;
};

export function RightAlignedHeader() {
  const [iconsSelected, setIconsSelected] = useState<string>("home");

  const iconComponents: PropsIcons = {
    home: HomeIcon,
    timeline: TimeLineSvg,
    task: TaskSvg,
    settings: SettingsSvg,
    message: MessagesSvg,
    file: FileSvg,
  };

  return (
    <div className="flex flex-col justify-start pt-40 items-center gap-8 px-6">
      {Object.keys(iconComponents).map((key) => {
        const IconComponent = iconComponents[key];
        const isSelected = iconsSelected === key;
        return (
          <div
            className={`cursor-pointer p-1.5`}
            style={{
              backgroundColor: isSelected ? "#4f46e5" : "transparent",
              borderRadius: isSelected ? "30%" : "0%",
              boxShadow: isSelected ? "0px 4px 6px rgba(79, 70, 229, 0.5)" : "none",

            }}
            key={key}
            onClick={() => setIconsSelected(key)}
          >
            <IconComponent color={isSelected ? "white" : undefined} />
          </div>
        );
      })}
    </div>
  );
}
