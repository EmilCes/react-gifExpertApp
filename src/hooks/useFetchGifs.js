import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category]); //Cuando la categoria cambia

    return state; // { data: [], loaging: true };

}





