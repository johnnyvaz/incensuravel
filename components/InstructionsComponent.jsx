import React from 'react';
import styles from "../styles/InstructionsComponent.module.css";

export default function InstructionsComponent() {
    return (
        <div className={styles.container}>
            <header className={styles.header_container}>
                <h1>
                    <span>Incensurável</span> - Seu Perfil Web3
                </h1>
                <p>
                    Controle total sobre sua identidade digital com tecnologia blockchain.
                </p>
            </header>

            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Recursos do Perfil</h2>
                    <p className={styles.text}>
                        Identidade Digital Única e Descentralizada, Integração com Múltiplas Redes Sociais,
                        Armazenamento Seguro e Imutável com Tecnologia Blockchain, Controle Total sobre a
                        Privacidade e Acesso aos Dados.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Como Funciona</h2>
                    <p className={styles.text}>
                        Registre-se e crie sua identidade digital utilizando sua carteira cripto. Conecte e
                        sincronize suas contas de redes sociais ao seu perfil descentralizado. Aproveite a
                        liberdade e segurança sem precedentes, com controle total sobre seus dados.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Comece Agora</h2>
                    <p className={styles.text}>
                        Pronto para assumir o controle da sua identidade online? Crie seu perfil descentralizado
                        hoje mesmo e defina um novo padrão de liberdade na internet.
                    </p>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.icons_container}>
                    <div>
                        <a href="https://johnnyvaz.com.br" target={"_blank"}>
                            Contato: Johnny Vaz
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
