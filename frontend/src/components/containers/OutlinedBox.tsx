import { Box, BoxProps, Label } from "@primer/react";
import { PropsWithChildren } from "react";

type OutlinedBoxProps = {
  title?: string;
  windowed?: boolean;
};

export const OutlinedBox = ({
  title,
  children,
  className,
}: PropsWithChildren<OutlinedBoxProps & BoxProps>) => {
  return (
    <Box
      className={`px-4 md:px-6 ${className}`}
      as={title ? "fieldset" : undefined}
      sx={{
        borderColor: "border.default",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "menu.bgActive",
      }}
    >
      {title && (
        <legend>
          <Label size="large" sx={{ backgroundColor: "menu.bgActive" }}>
            {title}
          </Label>
        </legend>
      )}
      {children}
    </Box>
  );
};
