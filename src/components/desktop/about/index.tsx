import { observer } from "mobx-react";
import { FC } from "react";

// import { useServices } from "src/services";
import { useStore } from "src/store";

interface IProps {
    isOk: boolean;
    changeOk(): void;
}
const AboutView: FC<IProps> = ({ isOk, changeOk }) => {
    return (
        <div>
            <h1>DESKTOP</h1>-<h3>about</h3>
            <p>{`it's ok? ${isOk}`}</p>
            <button onClick={changeOk}>change ok</button>
        </div>
    );
};

export default observer(() => {
    const { appState } = useStore();

    const changeOk = () => {
        appState.changeOk(!appState.ok);
    };
    return <AboutView isOk={appState.ok} changeOk={changeOk} />;
});
