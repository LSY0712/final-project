"use client";
import styles from "./account.module.css";

export default function Account() {
    return (
        <>
        <div>
            <div className={`${styles.productClassification} ${styles.sideCard} ${styles.open}`}></div>
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="d-grid ">
                        <div className={styles.sideCard}>
                            <div className={styles.cardTitle}>
                                <h5>活動篩選</h5>
                            </div>
                            <div className={styles.filterSection}>
                                <div className={styles.filterTitle}>
                                    證照資格
                                </div>
                                <div className={styles.filterTitle}>
                                    證照資格
                                </div>
                                <div className={styles.filterTitle}>
                                    證照資格
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}