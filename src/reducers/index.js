import { combineReducers } from 'redux'
import { initial } from './initial'
import { getDocumentos, getDocumentosById } from './DocumentosReducer'
export default combineReducers({
    getDocumentos,
    getDocumentosById,
    initial
});
