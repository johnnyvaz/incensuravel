import React from 'react';
import styles from "../styles/InstructionsComponent.module.css";

export default function InstructionsComponent() {
    return (
        <div className={styles.container}>
            <header className={styles.header_container}>
                <h1>
                    <span>Incensurável</span> - Seu Perfil na Web3
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

            <div className={styles.custom_card}>
                <h2 className={styles.custom_card_title}>Junte-se à Revolução da Identidade Digital!</h2>
                <p className={styles.custom_card_text}>
                    Estamos empolgados em compartilhar com você a nossa inovadora solução de perfil descentralizado na Web3, que está transformando a forma como você controla sua identidade online. Com o nosso projeto, você terá a garantia de um perfil imutável e seguro, protegido contra censura e manipulação por qualquer entidade.
                </p>
                <p className={styles.custom_card_text}>
                    **Estamos em Desenvolvimento e Precisamos da Sua Ajuda!**
                </p>
                <p className={styles.custom_card_text}>
                    Atualmente, estamos na fase de desenvolvimento e buscamos parceiros e investidores que compartilhem nossa visão de uma internet mais justa e livre. Se você está interessado em se envolver ou em apoiar nosso projeto, adoraríamos ouvir de você.
                </p>
                <p className={styles.custom_card_text}>
                    **Como Você Pode Ajudar:**
                </p>
                <ul className={styles.custom_card_list}>
                    <li>**Deixe seu Contato**: Entre em contato conosco para saber mais sobre como você pode se envolver.</li>
                    <li>**Investimento**: Se você é um investidor em potencial, entre em contato para discutir oportunidades de investimento e como você pode contribuir para o sucesso deste projeto inovador.</li>
                </ul>
                <div className={styles.form_container}>
                </div>
                <p className={styles.custom_card_text}>
                    Agradecemos o seu interesse e apoio!
                </p>
                <div>
                        <a href="https://johnnyvaz.com.br" target={"_blank"}>
                            Contato: Johnny Vaz
                        </a>
                    </div>
            </div>

           
        </div>
    );
}
