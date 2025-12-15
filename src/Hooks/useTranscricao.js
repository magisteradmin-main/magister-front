
import {useMutation} from "@tanstack/react-query"
import { transcreverTexto } from "../Services/endpoints";


export function useTranscreverTexto({
    onSuccess = () => {}, 
    onError = (err) => console.error(err),
    } = {}){
    return useMutation({mutationFn: transcreverTexto, onSuccess, onError})
}