import { useState } from 'react';
import styles from './Formulario.module.css'

const Formulario = () => {

    function calculaIMC() {
        const [altura, setAltura] = useState('');
        const [peso, setPeso] = useState('');
    }

    return (
        <div className={styles.card}>
            <h1 className={styles.h1}>Calculadora IMC</h1>
            <div className={styles.text}>
                <p>IMC é a sigla para Índice de Massa Corpórea</p>
                <p>É usado para identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos.</p>
                <p>Para descobrir seu IMC informe seus dados abaixo</p>
            </div>
            <form>
                <div className={styles.altura}>
                    <input id='inputAltura' className={styles.input} type="number" placeholder='insira sua altura'/>
                    <label className={styles.unidadeMedida} htmlFor="inputAltura">Altura em cm</label>
                </div>
                <div className={styles.peso}>
                    <input id='inputPeso' className={styles.input} type="number" placeholder='insira seu peso'/>
                    <label className={styles.unidadeMedida} htmlFor="inputPeso">Peso em kg</label>
                </div>
                <button type='submit'>Calcular o IMC</button>
            </form>
            <h2 className={styles.h2}>Seu IMC é 00</h2>
        </div>
    )
}

export default Formulario;