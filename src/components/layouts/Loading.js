import styles from './Loading.module.css'

import loading from '../../images/loading.svg'

function Loading() {
    return(
        <div className={styles.loader_container}>
            <img src={loading} alt="loading img" className={styles.loader}></img>
        </div>
    )
}

export default Loading