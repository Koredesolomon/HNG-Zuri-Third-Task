import classes from './loading.module.css'

export default function Spinner(){
    return (
    <div class={classes.container}>
        <div class={classes.loader}></div>
    </div>
    )
}