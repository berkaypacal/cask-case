import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 16,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    flex: 6,
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#123B66',
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
});
