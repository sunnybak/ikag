'use client'

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
import React, { useState } from 'react';
import { Vendor } from "@/models/vendor";

export default function VendorList() {

  const [vendors, setVendors] = useState<Vendor[]>([]);

  const selectVendor = (index: number) => {
    setVendors((prevVendors: any) => {
      return prevVendors.map((vendor: any, i: any) => {
        if (i === index) {
          return { ...vendor, selected: !vendor.selected };
        }
        return vendor;
      });
    });
  };

  const initiateAgents = () => {
    const selectedVendors = vendors.filter((vendor) => vendor.selected);

    console.log("Selected Vendors", selectedVendors);
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
        {vendors.length > 0 && (
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
        <Button onClick={initiateAgents}>I Know A Guy</Button>
      </CardFooter>
    </Card>
  );
}
