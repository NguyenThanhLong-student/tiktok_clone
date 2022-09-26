import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <Navbar />
      <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
        <div className="flex gap-6 md:gap-10">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
