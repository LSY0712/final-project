import styles from "../Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.main}>
        <img src="?" alt="logo" className={styles.logo} />
        <div className={styles.line1}></div>
        <div className={styles.sectionLogin}>
          <h3>登入</h3>
          <div className={styles.wordbox}>
            <p>電話號碼 / 使用者帳號 / Email</p>
          </div>
          <div className={styles.wordbox}>
            <p>密碼</p>
          </div>
          <div className={styles.loginWays}>
            <div className={styles.loginBtn}>
              <h6>登入</h6>
            </div>
            <div className={styles.or}>
              <div className={styles.line2}></div>
              <p>或</p>
              <div className={styles.line2}></div>
            </div>
            <div className={styles.loginGoogle}>
              <div className={styles.googleBox}>
                <img src="/ic_google.svg" alt="Google logo" />
                <h6>Continue with Google</h6>
              </div>
            </div>
            <div className={styles.loginLine}>
              <div className={styles.lineBox}>
                <img src="/line.png" alt="Line logo" />
                <h6>Continue with Line</h6>
              </div>
            </div>
            <div className={styles.fcBox}>
              <p className={styles.ftext}>忘記密碼？</p>
              <p className={styles.ctext}>註冊新帳號！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
