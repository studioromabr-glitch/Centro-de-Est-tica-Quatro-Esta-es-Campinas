import './App.css'
const whatsapp = 'https://wa.me/5519999202225'
export default function App() {
  return <>
    <header><a className="brand" href="#inicio">quatro estações<small>CENTRO DE ESTÉTICA</small></a><nav aria-label="Menu principal"><a href="#cuidados">Cuidados</a><a href="#sobre">Nossa história</a><a href="#contato">Contato</a></nav></header>
    <main>
      <section className="hero" id="inicio"><div><p className="eyebrow">ESTÉTICA FACIAL E CORPORAL · CAMPINAS</p><h1>Um tempo para você.<br/><em>Em todas as estações.</em></h1><p className="intro">Desde 2012 fazendo mulheres voltarem a se olhar com carinho.</p><a className="button" href={whatsapp}>Agendar pelo WhatsApp</a><p className="note">Converse com nossa equipe e conheça os cuidados para você.</p></div><figure><img src="/cristiane.png" alt="Cristiane, fundadora do espaço Quatro Estações"/><figcaption>Cristiane<small>Fundadora do espaço</small></figcaption></figure></section>
      <section id="cuidados"><p className="eyebrow">SEU MOMENTO DE CUIDADO</p><h2>Carinho em cada detalhe.</h2><div className="services"><article><h3>Estética facial</h3><p>Um olhar atento para o seu rosto e para o que você procura em sua rotina de cuidados.</p></article><article><h3>Estética corporal</h3><p>Conheça nossos atendimentos e converse com a equipe sobre as suas necessidades.</p></article><article><h3>Beleza e bem-estar</h3><p>Consulte os atendimentos de manicure, pedicure e sobrancelhas e a disponibilidade de horários.</p></article></div><a className="link" href={whatsapp}>Consultar tratamentos e horários</a></section>
      <section className="story" id="sobre"><div><p className="eyebrow">NOSSA HISTÓRIA</p><h2>Desde 2012,<br/><em>cuidando de você.</em></h2></div><p>O espaço Quatro Estações nasceu com Cristiane e o desejo de acolher cada pessoa em seu momento de cuidado. Em Campinas, reunimos atendimentos de estética facial, corporal e beleza em um só lugar.</p></section>
      <section className="contact" id="contato"><div><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Reserve um momento<br/>para se cuidar.</h2><p>Campinas · São Paulo</p><a href="tel:+5519999202225">(19) 99920-2225</a></div><div className="actions"><a className="button" href={whatsapp}>Falar com a equipe</a><a className="link" href="https://www.instagram.com/esteticaquatroestacoes/">Conhecer nosso Instagram</a></div></section>
    </main><footer>Centro de Estética Quatro Estações · Campinas, SP</footer>
  </>
}
