import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'

//Para acceder a la BD
const db = firebase.firestore(firebaseApp)

//Metodo genérico que nos permite obtener una coleccion de datos.
export const getCollection = async(collection) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const data = await db.collection(collection).get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}) )
        result.statusResponse = true
        result.data = arrayData
    } catch (error) {
        result.error = error
    }
    return result
}

//Metodo generico que nos permite guardar en la BD
export const addDocument = async(collection, data) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const response = await db.collection(collection).add(data)
        result.data = { id: response.id }
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result 
}

//Metodo que permite traer un solo documento.
export const getDocument = async(collection, id) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const response = await db.collection(collection).doc(id).get()
        result.data = { id: response.id, ...response.data() }
        response.statusResponse = true
    } catch (error) {
        result.error = error
    } 
    return result
}

//Metodo que permite actualizar un documento.
export const updateDocument = async(collection, id, data) => {
    const result = { statusResponse : false, error: null }
    try {
        await db.collection(collection).doc(id).update(data)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    } 
    return result
}

//Metodo que permite eliminar un documento.
export const deleteDocument = async(collection, id) => {
    const result = { statusResponse : false, error: null }
    try {
        await db.collection(collection).doc(id).delete()
        result.statusResponse = true
    } catch (error) {
        result.error = error
    } 
    return result
}