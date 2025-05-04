import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#0d0d0d',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
  timestamp: {
    marginTop: 6,
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  separator: {
    marginTop: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
