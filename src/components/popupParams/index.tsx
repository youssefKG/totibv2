import { FC } from "react";
import { ColorScheme } from "@/context/themeContext";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiSettings } from "react-icons/ci";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Sun } from "lucide-react";
import { MoonIcon } from "lucide-react";

interface PopupParamsProps {
  colorScheme: ColorScheme;
  handleChangeColorScheme: (colorScheme: ColorScheme) => void;
}
const PopupParams: FC<PopupParamsProps> = ({
  colorScheme,
  handleChangeColorScheme,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div
          className="hidden cursor-pointer hover:opacity-55 lg:flex
      border-black bg-gray-50/70 p-1 rounded-2xl"
        >
          <CiSettings className="size-5 text-[#606c38]" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex gap-2 text-[#bb3e03] items-center">
              <Cog6ToothIcon className="size-8" />
              <h1 className="font-bold">Settings</h1>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-2">
              <p>
                Here you can change your settings, like website theme or
                decorations.
              </p>
              <SelectColorScheme
                handleChangeColorScheme={handleChangeColorScheme}
                colorScheme={colorScheme}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface SelectColorSchemeProps {
  handleChangeColorScheme: (colorScheme: ColorScheme) => void;
  colorScheme: ColorScheme;
}

const SelectColorScheme: FC<SelectColorSchemeProps> = ({
  colorScheme,
  handleChangeColorScheme,
}) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex items-center gap-2">
        {colorScheme == "dark" ? <Sun /> : <MoonIcon />}
        <p className="">Theme</p>
      </div>
      <Select
        onValueChange={(value: string) =>
          handleChangeColorScheme(value as ColorScheme)
        }
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder={colorScheme} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">
              <div className="flex items-center gap-2">
                <Sun className="size-4 text-black" />
                <p className="text-black">Light</p>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div className="flex items-center gap-2">
                <MoonIcon className="size-4 text-black" />
                <p className="text-black">Dark</p>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PopupParams;
