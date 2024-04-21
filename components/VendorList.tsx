"use client";

import { AppActionType, useAppContext } from "@/context/context";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import React, { useState } from "react";
import { Vendor } from "@/models/vendor";
import ButtonSpinner from "./ButtonSpinner";

export default function VendorList({
  vendors,
  updateVendors,
  vendorsLoading,
}: {
  vendors: Vendor[];
  updateVendors: (vendors: Vendor[]) => void;
  vendorsLoading: boolean;
}) {
  const selectVendor = (index: number) => {
    updateVendors(
      vendors.map((vendor: any, i: any) => {
        if (i === index) {
          return { ...vendor, selected: !vendor.selected };
        }
        return vendor;
      })
    );
  };

  const initiateAgents = async () => {
    // const selectedVendors = vendors.filter((vendor) => vendor.selected);

    // console.log("Selected Vendors", selectedVendors);

    // fetch http://127.0.0.1:8080/make-call/

    await fetch("http://127.0.0.1:8080/make-call/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vendors</CardTitle>
        <CardDescription>
          Here are vendors that we found who might carry the item which you are
          searching for
        </CardDescription>
      </CardHeader>
      <CardContent>
        {vendorsLoading && (
          <div className="w-full h-[200px] flex items-center justify-center">
            <ButtonSpinner />
          </div>
        )}

        {!vendorsLoading && vendors.length > 0 && (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      id="selected"
                      checked={vendor.selected}
                      onCheckedChange={() => selectVendor(index)}
                    />
                  </TableCell>
                  <TableCell>{vendor.name}</TableCell>
                  <TableCell>{vendor.link}</TableCell>
                  <TableCell>{vendor.price}</TableCell>
                  <TableCell>{vendor.googleRating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">Start</Button> */}
        <Button onClick={async () => await initiateAgents()}>I Know A Guy</Button>
      </CardFooter>
    </Card>
  );
}
