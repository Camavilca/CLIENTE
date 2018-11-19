import { combineReducers } from 'redux'
import { getDocumentos, getDocumentosById } from './DocumentosReducer'
export default combineReducers({
    getDocumentos,
    getDocumentosById
});