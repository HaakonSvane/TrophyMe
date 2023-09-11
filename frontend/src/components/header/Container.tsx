import { Box } from "@primer/react";
import { PropsWithChildren, ReactNode } from "react";

type ContainerProps = {
  logo: ReactNode;
};

export const Container = ({
  logo,
  children,
}: PropsWithChildren<ContainerProps>) => (
  <nav className="sticky top-0 z-10">
    <Box
      className="bg-window backdrop-filter backdrop-blur-lg bg-opacity-30"
      sx={{
        borderColor: "border.default",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center space-x-8">
          {logo}
          <div className="flex flex-1">{children}</div>
        </div>
      </div>
    </Box>
  </nav>
);
