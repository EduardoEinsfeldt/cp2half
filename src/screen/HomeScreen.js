import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text} from 'react-native';

export default function Home() {

  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>💀 POLUIÇÃO 💀</Text>
      <div className="home-container">
      <div className="hero-section">
        <Image 
          src='../../public/assets/pollution1.png' 
          alt="Imagem de poluição"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Conscientização sobre a Poluição</h1>
          <p>
            A poluição afeta todos nós. Do ar que respiramos à água que bebemos, nossos hábitos impactam o planeta. 
            Vamos entender como pequenas ações podem causar grandes mudanças.
          </p>
        </div>
      </div>

      <section className="causas-section">
        <h2>Principais causas da poluição</h2>
        <ul>
          <li>Emissão de gases industriais e automotivos</li>
          <li>Descarte incorreto de lixo</li>
          <li>Uso excessivo de plásticos</li>
          <li>Contaminação dos corpos d'água</li>
        </ul>
      </section>

      <section className="impacto-section">
        <div className="impacto-text">
          <h2>Impactos da Poluição</h2>
          <p>
            A saúde humana está em risco. Doenças respiratórias, intoxicações e danos ao sistema nervoso estão entre os efeitos.
            Além disso, ecossistemas inteiros são destruídos pela poluição desenfreada.
          </p>
        </div>
        <div className="impacto-img">
          <img 
            src="/imagens/impacto.jpg"
            alt="Impacto da poluição"
          />
        </div>
      </section>

      <section className="dicas-section">
        <h2>O que você pode fazer?</h2>
        <ol>
          <li>Reduzir o consumo de plástico</li>
          <li>Separar e reciclar o lixo</li>
          <li>Evitar o desperdício de água</li>
          <li>Optar por meios de transporte sustentáveis</li>
          <li>Divulgar informações e boas práticas</li>
        </ol>
      </section>

      <footer className="footer">
        <p>Juntos podemos transformar o mundo. Faça sua parte! 🗿</p>
      </footer>
    </div>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880808',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});