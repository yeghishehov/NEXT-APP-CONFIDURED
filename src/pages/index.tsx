import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { loadLayout } from "src/utils/loadLayout";

const DesktopHome = dynamic(() => import(`src/components/desktop/home`));
const MobileHome = dynamic(() => import(`src/components/mobile/home`));

export default function Home({ deviceType }: { deviceType: string }) {
    const Component = loadLayout(deviceType, DesktopHome, MobileHome);
    return (
        <>
            <Head>
                <title>Geisha - Home</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Component />
        </>
    );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            deviceType: query.viewport,
        },
    };
};
