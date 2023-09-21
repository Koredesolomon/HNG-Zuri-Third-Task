import classes from './nav.module.css'

export default function Nav(){
    return (
        <section className={classes.nav}>
                <div className={classes.logo}>
                    <img src="/images/logo.jpg" alt="logo"></img>
                    <h1>KoredeShoes</h1>
                </div>
                <div className={classes.search}>
                    <input
                        type="text"
                        placeholder="What shoes are you rocking"
                        // onChange={(e) => {handleSearch(e.target.value)}}
                        />
                </div>
        </section>
    )
}