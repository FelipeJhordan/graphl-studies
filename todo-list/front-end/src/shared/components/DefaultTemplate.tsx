import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Props } from "../types/react/default-props";

const AppContainer = styled(Container)`
  min-width: 100%;
  height: 100vh;
  background: rgb(29, 53, 87);
  linear-gradient(90deg, rgba(69,123,157,1) 0%, rgba(29,53,87,1) 35%, rgba(53,147,150,1) 100%);

  padding: 2rem 4rem 0.5rem 4rem;
`;

export function DefaultTemplate({ children }: Props) {
  return (
    <>
      <AppContainer disableGutters={true} maxWidth={false}>
        {children}
      </AppContainer>
    </>
  );
}

export default DefaultTemplate;
