import { useEffect, useState } from "react";
import SearchDepartmentForm from "../components/SerachDepartmentForm";

const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
        const jsonData = await response.json();
        setDepartments(jsonData.departments);
    }

    useEffect(() => {
        fetchDepartments();
    }, []);


    return ( 
        <>
          <h2>Container</h2>
          <SearchDepartmentForm departments={departments}/>
        </>
    );
}
 
export default ArtworkContainer;