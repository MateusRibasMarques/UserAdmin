import styles from '../Login/Login.module.css';

function Login() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <span className={styles.inputSpan}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name="email" id="email" />
                </span>
                <span className={styles.inputSpan}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" name="password" id="password" />
                </span>
                <div className={styles.radioInputs}>
                    <label className={styles.radio}>
                        <input type="radio" name="radio" defaultChecked />
                        <span className={styles.name}>Usuário</span>
                    </label>
                    <label className={styles.radio}>
                        <input type="radio" name="radio" />
                        <span className={styles.name}>Administrador</span>
                    </label>
                </div>
                <input className={styles.submit} type="submit" value="Log in" />
                
            </form>
        </div>
    );
}

export default Login;
