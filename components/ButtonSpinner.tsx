"use client";

import clsx from "clsx";
import Image from "next/image";

interface ButtonSpinnerProps {
  show?: boolean;
  leftMargin?: boolean;
}

export default function ButtonSpinner({ show = true, leftMargin = true }: ButtonSpinnerProps) {
  return show ? (
    <Image src="/spinner.gif" alt="Spinner" width={16} height={16} className={clsx({ "mr-2": leftMargin })} />
  ) : (
    <></>
  );
}
