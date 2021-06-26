import * as React from "react";
import styled from "styled-components";
import { User } from "firebase/auth";

const FieldContainer = styled.div``;
const FieldName = styled.p`
  font-weight: bold;
`;
const FieldData = styled.span``;

const Field = ({ name, data }: { name: string; data: string | null }) => {
  if (!data) return null;

  return (
    <FieldContainer>
      <FieldName>{name}:</FieldName>
      <FieldData>{data}</FieldData>
    </FieldContainer>
  );
};

export const Info = ({ user }: { user: User | null }) => {
  if (!user) return null;

  const { email, emailVerified, displayName } = user;

  const isEmailVerified = emailVerified ? "yes" : "no";

  return (
    <section>
      <Field name="Email" data={email} />
      <Field name="Email verified" data={isEmailVerified} />
      <Field name="Display name" data={displayName} />
    </section>
  );
};
