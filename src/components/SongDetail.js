import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
  if (!song) {
    return <div>Please select a song</div>;
  }
  return (
    <div>
      <h1>Detail for:</h1>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
