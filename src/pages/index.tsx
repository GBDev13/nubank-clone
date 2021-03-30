import CardForm from "../components/CardForm";
import Header from "../components/Header";
import { FormSection, AccountSection, CardSection, MobileSection, ImageSection, Footer } from '../styles/pages/Home'

import FlechaIcon from '../assets/arrow.svg';
import FlechaUpIcon from '../assets/arrowUp.svg';

import AppStore from '../assets/iphone.svg';
import GooglePlay from '../assets/google.svg';

import NuLogo from '../assets/logo.svg';

import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import LinkedIn from '../assets/linkedin.svg';
import Youtube from '../assets/youtube.svg';
import Twitter from '../assets/twitter.svg';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FormSection>
          <div className="main">

            <div className="chamada">
              <h1>
              Pix: um novo jeito de fazer transferências e pagamentos
              </h1>
              <a href="#">
                Saiba como funciona
                <FlechaIcon />
              </a>
            </div>

            <div className="phoneImage" />
            
            <CardForm />

          </div>
        </FormSection>

        <AccountSection>
          <article>
            <div className="content">
              <div className="copy">
                <a href="#">
                  <h1>Conta do Nubank</h1>
                </a>
                <h1>Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil.</h1>
                <a href="#">
                  Segura e sem complicações
                  <FlechaIcon />
                </a>
              </div>

              <picture>
                <img src="/cellphone02.png" alt="Celular com conta NuBank aberta na tela"/>
              </picture>

            </div>
          </article>
        </AccountSection>

        <CardSection>
          <article>

            <div className="copy">
              <a href="#">
                <h1>Cartão de Crédito</h1>
              </a>
              <h1>Pode chamar ele de<br />roxinho. Além disso,<br />pode chamar ele de<br />moderno, gratuito e<br />prático também.</h1>
              <a href="#">
                Saiba mais
                <FlechaIcon />
              </a>
            </div>

            <div className="image">
              <img src="/cartao.png" alt="Imagem mostra uma mão segurando um cartão do NuBank"/>
            </div>
          </article>
        </CardSection>

        <MobileSection>
          <article>

            <div className="copy">
              <a href="#">
                <h1>Rewards</h1>
              </a>
              <h1>Um programa de<br />pontos justo e fácil<br />de usar.</h1>
              <a href="#">
                Saiba mais
                <FlechaUpIcon />
              </a>
            </div>

            <div className="image">
              <picture>
                <source type="image/png" media="(max-width:358px)" srcSet="/mundo.png" />
                <source type="image/png" media="(max-width:768px)" srcSet="/mobileApp2.png" />
                <source type="image/png" srcSet="/mobileApp.png" />

                <img loading="lazy" srcSet="/mobileApp.png" alt="Celular com o aplicativo do Nubank aberto na seção de Rewards e o cartão roxo do Nubank" />
              </picture>
            </div>
          </article>
        </MobileSection>

        <ImageSection background="/imagem01.webp">
          <article>
            <div className="copy">
              <h1>Reinventando<br />a relação das<br />pessoas com<br />o dinheiro</h1>
              <a href="#">
                É nisso que acreditamos
                <FlechaIcon />
              </a>
            </div>
          </article>
        </ImageSection>

        <ImageSection background="/imagem02.webp">
          <article>
            <div className="copy">
              <h1>NuCommunity<br /><br />A comunidade<br />oficial do Nubank</h1>
              <a href="#">
                Tire dúvidas, compartilhe ideias e faça parte
                <FlechaUpIcon />
              </a>
            </div>
          </article>
        </ImageSection>

        <ImageSection background="/imagem03.webp">
          <article>
            <div className="copy">
              <h1>Um blog para você<br />repensar o seu<br />dinheiro</h1>
              <a href="#">
                Conheça o Fala, Nubank
                <FlechaIcon />
              </a>
            </div>
          </article>
        </ImageSection>
        
      </main>

      <Footer>
        <div className="footerNav">
          <div className="navItem">
            <p>Nubank</p>
            <a href="#">Sobre nós</a>
            <a href="#">Carreiras</a>
            <a href="#">Perguntas Frequentes</a>
            <a href="#">Contato</a>
            <a href="#">Imprensa</a>
            <a href="#">Impacto Social <FlechaUpIcon/></a>
          </div>
        
          <div className="navItem">
            <p>Produtos</p>
            <a href="#">Conta digital</a>
            <a href="#">Cartão de crédito</a>
            <a href="#">Rewards</a>
            <a href="#">Empréstimo</a>
            <a href="#">Conta Pj</a>
          </div>
        
          <div className="navItem">
            <p>Explore</p>
            <a href="#">Comunidade <FlechaUpIcon/></a>
            <a href="#">Blog <FlechaUpIcon/></a>
            <a href="#">Newsletter <FlechaUpIcon/></a>
            <a href="#">México <FlechaUpIcon/></a>
            <a href="#">Argentina <FlechaUpIcon/></a>
            <a href="#">Colômbia <FlechaUpIcon/></a>
          </div>
        
          <div className="navItem">
            <p>Veja também</p>
            <a href="#">Auxílio Emergencial e FGTS <FlechaIcon /></a>
            <a href="#">Tudo sobre o Pix <FlechaIcon /></a>
          </div>
        
          <div className="navItem">
            <p>Transparência</p>
            <a href="#">Política de Privacidade</a>
            <a href="#">Política de Compliance</a>
            <a href="#">Contratos</a>
            <a href="#">Política de Segurança</a>
            <a href="#">Relatórios Financeiros</a>
            <a href="#">Ética & Compliance</a>
            <a href="#">Dados Abertos</a>
            <a href="#">SCR</a>
            <a href="#">Convenção de Boletos</a>
          </div>
        
          <div className="navItem">
            <p>Ouvidoria</p>
            <a href="#">0800 887 0463</a>
            <a href="#">ouvidoria@nubank.com.br</a>
            <p>Atendimento das 9h às 18g (dias úteis)</p>
          </div>
        
          <div className="navItem">
            <p>Fale com a gente</p>
            <a href="#">0800 608 6236</a>
            <a href="#">meajuda@nubank.com.br</a>
            <p>Atendimento 24h</p>
          </div>
        
          <div className="navItem apps">
            <p>Baixe o app</p>
            <a href="#">
              <div>
              <AppStore />
              </div>
            </a>
            <a href="#">
              <div>
              <GooglePlay />
              </div>
            </a>
          </div>
        </div>

        <div className="nuInfos">
          <NuLogo />
          <div>
            <p>
              © 2021  Nu Pagamentos S.A.  18.236.120/0001-58<br />
              Rua Capote Valente, 39 - São Paulo, SP - 05409-000
            </p>
          </div>
          <div className="redes">
            <a href="https://www.facebook.com/nubank">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/nubank/">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/nubank">
              <LinkedIn />
            </a>
            <a href="https://www.youtube.com/nubank">
              <Youtube />
            </a>
            <a href="https://twitter.com/nubank">
              <Twitter />
            </a>
          </div>
        </div>

        <div className="linguas">
          <ul>
            <li>
              <a href="#">
                <span className="active"/>
                <p>Português</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span />
                <p>English</p>
              </a>
            </li>
          </ul>
        </div>
      </Footer>
    </>
  )
}
