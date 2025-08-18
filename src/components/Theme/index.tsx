import { ComputerIcon, Sun } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { MoonIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ThemeProps extends PropsWithChildren {
  colorScheme: "dark" | "light";
}
const Theme: FC<ThemeProps> = ({ colorScheme }) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex items-center gap-2">
        {colorScheme == "dark" ? <Sun /> : <MoonIcon />}
        <p className="">Theme</p>
      </div>
      <SelectDemo />
    </div>
  );
};

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem value="apple">
            <div className="flex items-center gap-2">
              <ComputerIcon className="size-4 text-black" />
              <p>System</p>
            </div>
          </SelectItem>
          <SelectItem value="banana">
            <div className="flex items-center gap-2">
              <Sun className="size-4 text-black" />
              <p className="text-black">Light</p>
            </div>
          </SelectItem>
          <SelectItem value="blueberry">
            <div className="flex items-center gap-2">
              <MoonIcon className="size-4 text-black" />
              <p className="text-black">Dark</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Theme;
