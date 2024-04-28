import React from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClientProvider } from "node_modules/@tanstack/react-query/build/legacy/QueryClientProvider";
// import { QueryClientProviderProps } from "node_modules/@tanstack/react-query/build/modern/QueryClientProvider.d.cts";



export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();
    
  return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        
        
  );
};