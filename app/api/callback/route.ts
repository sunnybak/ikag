import fs from "fs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const {
    sku_id: sku,
    quote,
    quantity,
    delivery_date: date,
    email,
  } = await request.json();

  let rawData = fs.readFileSync("output.json") as any;
  let jsonData = JSON.parse(rawData);

  // Append the new data to the existing data
  jsonData.push({ sku, quote, quantity, date, email });

  // Write the updated data back to the file
  const data = JSON.stringify(jsonData, null, 2);
  fs.writeFile("output.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });

  return NextResponse.json({
    success: true,
  });
};
