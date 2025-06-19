import React, { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { useSecurity } from '@/hooks/useSecurity';
import SegurancaView from './view';

const SegurancaScreen: React.FC = () => {
  const router = useRouter();
  const {
    safetyKeyword,
    setSafetyKeyword,
    contacts,
    addContact,
    removeContact,
    saveSecuritySettings,
    sendLocationEnabled,
    setSendLocationEnabled,
    makeCallEnabled,
    setMakeCallEnabled,
  } = useSecurity();

  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);

  const handleBackPress = useCallback(() => {
    saveSecuritySettings();
    router.back();
  }, [router, saveSecuritySettings]);

  const handleAddContact = useCallback(() => {
    if (!newContactName.trim() || !newContactPhone.trim()) {
      if (typeof window !== 'undefined') {
        alert('Preencha o nome e o telefone do contato.');
      } else {
        // Alert para mobile já está na view
      }
      return;
    }
    // Validação: telefone deve ser +55 seguido de 10 ou 11 dígitos
    const phone = newContactPhone.trim();
    if (!/^\+55\d{10,11}$/.test(phone)) {
      if (typeof window !== 'undefined') {
        alert('Digite um telefone válido com DDD e número.');
      } else {
        // Alert para mobile já está na view
      }
      return;
    }
    const newContact = {
      id: Date.now().toString(),
      name: newContactName.trim(),
      phone,
    };
    addContact(newContact);
    setNewContactName('');
    setNewContactPhone('+55');
    setShowAddContact(false);
  }, [newContactName, newContactPhone, addContact]);

  const handleRemoveContact = useCallback((id: string) => {
    removeContact(id);
  }, [removeContact]);

  return (
    <SegurancaView
      safetyKeyword={safetyKeyword}
      setSafetyKeyword={setSafetyKeyword}
      contacts={contacts}
      addContact={addContact}
      removeContact={removeContact}
      sendLocationEnabled={sendLocationEnabled}
      setSendLocationEnabled={setSendLocationEnabled}
      makeCallEnabled={makeCallEnabled}
      setMakeCallEnabled={setMakeCallEnabled}
      newContactName={newContactName}
      setNewContactName={setNewContactName}
      newContactPhone={newContactPhone}
      setNewContactPhone={setNewContactPhone}
      showAddContact={showAddContact}
      setShowAddContact={setShowAddContact}
      handleAddContact={handleAddContact}
      handleRemoveContact={handleRemoveContact}
      onBack={handleBackPress}
      saveSecuritySettings={saveSecuritySettings}
    />
  );
};

export default SegurancaScreen;