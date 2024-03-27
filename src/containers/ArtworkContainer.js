import { useEffect, useState } from "react";

const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
        const jsonData = await response.json();
        setDepartments(jsonData);
    }

    useEffect(() => {
        fetchDepartments();
    }, []);


    return ( 
        <>
          <h2>Container</h2>
          {JSON.stringify(departments)}
        </>
    );
}
 
export default ArtworkContainer;