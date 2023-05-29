import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

import { loadLayout } from "src/utils/loadLayout";

const DesktopAbout = dynamic(() => import(`src/components/desktop/about`));
const MobileAbout = dynamic(() => import(`src/components/mobile/about`));

const About: NextPage<{ deviceType: string }> = ({ deviceType }) => {
    const Layout = loadLayout(deviceType, DesktopAbout, MobileAbout);
    return <Layout />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            deviceType: query.viewport,
        },
    };
};

export default About;
