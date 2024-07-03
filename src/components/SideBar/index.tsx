import Item from "./Item";
import classes from "./SideBar.module.scss";

const SideBar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1 className={classes.title}>
                    Comandas
                </h1>
            </div>
            <ul className={classes.options}>
                <Item text="Tela Inicial" />
                <Item text="Opções" />
                <Item text="Cadastrar produto" />
            </ul>
        </div>
    );
};

export default SideBar;