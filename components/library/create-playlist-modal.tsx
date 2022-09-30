import React, {useState} from 'react';
import {USER_ID} from 'react-native-dotenv';
import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FilledButton} from '../filled-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {useActions} from '../../state/hooks/use-actions';

export const CreatePlaylistModal: React.FC<{
  isVisible: boolean;
  onRequestClose: () => void;
}> = ({isVisible, onRequestClose}) => {
  const {createPlaylist} = useActions();

  const [playlistName, setPlaylistName] = useState('');
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeIcon} onPress={onRequestClose}>
            <Icon name="close" size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.title}>Give your playlist a name.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={playlistName}
              onChangeText={text => setPlaylistName(text)}
            />
          </View>
          <FilledButton
            title="Create"
            onPress={() => createPlaylist(USER_ID, playlistName, '')}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'black',
  },
  modal: {
    height: '100%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(270, 270, 270, 0.15)',
  },
  title: {
    color: 'white',
    opacity: 0.8,
    fontWeight: '700',
    fontSize: 18,
  },
  inputContainer: {
    marginVertical: '20%',
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(270, 270, 270, 0.8)',
    height: 70,
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 34,
    color: 'white',
    opacity: 0.8,
    fontWeight: '700',
    textAlign: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.8,
  },
});
