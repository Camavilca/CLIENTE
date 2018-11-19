export const getDocumentos = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_DOCUMENTOS':
            return action
        case 'COMPLETE_GET_DOCUMENTOS':
            return action
        case 'ERROR_GET_DOCUMENTOS':
            return action
        default:
            return state;
    }
}
export const getDocumentosById = ( state = [], action) => {
    switch (action.type) {
      case 'START_GET_DOCUMENTO_BY_ID':
        return action
      case 'COMPLETE_GET_DOCUMENTO_BY_ID':
        return action
      case 'ERROR_GET_DOCUMENTO_BY_ID':
        return action
      default:
        return state;
    }
  }
  