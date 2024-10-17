import {create} from "zustand";

const useStore = create((set) =>({

    reservaciones: [],
    addReservacion: (hotel, datos) =>
        set(state =>({
            reservaciones: [...state.reservaciones, {hotel, datos}]
        }))
}))

export default useStore;