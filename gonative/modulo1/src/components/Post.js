import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Platform } from "react-native";

const Post = ({ data }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.postHeaderTitle}>{data.title}</Text>
      <Text style={styles.postHeaderAuthor}>{data.author}</Text>
    </View>
    <Text style={styles.postText}>{data.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#FFF",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 20
  },
  postHeader: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  postHeaderTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginBottom: 5
  },
  postHeaderAuthor: {
    color: "#5f6368"
  },
  postText: {
    marginTop: 10
  }
});

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Post;
