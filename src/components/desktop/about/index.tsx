import { observer } from "mobx-react";
import Link from "next/link";
import { FC } from "react";

import { useService } from "src/service";
import { useStore } from "src/store";

interface IProps {
    isOk: boolean;
    changeOk(): void;
}
const About: FC<IProps> = ({ isOk, changeOk }) => {
    return (
        <div>
            <h1>DESKTOP</h1>-<h3>about</h3>
            <p>{`it's ok? ${isOk}`}</p>
            <button onClick={changeOk}>change ok</button>
            <br />
            <Link href={"/"}>go to home</Link>
        </div>
    );
};

export default observer(() => {
    const { store } = useStore();
    const { service } = useService();

    const changeOk = () => {
        // appState.changeOk(!appState.ok);
        service.test2.do();
    };
    return <About isOk={store.appState.ok} changeOk={changeOk} />;
});
