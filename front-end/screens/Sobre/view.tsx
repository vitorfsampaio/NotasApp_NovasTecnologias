import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import AppHeader from '@/components/AppHeader';

const SobreView: React.FC = () => (
  <View style={styles.container}>
    <AppHeader title="Sobre" />
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Minhas Notas</Text>
      <Text style={styles.version}>Versão 1.0.0</Text>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg' }} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.description}>
        Um aplicativo simples para criar e gerenciar suas anotações pessoais. 
        Organize suas ideias, listas de compras, tarefas e pensamentos em um só lugar.
      </Text>
      <Text style={styles.sectionTitle}>Funcionalidades</Text>
      <Text style={styles.bullet}>• Crie notas ilimitadas</Text>
      <Text style={styles.bullet}>• Edite e exclua anotações</Text>
      <Text style={styles.bullet}>• Interface simples e intuitiva</Text>
      <Text style={styles.bullet}>• Armazenamento local seguro</Text>
      <Text style={styles.bullet}>• Design minimalista</Text>
      <Text style={styles.footer}>
        © 2025 Minhas Notas. Todos os direitos reservados.
      </Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0074D9', marginBottom: 8 },
  version: { fontSize: 16, color: '#888', marginBottom: 16 },
  image: { width: '100%', height: 180, borderRadius: 12, marginBottom: 16 },
  description: { fontSize: 16, color: '#333', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#0074D9', marginTop: 16, marginBottom: 8 },
  bullet: { fontSize: 16, color: '#333', marginLeft: 8, marginBottom: 4 },
  footer: { fontSize: 14, color: '#888', marginTop: 32, textAlign: 'center' },
});

export default SobreView; 