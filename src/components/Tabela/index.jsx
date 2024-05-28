import styles from './Tabela.module.css'

const Tabela = () => {
    return(
        <div className="container">
            
            <table className={styles.tabela}>
                <tr>
                    <th className={styles.th}>IMC</th>
                    <th className={styles.th}>Classificação</th>
                </tr>
                <tr>
                    <td className={styles.td}>Menor que 18,5</td>
                    <td className={styles.td}>Magreza</td>
                </tr>
                <tr>
                    <td className={styles.td}>18,5 a 24,9</td>
                    <td className={styles.td}>Normal</td>
                </tr>
                <tr>
                    <td className={styles.td}>25 a 29,9</td>
                    <td className={styles.td}>Sobrepeso</td>
                </tr>
                <tr>
                    <td className={styles.td}>30 a 34,9</td>
                    <td className={styles.td}>Obesidade Grau I</td>
                </tr>
                <tr>
                    <td className={styles.td}>35 a 39,9</td>
                    <td className={styles.td}>Obesidade Grau II</td>
                </tr>
                <tr>
                    <td className={styles.td}>Maior que 40</td>
                    <td className={styles.td}>Obesidade Grau III</td>
                </tr>
            </table>
        </div>
    )
}

export default Tabela;