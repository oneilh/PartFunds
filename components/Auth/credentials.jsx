"use client";

import Link from "next/link";

import { Button, PasswordInput, TextInput } from "@mantine/core";
import { FaAt } from "react-icons/fa";

const Credentials = () => {
  const icon = <FaAt size={16} />;

  return (
    <form action="" className="credentials_container">
      <section className="credentials">
        <fieldset>
          <legend>Email:</legend>
          {/* <input type="email" id="email" name="email" required /> */}
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={icon}
            label=""
            placeholder="Your email"
            classNames={{
              input: "textInput ",
            }}
          />
        </fieldset>

        <div className="password">
          <fieldset>
            <legend>Password:</legend>
            <PasswordInput
              label=""
              description=""
              placeholder="******"
              classNames={{
                input: "textInput ",
              }}
            />
          </fieldset>
          <Link href={""}>forgot password?</Link>
        </div>
      </section>
      <Button fullWidth size="md" className="btn credential_btn">
        Login
      </Button>
    </form>
  );
};

export default Credentials;
