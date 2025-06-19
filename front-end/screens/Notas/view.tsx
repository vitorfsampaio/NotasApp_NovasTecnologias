import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '@/components/AppHeader';
import NoteItem from '@/components/NoteItem';
import EmptyNotes from '@/components/EmptyNotes';
import { Plus } from 'lucide-react-native';
import { Note } from './model';

interface NotasViewProps {
  notes: Note[];
  onCreateNote: () => void;
  renderItem: ({ item }: { item: Note }) => JSX.Element;
}

const NotasView: React.FC<NotasViewProps> = ({ notes, onCreateNote, renderItem }) => (
  <View style={styles.container}>
    <AppHeader title="Notas" />
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.notesContainer}
      ListEmptyComponent={EmptyNotes}
    />
    <TouchableOpacity 
      style={styles.addButton}
      onPress={onCreateNote}
      activeOpacity={0.8}
    >
      <Plus color="#FFFFFF" size={24} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  notesContainer: { flexGrow: 1, padding: 16 },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#0074D9',
    borderRadius: 32,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default NotasView; 