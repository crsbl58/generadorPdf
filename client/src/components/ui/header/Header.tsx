import React, { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
    const [stateCurrent, setStateCurrent] = useState('Sucursales panel de control ')

    return (
        <header className={styles.header}>

            <h3>{stateCurrent}</h3>

        </header>
    )

}

export default Header