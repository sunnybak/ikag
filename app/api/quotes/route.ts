import fs from "fs";
import { NextResponse } from "next/server";

export const GET = async () => {
  // Read the existing data from the file
  let rawData = fs.readFileSync("output.json") as any;
  let jsonData = JSON.parse(rawData);

  return NextResponse.json({
    data: jsonData,
  });
};
