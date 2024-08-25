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
                    <h2 className={styles.title}>Propriedade Total</h2>
                    <p className={styles.text}>
                        Ao armazenar seu perfil de forma descentralizada, você mantém total controle sobre seus dados. Isso significa que nenhuma empresa ou governo pode censurar, remover ou alterar seu perfil sem o seu consentimento.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Imutabilidade e Segurança</h2>
                    <p className={styles.text}>
                        A descentralização garante que seu perfil seja imutável e seguro. Os dados são armazenados em uma rede distribuída, reduzindo o risco de hackeamentos e garantindo que suas informações permaneçam intactas e acessíveis.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Integração de Redes Sociais</h2>
                    <p className={styles.text}>
                        Você poderá consolidar suas contas de redes sociais em um único perfil descentralizado. Isso simplifica o gerenciamento e a acessibilidade, permitindo que você tenha um ponto centralizado para todas as suas interações online.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Privacidade e Controle</h2>
                    <p className={styles.text}>
                        Você pode definir quem tem acesso ao seu conteúdo e gerenciar suas permissões de forma mais granular. Isso melhora a privacidade e oferece uma maior liberdade de expressão, sem a preocupação com as políticas de censura das plataformas tradicionais.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Sincronização Automática</h2>
                    <p className={styles.text}>
                        Seu conteúdo será sincronizado automaticamente com suas contas de redes sociais favoritas, garantindo que suas atualizações sejam refletidas em tempo real e sem esforço adicional da sua parte.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Resiliência Contra Censura</h2>
                    <p className={styles.text}>
                        O modelo descentralizado é resistente à censura, proporcionando um ambiente onde você pode expressar suas opiniões e compartilhar informações sem medo de restrições impostas por terceiros.
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
