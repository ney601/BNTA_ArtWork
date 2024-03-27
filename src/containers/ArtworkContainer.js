import { useEffect, useState } from "react";
import SearchDepartmentForm from "../components/SerachDepartmentForm";
import ArtList from "../components/ArtList";

const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
        const jsonData = await response.json();
        setDepartments(jsonData.departments);
    }

    
    const fetchArtworkIds = async (departmentName) => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=" + departmentName);
        const jsonData = await response.json();
        return jsonData.objectIDs ;
    }

    const fetchArtwork = async (id) => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id);
        return await response.json();
    }

    const getArtworkByDepartment = async (departmentName) => {
        const artworkIds = await fetchArtworkIds(departmentName);
        const filteredIds = artworkIds.slice(0,20);
        const artworkRequests = filteredIds.map((id) => {
            return fetchArtwork(id);
        })
        const artworkObjects = await Promise.all(artworkRequests);
        setArtworks(artworkObjects);  
    }

    useEffect(() => {
        fetchDepartments();
    }, []);

    return ( 
        <>
          <h2>Art Work Gallery</h2>
          <SearchDepartmentForm departments={departments} postSearch={getArtworkByDepartment}/>
          <ArtList artworks={artworks}/> 
        </>
    );
}
 
export default ArtworkContainer;