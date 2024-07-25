import Link from 'next/link'
import styles from './card.module.css'

export interface ICard {
    name: string
}

export function Card({name}: ICard) {
    return (
        <div className={styles.container}>
            <Link href={`/${name}`}>{name}</Link>

            {/* <p className={styles.name}>{name}</p> */}
        </div>
    )
}