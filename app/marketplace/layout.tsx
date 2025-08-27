import ReactQueryProvider from "@/components/ReactQueryProvider";
import React, { PropsWithChildren } from "react";

const MarketplaceLayout = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default MarketplaceLayout;
