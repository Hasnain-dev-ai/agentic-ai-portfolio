import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Section,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ContactEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export const ContactEmail = ({
    name,
    email,
    subject,
    message,
  }: ContactEmailProps) => (
    <Html>
      <Head />
      <Preview>New Message from your Portfolio Contact Form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Message Received</Heading>
          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={text}>{name}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Sender&apos;s Email:</Text>
            <Text style={text}>{email}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Subject:</Text>
            <Text style={text}>{subject}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ContactEmail;
  
  // Styles for the email
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
    border: "1px solid #f0f0f0",
    borderRadius: "4px",
  };
  
  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center" as const,
    color: "#333",
  };
  
  const section = {
    padding: "0 24px",
  };
  
  const label = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px",
  };
  
  const text = {
    fontSize: "16px",
    color: "#333",
    margin: "0",
    lineHeight: "24px",
  };
  
  const messageText = {
    ...text,
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "12px",
    backgroundColor: "#f9f9f9",
  };