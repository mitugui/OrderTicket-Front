import classes from "./Search.module.scss"

const Search = () => {
    return (
        <div className={classes.container}>
            <input
                className={classes.input}
                type="text"
                placeholder="Digite o nome de um cliente..."
            />
        </div>
    )
}

export default Search