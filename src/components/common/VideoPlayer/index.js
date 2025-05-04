import React from 'react';
import {View, Text, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {extractYoutubeId} from '../../../utility/youtube.helper';
import styles from './styles';

/**
 * CustomVideoPlayer component renders a YouTube video player or an error message if the video URL is invalid.
 *
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL of the YouTube video to play.
 *
 * @returns {JSX.Element} The rendered CustomVideoPlayer component.
 */
const CustomVideoPlayer = ({url}) => {
  const videoId = extractYoutubeId(url);

  if (!videoId) {
    return <Text style={styles.errorText}>No Video Found</Text>;
  }

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={220}
        play={true}
        videoId={videoId}
        useLocalHTML={true}
        onError={() =>
          Alert.alert(
            'Video Error',
            'Playback is disabled by the video owner for external apps.',
            [{text: 'OK'}],
          )
        }
      />
    </View>
  );
};

export default CustomVideoPlayer;
