import { ReactQueryProvider } from "./query-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
