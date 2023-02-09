import firebase from './config';

export const addFileToStorage = (refPath, files) => files.map((file) => firebase.storage().ref(`${refPath}/${file.name}`).put(file));

export const getFileFromStorage = (path) => firebase.storage().ref().child(path).getDownloadURL();