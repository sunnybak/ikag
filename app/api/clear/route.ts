import fs from "fs";
import { NextResponse } from "next/server";

export const POST = async () => {
  console.log("clearing state");

  fs.writeFile("output.json", "[]", (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });

  return NextResponse.json({
    success: true,
  });
};
