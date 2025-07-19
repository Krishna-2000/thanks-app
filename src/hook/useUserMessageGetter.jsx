import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUserMessageGetter = () => {
    const {user} = useContext(UserContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch("/data.json");
                const result = await response.json();
                const found = result.find(item => item.name.trim().toLowerCase() === user.trim().toLowerCase());
                setData(found||null);
            }
            catch(error){
                console.log("Error fetching data:", error);
                setData(null);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[user]);
    return { data, loading };
}