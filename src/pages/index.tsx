import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { loadLayout } from "src/utils/loadLayout";

const DesktopHome = dynamic(() => import(`src/components/desktop/home`));
const MobileHome = dynamic(() => import(`src/components/mobile/home`));

export default function Home({ deviceType }: { deviceType: string }) {
    const Component = loadLayout(deviceType, DesktopHome, MobileHome);
    return <Component />;
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            deviceType: query.viewport,
        },
    };
};
