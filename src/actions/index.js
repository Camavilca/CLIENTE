import http from './http'
const startGetDocumentos = () => { return { type: 'START_GET_DOCUMENTOS', ready: false } }
const completeGetDocumentos = (data) => { return { type: 'COMPLETE_GET_DOCUMENTOS', data } }
const errorGetDocumentos = (err) => { return { type: 'ERROR_GET_DOCUMENTOS', err } }

const startGetDocumentosId = () => { return { type: 'START_GET_DOCUMENTO_BY_ID', ready: false } }
const completeGetDocumentosId = (data) => { return { type: 'COMPLETE_GET_DOCUMENTO_BY_ID', data } }
const errorGetDocumentosId = (err) => { return { type: 'ERROR_GET_DOCUMENTO_BY_ID', err } }

/**GET DOCUMENTOS */
export const getDocumentos = () => {
    return (dispatch, getState) => {
        dispatch(startGetDocumentos());
        http.get('documento/')
        .then((response) => {
            if (response.data)
            dispatch(completeGetDocumentos(response.data))
        })
        .catch((err) => {
            dispatch(errorGetDocumentos(err))
        })
    }
}

export const getDocumentosById = (docuId) => {
    return (dispatch, getState) => {
        dispatch(startGetDocumentosId());
        http.get('documento/' + docuId)
        .then((response) => {
            if (response.data)
            dispatch(completeGetDocumentosId(response.data));
        })
        .catch((err) => {
            dispatch(errorGetDocumentosId(err));
        })
    }
}