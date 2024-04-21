'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function NegotiatorSetup() {
  const form = useForm();

  return (
    <Card className="w-full min-h-[400px]">
      <CardHeader>
        <CardTitle>Negotiator Setup</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>

        {/* // add a form to input the intro message, 
        // the call ending condition, and the call ending message */}

 
      {/* <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}
        
        {/* <form>
          <label>
            Intro Message:
            <input type="text" name="introMessage" />
          </label>
          <br />
          <label>
            Call Ending Condition:
            <input type="text" name="callEndingCondition" />
          </label>
          <br />
          <label>
            Call Ending Message:
            <input type="text" name="callEndingMessage" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form> */}

      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
