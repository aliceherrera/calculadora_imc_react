import { useEffect, useState } from 'react';
import styles from './Formulario.module.css'

const Formulario = () => {

    function handleSubmit(e) {
        e.preventDefault()
    }

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaIMC = () => {
        const convertAltura = altura / 100;
        const imc = parseFloat((peso / (convertAltura * convertAltura)).toFixed(1)); 

        if (imc < 18.5) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Magreza)</h2>
            )
        }
        else if (imc < 25) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Normal)</h2>
            )
        }
        else if (imc < 30) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Sobrepeso)</h2>
            )
        }
        else if (imc < 35) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Obesidade Grau I)</h2>
            )
        }
        else if (imc < 40) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Obesidade Grau II)</h2>
            )
        }
        else if (imc > 40) {
            return (
                <h2 className={styles.h2}>Seu IMC é de {imc} (Obesidade Grau III)</h2>
            )
        }
        
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
                    <input id='inputAltura' className={styles.input} type="number" placeholder='insira sua altura' onChange={e => setAltura(e.target.value)}/>
                    <label className={styles.unidadeMedida} htmlFor="inputAltura">Altura em cm</label>
                </div>
                <div className={styles.peso}>
                    <input id='inputPeso' className={styles.input} type="number" placeholder='insira seu peso' onChange={e => setPeso(e.target.value)}/>
                    <label className={styles.unidadeMedida} htmlFor="inputPeso">Peso em kg</label>
                </div>
                <button type='submit' onClick={renderizaIMC}>Calcular o IMC</button>
            </form>
        </div>
    )
}

export default Formulario;