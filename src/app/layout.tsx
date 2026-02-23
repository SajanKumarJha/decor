import { SEO_METADATA } from "@/config/seo.config";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode
}

export const metadata: Metadata = SEO_METADATA
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
export default RootLayout