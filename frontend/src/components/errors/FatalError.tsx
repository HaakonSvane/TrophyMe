import { SectionHeader } from "../labels/SectionHeader";
import { Details, Text } from "@primer/react";

type FatalErrorProps = {
  error?: any;
};

export const FatalError = ({ error }: FatalErrorProps) => {
  const niceError = error?.toString();
  return (
    <div className="h-screen flex">
      <div className="m-auto grid gap-8">
        <div>
          <SectionHeader title="fatal application error :(" />
          <Text as="p">
            Whoops! It seems the application has met with a terrible fate
          </Text>
          <Text as="p">Contact a grown up if the problem persists</Text>
        </div>
        {error && (
          <div>
            <Details>
              <Text as="p" className="font-mono text-sm">
                {niceError}
              </Text>
            </Details>
          </div>
        )}
      </div>
    </div>
  );
};
