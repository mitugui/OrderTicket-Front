import classes from "./Item.module.scss";

interface ItemProps {
    text: string;
}

const Item = ({ text }: ItemProps) => {
    return (
        <li className={classes.item}>
            {text}
        </li>
    );
};

export default Item;