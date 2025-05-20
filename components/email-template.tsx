import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
  Email,
  Subject,
  Message,
}) => (
  <div>
    <h1>New Contact form request From {Name}!</h1>
    <p>
      <strong>Email:</strong> {Email}
    </p>
    <p>
      <strong>Subject:</strong> {Subject}
    </p>
    <p>
      <strong>Message:</strong> {Message}
    </p>
  </div>
);
