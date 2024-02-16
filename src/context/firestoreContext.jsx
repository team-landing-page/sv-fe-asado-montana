import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { codeErrorHandler } from "../utils/errorHandler";
import { parseDocumentToJson, parseJsonToDocument } from "../utils/firestore";

const FirestoreContext = createContext();

const ProjectId = "fe-asado-testing";
const baseUrl = `https://firestore.googleapis.com/v1/projects/${ProjectId}/databases/(default)/documents/`


const FirestoreProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    /**
     * Get a collection from Firestore
     * @param {string} collection name of the collection
     * @returns {Promise<void>}
     */
    const getCollection = async (collection) => {
        if (!collection) throw new Error("Falta nombre de la colección")
        const singleDocument = isDocument(collection);

        setLoading(true);
        const url = baseUrl + collection
        try {
            const response = await axios.get(url);
            let parsedData = null
            if (Object.keys(response?.data).length === 0) return [];

            if (singleDocument) {
                parsedData = [parseDocumentToJson(response.data)]
            } else {
                const { data: { documents } } = response
                parsedData = documents?.map(item => parseDocumentToJson(item))
            }
            return parsedData ? parsedData : []
        } catch (err) {
            errorHandler(err)
        } finally {
            setLoading(false);
        }
    }

    /**
     * Post a document to a collection
     * @param {string} collection name of the collection
     * @param {{}} document object to be posted
     * @returns {Promise<void>}
     */
    const postDocument = async (collection, document) => {
        validateInputs(collection, document);
        validateCollectionName(collection);

        const fields = parseJsonToDocument(document);
        const url = baseUrl + collection
        setLoading(true);

        try {
            const response = await axios.post(url, fields);
            return parseDocumentToJson(response.data)
        } catch (err) {
            errorHandler(err)
        } finally {
            setLoading(false);
        }
    }

    /**
     * Delete a document from a collection
     * @param {string} collection 
     * @param {string} id
     * @returns {Promise<void>} 
     */
    const deleteDocument = async (collection, id) => {
        if (!collection || !id) throw new Error('Nombre de la colección e id del documento son requeridos');

        const url = baseUrl + collection + '/' + id;
        setLoading(true);
        try {
            const response = await axios.delete(url);
            return response.data
        } catch (err) {
            errorHandler(err)
        } finally {
            setLoading(false);
        }
    }

    /**
     * Update a document from a collection
     * @param {string} collection  name of the collection
     * @param {string} id  id of the document
     * @param {{}} document data to update
     * @returns 
     */
    const updateDocument = async (collection, id, document) => {
        if (!collection || !id || !document) throw new Error('Nombre de la colección, ide del documento y datos son requeridos');

        const url = baseUrl + collection + '/' + id;
        setLoading(true);
        try {
            const response = await axios.patch(url, parseJsonToDocument(document));
            return parseDocumentToJson(response.data)
        } catch (err) {
            errorHandler(err)
        } finally {
            setLoading(false);
        }
    }

    const value = {
        getCollection,
        postDocument,
        deleteDocument,
        updateDocument,
        loading
    };

    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    );
};

FirestoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


/**
* Check if the collection name is valid
* @param {string} collection name of the collection
* @throws {Error} if the collection name is not valid
*/
const validateCollectionName = (collection) => {
    if (isDocument(collection)) {
        throw new Error('Nombre de la colección no es válida');
    }
}

/**
 * Check if the collection and document are provided
 * @param {string} collection name of the collection
 * @param {{}} document object to be posted
 * @throws {Error} if the collection or document is not provided
 */
const validateInputs = (collection, document) => {
    if (!collection || !document) {
        throw new Error('Nombre de la colección y documento son requeridos');
    }
}

/**
 * Hanlde the error of the operations
 * @param {{}} err Data of the error
 * @throws {Error} throw the message of the error
 */
const errorHandler = (err) => {
    const error = err.response?.data?.error
    const code = error?.status ? error.status : err.code
    const msg = codeErrorHandler(code)
    throw new Error(msg);
}

/**
 * Valide if the collection is a document
 * @param {string} collection route of the collection
 * @returns {boolean}
 */
const isDocument = (collection) => {
    const collections = collection.split('/').length;
    return collections % 3 !== 0 && collections !== 1
}

export default FirestoreContext;
export { FirestoreProvider }
