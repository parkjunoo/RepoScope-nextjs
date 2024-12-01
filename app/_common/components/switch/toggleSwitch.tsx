"use client";

import React from "react";
import { Switch } from "@radix-ui/themes";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  defaultChecked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled,
  defaultChecked,
  className,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  return (
    <Switch
      className={`${className}`}
      checked={checked}
      disabled={disabled}
      defaultChecked={defaultChecked}
      onCheckedChange={() => {
        setIsChecked(!isChecked);
        if (onChange) onChange(!isChecked);
      }}
    ></Switch>
  );
};

export default ToggleSwitch;
